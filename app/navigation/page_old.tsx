"use client";

import { useState, useEffect } from "react";
import { MapPin, Navigation2, X } from "lucide-react";
import AirportMap from "@/components/map/AirportMap";
import FloorSelector from "@/components/ui/FloorSelector";
import { Location } from "@/lib/types";
import { findRoute } from "@/lib/utils/navigation";
import airportData from "@/lib/data/airport-data.json";

export default function NavigationPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [floors, setFloors] = useState<{ level: number; name: string }[]>([]);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [startLocation, setStartLocation] = useState<string>("");
  const [endLocation, setEndLocation] = useState<string>("");
  const [route, setRoute] = useState<[number, number][] | undefined>();
  const [showInstructions, setShowInstructions] = useState(false);
  const [routeSteps, setRouteSteps] = useState<any[]>([]);

  useEffect(() => {
    setLocations(airportData.locations as Location[]);
    setFloors(airportData.floors);
  }, []);

  const handleCalculateRoute = () => {
    if (!startLocation || !endLocation) {
      alert("Veuillez sélectionner un point de départ et d'arrivée");
      return;
    }

    const start = locations.find((loc) => loc.id === startLocation);
    const end = locations.find((loc) => loc.id === endLocation);

    if (!start || !end) return;

    const calculatedRoute = findRoute(start, end, locations);

    if (calculatedRoute) {
      setRoute(calculatedRoute.path);
      setRouteSteps(calculatedRoute.instructions);
      setShowInstructions(true);
      setCurrentFloor(start.floor);
    }
  };

  const handleClearRoute = () => {
    setRoute(undefined);
    setStartLocation("");
    setEndLocation("");
    setShowInstructions(false);
    setRouteSteps([]);
  };

  const groupedLocations = locations.reduce((acc, loc) => {
    if (!acc[loc.type]) {
      acc[loc.type] = [];
    }
    acc[loc.type].push(loc);
    return acc;
  }, {} as Record<string, Location[]>);

  const locationTypeLabels: Record<string, string> = {
    gate: "Portes d'embarquement",
    checkin: "Enregistrement",
    security: "Sécurité",
    toilet: "Toilettes",
    restaurant: "Restauration",
    shop: "Boutiques",
    information: "Information",
    lounge: "Salons",
    baggage: "Bagages",
    entrance: "Entrées",
    exit: "Sorties",
    medical: "Services médicaux",
    prayer: "Espaces de prière",
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 p-4 safe-area-top">
        <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Navigation2 className="w-6 h-6 text-blue-600" />
          Navigation
        </h1>
      </header>

      <div className="flex-1 relative overflow-hidden">
        <AirportMap
          locations={locations}
          selectedLocation={endLocation}
          showRoute={route}
          currentFloor={currentFloor}
        />

        <FloorSelector
          currentFloor={currentFloor}
          floors={floors}
          onFloorChange={setCurrentFloor}
        />

        {/* Route Controls */}
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-xl p-4">
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Point de départ
              </label>
              <select
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destination
              </label>
              <select
                value={endLocation}
                onChange={(e) => setEndLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCalculateRoute}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Calculer l'itinéraire
              </button>
              {route && (
                <button
                  onClick={handleClearRoute}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Panel */}
      {showInstructions && routeSteps.length > 0 && (
        <div className="absolute inset-0 bg-white z-50 flex flex-col">
          <header className="bg-blue-600 text-white p-4 safe-area-top flex justify-between items-center">
            <h2 className="text-lg font-bold">Instructions</h2>
            <button
              onClick={() => setShowInstructions(false)}
              className="p-2 hover:bg-blue-700 rounded-md"
            >
              <X className="w-6 h-6" />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {routeSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{step.instruction}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Distance: {step.distance.toFixed(0)}m
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => setShowInstructions(false)}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Voir sur la carte
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
