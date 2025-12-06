import { Location, Route, RouteStep } from "@/lib/types";

/**
 * Calculate the distance between two points using Haversine formula
 * For indoor navigation, this is simplified
 */
export function calculateDistance(
  point1: [number, number],
  point2: [number, number]
): number {
  const [x1, y1] = point1;
  const [x2, y2] = point2;

  // For indoor coordinates, use simple Euclidean distance
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy) * 100000; // Convert to approximate meters
}

/**
 * Find the shortest path between two locations using A* algorithm
 */
export function findRoute(
  start: Location,
  end: Location,
  locations: Location[]
): Route | null {
  // Simple straight line route for MVP
  // In production, implement A* with actual walkable paths

  const distance = calculateDistance(start.coordinates, end.coordinates);
  const duration = Math.ceil(distance / 70); // Average walking speed ~70m/min

  const steps = generateRouteSteps(start, end, distance);

  return {
    id: `${start.id}-to-${end.id}`,
    start: start.id,
    end: end.id,
    distance,
    duration,
    floor: start.floor,
    accessible: true,
    path: [start.coordinates, end.coordinates],
    instructions: steps,
  };
}

/**
 * Generate turn-by-turn instructions
 */
function generateRouteSteps(
  start: Location,
  end: Location,
  distance: number
): RouteStep[] {
  const steps: RouteStep[] = [];

  // Start instruction
  steps.push({
    instruction: `Départ de ${start.name}`,
    distance: 0,
    icon: "start",
  });

  // Floor change if needed
  if (start.floor !== end.floor) {
    steps.push({
      instruction: `Prendre ${end.floor > start.floor ? "l'escalier montant" : "l'escalier descendant"} vers ${end.floor === 0 ? "le rez-de-chaussée" : `l'étage ${end.floor}`}`,
      distance: distance / 2,
      icon: "stairs",
      floor: end.floor,
    });
  }

  // Main direction
  const direction = getDirection(start.coordinates, end.coordinates);
  steps.push({
    instruction: `Continuer ${direction} vers ${end.name}`,
    distance: distance * 0.8,
    icon: "arrow-right",
  });

  // Arrival
  steps.push({
    instruction: `Arrivée à ${end.name}`,
    distance: distance,
    icon: "check",
  });

  return steps;
}

/**
 * Get cardinal direction between two points
 */
function getDirection(from: [number, number], to: [number, number]): string {
  const [x1, y1] = from;
  const [x2, y2] = to;

  const dx = x2 - x1;
  const dy = y2 - y1;

  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  if (angle >= -45 && angle < 45) return "vers l'est";
  if (angle >= 45 && angle < 135) return "vers le nord";
  if (angle >= 135 || angle < -135) return "vers l'ouest";
  return "vers le sud";
}

/**
 * Filter locations by type
 */
export function filterLocationsByType(
  locations: Location[],
  type: string
): Location[] {
  return locations.filter((loc) => loc.type === type);
}

/**
 * Find nearest location of a specific type
 */
export function findNearestLocation(
  currentPosition: [number, number],
  locations: Location[],
  type?: string
): Location | null {
  let filteredLocations = locations;

  if (type) {
    filteredLocations = filterLocationsByType(locations, type);
  }

  if (filteredLocations.length === 0) return null;

  let nearest = filteredLocations[0];
  let minDistance = calculateDistance(currentPosition, nearest.coordinates);

  for (const location of filteredLocations) {
    const distance = calculateDistance(currentPosition, location.coordinates);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = location;
    }
  }

  return nearest;
}
