"use client";

import { useState, useEffect } from "react";
import { Map as MapIcon, Search, X, Navigation } from "lucide-react";
import AirportMap from "@/components/map/AirportMap";
import FloorSelector from "@/components/ui/FloorSelector";
import { Location, LocationType } from "@/lib/types";
import airportData from "@/lib/data/airport-data.json";

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
  const [selectedType, setSelectedType] = useState<string>("all");

  useEffect(() => {
    setLocations(airportData.locations as Location[]);
    setFloors(airportData.floors);
  }, []);

  const filteredLocations = locations.filter((loc) => {
    const matchesSearch =
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || loc.type === selectedType;
    return matchesSearch && matchesType;
  });

  const locationTypes = Array.from(
    new Set(locations.map((loc) => loc.type))
  ).sort();

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
    const location = locations.find((loc) => loc.id === locationId);
    if (location) {
      setCurrentFloor(location.floor);
      setShowSearch(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 p-4 safe-area-top z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <MapIcon className="w-6 h-6 text-blue-600" />
            Plan de l'aéroport
          </h1>
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            {showSearch ? (
              <X className="w-6 h-6" />
            ) : (
              <Search className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Search Panel */}
      {showSearch && (
        <div className="bg-white border-b border-gray-200 p-4 z-10">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un lieu..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
            autoFocus
          />

          <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedType === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Tous
            </button>
            {locationTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedType === type
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {locationTypeLabels[type] || type}
              </button>
            ))}
          </div>

          <div className="max-h-64 overflow-y-auto space-y-2">
            {filteredLocations.length === 0 ? (
              <p className="text-gray-500 text-sm text-center py-4">
                Aucun lieu trouvé
              </p>
            ) : (
              filteredLocations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleLocationSelect(location.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    selectedLocation === location.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {location.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {location.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {location.floor === 0
                          ? "Rez-de-chaussée"
                          : `Étage ${location.floor}`}
                      </p>
                    </div>
                    <Navigation className="w-5 h-5 text-gray-400" />
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}

      <div className="flex-1 relative overflow-hidden">
        <AirportMap
          locations={locations}
          selectedLocation={selectedLocation}
          onLocationSelect={handleLocationSelect}
          currentFloor={currentFloor}
        />

        <FloorSelector
          currentFloor={currentFloor}
          floors={floors}
          onFloorChange={setCurrentFloor}
        />

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 max-w-xs">
          <h3 className="font-bold text-sm mb-2">Légende</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <span>✈️</span> Portes
            </div>
            <div className="flex items-center gap-1">
              <span>🎫</span> Enregistrement
            </div>
            <div className="flex items-center gap-1">
              <span>🚻</span> Toilettes
            </div>
            <div className="flex items-center gap-1">
              <span>🍴</span> Restauration
            </div>
            <div className="flex items-center gap-1">
              <span>🛍️</span> Boutiques
            </div>
            <div className="flex items-center gap-1">
              <span>ℹ️</span> Information
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
