// API Configuration for ANAC Backend
// Connects SafeTraveler reporting to ANAC incident management system

export const API_CONFIG = {
  // Backend base URL - Update this based on your environment
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://anac-api.up.railway.app/api/v1',

  // Endpoints
  ENDPOINTS: {
    INCIDENTS: '/incidents',
    INCIDENT_BY_ID: (id: number) => `/incidents/${id}`,
    INCIDENT_BY_TRACKING: (trackingId: string) => `/incidents/tracking/${trackingId}`,
  },

  // Default headers
  HEADERS: {
    'Content-Type': 'application/json',
  },

  // Timeout in milliseconds
  TIMEOUT: 30000,
};

// Map SafeTraveler incident categories to backend TypeIncident enum
export const INCIDENT_TYPE_MAPPING: Record<string, string> = {
  'SECURITY_BREACH': 'SECURITY_BREACH',
  'FOD': 'FOD',
  'PASSENGER_SAFETY': 'PASSENGER_SAFETY',
  'FACILITY_MAINTENANCE': 'FACILITY_MAINTENANCE',
  'ENVIRONMENTAL': 'ENVIRONMENTAL',
  'OTHER': 'OTHER',
};
