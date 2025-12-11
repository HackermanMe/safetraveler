// SafeTraveler Design System - Modern & Accessible
export const theme = {
  colors: {
    // Accent color - Yellow/Gold (for CTA, icons, badges)
    accent: {
      main: '#F59E0B',        // Amber 500 - Main yellow
      light: '#FCD34D',       // Amber 300 - Light yellow
      dark: '#D97706',        // Amber 600 - Dark yellow/gold
      contrast: '#1F2937',    // Gray 800 - Dark text on yellow
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
    // Semantic colors (minimal use)
    success: {
      main: '#10B981',        // Green 500
      light: '#34D399',       // Green 400
      dark: '#059669',        // Green 600
      contrast: '#ffffff',
    },
    warning: {
      main: '#F59E0B',        // Amber 500 (same as accent)
      light: '#FCD34D',
      dark: '#D97706',
      contrast: '#1F2937',
    },
    error: {
      main: '#EF4444',        // Red 500
      light: '#F87171',       // Red 400
      dark: '#DC2626',        // Red 600
      contrast: '#ffffff',
    },
    info: {
      main: '#3B82F6',        // Blue 500
      light: '#60A5FA',       // Blue 400
      dark: '#2563EB',        // Blue 600
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
  // Modern typography scale (Roboto/Inter)
  typography: {
    fontFamily: {
      sans: "'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
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

// Passenger class colors (aligned with new design system)
export const passengerClassColors = {
  economy: {
    primary: '#6B7280',      // Gray 500
    light: '#9CA3AF',        // Gray 400
    background: '#F9FAFB',   // Gray 50
    border: '#E5E7EB',       // Gray 200
  },
  business: {
    primary: '#3B82F6',      // Blue 500
    light: '#60A5FA',        // Blue 400
    background: '#EFF6FF',   // Blue 50
    border: '#BFDBFE',       // Blue 200
  },
  first: {
    primary: '#F59E0B',      // Amber 500 (accent yellow)
    light: '#FCD34D',        // Amber 300
    background: '#FFFBEB',   // Amber 50
    border: '#FDE68A',       // Amber 200
  },
};

// Location type colors (refined and cohesive)
export const locationColors = {
  gate: "#3B82F6",           // Blue 500
  checkin: "#06B6D4",        // Cyan 500
  security: "#F97316",       // Orange 500
  customs: "#8B5CF6",        // Violet 500
  toilet: "#14B8A6",         // Teal 500
  restaurant: "#EF4444",     // Red 500
  shop: "#EC4899",           // Pink 500
  information: "#10B981",    // Green 500
  exit: "#6B7280",           // Gray 500
  entrance: "#374151",       // Gray 700
  lounge: "#F59E0B",         // Amber 500 (accent)
  baggage: "#92400E",        // Amber 800
  parking: "#8B5CF6",        // Violet 500 (purple)
  medical: "#DC2626",        // Red 600
  prayer: "#7C3AED",         // Violet 600
  smoking: "#9CA3AF",        // Gray 400
  atm: "#059669",            // Emerald 600
  wifi: "#0891B2",           // Cyan 600
  charging: "#FBBF24",       // Amber 400
};
