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
            {/* Roadmap - 3D Winding Road Style */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10 mb-8 overflow-hidden">
              <div className="relative mx-auto" style={{ maxWidth: '700px', minHeight: `${steps.length * 150 + 100}px` }}>
                {/* SVG 3D Winding Road */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  style={{ zIndex: 1 }}
                  viewBox={`0 0 500 ${steps.length * 150 + 100}`}
                  preserveAspectRatio="xMidYMin meet"
                >
                  <defs>
                    {/* Gradient for 3D effect */}
                    <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#9CA3AF', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#6B7280', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
                    </linearGradient>
                    {/* Shadow gradient */}
                    <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 0.3 }} />
                      <stop offset="50%" style={{ stopColor: '#000000', stopOpacity: 0.1 }} />
                      <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0.3 }} />
                    </linearGradient>
                  </defs>
                  
                  {/* Create smooth S-curve winding road */}
                  {(() => {
                    const segmentHeight = 150;
                    const roadWidth = 60;
                    const centerX = 250;
                    
                    let mainPath = `M ${centerX} 40`;
                    let shadowPath = `M ${centerX} 40`;
                    
                    for (let i = 0; i < steps.length; i++) {
                      const yStart = i * segmentHeight + 40;
                      const yEnd = yStart + segmentHeight;
                      const isLast = i === steps.length - 1;
                      
                      if (!isLast) {
                        const goRight = i % 2 === 0;
                        const amplitude = 100; // How far the curve goes
                        
                        // Create smooth S-curves
                        if (goRight) {
                          mainPath += ` C ${centerX} ${yStart + 50}, ${centerX + amplitude} ${yStart + 60}, ${centerX + amplitude} ${yStart + segmentHeight / 2}`;
                          mainPath += ` C ${centerX + amplitude} ${yEnd - 60}, ${centerX} ${yEnd - 50}, ${centerX} ${yEnd}`;
                          
                          shadowPath += ` C ${centerX + 5} ${yStart + 50}, ${centerX + amplitude + 5} ${yStart + 60}, ${centerX + amplitude + 5} ${yStart + segmentHeight / 2}`;
                          shadowPath += ` C ${centerX + amplitude + 5} ${yEnd - 60}, ${centerX + 5} ${yEnd - 50}, ${centerX + 5} ${yEnd}`;
                        } else {
                          mainPath += ` C ${centerX} ${yStart + 50}, ${centerX - amplitude} ${yStart + 60}, ${centerX - amplitude} ${yStart + segmentHeight / 2}`;
                          mainPath += ` C ${centerX - amplitude} ${yEnd - 60}, ${centerX} ${yEnd - 50}, ${centerX} ${yEnd}`;
                          
                          shadowPath += ` C ${centerX + 5} ${yStart + 50}, ${centerX - amplitude + 5} ${yStart + 60}, ${centerX - amplitude + 5} ${yStart + segmentHeight / 2}`;
                          shadowPath += ` C ${centerX - amplitude + 5} ${yEnd - 60}, ${centerX + 5} ${yEnd - 50}, ${centerX + 5} ${yEnd}`;
                        }
                      } else {
                        mainPath += ` L ${centerX} ${yStart + 60}`;
                        shadowPath += ` L ${centerX + 5} ${yStart + 60}`;
                      }
                    }
                    
                    return (
                      <>
                        {/* Shadow layer for 3D depth */}
                        <path
                          d={shadowPath}
                          stroke="rgba(0,0,0,0.15)"
                          strokeWidth={roadWidth + 6}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          filter="blur(4px)"
                        />
                        
                        {/* Main road with 3D gradient */}
                        <path
                          d={mainPath}
                          stroke="url(#roadGradient)"
                          strokeWidth={roadWidth}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* Highlight on top edge */}
                        <path
                          d={mainPath}
                          stroke="rgba(156, 163, 175, 0.6)"
                          strokeWidth={roadWidth - 8}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          transform="translate(0, -2)"
                        />
                        
                        {/* Center dashed line */}
                        <path
                          d={mainPath}
                          stroke="#ffffff"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="15,15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    );
                  })()}
                </svg>

                {/* Step Markers positioned on the curve */}
                <div className="relative" style={{ zIndex: 10 }}>
                  {steps.map((step, index) => {
                    const isCompleted = index < currentStepIndex;
                    const isCurrent = index === currentStepIndex;
                    const classColor = passengerClassColors[profile.class];
                    
                    // Teal/cyan colors like in reference
                    const markerColors = ['#14B8A6', '#0891B2', '#06B6D4', '#10B981'];
                    const markerColor = isCompleted 
                      ? theme.colors.success.main 
                      : isCurrent 
                        ? classColor.primary 
                        : markerColors[index % markerColors.length];
                    
                    const segmentHeight = 150;
                    const yPosition = index * segmentHeight + 40 + segmentHeight / 2;
                    
                    // Calculate X position based on curve
                    const goRight = index % 2 === 0;
                    const xOffset = goRight ? 100 : -100;
                    const isEven = index % 2 === 0;

                    return (
                      <div
                        key={step.id}
                        className="absolute"
                        style={{
                          top: `${yPosition - 25}px`,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '100%',
                        }}
                      >
                        {/* Marker on the road */}
                        <div
                          className="absolute flex items-center justify-center"
                          style={{
                            left: `calc(50% + ${xOffset}px)`,
                            transform: 'translateX(-50%)',
                          }}
                        >
                          {/* Connection line */}
                          <div
                            className="absolute"
                            style={{
                              width: '3px',
                              height: '40px',
                              backgroundColor: markerColor,
                              top: '50px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              opacity: 0.5,
                            }}
                          />
                          
                          {/* Marker circle with white border */}
                          <div
                            className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all"
                            style={{
                              backgroundColor: markerColor,
                              border: '5px solid white',
                              boxShadow: isCurrent
                                ? `0 0 0 4px ${markerColor}30, 0 6px 20px rgba(0,0,0,0.25)`
                                : '0 6px 20px rgba(0,0,0,0.25)',
                              transform: isCurrent ? 'scale(1.1)' : 'scale(1)',
                            }}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-6 h-6 text-white" />
                            ) : (
                              <span className="text-white font-bold text-base">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Content text */}
                        <div
                          className="absolute"
                          style={{
                            left: isEven ? `calc(50% + ${xOffset + 65}px)` : 'auto',
                            right: isEven ? 'auto' : `calc(50% - ${xOffset - 65}px)`,
                            textAlign: isEven ? 'left' : 'right',
                            maxWidth: '200px',
                            top: '0',
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
