"use client";

import { useState } from "react";
import { PassengerClass, getClassPrivileges } from "@/lib/types/passenger";
import { Check, X } from "lucide-react";
import { passengerClassColors } from "@/lib/config/theme";

interface ClassSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (selectedClass: PassengerClass, flightNumber?: string, gate?: string) => void;
  onFirstTimeSelect?: () => void;
  currentClass?: PassengerClass;
}

export default function ClassSelectorModal({
  isOpen,
  onClose,
  onSelect,
  onFirstTimeSelect,
  currentClass,
}: ClassSelectorModalProps) {
  const [selectedClass, setSelectedClass] = useState<PassengerClass>(
    currentClass || "economy"
  );
  const [flightNumber, setFlightNumber] = useState("");
  const [gate, setGate] = useState("");

  const classes: { value: PassengerClass; label: string; description: string }[] = [
    {
      value: "economy",
      label: "Classe Économique",
      description: "Vol standard avec tous les services essentiels",
    },
    {
      value: "business",
      label: "Classe Business",
      description: "Confort premium avec avantages exclusifs",
    },
    {
      value: "first",
      label: "Première Classe",
      description: "Expérience de luxe avec service personnalisé",
    },
  ];

  const handleConfirm = () => {
    onSelect(selectedClass, flightNumber || undefined, gate || undefined);

    // Notify parent if this is first time selection
    if (!currentClass && onFirstTimeSelect) {
      onFirstTimeSelect();
    }

    onClose();
  };

  if (!isOpen) return null;

  const selectedColor = passengerClassColors[selectedClass];
  const privileges = getClassPrivileges(selectedClass);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-normal text-gray-900">
              {currentClass ? "Modifier ma classe" : "Sélectionnez votre classe"}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Choisissez votre classe de voyage pour un guidage personnalisé
            </p>
          </div>
          {currentClass && (
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          )}
        </div>

        <div className="p-6 space-y-6">
          {/* Class Selection */}
          <div className="space-y-3">
            {classes.map((classOption) => {
              const isSelected = selectedClass === classOption.value;
              const color = passengerClassColors[classOption.value];

              return (
                <button
                  key={classOption.value}
                  onClick={() => setSelectedClass(classOption.value)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                    isSelected
                      ? "border-current shadow-lg scale-[1.02]"
                      : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                  style={{
                    borderColor: isSelected ? color.primary : undefined,
                    backgroundColor: isSelected ? color.background : "white",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3
                        className="font-medium text-xl mb-1"
                        style={{ color: isSelected ? color.primary : "#1f2937" }}
                      >
                        {classOption.label}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {classOption.description}
                      </p>
                    </div>
                    {isSelected && (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center ml-3 flex-shrink-0"
                        style={{ backgroundColor: color.primary }}
                      >
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Privileges Preview */}
          <div
            className="rounded-xl p-5 border-2"
            style={{
              borderColor: selectedColor.light,
              backgroundColor: selectedColor.background,
            }}
          >
            <h4 className="font-medium text-lg mb-3" style={{ color: selectedColor.primary }}>
              Vos privilèges
            </h4>
            <ul className="space-y-2">
              {privileges.slice(0, 4).map((privilege, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: selectedColor.primary }}
                  />
                  <span className="text-sm text-gray-700">{privilege}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Optional Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Numéro de vol (optionnel)
              </label>
              <input
                type="text"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                placeholder="Ex: AF123"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Porte d'embarquement (optionnel)
              </label>
              <input
                type="text"
                value={gate}
                onChange={(e) => setGate(e.target.value.toUpperCase())}
                placeholder="Ex: A12"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
          <button
            onClick={handleConfirm}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg text-lg"
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
}
