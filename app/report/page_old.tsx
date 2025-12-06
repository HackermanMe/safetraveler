"use client";

import { useState, useRef } from "react";
import { AlertCircle, Camera, Send, CheckCircle } from "lucide-react";

const reportTypes = [
  { value: "security", label: "Sécurité / Objet suspect", icon: "🚨" },
  { value: "cleanliness", label: "Propreté", icon: "🧹" },
  { value: "maintenance", label: "Maintenance / Équipement", icon: "🔧" },
  { value: "crowding", label: "Flux / Affluence", icon: "👥" },
  { value: "accessibility", label: "Accessibilité", icon: "♿" },
  { value: "suspicious", label: "Comportement suspect", icon: "👁️" },
  { value: "lost_item", label: "Objet trouvé", icon: "🎒" },
  { value: "other", label: "Autre", icon: "📝" },
];

export default function ReportPage() {
  const [reportType, setReportType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [severity, setSeverity] = useState("medium");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!reportType || !location || !description) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: reportType,
          location,
          description,
          photo,
          severity,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          // Reset form
          setReportType("");
          setLocation("");
          setDescription("");
          setPhoto(null);
          setSeverity("medium");
          setSubmitted(false);
        }, 3000);
      } else {
        alert("Erreur lors de l'envoi du signalement");
      }
    } catch (error) {
      console.error("Error submitting report:", error);
      alert("Erreur lors de l'envoi du signalement");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-green-50 p-4">
        <CheckCircle className="w-20 h-20 text-green-600 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Signalement envoyé !
        </h2>
        <p className="text-gray-600 text-center">
          Merci pour votre contribution à la sécurité et au confort de tous.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white border-b border-gray-200 p-4 safe-area-top sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-red-600" />
          Signaler un problème
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Anonyme et confidentiel
        </p>
      </header>

      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        {/* Report Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type de signalement <span className="text-red-600">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {reportTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => setReportType(type.value)}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  reportType === type.value
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{type.icon}</span>
                  <span className="text-sm font-medium">{type.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Severity */}
        {(reportType === "security" || reportType === "suspicious") && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Niveau de gravité
            </label>
            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Faible</option>
              <option value="medium">Moyen</option>
              <option value="high">Élevé</option>
              <option value="critical">Critique</option>
            </select>
          </div>
        )}

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Localisation <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ex: Porte 3, Zone d'enregistrement A..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description <span className="text-red-600">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Décrivez le problème ou l'incident..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Photo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Photo (optionnelle)
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
                onClick={() => setPhoto(null)}
                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-600 transition-colors flex flex-col items-center gap-2"
            >
              <Camera className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-600">
                Prendre une photo
              </span>
            </button>
          )}
        </div>

        {/* Privacy Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-xs text-blue-900">
            🔒 Votre signalement est totalement anonyme. Aucune information
            personnelle n'est collectée. Les données sont utilisées uniquement
            pour améliorer la sécurité et le confort de l'aéroport.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Envoyer le signalement
            </>
          )}
        </button>
      </form>
    </div>
  );
}
