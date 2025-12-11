"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Loader2, MapPin, Clock } from "lucide-react";
import { Location } from "@/lib/types";
import airportData from "@/lib/data/airport-data.json";
import { theme } from "@/lib/config/theme";
import { useLocale } from "@/lib/context/LocaleContext";
import EnhancedAirportMap from "@/components/map/EnhancedAirportMap";
import FloorSelector from "@/components/ui/FloorSelector";
import {
  getMapboxDirections,
  extractRoutePath,
  extractRouteInstructions,
  getRouteSummary,
  getAlternativeRoutes,
  findIntermediateWaypoints,
  RouteInstructions,
} from "@/lib/utils/mapbox-directions";

export default function NavigationPage() {
  const { t, locale } = useLocale();
  const [locations, setLocations] = useState<Location[]>([]);
  const [floors, setFloors] = useState<{ level: number; name: string }[]>([]);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [startLocation, setStartLocation] = useState<string>("");
  const [endLocation, setEndLocation] = useState<string>("");
  const [route, setRoute] = useState<[number, number][] | undefined>();
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [routeInstructions, setRouteInstructions] = useState<RouteInstructions[]>([]);
  const [routeSummary, setRouteSummary] = useState<{ distance: number; duration: number } | null>(null);

  useEffect(() => {
    setLocations(airportData.locations as Location[]);
    setFloors(airportData.floors);
  }, []);

  const handleCalculateRoute = async () => {
    if (!startLocation || !endLocation) {
      return;
    }

    const start = locations.find((loc) => loc.id === startLocation);
    const end = locations.find((loc) => loc.id === endLocation);

    if (!start || !end) return;

    setIsLoading(true);
    setRoute(undefined);
    setRouteInstructions([]);
    setRouteSummary(null);

    try {
      // Find intermediate waypoints for better routing in airport context
      const waypoints = findIntermediateWaypoints(
        start.coordinates as [number, number],
        end.coordinates as [number, number],
        locations.map((loc) => ({
          coordinates: loc.coordinates as [number, number],
          type: loc.type,
          floor: loc.floor,
        })),
        start.floor
      );

      // Use Mapbox Directions API with advanced options for better routing
      const directions = await getMapboxDirections(
        start.coordinates as [number, number],
        end.coordinates as [number, number],
        {
          profile: "walking",
          alternatives: true, // Get alternative routes
          steps: true,
          geometries: "geojson",
          overview: "full", // Full geometry for better visualization
          language: "fr",
          waypoints: waypoints.length > 0 ? waypoints : undefined, // Only include if we have waypoints
          annotations: ["distance", "duration"], // Get detailed annotations (removed speed as it may not be supported for walking)
          continue_straight: false, // Allow route optimization
        }
      );

      if (directions) {
        const routePath = extractRoutePath(directions);
        const instructions = extractRouteInstructions(directions);
        const summary = getRouteSummary(directions);
        const alternatives = getAlternativeRoutes(directions);

        setRoute(routePath);
        setRouteInstructions(instructions);
        setRouteSummary(summary);
        setCurrentFloor(start.floor);

        // Log alternative routes for future use
        if (alternatives.length > 0) {
          console.log(`Found ${alternatives.length} alternative route(s)`);
        }

        // Fit map to route bounds if needed
        if (routePath.length > 0) {
          // The map will automatically fit to the route
        }
      } else {
        // Fallback to simple route if Mapbox API fails
        const simpleRoute: [number, number][] = [
          start.coordinates as [number, number],
          end.coordinates as [number, number],
        ];
        setRoute(simpleRoute);
        setCurrentFloor(start.floor);
      }
    } catch (error) {
      console.error("Error calculating route:", error);
      // Fallback to simple route
      const startLoc = locations.find((loc) => loc.id === startLocation);
      const endLoc = locations.find((loc) => loc.id === endLocation);
      if (startLoc && endLoc) {
        const simpleRoute: [number, number][] = [
          startLoc.coordinates as [number, number],
          endLoc.coordinates as [number, number],
        ];
        setRoute(simpleRoute);
        setCurrentFloor(startLoc.floor);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Group locations by type for dropdown
  const groupedLocations = locations.reduce((acc, loc) => {
    if (!acc[loc.type]) {
      acc[loc.type] = [];
    }
    acc[loc.type].push(loc);
    return acc;
  }, {} as Record<string, Location[]>);

  const locationTypeLabels: Record<string, string> = {
    gate: t("map.locationTypes.gate"),
    checkin: t("map.locationTypes.checkin"),
    security: t("map.locationTypes.security"),
    toilet: t("map.locationTypes.toilet"),
    restaurant: t("map.locationTypes.restaurant"),
    shop: t("map.locationTypes.shop"),
    information: t("map.locationTypes.information"),
    lounge: t("map.locationTypes.lounge"),
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: theme.colors.background.default }}>
      {/* Left Panel - Navigation */}
      <div
        className="w-full md:w-80 lg:w-72 flex-shrink-0 overflow-y-auto"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="p-6 space-y-6">
          {/* Title */}
          <div>
            <h1
              className="font-bold mb-2"
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: theme.colors.text.primary,
              }}
            >
              {t("navigation.title")}
            </h1>
            <p
              className="text-sm"
              style={{
                color: theme.colors.text.secondary,
              }}
            >
              {t("navigation.calculateItinerary")}
            </p>
          </div>

          {/* Starting Point */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              style={{
                color: theme.colors.text.primary,
              }}
            >
              {t("navigation.startingPoint")}
            </label>
            <div className="relative">
              <select
                value={startLocation}
                onChange={(e) => {
                  setStartLocation(e.target.value);
                  setSelectedLocation(e.target.value);
                }}
                className="w-full appearance-none rounded-lg border px-4 py-3 pr-10 text-sm transition-all focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: theme.colors.border.main,
                  color: theme.colors.text.primary,
                }}
              >
                <option value="">Sélectionner...</option>
                {Object.entries(groupedLocations).map(([type, locs]) => (
                  <optgroup key={type} label={locationTypeLabels[type] || type}>
                    {locs.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5"
                style={{ color: theme.colors.text.secondary }}
              />
            </div>
          </div>

          {/* Destination */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              style={{
                color: theme.colors.text.primary,
              }}
            >
              Destination
            </label>
            <div className="relative">
              <select
                value={endLocation}
                onChange={(e) => {
                  setEndLocation(e.target.value);
                  setSelectedLocation(e.target.value);
                }}
                className="w-full appearance-none rounded-lg border px-4 py-3 pr-10 text-sm transition-all focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: theme.colors.border.main,
                  color: theme.colors.text.primary,
                }}
              >
                <option value="">Sélectionner...</option>
                {Object.entries(groupedLocations).map(([type, locs]) => (
                  <optgroup key={type} label={locationTypeLabels[type] || type}>
                    {locs.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5"
                style={{ color: theme.colors.text.secondary }}
              />
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculateRoute}
            className="w-full rounded-lg font-semibold transition-all py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: startLocation && endLocation ? theme.colors.accent.main : theme.colors.gray[300],
              color: startLocation && endLocation ? theme.colors.accent.contrast : theme.colors.text.primary,
              boxShadow: theme.shadow.sm,
            }}
            disabled={!startLocation || !endLocation || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Calcul en cours...
              </>
            ) : (
              "Calculer l'itinéraire"
            )}
          </button>

          {/* Route Summary */}
          {routeSummary && route && (
            <div
              className="rounded-lg p-4 space-y-3"
              style={{
                backgroundColor: theme.colors.background.elevated,
                border: `1px solid ${theme.colors.border.main}`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" style={{ color: theme.colors.accent.main }} />
                  <span className="text-sm font-semibold" style={{ color: theme.colors.text.primary }}>
                    {(routeSummary.distance / 1000).toFixed(2)} km
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: theme.colors.accent.main }} />
                  <span className="text-sm font-semibold" style={{ color: theme.colors.text.primary }}>
                    ~{routeSummary.duration} min
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Route Instructions */}
          {routeInstructions.length > 0 && (
            <div className="space-y-2">
              <h3
                className="text-sm font-semibold"
                style={{ color: theme.colors.text.primary }}
              >
                Instructions de navigation
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {routeInstructions.map((instruction, index) => (
                  <div
                    key={index}
                    className="rounded-lg p-3 text-xs"
                    style={{
                      backgroundColor: theme.colors.background.elevated,
                      border: `1px solid ${theme.colors.border.main}`,
                    }}
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          backgroundColor: theme.colors.accent.main,
                          color: theme.colors.accent.contrast,
                        }}
                      >
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p style={{ color: theme.colors.text.primary }}>
                          {instruction.instruction}
                        </p>
                        {instruction.distance > 0 && (
                          <p className="mt-1" style={{ color: theme.colors.text.secondary }}>
                            {(instruction.distance / 1000).toFixed(2)} km
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Map */}
      <div className="flex-1 relative" style={{ backgroundColor: theme.colors.background.default }}>
        <EnhancedAirportMap
          locations={locations}
          selectedLocation={selectedLocation}
          onLocationSelect={setSelectedLocation}
          showRoute={route}
          currentFloor={currentFloor}
        />
        <FloorSelector
          currentFloor={currentFloor}
          floors={floors}
          onFloorChange={(floor) => {
            setCurrentFloor(floor);
            // Filter locations by floor when floor changes
            const floorLoc = locations.find((loc) => loc.floor === floor);
            if (floorLoc && (startLocation || endLocation)) {
              // Keep selection if location exists on new floor
              const start = locations.find((loc) => loc.id === startLocation);
              const end = locations.find((loc) => loc.id === endLocation);
              if (start && start.floor !== floor) setStartLocation("");
              if (end && end.floor !== floor) setEndLocation("");
            }
          }}
        />
      </div>
    </div>
  );
}
