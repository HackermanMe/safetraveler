"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Clock,
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
            {/* Roadmap - S-shaped Road Style */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-12 mb-8 overflow-hidden">
              <div className="relative" style={{ minHeight: '500px', paddingTop: '40px', paddingBottom: '40px' }}>
                {/* S-shaped Road Path */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  style={{ zIndex: 1, pointerEvents: 'none' }}
                  viewBox="0 0 1000 500"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Road path - S shape with smooth curves */}
                  <path
                    d="M 80 80 Q 250 40, 420 80 T 580 180 Q 650 220, 580 280 T 420 380 Q 250 420, 80 380"
                    stroke={theme.colors.gray[300]}
                    strokeWidth="50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Road center dashed line */}
                  <path
                    d="M 80 80 Q 250 40, 420 80 T 580 180 Q 650 220, 580 280 T 420 380 Q 250 420, 80 380"
                    stroke="#ffffff"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="15,15"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Step Markers positioned along S-curve */}
                <div className="relative w-full h-full" style={{ zIndex: 10 }}>
                  {steps.map((step, index) => {
                    const isCompleted = index < currentStepIndex;
                    const isCurrent = index === currentStepIndex;
                    const classColor = passengerClassColors[profile.class];
                    
                    // Calculate positions along S-curve (4 positions for S shape)
                    const totalSteps = steps.length;
                    const stepProgress = totalSteps > 1 ? index / (totalSteps - 1) : 0;
                    
                    // S-curve positions (matching the SVG path)
                    let leftPercent, topPercent;
                    if (stepProgress <= 0.33) {
                      // First curve (left to top)
                      const t = stepProgress / 0.33;
                      leftPercent = 8 + (42 - 8) * t;
                      topPercent = 16 - 8 * t;
                    } else if (stepProgress <= 0.66) {
                      // Middle curve (top to bottom)
                      const t = (stepProgress - 0.33) / 0.33;
                      leftPercent = 42 + (58 - 42) * t;
                      topPercent = 16 + (56 - 16) * t;
                    } else {
                      // Last curve (bottom to left)
                      const t = (stepProgress - 0.66) / 0.34;
                      leftPercent = 58 - (58 - 8) * t;
                      topPercent = 56 + (76 - 56) * t;
                    }
                    
                    // Marker colors based on step index
                    const markerColors = [
                      '#EC4899', // Pink
                      '#F97316', // Orange
                      '#06B6D4', // Cyan
                      '#3B82F6', // Blue
                      '#8B5CF6', // Purple
                    ];
                    const markerColor = isCompleted 
                      ? theme.colors.success.main 
                      : isCurrent 
                        ? classColor.primary 
                        : markerColors[index % markerColors.length];

                    return (
                      <div
                        key={step.id}
                        className="absolute"
                        style={{
                          left: `${leftPercent}%`,
                          top: `${topPercent}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        {/* Connection line to road */}
                        <div
                          className="absolute left-1/2 -translate-x-1/2 w-0.5"
                          style={{
                            height: '50px',
                            backgroundColor: markerColor,
                            opacity: 0.4,
                            top: 'calc(50% + 32px)',
                          }}
                        />
                        
                        {/* Marker circle */}
                        <div
                          className={`relative w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-xl transition-all duration-300 ${
                            isCurrent ? 'scale-125 ring-4' : 'scale-100'
                          }`}
                          style={{
                            backgroundColor: markerColor,
                            boxShadow: isCurrent 
                              ? `0 0 0 4px ${markerColor}40, 0 10px 25px -5px ${markerColor}50`
                              : `0 4px 12px ${markerColor}30`,
                          }}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-8 h-8 text-white" />
                          ) : (
                            <span>{String(index + 1).padStart(2, '0')}</span>
                          )}
                        </div>

                        {/* Step content card */}
                        <div
                          className={`absolute top-20 left-1/2 -translate-x-1/2 w-64 md:w-72 rounded-xl p-4 shadow-xl transition-all duration-300 ${
                            isCurrent ? 'scale-105 z-20' : 'scale-100 z-10'
                          }`}
                          style={{
                            backgroundColor: isCurrent 
                              ? classColor.background || `${classColor.primary}10`
                              : isCompleted
                                ? '#F0FDF4'
                                : '#ffffff',
                            border: `2px solid ${isCurrent ? classColor.primary : markerColor}40`,
                            minWidth: '240px',
                          }}
                        >
                          <h3
                            className="font-bold text-base mb-1.5"
                            style={{
                              color: isCurrent ? classColor.primary : theme.colors.text.primary,
                            }}
                          >
                            {t(`home.journey.steps.${step.id}.title`)}
                          </h3>
                          <p
                            className="text-xs mb-2.5 leading-relaxed"
                            style={{
                              color: theme.colors.text.secondary,
                            }}
                          >
                            {t(`home.journey.steps.${step.id}.description`)}
                          </p>
                          {step.estimatedTime > 0 && (
                            <div className="flex items-center gap-1.5 text-xs">
                              <Clock className="w-3.5 h-3.5" style={{ color: markerColor }} />
                              <span style={{ color: theme.colors.text.secondary }}>
                                {step.estimatedTime} {t('common.minutes')}
                              </span>
                            </div>
                          )}
                          
                          {/* Step Details */}
                          {isCurrent && step.details && (
                            <ul className="mt-3 space-y-1.5 pt-3 border-t"
                              style={{ borderColor: `${classColor.primary}30` }}
                            >
                              {step.details.map((_, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
                                  <span className="mt-0.5" style={{ color: classColor.primary }}>•</span>
                                  <span style={{ color: theme.colors.text.secondary }}>
                                    {t(`home.journey.steps.${step.id}.details.${idx}`)}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
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
