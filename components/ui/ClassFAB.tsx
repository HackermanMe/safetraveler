"use client";

import { useState } from "react";
import { Plane } from "lucide-react";
import { usePassenger } from "@/lib/context/PassengerContext";
import { passengerClassColors } from "@/lib/config/theme";
import ClassSelectorModal from "./ClassSelectorModal";
import { PassengerClass } from "@/lib/types/passenger";

export default function ClassFAB() {
  const { profile, setProfile } = usePassenger();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  };

  const classColor = profile ? passengerClassColors[profile.class] : null;

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-20 md:bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 z-40 flex items-center justify-center"
        style={{
          backgroundColor: classColor?.primary || "#1976d2",
        }}
        aria-label="Changer de classe"
      >
        <Plane className="w-6 h-6 text-white" />
      </button>

      {/* Modal */}
      <ClassSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleClassSelect}
        currentClass={profile?.class}
      />
    </>
  );
}
