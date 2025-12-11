"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { locales, localeNames, type Locale } from "@/i18n";
import { useLocale } from "@/lib/context/LocaleContext";

interface LanguageSelectorProps {
  currentLocale: string;
}

export default function LanguageSelector({ currentLocale }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { setLocale } = useLocale();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (locale: Locale) => {
    setLocale(locale);
    setIsOpen(false);
  };

  const getLocaleFlag = (locale: string) => {
    switch (locale) {
      case "fr":
        return "🇫🇷";
      case "en":
        return "🇬🇧";
      case "ewe":
        return "🇹🇬";
      default:
        return "🌍";
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Select language"
      >
        <Globe className="w-5 h-5 text-gray-600" />
        <span className="hidden md:inline text-sm font-medium text-gray-700">
          {localeNames[currentLocale as Locale]}
        </span>
        <span className="text-lg">{getLocaleFlag(currentLocale)}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                currentLocale === locale ? "bg-blue-50" : ""
              }`}
            >
              <span className="text-2xl">{getLocaleFlag(locale)}</span>
              <div className="flex-1 text-left">
                <div
                  className={`text-sm font-medium ${
                    currentLocale === locale ? "text-blue-600" : "text-gray-900"
                  }`}
                >
                  {localeNames[locale]}
                </div>
                {locale === "ewe" && (
                  <div className="text-xs text-gray-500">Langue Ewe</div>
                )}
              </div>
              {currentLocale === locale && (
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
