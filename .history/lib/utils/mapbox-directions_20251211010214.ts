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
    legs: Array<{
      steps: Array<{
        maneuver: {
          type: string;
          instruction: string;
          location: [number, number];
        };
        distance: number;
        duration: number;
        geometry: {
          coordinates: [number, number][];
        };
      }>;
    }>;
  }>;
  waypoints: Array<{
    location: [number, number];
    name: string;
  }>;
}

export interface RouteInstructions {
  instruction: string;
  distance: number;
  duration: number;
  coordinates: [number, number][];
  maneuver: string;
}

/**
 * Get directions from Mapbox Directions API
 */
export async function getMapboxDirections(
  start: [number, number],
  end: [number, number],
  profile: "walking" | "driving" | "cycling" = "walking"
): Promise<MapboxDirectionsResponse | null> {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  
  if (!token) {
    console.error("Mapbox token is missing");
    return null;
  }

  try {
    const coordinates = `${start[0]},${start[1]};${end[0]},${end[1]}`;
    const url = `https://api.mapbox.com/directions/v5/mapbox/${profile}/${coordinates}?geometries=geojson&steps=true&language=fr&access_token=${token}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Mapbox Directions API error: ${response.statusText}`);
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
} {
  if (!directions.routes || directions.routes.length === 0) {
    return { distance: 0, duration: 0 };
  }

  const route = directions.routes[0];
  return {
    distance: route.distance,
    duration: Math.round(route.duration / 60), // Convert seconds to minutes
  };
}

