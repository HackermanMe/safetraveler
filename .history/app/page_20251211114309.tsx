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
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 md:p-8 mb-8 overflow-hidden">
              <div className="relative mx-auto" style={{ maxWidth: '550px' }}>
                {/* SVG Serpentine Road - Perfect semicircle curves */}
                <svg
                  className="absolute"
                  style={{ 
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '240px',
                    height: `${steps.length * 130 + 60}px`,
                    zIndex: 1 
                  }}
                  viewBox={`0 0 240 ${steps.length * 130 + 60}`}
                  preserveAspectRatio="xMidYMin meet"
                >
                  {/* Complete serpentine road path with perfect semicircles */}
                  {(() => {
                    const segmentHeight = 130;
                    const roadWidth = 42;
                    const curveRadius = 45;
                    const centerX = 120;
                    let pathD = `M ${centerX} 25`;
                    
                    for (let i = 0; i < steps.length; i++) {
                      const yStart = i * segmentHeight + 25;
                      const isLast = i === steps.length - 1;
                      
                      if (!isLast) {
                        const goRight = i % 2 === 0;
                        const curveY = yStart + 45;
                        const nextY = yStart + segmentHeight;
                        
                        // Straight section down
                        pathD += ` L ${centerX} ${curveY - curveRadius}`;
                        
                        if (goRight) {
                          // Perfect semicircle to the right using arc
                          pathD += ` A ${curveRadius} ${curveRadius} 0 0 1 ${centerX + curveRadius * 2} ${curveY - curveRadius}`;
                          // Vertical line down on the right
                          pathD += ` L ${centerX + curveRadius * 2} ${curveY + curveRadius}`;
                          // Perfect semicircle back to center
                          pathD += ` A ${curveRadius} ${curveRadius} 0 0 1 ${centerX} ${curveY + curveRadius}`;
                        } else {
                          // Perfect semicircle to the left using arc
                          pathD += ` A ${curveRadius} ${curveRadius} 0 0 0 ${centerX - curveRadius * 2} ${curveY - curveRadius}`;
                          // Vertical line down on the left
                          pathD += ` L ${centerX - curveRadius * 2} ${curveY + curveRadius}`;
                          // Perfect semicircle back to center
                          pathD += ` A ${curveRadius} ${curveRadius} 0 0 0 ${centerX} ${curveY + curveRadius}`;
                        }
                        
                        // Continue to next segment
                        pathD += ` L ${centerX} ${nextY}`;
                      } else {
                        // Last step - just a bit more down
                        pathD += ` L ${centerX} ${yStart + 40}`;
                      }
                    }
                    
                    return (
                      <>
                        {/* Main road */}
                        <path
                          d={pathD}
                          stroke="#9CA3AF"
                          strokeWidth={roadWidth}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* Center dashed line */}
                        <path
                          d={pathD}
                          stroke="#ffffff"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="10,10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    );
                  })()}
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
                          height: '130px',
                          flexDirection: isEven ? 'row' : 'row-reverse',
                        }}
                      >
                        {/* Content Side */}
                        <div 
                          className="flex-1 flex items-start"
                          style={{
                            justifyContent: isEven ? 'flex-end' : 'flex-start',
                            paddingRight: isEven ? '140px' : '8px',
                            paddingLeft: isEven ? '8px' : '140px',
                            paddingTop: '2px',
                          }}
                        >
                          <div
                            className="transition-all"
                            style={{
                              textAlign: isEven ? 'right' : 'left',
                              maxWidth: '180px',
                            }}
                          >
                            <h3
                              className="font-semibold text-sm mb-0.5"
                              style={{
                                color: isCurrent ? classColor.primary : theme.colors.text.primary,
                              }}
                            >
                              {t(`home.journey.steps.${step.id}.title`)}
                            </h3>
                            <p
                              className="text-xs leading-relaxed"
                              style={{
                                color: theme.colors.text.secondary,
                              }}
                            >
                              {t(`home.journey.steps.${step.id}.description`)}
                            </p>
                          </div>
                        </div>

                        {/* Center Marker */}
                        <div 
                          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
                          style={{ top: '-6px' }}
                        >
                          {/* Marker Circle */}
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md transition-all"
                            style={{
                              backgroundColor: markerColor,
                              boxShadow: isCurrent 
                                ? `0 0 0 3px ${markerColor}40, 0 3px 10px ${markerColor}50`
                                : `0 3px 10px ${markerColor}40`,
                              transform: isCurrent ? 'scale(1.15)' : 'scale(1)',
                            }}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-white" />
                            ) : (
                              <span className="text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                            )}
                          </div>
                          {/* Connection line to road */}
                          <div
                            className="w-0.5 h-6"
                            style={{
                              backgroundColor: markerColor,
                              opacity: 0.6,
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
