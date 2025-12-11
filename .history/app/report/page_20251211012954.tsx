"use client";

import { useState, useRef, useEffect } from "react";
import { Camera, Send, CheckCircle2, AlertTriangle, MapPin, ChevronDown } from "lucide-react";
import { useLocale } from "@/lib/context/LocaleContext";
import { theme } from "@/lib/config/theme";
import { Location } from "@/lib/types";
import airportData from "@/lib/data/airport-data.json";

export default function ReportPage() {
  const { t } = useLocale();
  const [problemType, setProblemType] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLocations(airportData.locations as Location[]);
  }, []);

  const problemTypes = [
    { 
      value: "security", 
      labelKey: "report.categories.security",
      color: theme.colors.error.main, // Rouge pour sécurité
      lightColor: theme.colors.error.light,
      darkColor: theme.colors.error.dark,
    },
    { 
      value: "cleanliness", 
      labelKey: "report.categories.cleanliness",
      color: theme.colors.success.main, // Vert pour propreté
      lightColor: theme.colors.success.light,
      darkColor: theme.colors.success.dark,
    },
    { 
      value: "maintenance", 
      labelKey: "report.categories.maintenance",
      color: theme.colors.info.main, // Bleu pour maintenance
      lightColor: theme.colors.info.light,
      darkColor: theme.colors.info.dark,
    },
    { 
      value: "other", 
      labelKey: "report.categories.other",
      color: theme.colors.warning.main, // Jaune/ambre pour autres
      lightColor: theme.colors.warning.light,
      darkColor: theme.colors.warning.dark,
    },
  ];

  // Group locations by type for dropdown (same as navigation page)
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

  const handlePhotoCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!problemType || !location || !description.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In a real app, you would send the data to your API
      // await fetch("/api/reports", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ problemType, location, description, photo }),
      // });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting report:", error);
      // Still show success for demo purposes
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setProblemType("");
    setLocation("");
    setDescription("");
    setPhoto(null);
    setSubmitted(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Success screen
  if (submitted) {
    return (
      <div
        className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4"
        style={{ backgroundColor: theme.colors.background.default }}
      >
        <div className="text-center max-w-md w-full">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              backgroundColor: theme.colors.success.main + "20",
              border: `3px solid ${theme.colors.success.main}`,
            }}
          >
            <CheckCircle2
              className="w-12 h-12"
              style={{ color: theme.colors.success.main }}
            />
          </div>
          <h2
            className="font-bold mb-3"
            style={{
              fontSize: theme.typography.h3.fontSize,
              fontWeight: theme.typography.h3.fontWeight,
              color: theme.colors.text.primary,
            }}
          >
            {t("report.success.title")}
          </h2>
          <p
            className="mb-8"
            style={{
              fontSize: theme.typography.base.fontSize,
              color: theme.colors.text.secondary,
              lineHeight: theme.typography.base.lineHeight,
            }}
          >
            {t("report.success.description")}
          </p>
          <button
            onClick={resetForm}
            className="rounded-lg font-medium transition-all px-8 py-3"
            style={{
              backgroundColor: theme.colors.accent.main,
              color: theme.colors.accent.contrast,
              fontSize: theme.typography.button.fontSize,
              fontWeight: theme.typography.button.fontWeight,
              boxShadow: theme.shadow.sm,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.accent.dark;
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = theme.shadow.md;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.accent.main;
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = theme.shadow.sm;
            }}
          >
            {t("common.close")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-[calc(100vh-64px)] pb-8"
      style={{ backgroundColor: theme.colors.background.default }}
    >
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="font-bold mb-2"
            style={{
              fontSize: theme.typography.display.fontSize,
              fontWeight: theme.typography.display.fontWeight,
              lineHeight: theme.typography.display.lineHeight,
              color: theme.colors.text.primary,
            }}
          >
            {t("report.title")}
          </h1>
          <p
            style={{
              fontSize: theme.typography.large.fontSize,
              lineHeight: theme.typography.large.lineHeight,
              color: theme.colors.text.secondary,
            }}
          >
            {t("report.subtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Problem Type Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <label
              className="block font-medium mb-4"
              style={{
                fontSize: theme.typography.base.fontSize,
                color: theme.colors.text.primary,
              }}
            >
              {t("report.typeLabel")}
            </label>
            <div className="grid grid-cols-2 gap-3">
              {problemTypes.map((type) => {
                const isSelected = problemType === type.value;
                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setProblemType(type.value)}
                    className="p-4 rounded-lg border-2 transition-all text-center flex items-center justify-center"
                    style={{
                      borderColor: isSelected
                        ? type.color
                        : theme.colors.border.main,
                      backgroundColor: isSelected
                        ? type.color + "20"
                        : "#ffffff",
                      boxShadow: isSelected ? theme.shadow.sm : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = type.color + "80"; // 50% opacity
                        e.currentTarget.style.backgroundColor = type.color + "10"; // 10% opacity
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = theme.colors.border.main;
                        e.currentTarget.style.backgroundColor = "#ffffff";
                      }
                    }}
                  >
                    <span
                      className="font-medium"
                      style={{
                        fontSize: theme.typography.base.fontSize,
                        color: isSelected
                          ? type.darkColor
                          : theme.colors.text.primary,
                      }}
                    >
                      {t(type.labelKey)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Location Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <label
              className="block font-medium mb-3 flex items-center gap-2"
              style={{
                fontSize: theme.typography.base.fontSize,
                color: theme.colors.text.primary,
              }}
            >
              <MapPin className="w-5 h-5" style={{ color: theme.colors.accent.main }} />
              {t("report.locationLabel")}
            </label>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full appearance-none rounded-lg focus:outline-none transition-all p-3 pr-10"
                style={{
                  border: `1px solid ${theme.colors.border.main}`,
                  fontSize: theme.typography.base.fontSize,
                  color: theme.colors.text.primary,
                  backgroundColor: theme.colors.background.default,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.accent.main;
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.accent.main}20`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.main;
                  e.currentTarget.style.boxShadow = "none";
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

          {/* Description Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <label
              className="block font-medium mb-3"
              style={{
                fontSize: theme.typography.base.fontSize,
                color: theme.colors.text.primary,
              }}
            >
              {t("report.descriptionLabel")}
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder={t("report.descriptionPlaceholder")}
              className="w-full rounded-lg focus:outline-none transition-all resize-none p-3"
              style={{
                border: `1px solid ${theme.colors.border.main}`,
                fontSize: theme.typography.base.fontSize,
                color: theme.colors.text.primary,
                backgroundColor: theme.colors.background.default,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = theme.colors.accent.main;
                e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.accent.main}20`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = theme.colors.border.main;
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Photo Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <label
              className="block font-medium mb-3"
              style={{
                fontSize: theme.typography.base.fontSize,
                color: theme.colors.text.primary,
              }}
            >
              {t("report.photoLabel")}
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handlePhotoCapture}
              className="hidden"
            />
            {photo ? (
              <div className="relative">
                <img
                  src={photo}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPhoto(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  }}
                  className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full p-8 border-2 border-dashed rounded-lg transition-all flex flex-col items-center gap-3 hover:border-blue-600 hover:bg-blue-50"
                style={{
                  borderColor: theme.colors.border.main,
                  backgroundColor: theme.colors.background.default,
                }}
              >
                <Camera
                  className="w-10 h-10"
                  style={{ color: theme.colors.gray[400] }}
                />
                <span
                  style={{
                    fontSize: theme.typography.base.fontSize,
                    color: theme.colors.text.secondary,
                  }}
                >
                  {t("report.photoButton")}
                </span>
              </button>
            )}
          </div>

          {/* Anonymity Notice */}
          <div
            className="rounded-lg p-4 flex items-start gap-3"
            style={{
              backgroundColor: theme.colors.info.main + "10",
              border: `1px solid ${theme.colors.info.main}30`,
            }}
          >
            <AlertTriangle
              className="w-5 h-5 flex-shrink-0 mt-0.5"
              style={{ color: theme.colors.info.main }}
            />
            <p
              style={{
                fontSize: theme.typography.small.fontSize,
                color: theme.colors.text.secondary,
                lineHeight: theme.typography.small.lineHeight,
              }}
            >
              {t("report.anonymousNotice")}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!problemType || !location || !description.trim() || isSubmitting}
            className="w-full rounded-lg font-medium transition-all flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: problemType && location && description.trim() && !isSubmitting
                ? theme.colors.gray[700]
                : theme.colors.gray[300],
              color: problemType && location && description.trim() && !isSubmitting
                ? "white"
                : theme.colors.gray[500],
              fontSize: theme.typography.button.fontSize,
              fontWeight: theme.typography.button.fontWeight,
              boxShadow: problemType && location && description.trim() && !isSubmitting
                ? theme.shadow.sm
                : "none",
            }}
            onMouseEnter={(e) => {
              if (problemType && location && description.trim() && !isSubmitting) {
                e.currentTarget.style.backgroundColor = theme.colors.gray[800];
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = theme.shadow.md;
              }
            }}
            onMouseLeave={(e) => {
              if (problemType && location && description.trim() && !isSubmitting) {
                e.currentTarget.style.backgroundColor = theme.colors.gray[700];
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = theme.shadow.sm;
              }
            }}
          >
            {isSubmitting ? (
              <>
                <div
                  className="w-5 h-5 border-2 rounded-full animate-spin"
                  style={{
                    borderColor: "white",
                    borderTopColor: "transparent",
                  }}
                />
                <span>{t("common.loading")}</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>{t("report.submit")}</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
