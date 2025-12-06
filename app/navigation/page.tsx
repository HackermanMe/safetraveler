"use client";

import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import EnhancedAirportMap from "@/components/map/EnhancedAirportMap";
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
  const [routeSteps, setRouteSteps] = useState<any[]>([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

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
      setRouteSteps(calculatedRoute.instructions);
      setTotalDistance(calculatedRoute.distance);
      setTotalDuration(calculatedRoute.duration);
      setCurrentFloor(start.floor);
    }
  };

  const groupedLocations = locations.reduce((acc, loc) => {
    const type = loc.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(loc);
    return acc;
  }, {} as Record<string, Location[]>);

  const locationTypeLabels: Record<string, string> = {
    entrance: "Entrées",
    gate: "Portes d'embarquement",
    checkin: "Enregistrement",
    security: "Sécurité",
    toilet: "Toilettes",
    restaurant: "Restauration",
    shop: "Boutiques",
    information: "Information",
    lounge: "Salons",
    baggage: "Bagages",
    medical: "Services médicaux",
  };

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-96 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-normal text-gray-900 mb-2">Navigation</h2>
          <p className="text-sm text-gray-600">
            Calculez votre itinéraire dans l'aéroport
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Start Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Point de départ
            </label>
            <select
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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

          {/* End Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Destination
            </label>
            <select
              value={endLocation}
              onChange={(e) => setEndLocation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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

          <button
            onClick={handleCalculateRoute}
            disabled={!startLocation || !endLocation}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-sm"
          >
            Calculer l'itinéraire
          </button>

          {/* Route Info */}
          {route && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-900">
                    {totalDistance.toFixed(0)}m
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-900">
                    ~{totalDuration} min
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {routeSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 text-sm"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{step.instruction}</p>
                      {step.distance > 0 && (
                        <p className="text-gray-600 text-xs mt-1">
                          {step.distance.toFixed(0)}m
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        <EnhancedAirportMap
          locations={locations}
          selectedLocation={endLocation}
          showRoute={route}
          currentFloor={currentFloor}
        />

        {/* Floor Selector */}
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg overflow-hidden">
          {floors.map((floor) => (
            <button
              key={floor.level}
              onClick={() => setCurrentFloor(floor.level)}
              className={`block w-full px-6 py-4 text-left border-b last:border-b-0 transition-colors ${
                currentFloor === floor.level
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="font-semibold">
                {floor.level === 0 ? "RDC" : `Étage ${floor.level}`}
              </div>
              <div
                className={`text-xs mt-1 ${
                  currentFloor === floor.level
                    ? "text-blue-100"
                    : "text-gray-500"
                }`}
              >
                {floor.name.split(" - ")[1] || floor.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
