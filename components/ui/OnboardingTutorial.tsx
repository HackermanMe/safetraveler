"use client";

import { useEffect, useState } from "react";
import { X, Smartphone, Home, Share, MoreVertical, Download } from "lucide-react";
import { theme } from "@/lib/config/theme";

interface OnboardingStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  platform?: "android" | "ios" | "desktop";
}

interface OnboardingTutorialProps {
  show: boolean;
  onComplete: () => void;
}

export default function OnboardingTutorial({ show, onComplete }: OnboardingTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [platform, setPlatform] = useState<"android" | "ios" | "desktop">("android");
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Check if app is already installed (standalone mode)
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone) {
      // App is already installed, don't show onboarding
      onComplete();
      return;
    }

    // Detect platform
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !/chrome|crios|fxios/.test(userAgent);

    if (isIOS) {
      // On iOS, check if using Safari (required for PWA installation)
      if (!isSafari) {
        // Not in Safari, can't install PWA
        setPlatform("ios");
      } else {
        setPlatform("ios");
      }
    } else if (isAndroid) {
      setPlatform("android");
    } else {
      setPlatform("desktop");
    }

    // Listen for beforeinstallprompt event (Android/Desktop Chrome/Edge)
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      console.log("beforeinstallprompt event captured");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Listen for successful installation
    window.addEventListener("appinstalled", () => {
      console.log("PWA was installed");
      onComplete();
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, [onComplete]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setDeferredPrompt(null);

      if (outcome === "accepted") {
        onComplete();
      }
    }
  };

  const steps: OnboardingStep[] = platform === "ios"
    ? [
        {
          title: "Bienvenue sur SafeTraveler",
          description: "Installez l'application sur votre écran d'accueil pour un accès rapide et un fonctionnement hors ligne.",
          icon: <Home size={48} style={{ color: theme.colors.accent.main }} />,
        },
        {
          title: "1. Appuyez sur Partager",
          description: "Appuyez sur l'icône de partage (🔼) en bas de Safari",
          icon: <Share size={48} style={{ color: theme.colors.accent.main }} />,
          platform: "ios",
        },
        {
          title: "2. Sur l'écran d'accueil",
          description: "Faites défiler vers le bas et sélectionnez 'Sur l'écran d'accueil'",
          icon: <Home size={48} style={{ color: theme.colors.accent.main }} />,
          platform: "ios",
        },
        {
          title: "3. Confirmez l'installation",
          description: "Appuyez sur 'Ajouter' en haut à droite pour terminer l'installation",
          icon: <Download size={48} style={{ color: theme.colors.success.main }} />,
          platform: "ios",
        },
      ]
    : [
        {
          title: "Bienvenue sur SafeTraveler",
          description: "Installez l'application pour une expérience optimale, fonctionnement hors ligne et accès instantané.",
          icon: <Smartphone size={48} style={{ color: theme.colors.accent.main }} />,
        },
        {
          title: "Installer l'application",
          description: platform === "android"
            ? deferredPrompt
              ? "Appuyez sur le bouton ci-dessous pour installer SafeTraveler sur votre appareil en un clic."
              : "Pour installer l'application, utilisez le menu de votre navigateur (⋮) puis 'Installer l'application' ou 'Ajouter à l'écran d'accueil'."
            : "Cliquez sur l'icône d'installation dans la barre d'adresse de votre navigateur.",
          icon: <Download size={48} style={{ color: theme.colors.accent.main }} />,
          platform: "android",
        },
        {
          title: "Prêt à décoller !",
          description: "Une fois installée, SafeTraveler sera accessible depuis votre écran d'accueil comme une application native, même hors ligne.",
          icon: <Home size={48} style={{ color: theme.colors.success.main }} />,
        },
      ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  if (!show) return null;

  const currentStepData = steps[currentStep];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
        style={{
          backgroundColor: theme.colors.background.elevated,
        }}
      >
        {/* Close button */}
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 p-2 rounded-full transition-colors"
          style={{
            color: theme.colors.gray[500],
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.gray[100];
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
          aria-label="Fermer"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Icon */}
          <div
            className="rounded-full p-6"
            style={{
              backgroundColor: theme.colors.accent.main + "15", // 15 is opacity
            }}
          >
            {currentStepData.icon}
          </div>

          {/* Title */}
          <h2
            className="font-bold"
            style={{
              fontSize: theme.typography.h4.fontSize,
              fontWeight: theme.typography.h4.fontWeight,
              lineHeight: theme.typography.h4.lineHeight,
              color: theme.colors.text.primary,
            }}
          >
            {currentStepData.title}
          </h2>

          {/* Description */}
          <p
            className="max-w-sm"
            style={{
              fontSize: theme.typography.base.fontSize,
              lineHeight: theme.typography.base.lineHeight,
              color: theme.colors.text.secondary,
            }}
          >
            {currentStepData.description}
          </p>

          {/* Install button for Android (if available) */}
          {platform === "android" && currentStep === 1 && deferredPrompt && (
            <button
              onClick={handleInstallClick}
              className="w-full py-4 px-6 rounded-lg font-medium transition-all"
              style={{
                backgroundColor: theme.colors.accent.main,
                color: theme.colors.accent.contrast,
                fontSize: theme.typography.button.fontSize,
                fontWeight: theme.typography.button.fontWeight,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.accent.dark;
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = theme.shadow.md;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.accent.main;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Download className="inline mr-2" size={20} />
              Installer maintenant
            </button>
          )}

          {/* Progress dots */}
          <div className="flex gap-2 pt-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className="h-2 rounded-full transition-all"
                style={{
                  width: index === currentStep ? "32px" : "8px",
                  backgroundColor:
                    index === currentStep
                      ? theme.colors.accent.main
                      : theme.colors.gray[300],
                }}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-4 w-full pt-4">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex-1 py-3 px-6 rounded-lg font-medium transition-colors"
                style={{
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
            )}
            <button
              onClick={handleNext}
              className="flex-1 py-3 px-6 rounded-lg font-medium transition-all"
              style={{
                backgroundColor: theme.colors.accent.main,
                color: theme.colors.accent.contrast,
                fontSize: theme.typography.button.fontSize,
                fontWeight: theme.typography.button.fontWeight,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.accent.dark;
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = theme.shadow.md;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.accent.main;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {currentStep === steps.length - 1 ? "Terminer" : "Suivant"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
