"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PassengerProfile, PassengerClass } from "@/lib/types/passenger";

interface PassengerContextType {
  profile: PassengerProfile | null;
  setProfile: (profile: PassengerProfile) => void;
  clearProfile: () => void;
  updateProfile: (updates: Partial<PassengerProfile>) => void;
}

const PassengerContext = createContext<PassengerContextType | undefined>(undefined);

export function PassengerProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfileState] = useState<PassengerProfile | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("passengerProfile");
    if (stored) {
      try {
        setProfileState(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse stored profile");
      }
    }
  }, []);

  const setProfile = (newProfile: PassengerProfile) => {
    setProfileState(newProfile);
    localStorage.setItem("passengerProfile", JSON.stringify(newProfile));
  };

  const updateProfile = (updates: Partial<PassengerProfile>) => {
    if (profile) {
      const updated = { ...profile, ...updates };
      setProfile(updated);
    }
  };

  const clearProfile = () => {
    setProfileState(null);
    localStorage.removeItem("passengerProfile");
  };

  return (
    <PassengerContext.Provider value={{ profile, setProfile, clearProfile, updateProfile }}>
      {children}
    </PassengerContext.Provider>
  );
}

export function usePassenger() {
  const context = useContext(PassengerContext);
  if (context === undefined) {
    throw new Error("usePassenger must be used within a PassengerProvider");
  }
  return context;
}
