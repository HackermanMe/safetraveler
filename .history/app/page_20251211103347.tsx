"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";
import { usePassenger } from "@/lib/context/PassengerContext";
import { getApplicableSteps, PassengerClass } from "@/lib/types/passenger";
import { passengerClassColors } from "@/lib/config/theme";
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
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {t('journey.title')}
              </h2>

              <div className="relative">
                {/* Vertical Timeline Line */}
                <div
                  className="absolute left-6 top-0 bottom-0 w-0.5"
                  style={{
                    backgroundColor: theme.colors.gray[200],
                  }}
                />

                <div className="space-y-8">
                  {steps.map((step, index) => {
                    const isCompleted = index < currentStepIndex;
                    const isCurrent = index === currentStepIndex;
                    const isPending = index > currentStepIndex;
                    const classColor = passengerClassColors[profile.class];
                    const isLast = index === steps.length - 1;

                    return (
                      <div key={step.id} className="relative flex items-start gap-6">
                        {/* Timeline Node */}
                        <div className="relative z-10 flex-shrink-0">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all ${
                              isCompleted
                                ? "bg-green-500 border-green-500"
                                : isCurrent
                                ? `bg-white border-4`
                                : "bg-white border-gray-300"
                            }`}
                            style={{
                              borderColor: isCurrent ? classColor.primary : undefined,
                              boxShadow: isCurrent ? `0 0 0 4px ${classColor.primary}20` : undefined,
                            }}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-6 h-6 text-white" />
                            ) : (
                              <span
                                className={`font-bold ${
                                  isCurrent ? "text-lg" : "text-base"
                                }`}
                                style={{
                                  color: isCurrent ? classColor.primary : theme.colors.gray[400],
                                }}
                              >
                                {index + 1}
                              </span>
                            )}
                          </div>
                          {/* Connection Line */}
                          {!isLast && (
                            <div
                              className={`absolute left-1/2 top-12 w-0.5 h-8 -translate-x-1/2 ${
                                isCompleted ? "bg-green-500" : "bg-gray-200"
                              }`}
                            />
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 pt-1">
                          <div
                            className={`rounded-xl p-5 transition-all ${
                              isCurrent
                                ? "shadow-lg border-2"
                                : isCompleted
                                ? "bg-green-50 border border-green-200"
                                : "bg-gray-50 border border-gray-200"
                            }`}
                            style={{
                              borderColor: isCurrent ? classColor.primary : undefined,
                              backgroundColor: isCurrent ? classColor.background || `${classColor.primary}10` : undefined,
                            }}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h3
                                  className={`font-bold mb-1 ${
                                    isCurrent ? "text-lg" : "text-base"
                                  }`}
                                  style={{
                                    color: isCurrent ? classColor.primary : theme.colors.text.primary,
                                  }}
                                >
                                  {t(`home.journey.steps.${step.id}.title`)}
                                </h3>
                                <p
                                  className="text-sm mb-2"
                                  style={{
                                    color: isCurrent ? theme.colors.text.primary : theme.colors.text.secondary,
                                  }}
                                >
                                  {t(`home.journey.steps.${step.id}.description`)}
                                </p>
                              </div>
                              {step.estimatedTime > 0 && (
                                <div
                                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg flex-shrink-0"
                                  style={{
                                    backgroundColor: isCurrent
                                      ? `${classColor.primary}15`
                                      : theme.colors.gray[100],
                                  }}
                                >
                                  <Clock
                                    className="w-4 h-4"
                                    style={{
                                      color: isCurrent ? classColor.primary : theme.colors.gray[600],
                                    }}
                                  />
                                  <span
                                    className="text-xs font-semibold"
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
                              <ul className="mt-3 space-y-2 pt-3 border-t"
                                style={{ borderColor: `${classColor.primary}30` }}
                              >
                                {step.details.map((_, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <span
                                      className="mt-0.5"
                                      style={{ color: classColor.primary }}
                                    >
                                      •
                                    </span>
                                    <span style={{ color: theme.colors.text.secondary }}>
                                      {t(`home.journey.steps.${step.id}.details.${idx}`)}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* Action Button */}
                            {isCurrent && (
                              <Link
                                href="/navigation"
                                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg font-medium text-sm transition-all hover:shadow-md"
                                style={{
                                  backgroundColor: classColor.primary,
                                  color: classColor.contrast || "#fff",
                                }}
                              >
                                <MapPin className="w-4 h-4" />
                                <span>{t('journey.viewMap')}</span>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
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
