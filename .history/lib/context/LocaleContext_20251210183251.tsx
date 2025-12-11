"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import type { Locale } from "@/i18n";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [messages, setMessages] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load locale from localStorage
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && ["fr", "en", "ewe", "kabiye"].includes(savedLocale)) {
      setLocaleState(savedLocale);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Load messages for current locale
    setIsLoading(true);
    import(`@/messages/${locale}.json`)
      .then((module) => {
        setMessages(module.default);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`Failed to load messages for locale ${locale}:`, error);
        setIsLoading(false);
      });
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    if (newLocale !== locale) {
      setLocaleState(newLocale);
      localStorage.setItem("locale", newLocale);
    }
  }, [locale]);

  const t = useCallback((key: string): string => {
    const keys = key.split(".");
    let value = messages;

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  }, [messages]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, isLoading }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
