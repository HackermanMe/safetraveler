"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { usePassenger } from "@/lib/context/PassengerContext";
import { PassengerClass } from "@/lib/types/passenger";
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


        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/navigation"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <MapPin className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-1">{t('quickActions.map.title')}</h3>
            <p className="text-sm text-gray-600">
              {t('quickActions.map.description')}
            </p>
          </Link>

          <Link
            href="/services"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <svg className="w-8 h-8 text-blue-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-medium text-gray-900 mb-1">{t('quickActions.services.title')}</h3>
            <p className="text-sm text-gray-600">
              {t('quickActions.services.description')}
            </p>
          </Link>

          <Link
            href="/report"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <svg className="w-8 h-8 text-red-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="font-medium text-gray-900 mb-1">{t('quickActions.report.title')}</h3>
            <p className="text-sm text-gray-600">
              {t('quickActions.report.description')}
            </p>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
