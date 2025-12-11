"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  MapPin,
  Clock,
  Navigation as NavigationIcon,
  ArrowUpRight,
  ArrowLeft,
  ArrowUp,
  MoveUp,
  MoveDown,
  Target,
  ChevronDown,
  ChevronUp,
  MapPinned,
} from "lucide-react";
import { Location } from "@/lib/types";
import { findRoute } from "@/lib/utils/navigation";
import airportData from "@/lib/data/airport-data.json";
import { theme } from "@/lib/config/theme";
import { useLocale } from "@/lib/context/LocaleContext";

export default function NavigationPage() {
  const { t } = useLocale();
  const [locations, setLocations] = useState<Location[]>([]);
  const [startLocation, setStartLocation] = useState<string>("");
  const [endLocation, setEndLocation] = useState<string>("");
  const [routeSteps, setRouteSteps] = useState<any[]>([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setLocations(airportData.locations as Location[]);
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
      setRouteSteps(calculatedRoute.instructions);
      setTotalDistance(calculatedRoute.distance);
      setTotalDuration(calculatedRoute.duration);
      setCurrentStep(0);
    }
  };

  const popularDestinations = [
    { id: "gate-a1", nameKey: "navigation.popularDestinations.boarding", icon: "🛫", typeKey: "navigation.popularDestinations.boarding" },
    { id: "gate-b1", nameKey: "navigation.popularDestinations.boarding", icon: "🛫", typeKey: "navigation.popularDestinations.boarding" },
    { id: "toilet-main", nameKey: "map.locationTypes.toilet", icon: "🚻", typeKey: "navigation.popularDestinations.services" },
    { id: "restaurant-maquis", nameKey: "services.categories.restaurant", icon: "🍽️", typeKey: "navigation.popularDestinations.dining" },
    { id: "shop-duty-free", nameKey: "services.categories.shop", icon: "🛍️", typeKey: "navigation.popularDestinations.shopping" },
    { id: "lounge-business", nameKey: "services.categories.lounge", icon: "✨", typeKey: "navigation.popularDestinations.lounge" },
    { id: "baggage-claim", nameKey: "map.locationTypes.baggage", icon: "🧳", typeKey: "navigation.popularDestinations.arrival" },
    { id: "information-main", nameKey: "map.locationTypes.information", icon: "ℹ️", typeKey: "navigation.popularDestinations.services" },
  ];

  const currentLocations = [
    { id: "entrance-main", nameKey: "map.locationTypes.entrance", icon: "🚪" },
    { id: "checkin-economy", nameKey: "map.locationTypes.checkin", icon: "✅" },
    { id: "security-main", nameKey: "map.locationTypes.security", icon: "🔒" },
    { id: "gate-a1", nameKey: "navigation.popularDestinations.boarding", icon: "🛫" },
  ];

  const getDirectionIcon = (instruction: string) => {
    const lower = instruction.toLowerCase();
    if (lower.includes("monter") || lower.includes("étage")) return MoveUp;
    if (lower.includes("descendre")) return MoveDown;
    if (lower.includes("gauche")) return ArrowLeft;
    if (lower.includes("droite") || lower.includes("continuer")) return ArrowUpRight;
    return ArrowUp;
  };

  return (
    <div
      className="min-h-screen pb-20"
      style={{ backgroundColor: theme.colors.background.default }}
    >
      {/* Header */}
      <div
        className="sticky top-[56px] md:top-[64px] z-40 backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderBottom: `1px solid ${theme.colors.border.main}`,
          boxShadow: theme.shadow.sm,
        }}
      >
        <div className="px-4 py-4">
          <h1
            className="font-bold mb-1"
            style={{
              fontSize: theme.typography.h4.fontSize,
              fontWeight: theme.typography.h4.fontWeight,
              color: theme.colors.text.primary,
            }}
          >
            {t("navigation.title")}
          </h1>
          <p
            className="text-xs"
            style={{
              color: theme.colors.text.secondary,
            }}
          >
            {t("navigation.subtitle")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4 space-y-4">
        {/* Quick "Where am I?" */}
        <div>
          <h2
            className="font-semibold mb-3 flex items-center gap-2"
            style={{
              fontSize: theme.typography.base.fontSize,
              color: theme.colors.text.primary,
            }}
          >
            <Target className="w-5 h-5" style={{ color: theme.colors.accent.main }} />
            {t("navigation.currentLocation")}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {currentLocations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setStartLocation(loc.id)}
                className="rounded-lg p-3 text-left transition-all"
                style={{
                  backgroundColor: startLocation === loc.id
                    ? theme.colors.accent.main + '20'
                    : theme.colors.background.elevated,
                  border: `2px solid ${startLocation === loc.id ? theme.colors.accent.main : theme.colors.border.main}`,
                }}
              >
                <div className="text-2xl mb-1">{loc.icon}</div>
                <p
                  className="text-xs font-medium"
                  style={{
                    color: startLocation === loc.id
                      ? theme.colors.accent.dark
                      : theme.colors.text.primary,
                  }}
                >
                  {t(loc.nameKey)}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Destinations */}
        <div>
          <h2
            className="font-semibold mb-3 flex items-center gap-2"
            style={{
              fontSize: theme.typography.base.fontSize,
              color: theme.colors.text.primary,
            }}
          >
            <MapPinned className="w-5 h-5" style={{ color: theme.colors.accent.main }} />
            {t("navigation.destination")}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {popularDestinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setEndLocation(dest.id)}
                className="rounded-lg p-3 text-left transition-all"
                style={{
                  backgroundColor: endLocation === dest.id
                    ? theme.colors.accent.main + '20'
                    : theme.colors.background.elevated,
                  border: `2px solid ${endLocation === dest.id ? theme.colors.accent.main : theme.colors.border.main}`,
                }}
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="text-2xl">{dest.icon}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: theme.colors.gray[200],
                      color: theme.colors.text.secondary,
                    }}
                  >
                    {t(dest.typeKey)}
                  </span>
                </div>
                <p
                  className="text-xs font-medium"
                  style={{
                    color: endLocation === dest.id
                      ? theme.colors.accent.dark
                      : theme.colors.text.primary,
                  }}
                >
                  {t(dest.nameKey)}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        {startLocation && endLocation && (
          <button
            onClick={handleCalculateRoute}
            className="w-full rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            style={{
              padding: `${theme.spacing[4]} ${theme.spacing[6]}`,
              backgroundColor: theme.colors.accent.main,
              color: theme.colors.accent.contrast,
              fontSize: theme.typography.base.fontSize,
              boxShadow: theme.shadow.md,
            }}
          >
            <NavigationIcon className="w-5 h-5" />
            {t("navigation.calculateRoute")}
          </button>
        )}

        {/* Route Result */}
        {routeSteps.length > 0 && (
          <div className="space-y-4">
            {/* Route Summary */}
            <div
              className="rounded-xl p-4"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.accent.main} 0%, ${theme.colors.accent.dark} 100%)`,
                color: theme.colors.accent.contrast,
                boxShadow: theme.shadow.lg,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-bold text-lg">
                    {totalDistance.toFixed(0)}m
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold text-lg">
                    ~{totalDuration} min
                  </span>
                </div>
              </div>
              <p className="text-sm opacity-90">
                {routeSteps.length} {t("navigation.routeSummary.steps")} • {t("navigation.routeSummary.difficulty")}: {t("navigation.routeSummary.easy")}
              </p>
            </div>

            {/* Step-by-step Instructions */}
            <div>
              <h3
                className="font-semibold mb-3"
                style={{
                  fontSize: theme.typography.base.fontSize,
                  color: theme.colors.text.primary,
                }}
              >
                {t("navigation.instructions")}
              </h3>
              <div className="space-y-3">
                {routeSteps.map((step, index) => {
                  const Icon = getDirectionIcon(step.instruction);
                  const isCompleted = index < currentStep;
                  const isCurrent = index === currentStep;

                  return (
                    <div
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className="rounded-xl p-4 transition-all"
                      style={{
                        backgroundColor: isCurrent
                          ? theme.colors.accent.main + '20'
                          : isCompleted
                          ? theme.colors.success.main + '10'
                          : theme.colors.background.elevated,
                        border: `2px solid ${
                          isCurrent
                            ? theme.colors.accent.main
                            : isCompleted
                            ? theme.colors.success.main
                            : theme.colors.border.main
                        }`,
                        opacity: isCompleted && !isCurrent ? 0.6 : 1,
                      }}
                    >
                      <div className="flex items-start gap-3">
                        {/* Step Number */}
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold"
                          style={{
                            backgroundColor: isCurrent
                              ? theme.colors.accent.main
                              : isCompleted
                              ? theme.colors.success.main
                              : theme.colors.gray[300],
                            color: isCurrent || isCompleted
                              ? '#fff'
                              : theme.colors.text.secondary,
                          }}
                        >
                          {index + 1}
                        </div>

                        {/* Instruction */}
                        <div className="flex-1">
                          <div className="flex items-start gap-2 mb-2">
                            <Icon
                              className="w-5 h-5 flex-shrink-0 mt-0.5"
                              style={{
                                color: isCurrent
                                  ? theme.colors.accent.dark
                                  : theme.colors.text.secondary,
                              }}
                            />
                            <p
                              className="font-medium"
                              style={{
                                fontSize: theme.typography.base.fontSize,
                                color: theme.colors.text.primary,
                                lineHeight: 1.5,
                              }}
                            >
                              {step.instruction}
                            </p>
                          </div>

                          {/* Distance Badge */}
                          {step.distance > 0 && (
                            <div className="flex items-center gap-2">
                              <span
                                className="px-2 py-1 rounded text-xs font-semibold"
                                style={{
                                  backgroundColor: theme.colors.gray[200],
                                  color: theme.colors.text.secondary,
                                }}
                              >
                                📏 {step.distance.toFixed(0)}m
                              </span>
                              {isCurrent && (
                                <span
                                  className="px-2 py-1 rounded text-xs font-semibold animate-pulse"
                                  style={{
                                    backgroundColor: theme.colors.accent.main + '30',
                                    color: theme.colors.accent.dark,
                                  }}
                                >
                                  👉 {t("navigation.currentStep")}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Progress to Next Step */}
                      {isCurrent && index < routeSteps.length - 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentStep(index + 1);
                          }}
                          className="mt-3 w-full rounded-lg font-medium transition-all"
                          style={{
                            padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
                            backgroundColor: theme.colors.success.main,
                            color: '#fff',
                            fontSize: theme.typography.small.fontSize,
                          }}
                        >
                          ✅ {t("navigation.stepCompleted")} • {t("navigation.next")}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Completion */}
            {currentStep >= routeSteps.length - 1 && (
              <div
                className="rounded-xl p-6 text-center"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.success.main} 0%, ${theme.colors.success.dark} 100%)`,
                  color: '#fff',
                  boxShadow: theme.shadow.lg,
                }}
              >
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="font-bold text-lg mb-1">{t("navigation.arrived")}</h3>
                <p className="text-sm opacity-90">
                  {t("navigation.arrivedDescription")}
                </p>
              </div>
            )}

            {/* New Route Button */}
            <button
              onClick={() => {
                setStartLocation("");
                setEndLocation("");
                setRouteSteps([]);
                setCurrentStep(0);
              }}
              className="w-full rounded-xl font-medium transition-all"
              style={{
                padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
                backgroundColor: theme.colors.background.elevated,
                border: `1px solid ${theme.colors.border.main}`,
                color: theme.colors.text.primary,
                fontSize: theme.typography.small.fontSize,
              }}
            >
              🔄 {t("navigation.newRoute")}
            </button>
          </div>
        )}

        {/* No Selection State */}
        {!startLocation && !endLocation && routeSteps.length === 0 && (
          <div
            className="rounded-xl p-8 text-center"
            style={{
              backgroundColor: theme.colors.background.elevated,
              border: `1px solid ${theme.colors.border.main}`,
            }}
          >
            <NavigationIcon
              className="w-16 h-16 mx-auto mb-3"
              style={{ color: theme.colors.gray[400] }}
            />
            <h3
              className="font-semibold mb-2"
              style={{
                fontSize: theme.typography.base.fontSize,
                color: theme.colors.text.primary,
              }}
            >
              {t("navigation.selectRoute")}
            </h3>
            <p className="text-xs" style={{ color: theme.colors.text.secondary }}>
              {t("navigation.selectRouteDescription")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
