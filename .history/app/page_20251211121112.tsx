"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  Clock,
  ChevronUp,
  ChevronDown,
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
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Carousel navigation functions
  const goToNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % steps.length);
  };

  const goToPrev = () => {
    setActiveStepIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientY - startY;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToPrev();
      } else {
        goToNext();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = e.touches[0].clientY - startY;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToPrev();
      } else {
        goToNext();
      }
      setStartY(e.touches[0].clientY);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') goToPrev();
      if (e.key === 'ArrowDown') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [steps.length]);

  const getCardStyle = (index: number) => {
    const diff = index - activeStepIndex;
    const totalCards = steps.length;
    
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalCards / 2) {
      normalizedDiff = diff > 0 ? diff - totalCards : diff + totalCards;
    }

    const angle = normalizedDiff * 12;
    const verticalDistance = normalizedDiff * 140;
    const horizontalOffset = -Math.abs(normalizedDiff) * 80;
    const scale = normalizedDiff === 0 ? 1 : Math.max(0.7, 1 - Math.abs(normalizedDiff) * 0.12);
    const opacity = normalizedDiff === 0 ? 1 : Math.max(0.4, 1 - Math.abs(normalizedDiff) * 0.2);
    const zIndex = 100 - Math.abs(normalizedDiff) * 10;

    return {
      transform: `
        translateY(${verticalDistance}px) 
        translateX(${horizontalOffset}px)
        rotateX(${angle}deg) 
        scale(${scale})
      `,
      opacity: opacity,
      zIndex: zIndex,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };
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

          {profile && steps.length > 0 && (
          <>
            {/* Vertical Carousel Roadmap */}
            <div className="rounded-2xl shadow-2xl p-6 md:p-10 mb-8 overflow-hidden relative" style={{
              background: 'linear-gradient(135deg, #004D3D 0%, #006A4E 40%, #005A42 70%, #003D2E 100%)',
            }}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Left side - Vertical carousel */}
                <div className="flex-1 flex items-center justify-center w-full">
                  <div 
                    ref={containerRef}
                    className="relative w-full h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    style={{ perspective: '2000px' }}
                  >
                    {/* Decorative arc */}
                    <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
                      <div className="w-[300px] h-[600px] border-4 border-gray-700/30 rounded-l-full mr-16"></div>
                    </div>

                    {/* Step cards */}
                    {steps.map((step, index) => {
                      const isCompleted = index < currentStepIndex;
                      const classColor = passengerClassColors[profile.class];
                      
                      return (
                        <div
                          key={step.id}
                          className="absolute w-72 cursor-pointer"
                          style={getCardStyle(index)}
                          onClick={() => setActiveStepIndex(index)}
                        >
                          <div 
                            className="rounded-2xl shadow-2xl overflow-hidden transform-gpu"
                            style={{
                              background: `linear-gradient(135deg, ${classColor.primary} 0%, ${classColor.primary}dd 100%)`,
                            }}
                          >
                            <div className="p-6 text-white">
                              <div className="flex items-center justify-between mb-4">
                                <div className="text-4xl">
                                  {isCompleted ? '✓' : index + 1}
                                </div>
                                <div className="text-right">
                                  <div className="text-xs font-semibold opacity-90">
                                    {t(`home.journey.steps.${step.id}.title`)}
                                  </div>
                                  {step.estimatedTime > 0 && (
                                    <div className="text-xs opacity-70 flex items-center justify-end gap-1 mt-1">
                                      <Clock className="w-3 h-3" />
                                      {step.estimatedTime} {t('common.minutes')}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <h2 className="text-xl font-bold mb-2">
                                {t(`home.journey.steps.${step.id}.title`)}
                              </h2>
                              <p className="text-white/80 text-sm">
                                {t(`home.journey.steps.${step.id}.description`)}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* Navigation buttons */}
                    <button
                      onClick={goToPrev}
                      className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full shadow-xl transition-all hover:scale-110"
                    >
                      <ChevronUp size={24} />
                    </button>

                    <button
                      onClick={goToNext}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full shadow-xl transition-all hover:scale-110"
                    >
                      <ChevronDown size={24} />
                    </button>
                  </div>
                </div>

                {/* Indicators - vertical */}
                <div className="hidden md:flex flex-col gap-3">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStepIndex(index)}
                      className={`w-2 rounded-full transition-all ${
                        index === activeStepIndex 
                          ? 'h-12 bg-white' 
                          : 'h-2 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Right side - Details */}
                <div className="flex-1 text-white space-y-6">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                      {t('home.journey.title')}
                    </h1>
                    <h2 
                      className="text-2xl md:text-3xl font-bold mb-3"
                      style={{
                        color: passengerClassColors[profile.class].primary,
                      }}
                    >
                      {t(`home.journey.steps.${steps[activeStepIndex].id}.title`)}
                    </h2>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {t(`home.journey.steps.${steps[activeStepIndex].id}.description`)}
                    </p>
                  </div>

                  {/* Step details */}
                  {steps[activeStepIndex].details && (
                    <div className="space-y-3">
                      {steps[activeStepIndex].details.map((_, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 backdrop-blur-sm border border-white/10">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: passengerClassColors[profile.class].primary,
                            }}
                          ></div>
                          <span className="text-gray-300 text-sm">
                            {t(`home.journey.steps.${steps[activeStepIndex].id}.details.${idx}`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Progress info */}
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">
                        {activeStepIndex < currentStepIndex ? '✓' : activeStepIndex + 1}
                      </span>
                      {steps[activeStepIndex].estimatedTime > 0 && (
                        <span>{steps[activeStepIndex].estimatedTime} {t('common.minutes')}</span>
                      )}
                    </div>
                    <div className="h-4 w-px bg-gray-600"></div>
                    <span>{activeStepIndex + 1} / {steps.length}</span>
                  </div>
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
