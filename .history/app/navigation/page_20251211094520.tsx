"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Loader2, MapPin, Clock, Search, X, Layers, Filter, Navigation, X as XIcon } from "lucide-react";
import { Location, LocationType } from "@/lib/types";
import airportData from "@/lib/data/airport-data.json";
import { theme, locationColors } from "@/lib/config/theme";
import { useLocale } from "@/lib/context/LocaleContext";
import EnhancedAirportMap from "@/components/map/EnhancedAirportMap";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    setLocations(airportData.locations as Location[]);
    setFloors(airportData.floors);
  }, []);

  // Get only the location types to display in legend
  const legendLocationTypes: LocationType[] = [
    "gate",           // Portes
    "checkin",        // Enregistrement
    "security",       // Sécurité
    "toilet",         // Toilettes
    "restaurant",     // Restauration
    "shop",          // Boutiques
    "information",   // Information
    "lounge",        // Salons
  ];

  // Get location types from actual locations (for filtering)
  const locationTypes = Array.from(
    new Set(locations.map((loc) => loc.type))
  ).sort();

  // Filter locations based on search and type filters
  const filteredLocations = locations.filter((loc) => {
    const matchesSearch =
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedTypes.size === 0 || selectedTypes.has(loc.type);
    return matchesSearch && matchesType;
  });

  const toggleType = (type: string) => {
    const newTypes = new Set(selectedTypes);
    if (newTypes.has(type)) {
      newTypes.delete(type);
    } else {
      newTypes.add(type);
    }
    setSelectedTypes(newTypes);
  };

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
          language: locale === "ewe" ? "en" : locale, // Mapbox supports fr, en, etc. but not ewe, so use en as fallback
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

  // Navigation form component (reusable)
  const NavigationForm = () => (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="font-bold mb-2"
            style={{
              fontSize: "24px",
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
        {/* Close button for mobile */}
        <button
          onClick={() => setShowMobileNav(false)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          style={{ color: theme.colors.text.secondary }}
        >
          <XIcon className="w-6 h-6" />
        </button>
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
                <option value="">{t("navigation.selectPlaceholder")}</option>
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
              {t("navigation.destination")}
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
                <option value="">{t("navigation.selectPlaceholder")}</option>
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
        onClick={() => {
          handleCalculateRoute();
          // Close mobile nav after calculating route
          if (window.innerWidth < 768) {
            setShowMobileNav(false);
          }
        }}
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
            {t("navigation.calculating")}
          </>
        ) : (
          t("navigation.calculateRoute")
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
                {t("navigation.navigationInstructions")}
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
  );

  return (
    <div className="flex h-screen overflow-hidden relative" style={{ backgroundColor: theme.colors.background.default }}>
      {/* Left Panel - Navigation (Desktop only) */}
      <div
        className="hidden md:flex md:w-80 lg:w-72 flex-shrink-0 overflow-y-auto"
        style={{ backgroundColor: "#ffffff" }}
      >
        <NavigationForm />
      </div>

      {/* Mobile Navigation Drawer */}
      {showMobileNav && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setShowMobileNav(false)}
          />
          {/* Drawer */}
          <div
            className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white z-50 shadow-xl md:hidden overflow-y-auto"
            style={{ backgroundColor: "#ffffff" }}
          >
            <NavigationForm />
          </div>
        </>
      )}

      {/* Map Panel - Always visible */}
      <div className="flex-1 relative flex flex-col w-full md:w-auto" style={{ backgroundColor: theme.colors.background.default }}>
        {/* Mobile Navigation Button - Fixed just above ClassFAB button */}
        <button
          onClick={() => setShowMobileNav(true)}
          className="md:hidden fixed right-6 z-30 w-14 h-14 rounded-full shadow-lg transition-all flex items-center justify-center"
          style={{
            bottom: '144px', // Mobile: bottom-20 (80px) + h-14 (56px) + 8px gap = 144px
            backgroundColor: theme.colors.accent.main,
            color: theme.colors.accent.contrast,
            boxShadow: theme.shadow.lg,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <Navigation className="w-6 h-6 text-white" />
        </button>
        {/* Search Bar */}
        <div
          className="border-b p-4"
          style={{
            backgroundColor: theme.colors.background.elevated,
            borderColor: theme.colors.border.main,
            boxShadow: theme.shadow.sm,
          }}
        >
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

        {/* Map Container */}
        <div className="flex-1 relative">
          <EnhancedAirportMap
            locations={filteredLocations}
            selectedLocation={selectedLocation}
            onLocationSelect={setSelectedLocation}
            showRoute={route}
            currentFloor={currentFloor}
          />

          {/* Floor Selector */}
          <div
            className="absolute top-2 left-2 md:top-4 md:left-4 rounded-lg md:rounded-xl overflow-hidden"
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
                  onClick={() => {
                    setCurrentFloor(floor.level);
                    // Filter locations by floor when floor changes
                    const floorLoc = locations.find((loc) => loc.floor === floor.level);
                    if (floorLoc && (startLocation || endLocation)) {
                      // Keep selection if location exists on new floor
                      const start = locations.find((loc) => loc.id === startLocation);
                      const end = locations.find((loc) => loc.id === endLocation);
                      if (start && start.floor !== floor.level) setStartLocation("");
                      if (end && end.floor !== floor.level) setEndLocation("");
                    }
                  }}
                  className="block w-full text-left transition-all px-2 py-1.5 md:px-3 md:py-2"
                  style={{
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
                    className="font-semibold text-xs md:text-sm"
                    style={{
                      fontSize: '12px',
                    }}
                  >
                    {floor.level === 0 ? t("common.floor.ground") : `${t("common.floor.level")} ${floor.level}`}
                  </div>
                  <div
                    className="mt-0.5 text-xs md:text-xs"
                    style={{
                      fontSize: '10px',
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
              {legendLocationTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: locationColors[type] || theme.colors.gray[500],
                      boxShadow: theme.shadow.sm,
                    }}
                  />
                  <span style={{ color: theme.colors.text.secondary }}>{t(`map.locationTypes.${type}`) || type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
