"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
    CheckCircle2,
    Clock,
    ChevronDown,
} from "lucide-react";
import { usePassenger } from "@/lib/context/PassengerContext";
import { getApplicableSteps, PassengerClass } from "@/lib/types/passenger";
import { passengerClassColors } from "@/lib/config/theme";
import ClassSelectorModal from "@/components/ui/ClassSelectorModal";
import HeroCarousel from "@/components/home/HeroCarousel";
import Roadmap from "@/components/home/Roadmap"; // New import
import { useLocale } from "@/lib/context/LocaleContext";

export default function Home() {
    const router = useRouter();
    const { profile, setProfile } = usePassenger();
    const [showModal, setShowModal] = useState(false);
    const { t } = useLocale();
    const [activeStepIndex, setActiveStepIndex] = useState(0);

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
                onClose={() => { }}
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
                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                {/* Visual Roadmap (Left) */}
                                <div className="w-full lg:w-1/2 flex justify-center">
                                    <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-lg border border-gray-100 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600" />
                                        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
                                            {t('home.journey.title')}
                                        </h2>
                                        <Roadmap
                                            steps={steps}
                                            currentStepIndex={currentStepIndex}
                                            activeStepIndex={activeStepIndex}
                                            passengerClass={profile.class}
                                            onStepClick={setActiveStepIndex}
                                        />
                                    </div>
                                </div>

                                {/* Step Details (Right) */}
                                <div className="w-full lg:w-1/2 sticky top-24">
                                    <div
                                        className="rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01]"
                                        style={{
                                            background: `linear-gradient(135deg, ${passengerClassColors[profile.class].primary} 0%, ${passengerClassColors[profile.class].primary}dd 100%)`,
                                        }}
                                    >
                                        <div className="p-8 md:p-12 text-white relative">
                                            {/* Decorative Circle */}
                                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />

                                            <div className="flex items-center justify-between mb-6">
                                                <div className="text-5xl font-bold opacity-20">
                                                    {String(activeStepIndex + 1).padStart(2, '0')}
                                                </div>
                                                {steps[activeStepIndex].estimatedTime > 0 && (
                                                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
                                                        <Clock className="w-4 h-4" />
                                                        {steps[activeStepIndex].estimatedTime} {t('common.minutes')}
                                                    </div>
                                                )}
                                            </div>

                                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                                {t(`home.journey.steps.${steps[activeStepIndex].id}.title`)}
                                            </h3>

                                            <p className="text-white/90 text-lg leading-relaxed mb-8">
                                                {t(`home.journey.steps.${steps[activeStepIndex].id}.description`)}
                                            </p>

                                            {steps[activeStepIndex].details && (
                                                <div className="space-y-4">
                                                    {steps[activeStepIndex].details.map((detail, idx) => (
                                                        <div key={idx} className="flex items-start gap-4">
                                                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                <CheckCircle2 size={14} />
                                                            </div>
                                                            <span className="text-white/90 font-medium">
                                                                {t(`home.journey.steps.${steps[activeStepIndex].id}.details.${idx}`)}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Action Button (Contextual) */}
                                            <div className="mt-10 pt-8 border-t border-white/20">
                                                <button
                                                    onClick={() => router.push('/navigation')}
                                                    className="w-full bg-white text-gray-900 font-bold py-4 rounded-xl shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                                >
                                                    <span>Voir sur la carte</span>
                                                    <ChevronDown className="rotate-[-90deg]" size={20} />
                                                </button>
                                            </div>
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
