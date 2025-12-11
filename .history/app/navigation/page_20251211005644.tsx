"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Location } from "@/lib/types";
import { findRoute } from "@/lib/utils/navigation";
import airportData from "@/lib/data/airport-data.json";
import { theme } from "@/lib/config/theme";
import { useLocale } from "@/lib/context/LocaleContext";
import EnhancedAirportMap from "@/components/map/EnhancedAirportMap";
import FloorSelector from "@/components/ui/FloorSelector";

export default function NavigationPage() {
  const { t } = useLocale();
  const [locations, setLocations] = useState<Location[]>([]);
  const [floors, setFloors] = useState<{ level: number; name: string }[]>([]);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [startLocation, setStartLocation] = useState<string>("");
  const [endLocation, setEndLocation] = useState<string>("");
  const [route, setRoute] = useState<[number, number][] | undefined>();
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>();

  useEffect(() => {
    setLocations(airportData.locations as Location[]);
    setFloors(airportData.floors);
  }, []);

  const handleCalculateRoute = () => {
    if (!startLocation || !endLocation) {
      return;
    }

    const start = locations.find((loc) => loc.id === startLocation);
    const end = locations.find((loc) => loc.id === endLocation);

    if (!start || !end) return;

    const calculatedRoute = findRoute(start, end, locations);

    if (calculatedRoute) {
      setRoute(calculatedRoute.path);
      setCurrentFloor(start.floor);
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
              Calculez votre itinéraire dans l'aéroport
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
              Point de départ
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
            className="w-full rounded-lg font-semibold transition-all py-3 text-sm"
            style={{
              backgroundColor: theme.colors.gray[300],
              color: theme.colors.text.primary,
              boxShadow: theme.shadow.sm,
            }}
            disabled={!startLocation || !endLocation}
          >
            Calculer l'itinéraire
          </button>
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
