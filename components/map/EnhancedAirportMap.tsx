"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Location, LocationType } from "@/lib/types";

interface EnhancedAirportMapProps {
  locations: Location[];
  selectedLocation?: string;
  onLocationSelect?: (locationId: string) => void;
  showRoute?: [number, number][];
  currentFloor?: number;
}

// Couleurs Material Design pour chaque type de location
const locationColors: Record<LocationType, string> = {
  gate: "#1976d2",           // Blue
  checkin: "#0288d1",        // Light Blue
  security: "#f57c00",       // Orange
  customs: "#7b1fa2",        // Purple
  toilet: "#00897b",         // Teal
  restaurant: "#e64a19",     // Deep Orange
  shop: "#c2185b",           // Pink
  information: "#388e3c",    // Green
  exit: "#616161",           // Grey
  entrance: "#424242",       // Dark Grey
  lounge: "#d4af37",         // Gold
  baggage: "#5d4037",        // Brown
  parking: "#455a64",        // Blue Grey
  medical: "#d32f2f",        // Red
  prayer: "#512da8",         // Deep Purple
  smoking: "#757575",        // Grey
  atm: "#00796b",            // Teal
  wifi: "#0097a7",           // Cyan
  charging: "#fbc02d",       // Yellow
};

export default function EnhancedAirportMap({
  locations,
  selectedLocation,
  onLocationSelect,
  showRoute,
  currentFloor = 0,
}: EnhancedAirportMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.error("Mapbox token is missing");
      return;
    }

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [1.2549, 6.1659],
      zoom: 17,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      }),
      "top-right"
    );

    map.current.on("load", () => {
      setMapLoaded(true);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Add enhanced markers
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    Object.values(markers.current).forEach((marker) => marker.remove());
    markers.current = {};

    const floorLocations = locations.filter((loc) => loc.floor === currentFloor);

    floorLocations.forEach((location) => {
      const color = locationColors[location.type] || "#757575";
      const isSelected = selectedLocation === location.id;

      // Create custom marker element
      const el = document.createElement("div");
      el.className = "custom-marker";
      el.style.width = isSelected ? "48px" : "40px";
      el.style.height = isSelected ? "48px" : "40px";
      el.style.cursor = "pointer";
      el.style.borderRadius = "50%";
      el.style.backgroundColor = color;
      el.style.border = `3px solid ${isSelected ? "#fff" : "rgba(255,255,255,0.9)"}`;
      el.style.boxShadow = isSelected
        ? "0 4px 12px rgba(0,0,0,0.3)"
        : "0 2px 8px rgba(0,0,0,0.2)";
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      el.style.transition = "all 0.2s ease";
      el.style.color = "#fff";
      el.style.fontSize = isSelected ? "20px" : "16px";
      el.style.fontWeight = "bold";
      el.innerHTML = getLocationInitial(location.type);

      el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.15)";
        el.style.zIndex = "1000";
      });

      el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        el.style.zIndex = "1";
      });

      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
        maxWidth: "300px",
      }).setHTML(`
        <div style="padding: 12px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <div style="width: 32px; height: 32px; border-radius: 50%; background-color: ${color}; display: flex; align-items: center; justify-center; color: white; font-weight: bold; margin-right: 12px;">
              ${getLocationInitial(location.type)}
            </div>
            <div>
              <h3 style="font-weight: 600; font-size: 16px; margin: 0; color: #1f2937;">${location.name}</h3>
              <p style="font-size: 12px; color: #6b7280; margin: 0;">${getLocationTypeLabel(location.type)}</p>
            </div>
          </div>
          ${location.description ? `<p style="font-size: 14px; color: #4b5563; margin: 0;">${location.description}</p>` : ""}
          ${location.status ? `<div style="margin-top: 8px; padding: 4px 8px; background-color: ${getStatusColor(location.status)}20; color: ${getStatusColor(location.status)}; border-radius: 4px; font-size: 12px; display: inline-block; font-weight: 500;">${getStatusLabel(location.status)}</div>` : ""}
        </div>
      `);

      const marker = new mapboxgl.Marker(el)
        .setLngLat(location.coordinates as [number, number])
        .setPopup(popup)
        .addTo(map.current!);

      el.addEventListener("click", () => {
        if (onLocationSelect) {
          onLocationSelect(location.id);
        }
      });

      markers.current[location.id] = marker;
    });
  }, [locations, mapLoaded, currentFloor, selectedLocation, onLocationSelect]);

  // Draw route
  useEffect(() => {
    if (!map.current || !mapLoaded || !showRoute) return;

    const routeId = "route";

    if (map.current.getSource(routeId)) {
      map.current.removeLayer(routeId);
      map.current.removeSource(routeId);
    }

    map.current.addSource(routeId, {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: showRoute,
        },
      },
    });

    map.current.addLayer({
      id: routeId,
      type: "line",
      source: routeId,
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#1976d2",
        "line-width": 5,
        "line-opacity": 0.8,
      },
    });

    const bounds = showRoute.reduce(
      (bounds, coord) => bounds.extend(coord as [number, number]),
      new mapboxgl.LngLatBounds(showRoute[0] as [number, number], showRoute[0] as [number, number])
    );

    map.current.fitBounds(bounds, {
      padding: 80,
    });

    return () => {
      if (map.current && map.current.getSource(routeId)) {
        map.current.removeLayer(routeId);
        map.current.removeSource(routeId);
      }
    };
  }, [showRoute, mapLoaded]);

  return <div ref={mapContainer} className="w-full h-full rounded-lg" />;
}

function getLocationInitial(type: LocationType): string {
  const initials: Record<LocationType, string> = {
    gate: "G",
    checkin: "C",
    security: "S",
    customs: "D",
    toilet: "T",
    restaurant: "R",
    shop: "B",
    information: "i",
    exit: "E",
    entrance: "E",
    lounge: "L",
    baggage: "B",
    parking: "P",
    medical: "+",
    prayer: "P",
    smoking: "S",
    atm: "$",
    wifi: "W",
    charging: "⚡",
  };
  return initials[type] || "?";
}

function getLocationTypeLabel(type: LocationType): string {
  const labels: Record<LocationType, string> = {
    gate: "Porte d'embarquement",
    checkin: "Enregistrement",
    security: "Sécurité",
    customs: "Douane",
    toilet: "Toilettes",
    restaurant: "Restauration",
    shop: "Boutique",
    information: "Information",
    exit: "Sortie",
    entrance: "Entrée",
    lounge: "Salon",
    baggage: "Bagages",
    parking: "Parking",
    medical: "Médical",
    prayer: "Salle de prière",
    smoking: "Fumoir",
    atm: "Distributeur",
    wifi: "WiFi",
    charging: "Recharge",
  };
  return labels[type] || type;
}

function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    open: "#388e3c",
    closed: "#d32f2f",
    busy: "#f57c00",
  };
  return colors[status] || "#757575";
}

function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    open: "Ouvert",
    closed: "Fermé",
    busy: "Affluence",
  };
  return labels[status] || status;
}
