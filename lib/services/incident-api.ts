// Incident API Service
// Handles communication with ANAC backend for incident reporting

import { API_CONFIG, INCIDENT_TYPE_MAPPING } from '../config/api';

export interface IncidentReportData {
  problemType: string;
  location: string;
  description: string;
  photo: string | null;
}

export interface IncidentResponse {
  id: number;
  trackingId: string;
  titre: string;
  description: string;
  typeIncident: string;
  statut: string | null;
  priorite: string;
  localisation?: string;
  latitude?: number | null;
  longitude?: number | null;
  photoUrl?: string;
  analyseIA?: string;
  createdAt?: string;
  updatedAt?: string;
  resolvedAt?: string | null;
  declareParId: number;
  declareParNom: string;
  declareParEmail: string;
  assigneAId?: number | null;
  assigneANom?: string | null;
  assigneAEmail?: string | null;
}

export interface ApiResponse<T> {
  timestamp: string;
  message: string;
  data: T;
  error: boolean;
}

/**
 * Submit an incident report to the ANAC backend
 * @param reportData - The incident report data from the form
 * @param userId - Optional user ID (for anonymous reports, use a default ID)
 * @returns Promise with the created incident response
 */
export async function submitIncidentReport(
  reportData: IncidentReportData,
  userId: number = 1 // Default user ID for anonymous reports
): Promise<IncidentResponse> {
  try {
    // Map the problem type to backend enum
    const typeIncident = INCIDENT_TYPE_MAPPING[reportData.problemType];

    if (!typeIncident) {
      throw new Error(`Invalid problem type: ${reportData.problemType}`);
    }

    // Create FormData for multipart upload
    const formData = new FormData();

    // Generate a title from the problem type
    const titre = getTitleFromProblemType(reportData.problemType);

    formData.append('titre', titre);
    formData.append('description', reportData.description);
    formData.append('typeIncident', typeIncident);
    formData.append('localisation', reportData.location);
    formData.append('declareParId', userId.toString());

    // Add photo if provided
    if (reportData.photo) {
      const photoBlob = await fetch(reportData.photo).then(r => r.blob());
      formData.append('photo', photoBlob, 'incident-photo.jpg');
    }

    // Make the API call
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.INCIDENTS}`, {
      method: 'POST',
      body: formData,
      // Don't set Content-Type header - browser will set it with boundary for multipart
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to submit incident: ${response.status} - ${errorText}`);
    }

    const result: ApiResponse<IncidentResponse> = await response.json();

    if (result.error) {
      throw new Error(result.message || 'Failed to submit incident');
    }

    return result.data;
  } catch (error) {
    console.error('Error submitting incident report:', error);
    throw error;
  }
}

/**
 * Get an incident by its tracking ID
 * @param trackingId - The UUID tracking ID
 * @returns Promise with the incident details
 */
export async function getIncidentByTrackingId(trackingId: string): Promise<IncidentResponse> {
  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.INCIDENT_BY_TRACKING(trackingId)}`,
      {
        method: 'GET',
        headers: API_CONFIG.HEADERS,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch incident: ${response.status}`);
    }

    const result: ApiResponse<IncidentResponse> = await response.json();

    if (result.error) {
      throw new Error(result.message || 'Failed to fetch incident');
    }

    return result.data;
  } catch (error) {
    console.error('Error fetching incident:', error);
    throw error;
  }
}

/**
 * Generate a title from the problem type
 */
function getTitleFromProblemType(problemType: string): string {
  const titles: Record<string, string> = {
    'SECURITY_BREACH': 'Incident de sécurité',
    'FOD': 'Corps étranger détecté',
    'PASSENGER_SAFETY': 'Problème de sécurité passager',
    'FACILITY_MAINTENANCE': 'Problème de maintenance',
    'ENVIRONMENTAL': 'Problème environnemental',
    'OTHER': 'Autre incident',
  };

  return titles[problemType] || 'Incident signalé';
}
