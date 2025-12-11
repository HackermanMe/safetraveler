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
            {/* Roadmap - Winding S-curve Road Style */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10 mb-8 overflow-hidden">
              <div className="relative mx-auto" style={{ maxWidth: '600px', minHeight: `${steps.length * 140 + 80}px` }}>
                {/* SVG Winding Road - S-curve style like the reference */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  style={{ zIndex: 1 }}
                  viewBox={`0 0 400 ${steps.length * 140 + 80}`}
                  preserveAspectRatio="xMidYMin meet"
                >
                  {/* Winding S-curve road path */}
                  {(() => {
                    const roadWidth = 55;
                    const segmentHeight = 140;
                    
                    // Create a smooth S-curve path
                    let pathD = 'M 200 30'; // Start at top center
                    
                    for (let i = 0; i < steps.length; i++) {
                      const yStart = i * segmentHeight + 30;
                      const yEnd = yStart + segmentHeight;
                      const isLast = i === steps.length - 1;
                      
                      if (!isLast) {
                        const goRight = i % 2 === 0;
                        const curveOffset = 120; // How far the curve goes left/right
                        
                        if (goRight) {
                          // S-curve going right then back
                          pathD += ` C 200 ${yStart + 40}, ${200 + curveOffset} ${yStart + 50}, ${200 + curveOffset} ${yStart + segmentHeight / 2}`;
                          pathD += ` C ${200 + curveOffset} ${yEnd - 50}, 200 ${yEnd - 40}, 200 ${yEnd}`;
                        } else {
                          // S-curve going left then back
                          pathD += ` C 200 ${yStart + 40}, ${200 - curveOffset} ${yStart + 50}, ${200 - curveOffset} ${yStart + segmentHeight / 2}`;
                          pathD += ` C ${200 - curveOffset} ${yEnd - 50}, 200 ${yEnd - 40}, 200 ${yEnd}`;
                        }
                      } else {
                        // Last segment - just extend down
                        pathD += ` L 200 ${yStart + 50}`;
                      }
                    }
                    
                    return (
                      <>
                        {/* Road shadow for depth */}
                        <path
                          d={pathD}
                          stroke="rgba(0,0,0,0.1)"
                          strokeWidth={roadWidth + 8}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          transform="translate(3, 3)"
                        />
                        {/* Main road - dark gray/charcoal */}
                        <path
                          d={pathD}
                          stroke="#374151"
                          strokeWidth={roadWidth}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* Road edge highlight */}
                        <path
                          d={pathD}
                          stroke="#4B5563"
                          strokeWidth={roadWidth - 6}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* Center dashed line - white */}
                        <path
                          d={pathD}
                          stroke="#ffffff"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="12,12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    );
                  })()}
                </svg>

                {/* Step Markers and Content */}
                <div className="relative" style={{ zIndex: 10 }}>
                  {steps.map((step, index) => {
                    const isCompleted = index < currentStepIndex;
                    const isCurrent = index === currentStepIndex;
                    const classColor = passengerClassColors[profile.class];
                    const isEven = index % 2 === 0;
                    const segmentHeight = 140;
                    
                    // Teal/cyan color for markers like in the reference
                    const markerColor = isCompleted 
                      ? theme.colors.success.main 
                      : isCurrent 
                        ? classColor.primary 
                        : '#0D9488'; // Teal color

                    // Calculate marker position along the curve
                    const yPosition = index * segmentHeight + 30;
                    // X position alternates based on curve direction
                    const xOffset = isEven ? 80 : -80;

                    return (
                      <div
                        key={step.id}
                        className="absolute"
                        style={{ 
                          top: `${yPosition}px`,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '100%',
                        }}
                      >
                        {/* Marker positioned on the curve */}
                        <div 
                          className="absolute flex items-center"
                          style={{
                            left: `calc(50% + ${xOffset}px)`,
                            transform: 'translateX(-50%)',
                            top: index === 0 ? '-5px' : `${segmentHeight / 2 - 25}px`,
                          }}
                        >
                          {/* Connector line from marker to content */}
                          <div
                            className="absolute"
                            style={{
                              width: '2px',
                              height: '30px',
                              backgroundColor: markerColor,
                              opacity: 0.4,
                              top: '50px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                            }}
                          />
                          
                          {/* Marker Circle with icon */}
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all border-4 border-white"
                            style={{
                              backgroundColor: markerColor,
                              boxShadow: isCurrent 
                                ? `0 0 0 4px ${markerColor}30, 0 4px 15px ${markerColor}40`
                                : `0 4px 15px rgba(0,0,0,0.2)`,
                              transform: isCurrent ? 'scale(1.1)' : 'scale(1)',
                            }}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-6 h-6 text-white" />
                            ) : (
                              <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                            )}
                          </div>
                        </div>

                        {/* Content positioned next to marker */}
                        <div 
                          className="absolute"
                          style={{
                            left: isEven ? `calc(50% + ${xOffset + 45}px)` : 'auto',
                            right: isEven ? 'auto' : `calc(50% - ${xOffset - 45}px)`,
                            top: index === 0 ? '0' : `${segmentHeight / 2 - 20}px`,
                            textAlign: isEven ? 'left' : 'right',
                            maxWidth: '180px',
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
                            className="text-xs leading-relaxed"
                            style={{
                              color: theme.colors.text.secondary,
                            }}
                          >
                            {t(`home.journey.steps.${step.id}.description`)}
                          </p>
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
