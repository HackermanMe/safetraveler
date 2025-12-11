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
              <div className="relative" style={{ minHeight: `${steps.length * 160 + 40}px` }}>
                {/* SVG Serpentine Road - Perfect Curves */}
                <svg
                  className="absolute"
                  style={{ 
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '280px',
                    height: '100%',
                    zIndex: 1 
                  }}
                  viewBox={`0 0 280 ${steps.length * 160 + 40}`}
                  preserveAspectRatio="xMidYMin meet"
                >
                  {/* Build the complete serpentine path */}
                  {(() => {
                    const roadWidth = 50;
                    const curveRadius = 50;
                    const straightLength = 80;
                    const segmentHeight = 160;
                    
                    // Start position
                    let pathD = `M 140 30`;
                    let currentY = 30;
                    
                    for (let i = 0; i < steps.length; i++) {
                      const isLast = i === steps.length - 1;
                      const goRight = i % 2 === 0;
                      
                      if (!isLast) {
                        // Straight down
                        currentY += 40;
                        pathD += ` L 140 ${currentY}`;
                        
                        if (goRight) {
                          // Curve to the right
                          pathD += ` Q 140 ${currentY + curveRadius}, ${140 + curveRadius} ${currentY + curveRadius}`;
                          // Straight right
                          pathD += ` L ${140 + curveRadius + straightLength} ${currentY + curveRadius}`;
                          // Curve down
                          pathD += ` Q ${140 + curveRadius + straightLength + curveRadius} ${currentY + curveRadius}, ${140 + curveRadius + straightLength + curveRadius} ${currentY + curveRadius * 2}`;
                          // Straight down a bit
                          currentY += curveRadius * 2 + 20;
                          pathD += ` L ${140 + curveRadius + straightLength + curveRadius} ${currentY}`;
                          // Curve back left
                          pathD += ` Q ${140 + curveRadius + straightLength + curveRadius} ${currentY + curveRadius}, ${140 + curveRadius + straightLength} ${currentY + curveRadius}`;
                          // Straight left
                          pathD += ` L ${140 + curveRadius} ${currentY + curveRadius}`;
                          // Curve back to center
                          pathD += ` Q 140 ${currentY + curveRadius}, 140 ${currentY + curveRadius * 2}`;
                          currentY += curveRadius * 2;
                        } else {
                          // Curve to the left
                          pathD += ` Q 140 ${currentY + curveRadius}, ${140 - curveRadius} ${currentY + curveRadius}`;
                          // Straight left
                          pathD += ` L ${140 - curveRadius - straightLength} ${currentY + curveRadius}`;
                          // Curve down
                          pathD += ` Q ${140 - curveRadius - straightLength - curveRadius} ${currentY + curveRadius}, ${140 - curveRadius - straightLength - curveRadius} ${currentY + curveRadius * 2}`;
                          // Straight down a bit
                          currentY += curveRadius * 2 + 20;
                          pathD += ` L ${140 - curveRadius - straightLength - curveRadius} ${currentY}`;
                          // Curve back right
                          pathD += ` Q ${140 - curveRadius - straightLength - curveRadius} ${currentY + curveRadius}, ${140 - curveRadius - straightLength} ${currentY + curveRadius}`;
                          // Straight right
                          pathD += ` L ${140 - curveRadius} ${currentY + curveRadius}`;
                          // Curve back to center
                          pathD += ` Q 140 ${currentY + curveRadius}, 140 ${currentY + curveRadius * 2}`;
                          currentY += curveRadius * 2;
                        }
                      } else {
                        // Last step - just go down to end
                        currentY += 40;
                        pathD += ` L 140 ${currentY}`;
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
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray="12,12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* Start cap */}
                        <circle cx="140" cy="30" r={roadWidth / 2} fill="#9CA3AF" />
                        {/* End cap */}
                        <circle cx="140" cy={currentY} r={roadWidth / 2} fill="#9CA3AF" />
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
                    
                    // Marker colors matching the reference image
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
                          height: '160px',
                          flexDirection: isEven ? 'row' : 'row-reverse',
                        }}
                      >
                        {/* Content Side */}
                        <div 
                          className="flex-1 flex items-start pt-2"
                          style={{
                            justifyContent: isEven ? 'flex-end' : 'flex-start',
                            paddingRight: isEven ? '170px' : '16px',
                            paddingLeft: isEven ? '16px' : '170px',
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
                          style={{ top: '-4px' }}
                        >
                          {/* Marker Circle */}
                          <div
                            className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg transition-all"
                            style={{
                              backgroundColor: markerColor,
                              boxShadow: isCurrent 
                                ? `0 0 0 4px ${markerColor}40, 0 4px 14px ${markerColor}50`
                                : `0 4px 14px ${markerColor}50`,
                              transform: isCurrent ? 'scale(1.15)' : 'scale(1)',
                            }}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-white" />
                            ) : (
                              <span className="text-base font-bold">{String(index + 1).padStart(2, '0')}</span>
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
