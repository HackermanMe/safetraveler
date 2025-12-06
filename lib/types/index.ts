// Types pour l'application SafeTraveler

export interface Location {
  id: string;
  name: string;
  type: LocationType;
  floor: number;
  coordinates: [number, number]; // [longitude, latitude] or [x, y] for indoor
  description?: string;
  icon?: string;
  status?: "open" | "closed" | "busy";
  accessibleTo?: PassengerProfile[];
}

export type LocationType =
  | "gate"
  | "checkin"
  | "security"
  | "customs"
  | "toilet"
  | "restaurant"
  | "shop"
  | "information"
  | "exit"
  | "entrance"
  | "lounge"
  | "baggage"
  | "parking"
  | "medical"
  | "prayer"
  | "smoking"
  | "atm"
  | "wifi"
  | "charging";

export type PassengerProfile = "economy" | "business" | "premium" | "staff";

export interface Route {
  id: string;
  start: string; // Location ID
  end: string; // Location ID
  distance: number; // in meters
  duration: number; // in minutes
  floor: number;
  accessible: boolean; // wheelchair accessible
  path: [number, number][]; // array of coordinates
  instructions: RouteStep[];
}

export interface RouteStep {
  instruction: string;
  distance: number;
  icon: string;
  floor?: number;
}

export interface Report {
  id?: string;
  type: ReportType;
  location: string; // Location ID or description
  description: string;
  photo?: string; // base64 or URL
  timestamp: Date;
  status?: "pending" | "reviewing" | "resolved";
  severity?: "low" | "medium" | "high" | "critical";
}

export type ReportType =
  | "security"
  | "cleanliness"
  | "maintenance"
  | "crowding"
  | "accessibility"
  | "suspicious"
  | "lost_item"
  | "other";

export interface FlightInfo {
  flightNumber: string;
  airline: string;
  destination?: string;
  origin?: string;
  gate?: string;
  terminal: string;
  scheduledTime: string;
  status: "on_time" | "delayed" | "cancelled" | "boarding" | "departed";
  delay?: number; // in minutes
}

export interface ServiceInfo {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  location: string;
  hours: string;
  contact?: string;
  icon: string;
}

export type ServiceCategory =
  | "assistance"
  | "medical"
  | "lost_found"
  | "information"
  | "customs"
  | "currency"
  | "luggage";

export interface AirportData {
  locations: Location[];
  routes: Route[];
  services: ServiceInfo[];
  floors: FloorData[];
}

export interface FloorData {
  level: number;
  name: string;
  mapImage?: string;
  bounds?: [[number, number], [number, number]]; // [[minLon, minLat], [maxLon, maxLat]]
}
