"use client";

import { useState, useEffect } from "react";
import { Search, X, Layers, Filter } from "lucide-react";
import EnhancedAirportMap from "@/components/map/EnhancedAirportMap";
import { Location, LocationType } from "@/lib/types";
import airportData from "@/lib/data/airport-data.json";
import { locationColors, theme } from "@/lib/config/theme";
import { useLocale } from "@/lib/context/LocaleContext";

export default function MapPage() {
  const { t } = useLocale();
  const [locations, setLocations] = useState<Location[]>([]);
  const [floors, setFloors] = useState<{ level: number; name: string }[]>([]);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
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
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] flex flex-col"
      style={{ backgroundColor: theme.colors.background.paper }}
    >
      {/* Search Bar */}
      <div
        className="border-b p-4"
        style={{
          backgroundColor: theme.colors.background.elevated,
          borderColor: theme.colors.border.main,
          boxShadow: theme.shadow.sm,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                style={{ color: theme.colors.gray[400] }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("map.searchPlaceholder")}
                className="w-full rounded-lg focus:outline-none transition-all"
                style={{
                  paddingLeft: theme.spacing[10],
                  paddingRight: theme.spacing[10],
                  paddingTop: theme.spacing[3],
                  paddingBottom: theme.spacing[3],
                  border: `1px solid ${theme.colors.border.main}`,
                  fontSize: theme.typography.base.fontSize,
                  color: theme.colors.text.primary,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.accent.main;
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.accent.main}20`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.main;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded transition-colors"
                  style={{ color: theme.colors.gray[400] }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.colors.gray[600];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.colors.gray[400];
                  }}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="rounded-lg transition-all flex items-center space-x-2"
              style={{
                padding: theme.spacing[3],
                border: `1px solid ${showFilters ? theme.colors.accent.main : theme.colors.border.main}`,
                backgroundColor: showFilters ? theme.colors.accent.main + '10' : 'transparent',
                color: showFilters ? theme.colors.accent.main : theme.colors.gray[700],
              }}
              onMouseEnter={(e) => {
                if (!showFilters) {
                  e.currentTarget.style.backgroundColor = theme.colors.gray[50];
                }
              }}
              onMouseLeave={(e) => {
                if (!showFilters) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>

          {/* Type Filters */}
          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              {locationTypes.map((type) => {
                const isSelected = selectedTypes.has(type);
                return (
                  <button
                    key={type}
                    onClick={() => toggleType(type)}
                    className="rounded-lg text-sm font-medium transition-all"
                    style={{
                      padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
                      backgroundColor: isSelected
                        ? theme.colors.accent.main
                        : theme.colors.background.elevated,
                      border: `1px solid ${isSelected ? theme.colors.accent.main : theme.colors.border.main}`,
                      color: isSelected ? theme.colors.accent.contrast : theme.colors.text.primary,
                      boxShadow: isSelected ? theme.shadow.sm : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = theme.colors.gray[100];
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = theme.colors.background.elevated;
                      }
                    }}
                  >
                    {t(`map.locationTypes.${type}`) || type}
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
        <div
          className="absolute top-4 left-4 rounded-xl overflow-hidden"
          style={{
            backgroundColor: theme.colors.background.elevated,
            boxShadow: theme.shadow.lg,
          }}
        >
          {floors.map((floor) => {
            const isActive = currentFloor === floor.level;
            return (
              <button
                key={floor.level}
                onClick={() => setCurrentFloor(floor.level)}
                className="block w-full text-left transition-all"
                style={{
                  padding: `${theme.spacing[4]} ${theme.spacing[6]}`,
                  borderBottom: `1px solid ${theme.colors.border.light}`,
                  backgroundColor: isActive
                    ? theme.colors.accent.main
                    : theme.colors.background.elevated,
                  color: isActive ? theme.colors.accent.contrast : theme.colors.text.primary,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = theme.colors.gray[50];
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = theme.colors.background.elevated;
                  }
                }}
              >
                  <div
                    className="font-semibold"
                    style={{
                      fontSize: theme.typography.base.fontSize,
                    }}
                  >
                    {floor.level === 0 ? t("common.floor.ground") : `${t("common.floor.level")} ${floor.level}`}
                  </div>
                <div
                  className="mt-1"
                  style={{
                    fontSize: theme.typography.tiny.fontSize,
                    color: isActive
                      ? theme.colors.accent.contrast + 'CC'
                      : theme.colors.text.secondary,
                  }}
                >
                  {floor.name.split(" - ")[1] || floor.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div
          className="absolute bottom-4 right-4 rounded-xl p-4 max-w-xs"
          style={{
            backgroundColor: theme.colors.background.elevated,
            boxShadow: theme.shadow.lg,
          }}
        >
          <h3
            className="font-semibold mb-3 flex items-center"
            style={{
              fontSize: theme.typography.base.fontSize,
              color: theme.colors.text.primary,
            }}
          >
            <Layers className="w-4 h-4 mr-2" />
            {t("map.legend")}
          </h3>
          <div className="grid grid-cols-2 gap-2"
            style={{ fontSize: theme.typography.tiny.fontSize }}
          >
            {locationTypes.slice(0, 8).map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: locationColors[type as LocationType] || theme.colors.gray[500],
                    boxShadow: theme.shadow.sm,
                  }}
                />
                <span style={{ color: theme.colors.text.secondary }}>{t(`map.locationTypes.${type}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
