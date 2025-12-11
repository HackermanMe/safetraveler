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
            {/* Roadmap - Serpentine Road Style */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10 mb-8 overflow-hidden">
              <div className="relative" style={{ minHeight: `${steps.length * 180}px` }}>
                {/* SVG Serpentine Road */}
                <svg
                  className="absolute left-1/2 -translate-x-1/2 h-full"
                  style={{ width: '120px', zIndex: 1 }}
                  preserveAspectRatio="none"
                >
                  {steps.map((_, index) => {
                    const isLast = index === steps.length - 1;
                    const segmentHeight = 180;
                    const yStart = index * segmentHeight + 40;
                    const isEven = index % 2 === 0;
                    
                    if (isLast) return null;
                    
                    return (
                      <g key={index}>
                        {/* Road segment with curve */}
                        <path
                          d={`M 60 ${yStart} 
                              C ${isEven ? '60 ' + (yStart + 60) + ', 100 ' + (yStart + 80) + ', 100 ' + (yStart + 90) : '60 ' + (yStart + 60) + ', 20 ' + (yStart + 80) + ', 20 ' + (yStart + 90)}
                              C ${isEven ? '100 ' + (yStart + 100) + ', 100 ' + (yStart + 120) + ', 60 ' + (yStart + segmentHeight) : '20 ' + (yStart + 100) + ', 20 ' + (yStart + 120) + ', 60 ' + (yStart + segmentHeight)}`}
                          stroke="#9CA3AF"
                          strokeWidth="45"
                          fill="none"
                          strokeLinecap="round"
                        />
                        {/* White dashed center line */}
                        <path
                          d={`M 60 ${yStart} 
                              C ${isEven ? '60 ' + (yStart + 60) + ', 100 ' + (yStart + 80) + ', 100 ' + (yStart + 90) : '60 ' + (yStart + 60) + ', 20 ' + (yStart + 80) + ', 20 ' + (yStart + 90)}
                              C ${isEven ? '100 ' + (yStart + 100) + ', 100 ' + (yStart + 120) + ', 60 ' + (yStart + segmentHeight) : '20 ' + (yStart + 100) + ', 20 ' + (yStart + 120) + ', 60 ' + (yStart + segmentHeight)}`}
                          stroke="#ffffff"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray="10,10"
                          strokeLinecap="round"
                        />
                      </g>
                    );
                  })}
                  {/* Start and end caps */}
                  <circle cx="60" cy="40" r="22" fill="#9CA3AF" />
                  <circle cx="60" cy={steps.length * 180 - 140} r="22" fill="#9CA3AF" />
                </svg>

                {/* Step Items */}
                <div className="relative" style={{ zIndex: 10 }}>
                  {steps.map((step, index) => {
                    const isCompleted = index < currentStepIndex;
                    const isCurrent = index === currentStepIndex;
                    const classColor = passengerClassColors[profile.class];
                    const isEven = index % 2 === 0;
                    
                    // Marker colors
                    const markerColors = [
                      '#EC4899', // Pink
                      '#F97316', // Orange
                      '#06B6D4', // Cyan
                      '#3B82F6', // Blue
                      '#8B5CF6', // Purple
                      '#10B981', // Emerald
                    ];
                    const markerColor = isCompleted 
                      ? theme.colors.success.main 
                      : isCurrent 
                        ? classColor.primary 
                        : markerColors[index % markerColors.length];

                    return (
                      <div
                        key={step.id}
                        className="relative flex items-start"
                        style={{ 
                          height: '180px',
                          flexDirection: isEven ? 'row' : 'row-reverse',
                        }}
                      >
                        {/* Content Side */}
                        <div 
                          className="flex-1 flex items-start pt-4"
                          style={{
                            justifyContent: isEven ? 'flex-end' : 'flex-start',
                            paddingRight: isEven ? '80px' : '16px',
                            paddingLeft: isEven ? '16px' : '80px',
                          }}
                        >
                          <div
                            className={`max-w-xs transition-all ${
                              isCurrent ? 'scale-105' : 'scale-100'
                            }`}
                            style={{
                              textAlign: isEven ? 'right' : 'left',
                            }}
                          >
                            <h3
                              className="font-bold text-base mb-1"
                              style={{
                                color: isCurrent ? classColor.primary : theme.colors.text.primary,
                              }}
                            >
                              {t(`home.journey.steps.${step.id}.title`)}
                            </h3>
                            <p
                              className="text-sm leading-relaxed"
                              style={{
                                color: theme.colors.text.secondary,
                              }}
                            >
                              {t(`home.journey.steps.${step.id}.description`)}
                            </p>
                            {step.estimatedTime > 0 && (
                              <div 
                                className={`flex items-center gap-1.5 mt-2 ${isEven ? 'justify-end' : 'justify-start'}`}
                              >
                                <Clock
                                  className="w-3.5 h-3.5"
                                  style={{ color: markerColor }}
                                />
                                <span
                                  className="text-xs"
                                  style={{ color: theme.colors.text.secondary }}
                                >
                                  {step.estimatedTime} {t('common.minutes')}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Center Marker */}
                        <div 
                          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
                          style={{ top: '0' }}
                        >
                          {/* Marker Circle */}
                          <div
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-white shadow-lg transition-all"
                            style={{
                              backgroundColor: markerColor,
                              boxShadow: isCurrent 
                                ? `0 0 0 4px ${markerColor}40, 0 4px 14px ${markerColor}50`
                                : `0 4px 14px ${markerColor}50`,
                              transform: isCurrent ? 'scale(1.1)' : 'scale(1)',
                            }}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-6 h-6 text-white" />
                            ) : (
                              <span className="text-lg">{String(index + 1).padStart(2, '0')}</span>
                            )}
                          </div>
                          {/* Connection line to road */}
                          <div
                            className="w-0.5 h-8"
                            style={{
                              backgroundColor: markerColor,
                              opacity: 0.5,
                            }}
                          />
                        </div>

                        {/* Empty side for balance */}
                        <div className="flex-1" />
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
