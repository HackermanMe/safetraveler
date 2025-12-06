"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Location } from "@/lib/types";

interface AirportMapProps {
  locations: Location[];
  selectedLocation?: string;
  onLocationSelect?: (locationId: string) => void;
  showRoute?: [number, number][];
  currentFloor?: number;
}

export default function AirportMap({
  locations,
  selectedLocation,
  onLocationSelect,
  showRoute,
  currentFloor = 0,
}: AirportMapProps) {
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
      center: [1.2549, 6.1659], // Lomé Airport coordinates
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

  // Add markers for locations
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    // Remove existing markers
    Object.values(markers.current).forEach((marker) => marker.remove());
    markers.current = {};

    // Filter locations by current floor
    const floorLocations = locations.filter((loc) => loc.floor === currentFloor);

    floorLocations.forEach((location) => {
      const el = document.createElement("div");
      el.className = "location-marker";
      el.style.width = "30px";
      el.style.height = "30px";
      el.style.cursor = "pointer";
      el.innerHTML = getMarkerIcon(location.type);

      if (selectedLocation === location.id) {
        el.classList.add("selected");
      }

      const marker = new mapboxgl.Marker(el)
        .setLngLat(location.coordinates as [number, number])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div class="p-2">
              <h3 class="font-bold text-sm">${location.name}</h3>
              <p class="text-xs text-gray-600">${location.description || ""}</p>
            </div>`
          )
        )
        .addTo(map.current!);

      el.addEventListener("click", () => {
        if (onLocationSelect) {
          onLocationSelect(location.id);
        }
      });

      markers.current[location.id] = marker;
    });
  }, [locations, mapLoaded, currentFloor, selectedLocation, onLocationSelect]);

  // Draw route if provided
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
        "line-color": "#2563eb",
        "line-width": 4,
        "line-opacity": 0.8,
      },
    });

    // Fit map to route bounds
    const bounds = showRoute.reduce(
      (bounds, coord) => bounds.extend(coord as [number, number]),
      new mapboxgl.LngLatBounds(showRoute[0] as [number, number], showRoute[0] as [number, number])
    );

    map.current.fitBounds(bounds, {
      padding: 50,
    });

    return () => {
      if (map.current && map.current.getSource(routeId)) {
        map.current.removeLayer(routeId);
        map.current.removeSource(routeId);
      }
    };
  }, [showRoute, mapLoaded]);

  return (
    <>
      <div ref={mapContainer} className="w-full h-full" />
      <style jsx global>{`
        .location-marker {
          background-size: contain;
          background-repeat: no-repeat;
          transition: transform 0.2s;
        }
        .location-marker:hover {
          transform: scale(1.2);
        }
        .location-marker.selected {
          transform: scale(1.3);
        }
        .mapboxgl-popup-content {
          padding: 0;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
}

function getMarkerIcon(type: string): string {
  const icons: { [key: string]: string } = {
    gate: "✈️",
    checkin: "🎫",
    security: "🛡️",
    customs: "🛃",
    toilet: "🚻",
    restaurant: "🍴",
    shop: "🛍️",
    information: "ℹ️",
    exit: "🚪",
    entrance: "🚪",
    lounge: "🛋️",
    baggage: "🧳",
    parking: "🅿️",
    medical: "⚕️",
    prayer: "🕌",
    smoking: "🚬",
    atm: "💳",
    wifi: "📶",
    charging: "🔌",
  };

  const emoji = icons[type] || "📍";
  return `<span style="font-size: 20px;">${emoji}</span>`;
}
