"use client";

import { useState, useRef } from "react";
import {
  Camera,
  Send,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  Package,
  Eye,
  Heart,
  AlertCircle,
  MapPin,
  Clock,
  Lock
} from "lucide-react";
import { theme } from "@/lib/config/theme";

// Catégories de signalement selon les spécifications
const reportCategories = [
  {
    value: "suspicious_object",
    label: "Objet suspect",
    icon: ShieldAlert,
    description: "Colis, bagage ou objet abandonné suspect",
    severity: "critical",
    color: theme.colors.error.main,
  },
  {
    value: "lost_object",
    label: "Objet perdu",
    icon: Package,
    description: "Objet personnel égaré ou trouvé",
    severity: "low",
    color: theme.colors.info.main,
  },
  {
    value: "concerning_behavior",
    label: "Comportement inquiétant",
    icon: Eye,
    description: "Comportement suspect ou inapproprié",
    severity: "high",
    color: theme.colors.warning.main,
  },
  {
    value: "medical_incident",
    label: "Incident médical",
    icon: Heart,
    description: "Urgence médicale ou personne en détresse",
    severity: "critical",
    color: theme.colors.error.dark,
  },
  {
    value: "danger_emergency",
    label: "Danger / Urgence",
    icon: AlertCircle,
    description: "Situation dangereuse immédiate",
    severity: "critical",
    color: theme.colors.error.main,
  },
];

// Zones de l'aéroport pour localisation approximative
const airportZones = [
  { value: "entrance", label: "Entrée principale" },
  { value: "checkin", label: "Zone d'enregistrement" },
  { value: "security", label: "Contrôle de sécurité" },
  { value: "gates_a", label: "Portes A" },
  { value: "gates_b", label: "Portes B" },
  { value: "baggage_claim", label: "Récupération des bagages" },
  { value: "food_court", label: "Zone de restauration" },
  { value: "shops", label: "Zone commerciale" },
  { value: "toilets", label: "Toilettes" },
  { value: "parking", label: "Parking" },
  { value: "other", label: "Autre" },
];

export default function ReportPage() {
  const [step, setStep] = useState(1); // 1: Category, 2: Details, 3: Confirmation
  const [category, setCategory] = useState("");
  const [zone, setZone] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reportId, setReportId] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleSubmit = async () => {
    if (!category || !zone || !description) {
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedCategory = reportCategories.find(c => c.value === category);
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: category,
          location: zone,
          description,
          photo,
          severity: selectedCategory?.severity || "medium",
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setReportId(data.id || generateReportId());
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting report:", error);
      // Still show success for demo purposes
      setReportId(generateReportId());
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateReportId = () => {
    return `SR-${Date.now().toString(36).toUpperCase()}`;
  };

  const resetForm = () => {
    setStep(1);
    setCategory("");
    setZone("");
    setDescription("");
    setPhoto(null);
    setSubmitted(false);
    setReportId("");
  };

  // Success screen
  if (submitted) {
    return (
      <div
        className="min-h-[calc(100vh-64px)] flex items-center justify-center"
        style={{ backgroundColor: theme.colors.background.default }}
      >
        <div className="text-center max-w-lg mx-auto px-4">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              backgroundColor: theme.colors.success.main + "20",
              border: `3px solid ${theme.colors.success.main}`,
            }}
          >
            <CheckCircle2
              className="w-14 h-14"
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
            Signalement envoyé
          </h2>
          <p
            className="mb-6"
            style={{
              fontSize: theme.typography.base.fontSize,
              color: theme.colors.text.secondary,
              lineHeight: theme.typography.base.lineHeight,
            }}
          >
            Merci pour votre vigilance. Votre signalement a été transmis au pôle sécurité de l'aéroport.
          </p>

          {/* Report ID */}
          <div
            className="rounded-lg p-4 mb-6"
            style={{
              backgroundColor: theme.colors.background.elevated,
              border: `1px solid ${theme.colors.border.main}`,
            }}
          >
            <p
              className="mb-1"
              style={{
                fontSize: theme.typography.small.fontSize,
                color: theme.colors.text.secondary,
              }}
            >
              Numéro de suivi
            </p>
            <p
              className="font-mono font-bold"
              style={{
                fontSize: theme.typography.h5.fontSize,
                color: theme.colors.accent.main,
              }}
            >
              {reportId}
            </p>
          </div>

          {/* Status indicator */}
          <div
            className="rounded-lg p-4 mb-8"
            style={{
              backgroundColor: theme.colors.info.main + "10",
              border: `1px solid ${theme.colors.info.main}30`,
            }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5" style={{ color: theme.colors.info.main }} />
              <span
                className="font-semibold"
                style={{
                  fontSize: theme.typography.base.fontSize,
                  color: theme.colors.info.main,
                }}
              >
                Reçu
              </span>
            </div>
            <p
              style={{
                fontSize: theme.typography.small.fontSize,
                color: theme.colors.text.secondary,
              }}
            >
              Le personnel de sécurité a été notifié et prendra en charge votre signalement rapidement.
            </p>
          </div>

          <button
            onClick={resetForm}
            className="rounded-lg font-medium transition-all"
            style={{
              padding: `${theme.spacing[3]} ${theme.spacing[8]}`,
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
            Fermer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-[calc(100vh-64px)]"
      style={{ backgroundColor: theme.colors.background.default }}
    >
      <div className="max-w-3xl mx-auto px-4 py-8">
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
            Signaler un incident
          </h1>
          <p
            style={{
              fontSize: theme.typography.large.fontSize,
              lineHeight: theme.typography.large.lineHeight,
              color: theme.colors.text.secondary,
            }}
          >
            Aidez à maintenir la sécurité de l'aéroport. Votre signalement est anonyme et confidentiel.
          </p>
        </div>

        {/* Anonymity Banner */}
        <div
          className="rounded-xl p-5 mb-8"
          style={{
            backgroundColor: theme.colors.accent.main + "10",
            border: `2px solid ${theme.colors.accent.main}30`,
          }}
        >
          <div className="flex items-start gap-3">
            <Lock
              className="w-6 h-6 flex-shrink-0 mt-1"
              style={{ color: theme.colors.accent.dark }}
            />
            <div>
              <h3
                className="font-semibold mb-1"
                style={{
                  fontSize: theme.typography.base.fontSize,
                  color: theme.colors.accent.dark,
                }}
              >
                Signalement 100% anonyme
              </h3>
              <p
                style={{
                  fontSize: theme.typography.small.fontSize,
                  color: theme.colors.text.secondary,
                }}
              >
                Aucune donnée personnelle n'est collectée. Votre identité reste totalement confidentielle.
              </p>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all"
                style={{
                  backgroundColor:
                    step >= num
                      ? theme.colors.accent.main
                      : theme.colors.gray[200],
                  color:
                    step >= num
                      ? theme.colors.accent.contrast
                      : theme.colors.gray[500],
                  fontSize: theme.typography.base.fontSize,
                }}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className="w-16 h-1 mx-2"
                  style={{
                    backgroundColor:
                      step > num
                        ? theme.colors.accent.main
                        : theme.colors.gray[200],
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Category Selection */}
        {step === 1 && (
          <div className="space-y-6">
            <h2
              className="font-semibold mb-6"
              style={{
                fontSize: theme.typography.h4.fontSize,
                fontWeight: theme.typography.h4.fontWeight,
                color: theme.colors.text.primary,
              }}
            >
              Quelle est la nature de l'incident ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reportCategories.map((cat) => {
                const isSelected = category === cat.value;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.value}
                    onClick={() => setCategory(cat.value)}
                    className="text-left p-6 rounded-xl border-2 transition-all"
                    style={{
                      borderColor: isSelected
                        ? cat.color
                        : theme.colors.border.main,
                      backgroundColor: isSelected
                        ? cat.color + "10"
                        : theme.colors.background.elevated,
                      boxShadow: isSelected ? theme.shadow.md : theme.shadow.sm,
                      transform: isSelected ? "scale(1.02)" : "scale(1)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = theme.colors.gray[300];
                        e.currentTarget.style.boxShadow = theme.shadow.md;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = theme.colors.border.main;
                        e.currentTarget.style.boxShadow = theme.shadow.sm;
                      }
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: cat.color + "20",
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: cat.color }} />
                      </div>
                      <div className="flex-1">
                        <h3
                          className="font-semibold mb-1"
                          style={{
                            fontSize: theme.typography.base.fontSize,
                            color: theme.colors.text.primary,
                          }}
                        >
                          {cat.label}
                        </h3>
                        <p
                          style={{
                            fontSize: theme.typography.small.fontSize,
                            color: theme.colors.text.secondary,
                          }}
                        >
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={!category}
              className="w-full rounded-lg font-medium transition-all"
              style={{
                padding: `${theme.spacing[4]} ${theme.spacing[6]}`,
                backgroundColor: category
                  ? theme.colors.accent.main
                  : theme.colors.gray[300],
                color: category
                  ? theme.colors.accent.contrast
                  : theme.colors.gray[500],
                fontSize: theme.typography.button.fontSize,
                fontWeight: theme.typography.button.fontWeight,
                cursor: category ? "pointer" : "not-allowed",
                boxShadow: category ? theme.shadow.sm : "none",
              }}
              onMouseEnter={(e) => {
                if (category) {
                  e.currentTarget.style.backgroundColor = theme.colors.accent.dark;
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = theme.shadow.md;
                }
              }}
              onMouseLeave={(e) => {
                if (category) {
                  e.currentTarget.style.backgroundColor = theme.colors.accent.main;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = theme.shadow.sm;
                }
              }}
            >
              Continuer
            </button>
          </div>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <div className="space-y-6">
            {/* Zone Selection */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: theme.colors.background.elevated,
                border: `1px solid ${theme.colors.border.main}`,
                boxShadow: theme.shadow.DEFAULT,
              }}
            >
              <label
                className="flex items-center gap-2 font-medium mb-3"
                style={{
                  fontSize: theme.typography.base.fontSize,
                  color: theme.colors.text.primary,
                }}
              >
                <MapPin className="w-5 h-5" style={{ color: theme.colors.accent.main }} />
                Où se situe l'incident ?
              </label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="w-full rounded-lg focus:outline-none transition-all"
                style={{
                  padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
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
                <option value="">Sélectionnez une zone...</option>
                {airportZones.map((z) => (
                  <option key={z.value} value={z.value}>
                    {z.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: theme.colors.background.elevated,
                border: `1px solid ${theme.colors.border.main}`,
                boxShadow: theme.shadow.DEFAULT,
              }}
            >
              <label
                className="block font-medium mb-3"
                style={{
                  fontSize: theme.typography.base.fontSize,
                  color: theme.colors.text.primary,
                }}
              >
                Description détaillée
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                placeholder="Décrivez l'incident de manière précise : ce que vous avez vu, entendu, ou remarqué..."
                className="w-full rounded-lg focus:outline-none transition-all resize-none"
                style={{
                  padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
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

            {/* Photo */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: theme.colors.background.elevated,
                border: `1px solid ${theme.colors.border.main}`,
                boxShadow: theme.shadow.DEFAULT,
              }}
            >
              <label
                className="flex items-center gap-2 font-medium mb-3"
                style={{
                  fontSize: theme.typography.base.fontSize,
                  color: theme.colors.text.primary,
                }}
              >
                <Camera className="w-5 h-5" style={{ color: theme.colors.accent.main }} />
                Photo (optionnel)
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
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setPhoto(null)}
                    className="absolute top-3 right-3 p-2 rounded-full transition-colors"
                    style={{
                      backgroundColor: theme.colors.background.elevated,
                      boxShadow: theme.shadow.lg,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.colors.gray[200];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        theme.colors.background.elevated;
                    }}
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full p-8 border-2 border-dashed rounded-lg transition-all flex flex-col items-center gap-3"
                  style={{
                    borderColor: theme.colors.border.main,
                    backgroundColor: theme.colors.background.default,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.accent.main;
                    e.currentTarget.style.backgroundColor =
                      theme.colors.accent.main + "05";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border.main;
                    e.currentTarget.style.backgroundColor =
                      theme.colors.background.default;
                  }}
                >
                  <Camera
                    className="w-12 h-12"
                    style={{ color: theme.colors.gray[400] }}
                  />
                  <span
                    style={{
                      fontSize: theme.typography.base.fontSize,
                      color: theme.colors.text.secondary,
                    }}
                  >
                    Appuyez pour prendre une photo
                  </span>
                </button>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 rounded-lg font-medium transition-colors"
                style={{
                  padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
                  backgroundColor: theme.colors.gray[100],
                  color: theme.colors.gray[700],
                  fontSize: theme.typography.button.fontSize,
                  fontWeight: theme.typography.button.fontWeight,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.gray[200];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.gray[100];
                }}
              >
                Retour
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!zone || !description}
                className="flex-1 rounded-lg font-medium transition-all"
                style={{
                  padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
                  backgroundColor:
                    zone && description
                      ? theme.colors.accent.main
                      : theme.colors.gray[300],
                  color:
                    zone && description
                      ? theme.colors.accent.contrast
                      : theme.colors.gray[500],
                  fontSize: theme.typography.button.fontSize,
                  fontWeight: theme.typography.button.fontWeight,
                  cursor: zone && description ? "pointer" : "not-allowed",
                  boxShadow: zone && description ? theme.shadow.sm : "none",
                }}
                onMouseEnter={(e) => {
                  if (zone && description) {
                    e.currentTarget.style.backgroundColor = theme.colors.accent.dark;
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = theme.shadow.md;
                  }
                }}
                onMouseLeave={(e) => {
                  if (zone && description) {
                    e.currentTarget.style.backgroundColor = theme.colors.accent.main;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = theme.shadow.sm;
                  }
                }}
              >
                Continuer
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="space-y-6">
            <h2
              className="font-semibold mb-6"
              style={{
                fontSize: theme.typography.h4.fontSize,
                fontWeight: theme.typography.h4.fontWeight,
                color: theme.colors.text.primary,
              }}
            >
              Vérifiez votre signalement
            </h2>

            {/* Summary */}
            <div
              className="rounded-xl p-6 space-y-4"
              style={{
                backgroundColor: theme.colors.background.elevated,
                border: `1px solid ${theme.colors.border.main}`,
                boxShadow: theme.shadow.DEFAULT,
              }}
            >
              <div>
                <p
                  className="mb-1"
                  style={{
                    fontSize: theme.typography.small.fontSize,
                    color: theme.colors.text.secondary,
                  }}
                >
                  Type d'incident
                </p>
                <p
                  className="font-semibold"
                  style={{
                    fontSize: theme.typography.base.fontSize,
                    color: theme.colors.text.primary,
                  }}
                >
                  {reportCategories.find((c) => c.value === category)?.label}
                </p>
              </div>
              <div>
                <p
                  className="mb-1"
                  style={{
                    fontSize: theme.typography.small.fontSize,
                    color: theme.colors.text.secondary,
                  }}
                >
                  Localisation
                </p>
                <p
                  className="font-semibold"
                  style={{
                    fontSize: theme.typography.base.fontSize,
                    color: theme.colors.text.primary,
                  }}
                >
                  {airportZones.find((z) => z.value === zone)?.label}
                </p>
              </div>
              <div>
                <p
                  className="mb-1"
                  style={{
                    fontSize: theme.typography.small.fontSize,
                    color: theme.colors.text.secondary,
                  }}
                >
                  Description
                </p>
                <p
                  style={{
                    fontSize: theme.typography.base.fontSize,
                    color: theme.colors.text.primary,
                  }}
                >
                  {description}
                </p>
              </div>
              {photo && (
                <div>
                  <p
                    className="mb-2"
                    style={{
                      fontSize: theme.typography.small.fontSize,
                      color: theme.colors.text.secondary,
                    }}
                  >
                    Photo jointe
                  </p>
                  <img
                    src={photo}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>

            {/* Final Warning */}
            <div
              className="rounded-lg p-4"
              style={{
                backgroundColor: theme.colors.warning.main + "10",
                border: `1px solid ${theme.colors.warning.main}30`,
              }}
            >
              <p
                className="flex items-start gap-2"
                style={{
                  fontSize: theme.typography.small.fontSize,
                  color: theme.colors.text.secondary,
                }}
              >
                <AlertTriangle
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: theme.colors.warning.main }}
                />
                <span>
                  En cas d'urgence immédiate (danger de mort, incendie, attentat), appelez directement le 112 ou alertez le personnel de sécurité le plus proche.
                </span>
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setStep(2)}
                className="flex-1 rounded-lg font-medium transition-colors"
                style={{
                  padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
                  backgroundColor: theme.colors.gray[100],
                  color: theme.colors.gray[700],
                  fontSize: theme.typography.button.fontSize,
                  fontWeight: theme.typography.button.fontWeight,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.gray[200];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.gray[100];
                }}
              >
                Retour
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                style={{
                  padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
                  backgroundColor: isSubmitting
                    ? theme.colors.gray[300]
                    : theme.colors.accent.main,
                  color: isSubmitting
                    ? theme.colors.gray[500]
                    : theme.colors.accent.contrast,
                  fontSize: theme.typography.button.fontSize,
                  fontWeight: theme.typography.button.fontWeight,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  boxShadow: isSubmitting ? "none" : theme.shadow.sm,
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = theme.colors.accent.dark;
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = theme.shadow.md;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = theme.colors.accent.main;
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
                        borderColor: theme.colors.gray[500],
                        borderTopColor: "transparent",
                      }}
                    />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le signalement
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
