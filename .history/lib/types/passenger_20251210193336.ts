export type PassengerClass = "economy" | "business" | "first";

export interface PassengerProfile {
  flightNumber?: string;
  class: PassengerClass;
  terminal: string;
  gate?: string;
  departureTime?: string;
  currentStep?: number;
}

export interface JourneyStep {
  id: string;
  order: number;
  title: string;
  description: string;
  location: string;
  estimatedTime: number; // in minutes
  required: boolean;
  applicableTo: PassengerClass[];
  icon: string;
  details?: string[];
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "entrance",
    order: 1,
    title: "Arrivée à l'aéroport",
    description: "Entrez par l'entrée principale",
    location: "entrance-main",
    estimatedTime: 0,
    required: true,
    applicableTo: ["economy", "business", "first"],
    icon: "building",
    details: [
      "Présentez-vous 2h avant pour vols internationaux",
      "1h30 avant pour vols régionaux",
    ],
  },
  {
    id: "checkin-economy",
    order: 2,
    title: "Enregistrement",
    description: "Enregistrez vos bagages aux comptoirs dédiés",
    location: "checkin-a",
    estimatedTime: 15,
    required: true,
    applicableTo: ["economy"],
    icon: "luggage",
    details: [
      "Comptoirs 1-15",
      "Ayez votre passeport et billet prêts",
      "Maximum 23kg par bagage en soute",
    ],
  },
  {
    id: "checkin-business",
    order: 2,
    title: "Enregistrement Business",
    description: "Enregistrement prioritaire aux comptoirs Business",
    location: "checkin-b",
    estimatedTime: 10,
    required: true,
    applicableTo: ["business", "first"],
    icon: "star",
    details: [
      "File prioritaire dédiée",
      "Comptoirs Business/First Class",
      "Franchise bagage augmentée: 32kg",
      "Service personnalisé",
    ],
  },
  {
    id: "security",
    order: 3,
    title: "Contrôle de sécurité",
    description: "Passez le contrôle de sécurité",
    location: "security-1",
    estimatedTime: 20,
    required: true,
    applicableTo: ["economy", "business", "first"],
    icon: "shield",
    details: [
      "Retirez ceinture, veste et objets métalliques",
      "Liquides dans sac plastique transparent (100ml max)",
      "Ordinateurs et tablettes à sortir",
    ],
  },
  {
    id: "lounge",
    order: 4,
    title: "Salon Business",
    description: "Profitez du salon d'attente premium",
    location: "lounge-1",
    estimatedTime: 30,
    required: false,
    applicableTo: ["business", "first"],
    icon: "crown",
    details: [
      "Accès gratuit avec votre billet",
      "Boissons et collations incluses",
      "WiFi haute vitesse",
      "Sièges confortables et espace de travail",
    ],
  },
  {
    id: "boarding",
    order: 5,
    title: "Embarquement",
    description: "Présentez-vous à votre porte d'embarquement",
    location: "gate-1",
    estimatedTime: 5,
    required: true,
    applicableTo: ["economy", "business", "first"],
    icon: "plane",
    details: [
      "Soyez présent 30 min avant le départ",
      "Embarquement prioritaire pour Business/First",
      "Ayez votre carte d'embarquement prête",
    ],
  },
];

export function getApplicableSteps(passengerClass: PassengerClass): JourneyStep[] {
  return JOURNEY_STEPS.filter((step) =>
    step.applicableTo.includes(passengerClass)
  ).sort((a, b) => a.order - b.order);
}

export function getClassPrivileges(passengerClass: PassengerClass): number[] {
  // Returns array of indices for translation keys
  // The actual translations are accessed via: t(`home.journey.privileges.${passengerClass}.${index}`)
  const privilegeCounts: Record<PassengerClass, number> = {
    economy: 4,
    business: 7,
    first: 8,
  };

  const count = privilegeCounts[passengerClass] || 0;
  return Array.from({ length: count }, (_, i) => i);
}
