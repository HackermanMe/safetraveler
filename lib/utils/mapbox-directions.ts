/**
 * Mapbox Directions API utility
 * Calculates routes between two points using Mapbox Directions API
 */

export interface MapboxDirectionsResponse {
  routes: Array<{
    geometry: {
      coordinates: [number, number][];
      type: string;
    };
    distance: number;
    duration: number;
    weight?: number;
    weight_name?: string;
    legs: Array<{
      steps: Array<{
        maneuver: {
          type: string;
          instruction: string;
          location: [number, number];
          modifier?: string;
          bearing_after?: number;
          bearing_before?: number;
        };
        distance: number;
        duration: number;
        geometry: {
          coordinates: [number, number][];
        };
        mode?: string;
        driving_side?: string;
        name?: string;
        ref?: string;
        pronunciation?: string;
        destinations?: string;
        exits?: string;
        rotary_name?: string;
        rotary_pronunciation?: string;
        intersections?: Array<{
          location: [number, number];
          bearings: number[];
          classes?: string[];
          entry: boolean[];
          in?: number;
          out?: number;
          lanes?: Array<{
            indications: string[];
            valid: boolean;
            valid_indication?: string;
          }>;
        }>;
      }>;
      distance: number;
      duration: number;
      summary?: string;
    }>;
  }>;
  waypoints: Array<{
    location: [number, number];
    name?: string;
    hint?: string;
  }>;
  code: string;
  uuid?: string;
}

export interface RouteInstructions {
  instruction: string;
  distance: number;
  duration: number;
  coordinates: [number, number][];
  maneuver: string;
}

export interface MapboxDirectionsOptions {
  profile?: "walking" | "driving" | "cycling";
  alternatives?: boolean;
  steps?: boolean;
  geometries?: "geojson" | "polyline" | "polyline6";
  overview?: "full" | "simplified" | "false";
  language?: string;
  waypoints?: [number, number][];
  radiuses?: number[];
  bearings?: Array<[number, number]>;
  continue_straight?: boolean;
  annotations?: string[];
  exclude?: string;
  approaches?: string;
  waypoint_names?: string[];
  waypoint_targets?: Array<[number, number]>;
  snapping_include_closures?: boolean;
  snapping_include_ways?: string[];
}

/**
 * Get directions from Mapbox Directions API with advanced options
 */
export async function getMapboxDirections(
  start: [number, number],
  end: [number, number],
  options: MapboxDirectionsOptions = {}
): Promise<MapboxDirectionsResponse | null> {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  
  if (!token) {
    console.error("Mapbox token is missing");
    return null;
  }

  const {
    profile = "walking",
    alternatives = false,
    steps = true,
    geometries = "geojson",
    overview = "full",
    language = "fr",
    waypoints,
    radiuses,
    bearings,
    continue_straight = false,
    annotations = ["distance", "duration"],
    exclude,
    approaches,
    waypoint_names,
    waypoint_targets,
  } = options;

  try {
    // Build coordinates string with waypoints
    let coordinates = `${start[0]},${start[1]}`;
    const validWaypoints: [number, number][] = [];
    
    if (waypoints && Array.isArray(waypoints) && waypoints.length > 0) {
      waypoints.forEach((waypoint) => {
        if (waypoint && Array.isArray(waypoint) && waypoint.length === 2 && 
            typeof waypoint[0] === 'number' && typeof waypoint[1] === 'number') {
          validWaypoints.push(waypoint);
          coordinates += `;${waypoint[0]},${waypoint[1]}`;
        }
      });
    }
    coordinates += `;${end[0]},${end[1]}`;

    // Build query parameters - only include supported parameters
    const params = new URLSearchParams({
      geometries,
      steps: steps.toString(),
      overview,
      language,
      alternatives: alternatives.toString(),
      continue_straight: continue_straight.toString(),
    });

    // Add annotations only if provided and valid
    if (annotations && annotations.length > 0) {
      // Filter valid annotation types
      const validAnnotations = annotations.filter(a => 
        ["distance", "duration", "speed", "congestion", "congestion_numeric"].includes(a)
      );
      if (validAnnotations.length > 0) {
        params.append("annotations", validAnnotations.join(","));
      }
    }

    // Add optional parameters only if they have valid values
    const numCoords = 2 + validWaypoints.length;
    
    if (radiuses && Array.isArray(radiuses) && radiuses.length > 0) {
      // Ensure we have the right number of radiuses (one per coordinate)
      if (radiuses.length === numCoords) {
        params.append("radiuses", radiuses.join(";"));
      }
    }
    
    if (bearings && Array.isArray(bearings) && bearings.length > 0) {
      if (bearings.length === numCoords) {
        params.append("bearings", bearings.map(b => `${b[0]},${b[1]}`).join(";"));
      }
    }
    
    if (exclude && typeof exclude === 'string') {
      params.append("exclude", exclude);
    }
    
    if (approaches && typeof approaches === 'string') {
      params.append("approaches", approaches);
    }
    
    if (waypoint_names && Array.isArray(waypoint_names) && waypoint_names.length > 0 && waypoint_names.length === validWaypoints.length) {
      params.append("waypoint_names", waypoint_names.join(";"));
    }
    
    if (waypoint_targets && Array.isArray(waypoint_targets) && waypoint_targets.length > 0 && waypoint_targets.length === validWaypoints.length) {
      params.append("waypoint_targets", waypoint_targets.map(t => `${t[0]},${t[1]}`).join(";"));
    }

    // Note: snapping_include_closures and snapping_include_ways are not widely supported
    // Removing them to avoid API errors

    params.append("access_token", token);

    const url = `https://api.mapbox.com/directions/v5/mapbox/${profile}/${coordinates}?${params.toString()}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Mapbox Directions API error: ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    return data as MapboxDirectionsResponse;
  } catch (error) {
    console.error("Error fetching directions:", error);
    return null;
  }
}

/**
 * Convert Mapbox Directions response to route path
 */
export function extractRoutePath(directions: MapboxDirectionsResponse): [number, number][] {
  if (!directions.routes || directions.routes.length === 0) {
    return [];
  }

  const route = directions.routes[0];
  return route.geometry.coordinates as [number, number][];
}

/**
 * Extract turn-by-turn instructions from Mapbox Directions response
 */
export function extractRouteInstructions(directions: MapboxDirectionsResponse): RouteInstructions[] {
  if (!directions.routes || directions.routes.length === 0) {
    return [];
  }

  const route = directions.routes[0];
  const instructions: RouteInstructions[] = [];

  route.legs.forEach((leg) => {
    leg.steps.forEach((step) => {
      instructions.push({
        instruction: step.maneuver.instruction,
        distance: step.distance,
        duration: step.duration,
        coordinates: step.geometry.coordinates as [number, number][],
        maneuver: step.maneuver.type,
      });
    });
  });

  return instructions;
}

/**
 * Get route summary (distance and duration)
 */
export function getRouteSummary(directions: MapboxDirectionsResponse): {
  distance: number;
  duration: number;
  weight?: number;
  weight_name?: string;
} {
  if (!directions.routes || directions.routes.length === 0) {
    return { distance: 0, duration: 0 };
  }

  const route = directions.routes[0];
  return {
    distance: route.distance,
    duration: Math.round(route.duration / 60), // Convert seconds to minutes
    weight: route.weight,
    weight_name: route.weight_name,
  };
}

/**
 * Get alternative routes if available
 */
export function getAlternativeRoutes(directions: MapboxDirectionsResponse): Array<{
  path: [number, number][];
  distance: number;
  duration: number;
}> {
  if (!directions.routes || directions.routes.length <= 1) {
    return [];
  }

  return directions.routes.slice(1).map((route) => ({
    path: route.geometry.coordinates as [number, number][],
    distance: route.distance,
    duration: Math.round(route.duration / 60),
  }));
}

/**
 * Find intermediate waypoints for better routing in airport context
 * This helps route through key areas like security checkpoints, elevators, etc.
 */
export function findIntermediateWaypoints(
  start: [number, number],
  end: [number, number],
  locations: Array<{ coordinates: [number, number]; type: string; floor: number }>,
  currentFloor: number
): [number, number][] {
  const waypoints: Array<{ coordinates: [number, number]; priority: number; distance: number }> = [];
  
  // Filter locations on the same floor
  const floorLocations = locations.filter((loc) => loc.floor === currentFloor);
  
  // Key waypoint types for airport navigation with priorities
  const keyTypes: Record<string, number> = {
    security: 3, // High priority - must pass through
    elevator: 2, // Medium-high priority
    escalator: 2, // Medium-high priority
    information: 1, // Medium priority
    entrance: 1, // Medium priority
    exit: 1, // Medium priority
  };
  
  // Find key locations between start and end
  const startX = start[0];
  const startY = start[1];
  const endX = end[0];
  const endY = end[1];
  
  // Calculate distance from start to end
  const totalDistance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  
  // Find locations that are roughly between start and end
  floorLocations.forEach((loc) => {
    const priority = keyTypes[loc.type];
    if (priority) {
      const locX = loc.coordinates[0];
      const locY = loc.coordinates[1];
      
      // Calculate distance from start
      const distFromStart = Math.sqrt(Math.pow(locX - startX, 2) + Math.pow(locY - startY, 2));
      
      // Check if location is roughly between start and end (within 120% of direct distance)
      const isReasonable = distFromStart <= totalDistance * 1.2;
      
      // Check if location is roughly in the direction of the destination
      const directionToEnd = Math.atan2(endY - startY, endX - startX);
      const directionToLoc = Math.atan2(locY - startY, locX - startX);
      const angleDiff = Math.abs(directionToEnd - directionToLoc);
      const isInDirection = angleDiff < Math.PI / 3; // Within 60 degrees
      
      if (isReasonable && isInDirection) {
        waypoints.push({
          coordinates: loc.coordinates,
          priority,
          distance: distFromStart,
        });
      }
    }
  });
  
  // Sort by priority (higher first), then by distance (closer first)
  waypoints.sort((a, b) => {
    if (b.priority !== a.priority) {
      return b.priority - a.priority;
    }
    return a.distance - b.distance;
  });
  
  // Limit to 2-3 waypoints to avoid too complex routes
  // Only include high priority waypoints if they exist
  const highPriorityWaypoints = waypoints.filter((w) => w.priority >= 2);
  if (highPriorityWaypoints.length > 0) {
    return highPriorityWaypoints.slice(0, 2).map((w) => w.coordinates);
  }
  
  return waypoints.slice(0, 2).map((w) => w.coordinates);
}

