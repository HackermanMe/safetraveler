"use client";

import { useState, useRef } from "react";
import { Camera, Send, CheckCircle2, AlertTriangle } from "lucide-react";

const reportTypes = [
  { value: "security", label: "Sécurité", color: "red" },
  { value: "cleanliness", label: "Propreté", color: "orange" },
  { value: "maintenance", label: "Maintenance", color: "yellow" },
  { value: "other", label: "Autre", color: "gray" },
];

export default function ReportPage() {
  const [reportType, setReportType] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
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

    if (!reportType || !description) {
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
          location: "Non spécifiée",
          description,
          photo,
          severity: reportType === "security" ? "high" : "medium",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setReportType("");
          setDescription("");
          setPhoto(null);
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting report:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-normal text-gray-900 mb-3">
            Signalement envoyé
          </h2>
          <p className="text-gray-600">
            Merci pour votre contribution. Votre signalement a été transmis au personnel de l'aéroport.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-3">
            Signaler un problème
          </h1>
          <p className="text-gray-600">
            Signalez anonymement tout problème rencontré dans l'aéroport
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Report Type */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Type de problème
            </label>
            <div className="grid grid-cols-2 gap-3">
              {reportTypes.map((type) => {
                const isSelected = reportType === type.value;
                const colors = {
                  red: { bg: "bg-red-50", border: "border-red-600", text: "text-red-900" },
                  orange: { bg: "bg-orange-50", border: "border-orange-600", text: "text-orange-900" },
                  yellow: { bg: "bg-yellow-50", border: "border-yellow-600", text: "text-yellow-900" },
                  gray: { bg: "bg-gray-50", border: "border-gray-600", text: "text-gray-900" },
                };
                const colorSet = colors[type.color as keyof typeof colors];

                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setReportType(type.value)}
                    className={`p-4 rounded-lg border-2 text-center font-medium transition-all ${
                      isSelected
                        ? `${colorSet.bg} ${colorSet.border} ${colorSet.text}`
                        : "border-gray-200 hover:border-gray-300 text-gray-700"
                    }`}
                  >
                    {type.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="Décrivez le problème rencontré..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
            />
          </div>

          {/* Photo */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
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
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setPhoto(null)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-600 transition-colors flex flex-col items-center gap-3"
              >
                <Camera className="w-10 h-10 text-gray-400" />
                <span className="text-sm text-gray-600">
                  Appuyez pour prendre une photo
                </span>
              </button>
            )}
          </div>

          {/* Privacy Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900 flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                Votre signalement est entièrement anonyme. Aucune donnée personnelle n'est collectée.
              </span>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!reportType || !description || isSubmitting}
            className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-sm flex items-center justify-center gap-2"
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
    </div>
  );
}
