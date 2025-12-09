"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Plane,
  Settings,
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
  const classColor = profile ? passengerClassColors[profile.class] : null;

  const classLabels = {
    economy: t('class.economy'),
    business: t('class.business'),
    first: t('class.first'),
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

          {profile && (
          <>
            {/* Active Profile Card */}
            <div
              className="rounded-lg shadow-sm border-2 p-6 mb-8"
              style={{
                borderColor: classColor?.primary,
                backgroundColor: classColor?.background,
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: classColor?.primary }}
                    >
                      <Plane className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium" style={{ color: classColor?.primary }}>
                        {classLabels[profile.class]}
                      </h3>
                      {profile.flightNumber && (
                        <p className="text-sm text-gray-700">{t('common.flight')} {profile.flightNumber}</p>
                      )}
                    </div>
                  </div>
                  {profile.gate && (
                    <div className="flex items-center space-x-2 text-sm text-gray-700 mt-2">
                      <MapPin className="w-4 h-4" />
                      <span>{t('common.gate')} {profile.gate}</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => router.push("/profile")}
                  className="text-sm font-medium px-4 py-2 rounded-lg border hover:bg-white/50 transition-colors"
                  style={{ borderColor: classColor?.primary, color: classColor?.primary }}
                >
                  {t('profile.modify')}
                </button>
              </div>
            </div>

            {/* Journey Steps */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <h2 className="text-2xl font-normal text-gray-900 mb-6">
                {t('journey.title')}
              </h2>

              <div className="space-y-4">
                {steps.map((step, index) => {
                  const isCompleted = index < currentStepIndex;
                  const isCurrent = index === currentStepIndex;
                  const isPending = index > currentStepIndex;

                  return (
                    <div
                      key={step.id}
                      className={`relative p-4 rounded-lg border-2 transition-all ${
                        isCurrent
                          ? "border-blue-600 bg-blue-50"
                          : isCompleted
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        {/* Step Number/Status */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isCompleted
                              ? "bg-green-600"
                              : isCurrent
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-6 h-6 text-white" />
                          ) : (
                            <span className="text-white font-medium">{index + 1}</span>
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3
                                className={`font-medium text-lg ${
                                  isCurrent ? "text-blue-900" : "text-gray-900"
                                }`}
                              >
                                {step.title}
                              </h3>
                              <p
                                className={`text-sm ${
                                  isCurrent ? "text-blue-700" : "text-gray-600"
                                }`}
                              >
                                {step.description}
                              </p>
                            </div>
                            {step.estimatedTime > 0 && (
                              <div className="flex items-center space-x-1 text-sm text-gray-500">
                                <Clock className="w-4 h-4" />
                                <span>{step.estimatedTime} min</span>
                              </div>
                            )}
                          </div>

                          {/* Step Details */}
                          {isCurrent && step.details && (
                            <ul className="mt-3 space-y-1">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                                  <span className="text-blue-600">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Action Button */}
                          {isCurrent && (
                            <Link
                              href="/navigation"
                              className="inline-flex items-center space-x-2 mt-4 text-sm font-medium text-blue-600 hover:text-blue-700"
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
          </>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/map"
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
