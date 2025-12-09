"use client";

import { useState, useEffect } from "react";
import { Info, X } from "lucide-react";
import { theme } from "@/lib/config/theme";

export default function DemoModeBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the banner
    const dismissed = localStorage.getItem("demo-banner-dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("demo-banner-dismissed", "true");
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-20 md:bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 rounded-xl p-4 shadow-lg backdrop-blur-sm animate-slide-up"
      style={{
        backgroundColor: "rgba(245, 158, 11, 0.95)",
        border: `1px solid ${theme.colors.warning.dark}`,
      }}
    >
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#fff" }} />
        <div className="flex-1">
          <h3 className="font-bold text-sm mb-1" style={{ color: "#fff" }}>
            Version Démonstration
          </h3>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.95)", lineHeight: 1.5 }}>
            Ceci est une démonstration pour le concours scolaire. Les données sont simulées ou agrégées depuis des sources publiques.
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="p-1 rounded-full transition-all flex-shrink-0"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
          }}
          aria-label="Fermer"
        >
          <X className="w-4 h-4" style={{ color: "#fff" }} />
        </button>
      </div>
    </div>
  );
}
