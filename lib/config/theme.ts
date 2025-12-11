// ============================================
// ANAC SafeTraveler - Aviation Design System
// OACI/IATA Compliant | WCAG 2.1 AA
// Aéroport International Gnassingbé Eyadéma (LFW)
// ============================================

// Aviation Information - ICAO/IATA Codes
export const airportInfo = {
  icaoCode: 'DXXX',            // ICAO code for Lomé
  iataCode: 'LFW',              // IATA code for Lomé
  name: {
    fr: 'Aéroport International Gnassingbé Eyadéma',
    en: 'Gnassingbé Eyadéma International Airport',
    full: 'Aéroport International Gnassingbé Eyadéma de Lomé',
  },
  location: {
    city: 'Lomé',
    country: 'Togo',
    countryCode: 'TG',
    region: 'West Africa',
    timezone: 'GMT',
    coordinates: {
      lat: 6.1659,
      lng: 1.2549,
    },
  },
  operator: 'ANAC - Agence Nationale de l\'Aviation Civile',
};

// Aviation Incident Categories (OACI Standardized)
export const aviationIncidentCategories = {
  // OACI Annex 13 - Aircraft Accident and Incident Investigation
  RUNWAY_INCURSION: {
    code: 'RI',
    nameKey: 'incidents.categories.runwayIncursion',
    severity: 'CRITICAL',
    color: '#CC0000', // Aviation red
    description: 'Unauthorized entry onto runway protected area',
  },
  FOD: {
    code: 'FOD',
    nameKey: 'incidents.categories.fod',
    severity: 'HIGH',
    color: '#FF6600', // Aviation orange
    description: 'Foreign Object Debris on operational surfaces',
  },
  BIRD_STRIKE: {
    code: 'BS',
    nameKey: 'incidents.categories.birdStrike',
    severity: 'HIGH',
    color: '#FF6600',
    description: 'Wildlife hazard or bird strike incident',
  },
  SECURITY_BREACH: {
    code: 'SEC',
    nameKey: 'incidents.categories.securityBreach',
    severity: 'CRITICAL',
    color: '#CC0000',
    description: 'Aviation security violation',
  },
  FACILITY_MAINTENANCE: {
    code: 'FM',
    nameKey: 'incidents.categories.facilityMaintenance',
    severity: 'MEDIUM',
    color: '#0066CC', // Aviation blue
    description: 'Airport infrastructure maintenance issue',
  },
  GROUND_HANDLING: {
    code: 'GH',
    nameKey: 'incidents.categories.groundHandling',
    severity: 'MEDIUM',
    color: '#FF9900', // Warning yellow-orange
    description: 'Ground support equipment or handling issue',
  },
  PASSENGER_SAFETY: {
    code: 'PS',
    nameKey: 'incidents.categories.passengerSafety',
    severity: 'HIGH',
    color: '#FF6600',
    description: 'Passenger safety or medical emergency',
  },
  ENVIRONMENTAL: {
    code: 'ENV',
    nameKey: 'incidents.categories.environmental',
    severity: 'LOW',
    color: '#006600', // Aviation green
    description: 'Environmental or housekeeping concern',
  },
  OTHER: {
    code: 'OTH',
    nameKey: 'incidents.categories.other',
    severity: 'LOW',
    color: '#666666',
    description: 'Other operational concern',
  },
};

export const theme = {
  colors: {
    // OACI Standard Aviation Colors
    aviation: {
      blue: '#003F87',        // ICAO International Civil Aviation Blue
      orange: '#FF6600',      // Aviation safety orange
      red: '#CC0000',         // Aviation danger red
      yellow: '#FFD700',      // Aviation warning yellow
      green: '#006600',       // Aviation safe/go green
    },
    // Accent color - Aviation Gold (for CTA, icons, badges)
    accent: {
      main: '#D4AF37',        // Aviation gold - Professional
      light: '#EDD382',       // Light gold
      dark: '#AA8A2E',        // Dark gold
      contrast: '#1F2937',    // Gray 800 - Dark text on gold
    },
    // Neutral palette - Grays
    gray: {
      50: '#F9FAFB',          // Very light gray
      100: '#F3F4F6',         // Light gray background
      200: '#E5E7EB',         // Light gray borders
      300: '#D1D5DB',         // Medium-light gray
      400: '#9CA3AF',         // Medium gray
      500: '#6B7280',         // Medium gray text
      600: '#4B5563',         // Dark gray text
      700: '#374151',         // Very dark gray
      800: '#1F2937',         // Almost black
      900: '#111827',         // Pure dark
    },
    // Semantic colors (aviation-aligned)
    success: {
      main: '#006600',        // Aviation green - Safe/Go
      light: '#059669',       // Emerald 600
      dark: '#047857',        // Emerald 700
      contrast: '#ffffff',
    },
    warning: {
      main: '#FF9900',        // Aviation orange-yellow - Caution
      light: '#FFB84D',       // Light warning
      dark: '#CC7A00',        // Dark warning
      contrast: '#1F2937',
    },
    error: {
      main: '#CC0000',        // Aviation red - Danger/Stop
      light: '#EF4444',       // Red 500
      dark: '#991B1B',        // Red 800
      contrast: '#ffffff',
    },
    info: {
      main: '#003F87',        // OACI blue - Information
      light: '#3B82F6',       // Blue 500
      dark: '#1E3A8A',        // Blue 900
      contrast: '#ffffff',
    },
    // Backgrounds
    background: {
      default: '#FFFFFF',     // Pure white
      paper: '#F9FAFB',       // Very light gray (gray-50)
      elevated: '#FFFFFF',    // White with shadow
    },
    // Text colors
    text: {
      primary: '#111827',     // Gray 900 - Almost black
      secondary: '#6B7280',   // Gray 500 - Medium gray
      disabled: '#9CA3AF',    // Gray 400
      inverse: '#FFFFFF',     // White text
    },
    // Borders & Dividers
    border: {
      light: '#F3F4F6',       // Gray 100
      main: '#E5E7EB',        // Gray 200
      dark: '#D1D5DB',        // Gray 300
    },
    divider: '#E5E7EB',       // Gray 200
  },
  // Modern shadows (subtle and refined)
  shadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  // Border radius scale
  radius: {
    none: '0',
    sm: '4px',
    DEFAULT: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
  },
  // Precise spacing scale (4px base)
  spacing: {
    0: '0',
    1: '4px',      // 0.25rem
    2: '8px',      // 0.5rem
    3: '12px',     // 0.75rem
    4: '16px',     // 1rem
    5: '20px',     // 1.25rem
    6: '24px',     // 1.5rem
    8: '32px',     // 2rem
    10: '40px',    // 2.5rem
    12: '48px',    // 3rem
    16: '64px',    // 4rem
    20: '80px',    // 5rem
    24: '96px',    // 6rem
  },
  // Aviation-standard typography (Roboto/Inter for readability)
  // OACI Doc 8126 - AIS Abbreviations and Codes
  typography: {
    fontFamily: {
      sans: "'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
      aviation: "'Roboto Mono', 'Courier New', monospace", // For flight numbers, codes
    },
    // Display - Large hero text
    display: {
      fontSize: '56px',       // 3.5rem
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    // Headings
    h1: {
      fontSize: '48px',       // 3rem
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: '36px',       // 2.25rem
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '30px',       // 1.875rem
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '0',
    },
    h4: {
      fontSize: '24px',       // 1.5rem
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0',
    },
    h5: {
      fontSize: '20px',       // 1.25rem
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    h6: {
      fontSize: '18px',       // 1.125rem
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    // Body text
    large: {
      fontSize: '18px',       // 1.125rem
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0',
    },
    base: {
      fontSize: '16px',       // 1rem
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    small: {
      fontSize: '14px',       // 0.875rem
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    tiny: {
      fontSize: '12px',       // 0.75rem
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    // Special
    button: {
      fontSize: '15px',       // 0.9375rem
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: '0.01em',
    },
    caption: {
      fontSize: '12px',       // 0.75rem
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.02em',
      textTransform: 'uppercase' as const,
    },
  },
  breakpoints: {
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  transitions: {
    duration: {
      shortest: '150ms',
      shorter: '200ms',
      short: '250ms',
      standard: '300ms',
      complex: '375ms',
      enteringScreen: '225ms',
      leavingScreen: '195ms',
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
};

// Passenger class colors (aviation-aligned)
export const passengerClassColors = {
  economy: {
    primary: '#6B7280',      // Gray 500 - Standard class
    light: '#9CA3AF',        // Gray 400
    background: '#F9FAFB',   // Gray 50
    border: '#E5E7EB',       // Gray 200
  },
  business: {
    primary: '#003F87',      // OACI blue - Premium class
    light: '#3B82F6',        // Blue 500
    background: '#EFF6FF',   // Blue 50
    border: '#BFDBFE',       // Blue 200
  },
  first: {
    primary: '#D4AF37',      // Aviation gold - Luxury class
    light: '#EDD382',        // Light gold
    background: '#FFFBEB',   // Amber 50
    border: '#FDE68A',       // Amber 200
  },
};

// Location type colors (aviation-standardized)
// Based on IATA Airport Handling Manual (AHM) color conventions
export const locationColors = {
  gate: "#003F87",           // OACI blue - Gates/Boarding
  checkin: "#0891B2",        // Cyan 600 - Check-in counters
  security: "#CC0000",       // Aviation red - Security checkpoints
  customs: "#8B5CF6",        // Violet 500 - Customs/Immigration
  toilet: "#14B8A6",         // Teal 500 - Facilities
  restaurant: "#FF6600",     // Aviation orange - Food & Beverage
  shop: "#EC4899",           // Pink 500 - Retail
  information: "#006600",    // Aviation green - Information
  exit: "#6B7280",           // Gray 500 - Exits
  entrance: "#374151",       // Gray 700 - Entrances
  lounge: "#D4AF37",         // Aviation gold - Premium lounges
  baggage: "#92400E",        // Brown - Baggage claim
  parking: "#5B21B6",        // Purple 800 - Parking areas
  medical: "#CC0000",        // Aviation red - Medical services
  prayer: "#7C3AED",         // Violet 600 - Prayer rooms
  smoking: "#9CA3AF",        // Gray 400 - Smoking areas
  atm: "#047857",            // Emerald 700 - ATM/Banking
  wifi: "#0891B2",           // Cyan 600 - WiFi zones
  charging: "#FFD700",       // Aviation yellow - Charging stations
};

// Airport operational zones (for geolocation precision)
export const airportZones = {
  AIRSIDE: {
    code: 'AS',
    nameKey: 'zones.airside',
    description: 'Restricted area - Beyond security',
    accessLevel: 'RESTRICTED',
  },
  LANDSIDE: {
    code: 'LS',
    nameKey: 'zones.landside',
    description: 'Public area - Before security',
    accessLevel: 'PUBLIC',
  },
  TERMINAL: {
    code: 'T',
    nameKey: 'zones.terminal',
    description: 'Terminal building',
    accessLevel: 'PUBLIC',
  },
  APRON: {
    code: 'AP',
    nameKey: 'zones.apron',
    description: 'Aircraft parking area',
    accessLevel: 'RESTRICTED',
  },
  RUNWAY: {
    code: 'RWY',
    nameKey: 'zones.runway',
    description: 'Runway and taxiway system',
    accessLevel: 'RESTRICTED',
  },
  CARGO: {
    code: 'CG',
    nameKey: 'zones.cargo',
    description: 'Cargo handling area',
    accessLevel: 'RESTRICTED',
  },
};
