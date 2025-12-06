"use client";

import { useState, useEffect } from "react";
import { Search, X, Layers } from "lucide-react";
import EnhancedAirportMap from "@/components/map/EnhancedAirportMap";
import { Location, LocationType } from "@/lib/types";
import airportData from "@/lib/data/airport-data.json";
import { locationColors } from "@/lib/config/theme";

const locationTypeLabels: Record<string, string> = {
  gate: "Portes",
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
  medical: "Médical",
  prayer: "Prière",
};

export default function MapPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [floors, setFloors] = useState<{ level: number; name: string }[]>([]);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());

  useEffect(() => {
    setLocations(airportData.locations as Location[]);
    setFloors(airportData.floors);
  }, []);

  const locationTypes = Array.from(
    new Set(locations.map((loc) => loc.type))
  ).sort();

  const filteredLocations = locations.filter((loc) => {
    const matchesSearch =
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedTypes.size === 0 || selectedTypes.has(loc.type);
    return matchesSearch && matchesType;
  });

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
    const location = locations.find((loc) => loc.id === locationId);
    if (location) {
      setCurrentFloor(location.floor);
    }
  };

  const toggleType = (type: string) => {
    const newTypes = new Set(selectedTypes);
    if (newTypes.has(type)) {
      newTypes.delete(type);
    } else {
      newTypes.add(type);
    }
    setSelectedTypes(newTypes);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] flex flex-col bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un lieu..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Layers className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Type Filters */}
          {showSearch && (
            <div className="mt-4 flex flex-wrap gap-2">
              {locationTypes.map((type) => {
                const isSelected = selectedTypes.has(type);
                return (
                  <button
                    key={type}
                    onClick={() => toggleType(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {locationTypeLabels[type] || type}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative">
        <EnhancedAirportMap
          locations={filteredLocations}
          selectedLocation={selectedLocation}
          onLocationSelect={handleLocationSelect}
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

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Layers className="w-4 h-4 mr-2" />
            Légende
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {Object.entries(locationTypeLabels).slice(0, 8).map(([type, label]) => (
              <div key={type} className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: locationColors[type as LocationType] || "#757575" }}
                />
                <span className="text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
