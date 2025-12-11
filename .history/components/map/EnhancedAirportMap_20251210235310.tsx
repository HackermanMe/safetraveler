"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Location, LocationType } from "@/lib/types";
import { locationColors as themeLocationColors, theme } from "@/lib/config/theme";

interface EnhancedAirportMapProps {
  locations: Location[];
  selectedLocation?: string;
  onLocationSelect?: (locationId: string) => void;
  showRoute?: [number, number][];
  currentFloor?: number;
}

// Use location colors from theme
const locationColors = themeLocationColors;

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
  const imageCache = useRef<Map<string, HTMLImageElement>>(new Map());

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.error("Mapbox token is missing");
      return;
    }

    mapboxgl.accessToken = token;

    // Create map with Streets style for Gnassingbé Eyadéma Airport (LFW)
    // Gnassingbé Eyadéma Airport coordinates: [1.2549, 6.1659]
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12", // Streets style for detailed street map
      center: [1.2549, 6.1659], // Gnassingbé Eyadéma Airport (LFW) coordinates - Lomé, Togo
      zoom: 15.5, // Appropriate zoom level for airport overview
      pitch: 0,
      bearing: 0,
      attributionControl: true, // Show Mapbox attribution
      minZoom: 11, // Allow zooming out to see surrounding area
      maxZoom: 20, // Allow detailed zoom
    });

    // Add controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        showCompass: true,
        showZoom: true,
        visualizePitch: false,
      }),
      "top-right"
    );

    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
        showUserLocation: true,
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

  // Create SVG image for marker
  const createMarkerImage = (
    color: string,
    initial: string,
    isSelected: boolean
  ): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
      const imageId = `${color}-${initial}-${isSelected}`;
      
      if (imageCache.current.has(imageId)) {
        resolve(imageCache.current.get(imageId)!);
        return;
      }

      const pinHeadSize = isSelected ? 28 : 24;
      const pinPointSize = 12;
      const totalHeight = pinHeadSize + pinPointSize;
      const totalWidth = pinHeadSize;

      const svg = `
        <svg width="${totalWidth}" height="${totalHeight}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="shadow-${imageId}" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="${isSelected ? '2' : '1'}" stdDeviation="${isSelected ? '2' : '1.5'}" flood-opacity="0.3"/>
            </filter>
          </defs>
          <g filter="url(#shadow-${imageId})">
            <circle cx="${totalWidth / 2}" cy="${pinHeadSize / 2}" r="${pinHeadSize / 2 - 1}" fill="${color}" stroke="${isSelected ? '#fff' : 'rgba(255,255,255,0.9)'}" stroke-width="2"/>
            <path d="M ${totalWidth / 2 - pinPointSize / 2} ${pinHeadSize} L ${totalWidth / 2} ${totalHeight} L ${totalWidth / 2 + pinPointSize / 2} ${pinHeadSize} Z" fill="${color}"/>
            <text x="${totalWidth / 2}" y="${pinHeadSize / 2}" font-family="system-ui, -apple-system, sans-serif" font-size="${isSelected ? '14' : '12'}" font-weight="bold" fill="#fff" text-anchor="middle" dominant-baseline="central">${initial}</text>
          </g>
        </svg>
      `;

      const img = new Image();
      img.onload = () => {
        imageCache.current.set(imageId, img);
        resolve(img);
      };
      img.src = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
    });
  };

  // Add enhanced markers using Mapbox symbols (fixed size on zoom)
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    // Remove existing markers and layers
    Object.values(markers.current).forEach((marker) => marker.remove());
    markers.current = {};

    const sourceId = "locations-source";
    const layerId = "locations-layer";

    // Remove existing source and layer if they exist
    if (map.current.getLayer(layerId)) {
      map.current.removeLayer(layerId);
    }
    if (map.current.getSource(sourceId)) {
      map.current.removeSource(sourceId);
    }

    const floorLocations = locations.filter((loc) => loc.floor === currentFloor);

    // Create GeoJSON features
    const features = floorLocations.map((location) => ({
      type: "Feature" as const,
      geometry: {
        type: "Point" as const,
        coordinates: location.coordinates,
      },
      properties: {
        id: location.id,
        name: location.name,
        type: location.type,
        description: location.description || "",
        status: location.status || "",
        color: locationColors[location.type] || "#757575",
        initial: getLocationInitial(location.type),
        isSelected: selectedLocation === location.id,
      },
    }));

    // Add source
    map.current.addSource(sourceId, {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features,
      },
    });

    // Load images and add layer
    const loadImagesAndAddLayer = async () => {
      if (!map.current) return;

      const uniqueMarkers = new Set<string>();
      floorLocations.forEach((location) => {
        const color = locationColors[location.type] || "#757575";
        const initial = getLocationInitial(location.type);
        const isSelected = selectedLocation === location.id;
        uniqueMarkers.add(`${color}-${initial}-${isSelected}`);
      });

      // Load all unique marker images
      await Promise.all(
        Array.from(uniqueMarkers).map(async (key) => {
          if (!map.current) return;
          const [color, initial, selected] = key.split("-");
          const isSelected = selected === "true";
          const imageId = `marker-${key}`;
          const img = await createMarkerImage(color, initial, isSelected);
          
          if (!map.current.hasImage(imageId)) {
            map.current.addImage(imageId, img);
          }
        })
      );

      if (!map.current) return;

      // Add layer with fixed icon size (doesn't scale with zoom)
      if (!map.current.getLayer(layerId)) {
        map.current.addLayer({
          id: layerId,
          type: "symbol",
          source: sourceId,
          layout: {
            "icon-image": [
              "case",
              ["get", "isSelected"],
              [
                "concat",
                "marker-",
                ["get", "color"],
                "-",
                ["get", "initial"],
                "-true"
              ],
              [
                "concat",
                "marker-",
                ["get", "color"],
                "-",
                ["get", "initial"],
                "-false"
              ]
            ],
            "icon-size": 1, // Fixed size - doesn't scale with zoom
            "icon-anchor": "bottom",
            "icon-allow-overlap": true,
            "icon-ignore-placement": true,
          },
        });
      }

      // Define event handlers
      const clickHandler = (e: mapboxgl.MapLayerMouseEvent) => {
        if (!e.features || !e.features[0] || !map.current) return;

        const props = e.features[0].properties;
        if (!props) return;

        const color = props.color as string;
        const coordinates = (e.features[0].geometry as any).coordinates.slice();
        const location = floorLocations.find((loc) => loc.id === props.id);

        if (!location) return;

        if (onLocationSelect) {
          onLocationSelect(location.id);
        }

        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: false,
          maxWidth: "300px",
        })
          .setLngLat(coordinates as [number, number])
          .setHTML(`
            <div style="padding: 12px;">
              <div style="display: flex; align-items: center; margin-bottom: 8px;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background-color: ${color}; border: 2px solid ${color}; margin-right: 12px; flex-shrink: 0;"></div>
                <div>
                  <h3 style="font-weight: 600; font-size: 16px; margin: 0; color: #1f2937;">${location.name}</h3>
                  <p style="font-size: 12px; color: #6b7280; margin: 0;">${getLocationTypeLabel(location.type)}</p>
                </div>
              </div>
              ${location.description ? `<p style="font-size: 14px; color: #4b5563; margin: 0;">${location.description}</p>` : ""}
              ${location.status ? `<div style="margin-top: 8px; padding: 4px 8px; background-color: ${getStatusColor(location.status)}20; color: ${getStatusColor(location.status)}; border-radius: 4px; font-size: 12px; display: inline-block; font-weight: 500;">${getStatusLabel(location.status)}</div>` : ""}
            </div>
          `)
          .addTo(map.current);
      };

      const mouseEnterHandler = () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = "pointer";
        }
      };

      const mouseLeaveHandler = () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = "";
        }
      };

      // Add event handlers
      map.current.on("click", layerId, clickHandler);
      map.current.on("mouseenter", layerId, mouseEnterHandler);
      map.current.on("mouseleave", layerId, mouseLeaveHandler);

      // Store handlers for cleanup
      (map.current as any)._markerHandlers = {
        click: clickHandler,
        mouseenter: mouseEnterHandler,
        mouseleave: mouseLeaveHandler,
      };
    };

    loadImagesAndAddLayer();

    return () => {
      if (map.current) {
        const handlers = (map.current as any)._markerHandlers;
        if (handlers) {
          map.current.off("click", layerId, handlers.click);
          map.current.off("mouseenter", layerId, handlers.mouseenter);
          map.current.off("mouseleave", layerId, handlers.mouseleave);
          delete (map.current as any)._markerHandlers;
        }
        if (map.current.getLayer(layerId)) {
          map.current.removeLayer(layerId);
        }
        if (map.current.getSource(sourceId)) {
          map.current.removeSource(sourceId);
        }
      }
    };
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
        "line-color": theme.colors.accent.main, // Yellow accent for routes
        "line-width": 6,
        "line-opacity": 0.9,
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
    open: theme.colors.success.main,
    closed: theme.colors.error.main,
    busy: theme.colors.warning.main,
  };
  return colors[status] || theme.colors.gray[500];
}

function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    open: "Ouvert",
    closed: "Fermé",
    busy: "Affluence",
  };
  return labels[status] || status;
}
