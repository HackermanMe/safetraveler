"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Clock,
  Search,
  X,
  MapPin,
  Coffee,
  ShoppingBag,
  Utensils,
  Heart,
  Info,
  WifiIcon,
  Sparkles,
  AlertCircle,
  Accessibility,
  DollarSign,
  Globe,
  Store,
  Cross,
} from "lucide-react";
import { Location } from "@/lib/types";
import airportData from "@/lib/data/airport-data.json";
import { theme } from "@/lib/config/theme";
import { useLocale } from "@/lib/context/LocaleContext";

export default function ServicesPage() {
  const { t } = useLocale();
  const [locations, setLocations] = useState<Location[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  useEffect(() => {
    setLocations(airportData.locations as Location[]);
  }, []);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedLocation) {
        setSelectedLocation(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedLocation]);

  const categories = [
    {
      id: "all",
      nameKey: "services.categories.all",
      icon: Sparkles,
      types: ["restaurant", "shop", "lounge", "medical", "information"],
    },
    {
      id: "restaurant",
      nameKey: "services.categories.restaurant",
      icon: Utensils,
      types: ["restaurant"],
    },
    {
      id: "shop",
      nameKey: "services.categories.shop",
      icon: ShoppingBag,
      types: ["shop"],
    },
    {
      id: "lounge",
      nameKey: "services.categories.lounge",
      icon: Coffee,
      types: ["lounge"],
    },
    {
      id: "services",
      nameKey: "services.categories.services",
      icon: Heart,
      types: ["medical", "information"],
    },
  ];

  const getLocationIcon = (type: string) => {
    const icons: Record<string, string> = {
      restaurant: "🍽️",
      shop: "🛍️",
      lounge: "✨",
      medical: "⚕️",
      information: "ℹ️",
    };
    return icons[type] || "📍";
  };

  const filteredLocations = locations.filter((loc) => {
    const category = categories.find((cat) => cat.id === selectedCategory);
    const matchesCategory =
      selectedCategory === "all" || category?.types.includes(loc.type);
    const matchesSearch =
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.description?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Emergency contacts
  const emergencyContacts = [
    {
      nameKey: "services.emergency.medical",
      descriptionKey: "services.emergency.medicalDescription",
      phone: "+228 22 23 44 56",
      icon: Cross,
      color: theme.colors.error.main,
    },
    {
      nameKey: "services.emergency.information",
      descriptionKey: "services.emergency.informationDescription",
      phone: "+228 22 23 44 55",
      icon: Info,
      color: theme.colors.info.main,
    },
  ];

  // Quick tips
  const tips = [
    { icon: "⏰", titleKey: "services.tips.arrival.title", textKey: "services.tips.arrival.text" },
    { icon: "🌐", titleKey: "services.tips.wifi.title", textKey: "services.tips.wifi.text" },
    { icon: "♿", titleKey: "services.tips.accessibility.title", textKey: "services.tips.accessibility.text" },
    { icon: "💱", titleKey: "services.tips.exchange.title", textKey: "services.tips.exchange.text" },
  ];

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
            {t("services.title")}
          </h1>
          <p
            className="text-xs"
            style={{
              color: theme.colors.text.secondary,
            }}
          >
            {t("services.subtitle")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4 space-y-4">
        {/* Emergency Cards */}
        <div className="grid grid-cols-2 gap-3">
          {emergencyContacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.phone}
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="rounded-xl p-4 transition-all"
                style={{
                  background: `linear-gradient(135deg, ${contact.color} 0%, ${contact.color}DD 100%)`,
                  color: "#fff",
                  boxShadow: theme.shadow.md,
                }}
              >
                <div className="mb-2">
                  <Icon size={32} />
                </div>
                <h3 className="font-bold text-sm mb-1">{t(contact.nameKey)}</h3>
                <p className="text-xs opacity-90 mb-2">{t(contact.descriptionKey)}</p>
                <div className="flex items-center gap-1 text-xs font-semibold">
                  <Phone className="w-3 h-3" />
                  {contact.phone}
                </div>
              </a>
            )
          })}
        </div>

        {/* Quick Tips */}
        <div
          className="rounded-xl p-5"
          style={{
            backgroundColor: theme.colors.background.elevated,
            border: `1px solid ${theme.colors.border.main}`,
            boxShadow: theme.shadow.sm,
          }}
        >
          <h3
            className="font-semibold mb-4 flex items-center gap-2"
            style={{
              fontSize: theme.typography.h6.fontSize,
              fontWeight: theme.typography.h6.fontWeight,
              color: theme.colors.text.primary,
            }}
          >
            <div
              className="p-1.5 rounded-lg"
              style={{
                backgroundColor: theme.colors.accent.main + '15',
              }}
            >
              <Info className="w-5 h-5" style={{ color: theme.colors.accent.main }} />
            </div>
            {t("services.tips.title")}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {tips.map((tip, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-1">{tip.icon}</div>
                <p
                  className="font-semibold text-xs mb-0.5"
                  style={{ color: theme.colors.text.primary }}
                >
                  {t(tip.titleKey)}
                </p>
                <p className="text-xs" style={{ color: theme.colors.text.secondary }}>
                  {t(tip.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative" role="search">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            style={{ color: theme.colors.text.secondary }}
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("services.searchPlaceholder")}
            className="w-full rounded-xl transition-all"
            style={{
              padding: `${theme.spacing[3]} ${theme.spacing[3]} ${theme.spacing[3]} ${theme.spacing[10]}`,
              border: `1px solid ${theme.colors.border.main}`,
              fontSize: theme.typography.base.fontSize,
              color: theme.colors.text.primary,
              backgroundColor: theme.colors.background.elevated,
            }}
            aria-label={t("services.searchPlaceholder")}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" style={{ color: theme.colors.text.secondary }} />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            const count = locations.filter((loc) =>
              category.types.includes(loc.type)
            ).length;

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="flex-shrink-0 rounded-lg transition-all flex items-center gap-2"
                style={{
                  padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
                  backgroundColor: isActive
                    ? theme.colors.accent.main
                    : theme.colors.background.elevated,
                  color: isActive
                    ? theme.colors.accent.contrast
                    : theme.colors.text.primary,
                  border: `1px solid ${isActive ? theme.colors.accent.main : theme.colors.border.main}`,
                  fontSize: theme.typography.small.fontSize,
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                <Icon className="w-4 h-4" />
                <span>{t(category.nameKey)}</span>
                <span
                  className="px-1.5 py-0.5 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: isActive
                      ? "rgba(255,255,255,0.3)"
                      : theme.colors.gray[200],
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Locations List */}
        {filteredLocations.length === 0 ? (
          <div
            className="rounded-xl p-8 text-center"
            style={{
              backgroundColor: theme.colors.background.elevated,
              border: `1px solid ${theme.colors.border.main}`,
            }}
          >
            <Search
              className="w-12 h-12 mx-auto mb-3"
              style={{ color: theme.colors.gray[400] }}
            />
            <h3
              className="font-semibold mb-1"
              style={{
                fontSize: theme.typography.base.fontSize,
                color: theme.colors.text.primary,
              }}
            >
              {t("common.noResults")}
            </h3>
            <p className="text-xs" style={{ color: theme.colors.text.secondary }}>
              {t("common.tryAnotherSearch")}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredLocations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className="w-full rounded-xl p-4 transition-all text-left"
                style={{
                  backgroundColor: theme.colors.background.elevated,
                  border: `1px solid ${theme.colors.border.main}`,
                  boxShadow: theme.shadow.sm,
                }}
                aria-label={`View details for ${location.name}`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl flex-shrink-0">
                    {getLocationIcon(location.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-semibold mb-1"
                      style={{
                        fontSize: theme.typography.base.fontSize,
                        color: theme.colors.text.primary,
                      }}
                    >
                      {location.name}
                    </h3>
                    <p
                      className="text-xs mb-2 line-clamp-2"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {location.description}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      {location.hours && (
                        <span
                          className="flex items-center gap-1 text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: theme.colors.success.main + '20',
                            color: theme.colors.success.dark,
                          }}
                        >
                          <Clock className="w-3 h-3" />
                          {location.hours}
                        </span>
                      )}
                      <span
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: theme.colors.gray[200],
                          color: theme.colors.text.secondary,
                        }}
                      >
                        {location.floor === 0
                          ? t("common.floor.ground")
                          : `${t("common.floor.level")} ${location.floor}`}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Location Detail Modal */}
      {selectedLocation && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedLocation(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="location-modal-title"
        >
          <div
            className="bg-white rounded-t-3xl md:rounded-3xl w-full md:max-w-lg p-6 pb-8 md:pb-6"
            style={{
              boxShadow: theme.shadow.xl,
              maxHeight: "80vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-4xl">
                  {getLocationIcon(selectedLocation.type)}
                </div>
                <h3
                  id="location-modal-title"
                  className="font-bold"
                  style={{
                    fontSize: theme.typography.h5.fontSize,
                    color: theme.colors.text.primary,
                  }}
                >
                  {selectedLocation.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="p-2 rounded-full transition-all"
                style={{
                  backgroundColor: theme.colors.gray[100],
                }}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" style={{ color: theme.colors.text.primary }} />
              </button>
            </div>

            <p
              className="mb-4"
              style={{
                fontSize: theme.typography.base.fontSize,
                color: theme.colors.text.secondary,
                lineHeight: 1.6,
              }}
            >
              {selectedLocation.description}
            </p>

            <div className="space-y-3">
              {selectedLocation.hours && (
                <div
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{
                    backgroundColor: theme.colors.success.main + '10',
                    border: `1px solid ${theme.colors.success.main}30`,
                  }}
                >
                  <Clock className="w-5 h-5" style={{ color: theme.colors.success.main }} />
                  <div>
                    <div className="text-xs" style={{ color: theme.colors.text.secondary }}>
                      {t("services.location.hours")}
                    </div>
                    <div
                      className="font-semibold"
                      style={{
                        fontSize: theme.typography.base.fontSize,
                        color: theme.colors.text.primary,
                      }}
                    >
                      {selectedLocation.hours}
                    </div>
                  </div>
                </div>
              )}

              <div
                className="flex items-center gap-3 p-3 rounded-lg"
                style={{
                  backgroundColor: theme.colors.info.main + '10',
                  border: `1px solid ${theme.colors.info.main}30`,
                }}
              >
                <MapPin className="w-5 h-5" style={{ color: theme.colors.info.main }} />
                <div>
                  <div className="text-xs" style={{ color: theme.colors.text.secondary }}>
                    {t("services.location.location")}
                  </div>
                  <div
                    className="font-semibold"
                    style={{
                      fontSize: theme.typography.base.fontSize,
                      color: theme.colors.text.primary,
                    }}
                  >
                    {selectedLocation.floor === 0
                      ? t("common.floor.ground")
                      : `${t("common.floor.level")} ${selectedLocation.floor}`}
                  </div>
                </div>
              </div>

              {selectedLocation.accessibleTo && (
                <div
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{
                    backgroundColor: theme.colors.warning.main + '10',
                    border: `1px solid ${theme.colors.warning.main}30`,
                  }}
                >
                  <Sparkles
                    className="w-5 h-5"
                    style={{ color: theme.colors.warning.main }}
                  />
                  <div>
                    <div className="text-xs" style={{ color: theme.colors.text.secondary }}>
                      {t("services.location.access")}
                    </div>
                    <div
                      className="font-semibold"
                      style={{
                        fontSize: theme.typography.base.fontSize,
                        color: theme.colors.text.primary,
                      }}
                    >
                      {t("services.location.businessOnly")}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
