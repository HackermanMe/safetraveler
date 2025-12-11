"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Clock,
  Building2,
  Luggage,
  Shield,
  Crown,
  Plane,
  Star,
} from "lucide-react";
import { usePassenger } from "@/lib/context/PassengerContext";
import { getApplicableSteps, PassengerClass } from "@/lib/types/passenger";
import { passengerClassColors, theme } from "@/lib/config/theme";
import ClassSelectorModal from "@/components/ui/ClassSelectorModal";
import HeroCarousel from "@/components/home/HeroCarousel";
import { useLocale } from "@/lib/context/LocaleContext";

export default function Home() {
  const router = useRouter();
  const { profile, setProfile } = usePassenger();
  const [showModal, setShowModal] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    // Show modal on first load if no profile
    if (!profile) {
      setShowModal(true);
    }
  }, [profile]);

  const handleClassSelect = (
    selectedClass: PassengerClass,
    flightNumber?: string,
    gate?: string
  ) => {
    setProfile({
      class: selectedClass,
      flightNumber,
      gate,
      terminal: "1",
    });
    setShowModal(false);
  };

  const steps = profile ? getApplicableSteps(profile.class) : [];
  const currentStepIndex = profile?.currentStep || 0;

  // Icon mapping for steps
  const getStepIcon = (iconName: string) => {
    const iconMap: Record<string, typeof Building2> = {
      building: Building2,
      luggage: Luggage,
      shield: Shield,
      crown: Crown,
      plane: Plane,
      star: Star,
    };
    return iconMap[iconName] || Building2;
  };

  return (
    <>
      <ClassSelectorModal
        isOpen={showModal}
        onClose={() => {}}
        onSelect={handleClassSelect}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
          {/* Hero Carousel */}
          <div className="mb-6 md:mb-12">
            <HeroCarousel />
          </div>

          {profile && (
          <>
            {/* Roadmap */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 mb-8 overflow-hidden">
              <div className="relative">
                {/* Vertical Timeline Line with Gradient */}
                <div className="absolute left-8 md:left-10 top-0 bottom-0 w-1">
                  <div
                    className="absolute top-0 left-0 w-full transition-all duration-500"
                    style={{
                      height: `${(currentStepIndex / steps.length) * 100}%`,
                      background: `linear-gradient(to bottom, ${theme.colors.success.main}, ${passengerClassColors[profile.class].primary})`,
                    }}
                  />
                  <div
                    className="absolute top-0 left-0 w-full"
                    style={{
                      height: `${((steps.length - currentStepIndex) / steps.length) * 100}%`,
                      top: `${(currentStepIndex / steps.length) * 100}%`,
                      backgroundColor: theme.colors.gray[200],
                    }}
                  />
                </div>

                <div className="space-y-6 md:space-y-8">
                  {steps.map((step, index) => {
                    const isCompleted = index < currentStepIndex;
                    const isCurrent = index === currentStepIndex;
                    const isPending = index > currentStepIndex;
                    const classColor = passengerClassColors[profile.class];
                    const isLast = index === steps.length - 1;
                    const StepIcon = getStepIcon(step.icon);

                    return (
                      <div key={step.id} className="relative flex items-start gap-4 md:gap-6 group">
                        {/* Timeline Node */}
                        <div className="relative z-10 flex-shrink-0">
                          <div
                            className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 transform ${
                              isCompleted
                                ? "bg-green-500 shadow-lg shadow-green-500/30 scale-100"
                                : isCurrent
                                ? "bg-white shadow-xl scale-110"
                                : "bg-white border-2 border-gray-200 scale-100 group-hover:scale-105"
                            }`}
                            style={{
                              borderColor: isCurrent ? classColor.primary : undefined,
                              borderWidth: isCurrent ? "3px" : undefined,
                              boxShadow: isCurrent
                                ? `0 10px 25px -5px ${classColor.primary}40, 0 0 0 3px ${classColor.primary}20`
                                : undefined,
                            }}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                            ) : (
                              <StepIcon
                                className={`w-7 h-7 md:w-9 md:h-9 transition-colors ${
                                  isCurrent ? "" : "opacity-60"
                                }`}
                                style={{
                                  color: isCurrent ? classColor.primary : theme.colors.gray[400],
                                }}
                              />
                            )}
                          </div>
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 pt-2">
                          <div
                            className={`rounded-2xl p-5 md:p-6 transition-all duration-300 ${
                              isCurrent
                                ? "shadow-xl border-2 transform scale-[1.02]"
                                : isCompleted
                                ? "bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 hover:shadow-md"
                                : "bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-md hover:border-gray-300"
                            }`}
                            style={{
                              borderColor: isCurrent ? classColor.primary : undefined,
                              backgroundColor: isCurrent
                                ? classColor.background || `${classColor.primary}08`
                                : undefined,
                            }}
                          >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3
                                    className={`font-bold ${
                                      isCurrent ? "text-xl md:text-2xl" : "text-lg md:text-xl"
                                    } transition-colors`}
                                    style={{
                                      color: isCurrent ? classColor.primary : theme.colors.text.primary,
                                    }}
                                  >
                                    {t(`home.journey.steps.${step.id}.title`)}
                                  </h3>
                                  {!step.required && (
                                    <span
                                      className="px-2 py-0.5 rounded-full text-xs font-semibold"
                                      style={{
                                        backgroundColor: `${classColor.primary}20`,
                                        color: classColor.primary,
                                      }}
                                    >
                                      Optionnel
                                    </span>
                                  )}
                                </div>
                                <p
                                  className={`text-sm md:text-base mb-3 ${
                                    isCurrent ? "font-medium" : ""
                                  }`}
                                  style={{
                                    color: isCurrent ? theme.colors.text.primary : theme.colors.text.secondary,
                                  }}
                                >
                                  {t(`home.journey.steps.${step.id}.description`)}
                                </p>
                              </div>
                              {step.estimatedTime > 0 && (
                                <div
                                  className="flex items-center gap-2 px-3 py-2 rounded-xl flex-shrink-0 transition-all"
                                  style={{
                                    backgroundColor: isCurrent
                                      ? `${classColor.primary}15`
                                      : theme.colors.gray[100],
                                    border: isCurrent ? `1px solid ${classColor.primary}30` : undefined,
                                  }}
                                >
                                  <Clock
                                    className="w-4 h-4 md:w-5 md:h-5"
                                    style={{
                                      color: isCurrent ? classColor.primary : theme.colors.gray[600],
                                    }}
                                  />
                                  <span
                                    className="text-xs md:text-sm font-bold"
                                    style={{
                                      color: isCurrent ? classColor.primary : theme.colors.text.secondary,
                                    }}
                                  >
                                    {step.estimatedTime} {t('common.minutes')}
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Step Details */}
                            {isCurrent && step.details && (
                              <div
                                className="mt-4 pt-4 border-t space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-300"
                                style={{ borderColor: `${classColor.primary}20` }}
                              >
                                {step.details.map((_, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-3 text-sm md:text-base"
                                  >
                                    <div
                                      className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                      style={{ backgroundColor: classColor.primary }}
                                    />
                                    <span
                                      className="leading-relaxed"
                                      style={{ color: theme.colors.text.secondary }}
                                    >
                                      {t(`home.journey.steps.${step.id}.details.${idx}`)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}

        </div>
      </div>
    </>
  );
}
