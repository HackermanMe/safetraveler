(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/map/EnhancedAirportMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnhancedAirportMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/theme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Use location colors from theme
const locationColors = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationColors"];
function EnhancedAirportMap({ locations, selectedLocation, onLocationSelect, showRoute, currentFloor = 0 }) {
    _s();
    const mapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const [mapLoaded, setMapLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedAirportMap.useEffect": ()=>{
            if (!mapContainer.current || map.current) return;
            const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYm9iMTIxMyIsImEiOiJjbWVlcXc3MzcwajN2MmxzYXVka3VxM2hoIn0.UPSA0mrxW5qYD0SarZWtYQ");
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = token;
            // Create map with improved style for Lomé Airport
            map.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: [
                    1.2549,
                    6.1659
                ],
                zoom: 17.5,
                pitch: 0,
                bearing: 0,
                attributionControl: false,
                minZoom: 15,
                maxZoom: 20
            });
            // Add controls
            map.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NavigationControl({
                showCompass: true,
                showZoom: true,
                visualizePitch: false
            }), "top-right");
            map.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true,
                showUserHeading: true,
                showUserLocation: true
            }), "top-right");
            map.current.on("load", {
                "EnhancedAirportMap.useEffect": ()=>{
                    setMapLoaded(true);
                }
            }["EnhancedAirportMap.useEffect"]);
            return ({
                "EnhancedAirportMap.useEffect": ()=>{
                    if (map.current) {
                        map.current.remove();
                        map.current = null;
                    }
                }
            })["EnhancedAirportMap.useEffect"];
        }
    }["EnhancedAirportMap.useEffect"], []);
    // Add enhanced markers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedAirportMap.useEffect": ()=>{
            if (!map.current || !mapLoaded) return;
            Object.values(markers.current).forEach({
                "EnhancedAirportMap.useEffect": (marker)=>marker.remove()
            }["EnhancedAirportMap.useEffect"]);
            markers.current = {};
            const floorLocations = locations.filter({
                "EnhancedAirportMap.useEffect.floorLocations": (loc)=>loc.floor === currentFloor
            }["EnhancedAirportMap.useEffect.floorLocations"]);
            floorLocations.forEach({
                "EnhancedAirportMap.useEffect": (location)=>{
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
                    el.style.boxShadow = isSelected ? "0 4px 12px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.2)";
                    el.style.display = "flex";
                    el.style.alignItems = "center";
                    el.style.justifyContent = "center";
                    el.style.transition = "all 0.2s ease";
                    el.style.color = "#fff";
                    el.style.fontSize = isSelected ? "20px" : "16px";
                    el.style.fontWeight = "bold";
                    el.innerHTML = getLocationInitial(location.type);
                    el.addEventListener("mouseenter", {
                        "EnhancedAirportMap.useEffect": ()=>{
                            el.style.transform = "scale(1.15)";
                            el.style.zIndex = "1000";
                        }
                    }["EnhancedAirportMap.useEffect"]);
                    el.addEventListener("mouseleave", {
                        "EnhancedAirportMap.useEffect": ()=>{
                            el.style.transform = "scale(1)";
                            el.style.zIndex = "1";
                        }
                    }["EnhancedAirportMap.useEffect"]);
                    const popup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                        offset: 25,
                        closeButton: false,
                        maxWidth: "300px"
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
                    const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker(el).setLngLat(location.coordinates).setPopup(popup).addTo(map.current);
                    el.addEventListener("click", {
                        "EnhancedAirportMap.useEffect": ()=>{
                            if (onLocationSelect) {
                                onLocationSelect(location.id);
                            }
                        }
                    }["EnhancedAirportMap.useEffect"]);
                    markers.current[location.id] = marker;
                }
            }["EnhancedAirportMap.useEffect"]);
        }
    }["EnhancedAirportMap.useEffect"], [
        locations,
        mapLoaded,
        currentFloor,
        selectedLocation,
        onLocationSelect
    ]);
    // Draw route
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedAirportMap.useEffect": ()=>{
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
                        coordinates: showRoute
                    }
                }
            });
            map.current.addLayer({
                id: routeId,
                type: "line",
                source: routeId,
                layout: {
                    "line-join": "round",
                    "line-cap": "round"
                },
                paint: {
                    "line-color": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main,
                    "line-width": 6,
                    "line-opacity": 0.9
                }
            });
            const bounds = showRoute.reduce({
                "EnhancedAirportMap.useEffect.bounds": (bounds, coord)=>bounds.extend(coord)
            }["EnhancedAirportMap.useEffect.bounds"], new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LngLatBounds(showRoute[0], showRoute[0]));
            map.current.fitBounds(bounds, {
                padding: 80
            });
            return ({
                "EnhancedAirportMap.useEffect": ()=>{
                    if (map.current && map.current.getSource(routeId)) {
                        map.current.removeLayer(routeId);
                        map.current.removeSource(routeId);
                    }
                }
            })["EnhancedAirportMap.useEffect"];
        }
    }["EnhancedAirportMap.useEffect"], [
        showRoute,
        mapLoaded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapContainer,
        className: "w-full h-full rounded-lg"
    }, void 0, false, {
        fileName: "[project]/components/map/EnhancedAirportMap.tsx",
        lineNumber: 224,
        columnNumber: 10
    }, this);
}
_s(EnhancedAirportMap, "+MSU2QggOeQC3qAg8KxJ2m7PJ18=");
_c = EnhancedAirportMap;
function getLocationInitial(type) {
    const initials = {
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
        charging: "⚡"
    };
    return initials[type] || "?";
}
function getLocationTypeLabel(type) {
    const labels = {
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
        charging: "Recharge"
    };
    return labels[type] || type;
}
function getStatusColor(status) {
    const colors = {
        open: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.success.main,
        closed: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.error.main,
        busy: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.warning.main
    };
    return colors[status] || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.gray[500];
}
function getStatusLabel(status) {
    const labels = {
        open: "Ouvert",
        closed: "Fermé",
        busy: "Affluence"
    };
    return labels[status] || status;
}
var _c;
__turbopack_context__.k.register(_c, "EnhancedAirportMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateDistance",
    ()=>calculateDistance,
    "filterLocationsByType",
    ()=>filterLocationsByType,
    "findNearestLocation",
    ()=>findNearestLocation,
    "findRoute",
    ()=>findRoute
]);
function calculateDistance(point1, point2) {
    const [x1, y1] = point1;
    const [x2, y2] = point2;
    // For indoor coordinates, use simple Euclidean distance
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy) * 100000; // Convert to approximate meters
}
function findRoute(start, end, locations) {
    // Simple straight line route for MVP
    // In production, implement A* with actual walkable paths
    const distance = calculateDistance(start.coordinates, end.coordinates);
    const duration = Math.ceil(distance / 70); // Average walking speed ~70m/min
    const steps = generateRouteSteps(start, end, distance);
    return {
        id: `${start.id}-to-${end.id}`,
        start: start.id,
        end: end.id,
        distance,
        duration,
        floor: start.floor,
        accessible: true,
        path: [
            start.coordinates,
            end.coordinates
        ],
        instructions: steps
    };
}
/**
 * Generate turn-by-turn instructions
 */ function generateRouteSteps(start, end, distance) {
    const steps = [];
    // Start instruction
    steps.push({
        instruction: `Départ de ${start.name}`,
        distance: 0,
        icon: "start"
    });
    // Floor change if needed
    if (start.floor !== end.floor) {
        steps.push({
            instruction: `Prendre ${end.floor > start.floor ? "l'escalier montant" : "l'escalier descendant"} vers ${end.floor === 0 ? "le rez-de-chaussée" : `l'étage ${end.floor}`}`,
            distance: distance / 2,
            icon: "stairs",
            floor: end.floor
        });
    }
    // Main direction
    const direction = getDirection(start.coordinates, end.coordinates);
    steps.push({
        instruction: `Continuer ${direction} vers ${end.name}`,
        distance: distance * 0.8,
        icon: "arrow-right"
    });
    // Arrival
    steps.push({
        instruction: `Arrivée à ${end.name}`,
        distance: distance,
        icon: "check"
    });
    return steps;
}
/**
 * Get cardinal direction between two points
 */ function getDirection(from, to) {
    const [x1, y1] = from;
    const [x2, y2] = to;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angle >= -45 && angle < 45) return "vers l'est";
    if (angle >= 45 && angle < 135) return "vers le nord";
    if (angle >= 135 || angle < -135) return "vers l'ouest";
    return "vers le sud";
}
function filterLocationsByType(locations, type) {
    return locations.filter((loc)=>loc.type === type);
}
function findNearestLocation(currentPosition, locations, type) {
    let filteredLocations = locations;
    if (type) {
        filteredLocations = filterLocationsByType(locations, type);
    }
    if (filteredLocations.length === 0) return null;
    let nearest = filteredLocations[0];
    let minDistance = calculateDistance(currentPosition, nearest.coordinates);
    for (const location of filteredLocations){
        const distance = calculateDistance(currentPosition, location.coordinates);
        if (distance < minDistance) {
            minDistance = distance;
            nearest = location;
        }
    }
    return nearest;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/airport-data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"airport\":{\"name\":\"Aéroport International Gnassingbé Eyadéma\",\"code\":\"LFW\",\"city\":\"Lomé\",\"country\":\"Togo\",\"coordinates\":[1.2549,6.1659],\"capacity\":\"2 000 000 passagers/an\",\"hub\":\"ASKY Airlines\",\"distance_city\":\"6.8 km du centre-ville\"},\"locations\":[{\"id\":\"entrance-main\",\"name\":\"Entrée Principale\",\"type\":\"entrance\",\"floor\":0,\"coordinates\":[1.2545,6.1658],\"description\":\"Entrée principale du terminal international\",\"status\":\"open\"},{\"id\":\"entrance-vip\",\"name\":\"Entrée VIP\",\"type\":\"entrance\",\"floor\":0,\"coordinates\":[1.25455,6.1658],\"description\":\"Entrée réservée Business et Première Classe\",\"status\":\"open\",\"accessibleTo\":[\"business\",\"first\"]},{\"id\":\"checkin-economy\",\"name\":\"Enregistrement Zone A\",\"type\":\"checkin\",\"floor\":0,\"coordinates\":[1.2546,6.16585],\"description\":\"Comptoirs 1-20 - Classe Économique\",\"status\":\"open\",\"accessibleTo\":[\"economy\"]},{\"id\":\"checkin-business\",\"name\":\"Enregistrement Zone B\",\"type\":\"checkin\",\"floor\":0,\"coordinates\":[1.25465,6.16585],\"description\":\"Comptoirs 21-26 - Business & Première Classe\",\"status\":\"open\",\"accessibleTo\":[\"business\",\"first\"]},{\"id\":\"checkin-asky\",\"name\":\"Enregistrement ASKY Airlines\",\"type\":\"checkin\",\"floor\":0,\"coordinates\":[1.2547,6.16585],\"description\":\"Comptoirs dédiés ASKY Airlines (hub)\",\"status\":\"open\"},{\"id\":\"security-main\",\"name\":\"Contrôle de Sécurité Principal\",\"type\":\"security\",\"floor\":0,\"coordinates\":[1.25475,6.1659],\"description\":\"Point de contrôle sécurité et passeport\",\"status\":\"busy\"},{\"id\":\"security-fast\",\"name\":\"Contrôle Fast Track\",\"type\":\"security\",\"floor\":0,\"coordinates\":[1.2548,6.1659],\"description\":\"Voie rapide Business/Première Classe\",\"status\":\"open\",\"accessibleTo\":[\"business\",\"first\"]},{\"id\":\"gate-a1\",\"name\":\"Porte A1\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.2549,6.16595],\"description\":\"Vols internationaux - Air France, Brussels Airlines\",\"status\":\"open\"},{\"id\":\"gate-a2\",\"name\":\"Porte A2\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.25495,6.16595],\"description\":\"Vols internationaux - Ethiopian Airlines\",\"status\":\"open\"},{\"id\":\"gate-a3\",\"name\":\"Porte A3\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.255,6.16595],\"description\":\"Vols internationaux - Turkish Airlines\",\"status\":\"open\"},{\"id\":\"gate-a4\",\"name\":\"Porte A4\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.25505,6.16595],\"description\":\"Vols internationaux - Royal Air Maroc\",\"status\":\"open\"},{\"id\":\"gate-a5\",\"name\":\"Porte A5\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.2551,6.16595],\"description\":\"Vols internationaux - ASKY Airlines\",\"status\":\"open\"},{\"id\":\"gate-a6\",\"name\":\"Porte A6\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.25515,6.16595],\"description\":\"Vols internationaux - Emirates, Air Côte d'Ivoire\",\"status\":\"open\"},{\"id\":\"gate-b1\",\"name\":\"Porte B1\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.2549,6.166],\"description\":\"Vols régionaux - Destinations Afrique de l'Ouest\",\"status\":\"open\"},{\"id\":\"gate-b2\",\"name\":\"Porte B2\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.25495,6.166],\"description\":\"Vols domestiques\",\"status\":\"open\"},{\"id\":\"gate-b3\",\"name\":\"Porte B3\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.255,6.166],\"description\":\"Vols régionaux - ASKY Airlines\",\"status\":\"open\"},{\"id\":\"baggage-1\",\"name\":\"Tapis 1 - Arrivées Internationales\",\"type\":\"baggage\",\"floor\":0,\"coordinates\":[1.2552,6.16575],\"description\":\"Récupération bagages vols internationaux\",\"status\":\"open\"},{\"id\":\"baggage-2\",\"name\":\"Tapis 2 - Arrivées Régionales\",\"type\":\"baggage\",\"floor\":0,\"coordinates\":[1.25525,6.16575],\"description\":\"Récupération bagages vols régionaux\",\"status\":\"open\"},{\"id\":\"customs-arrival\",\"name\":\"Douane Arrivées\",\"type\":\"customs\",\"floor\":0,\"coordinates\":[1.2553,6.16575],\"description\":\"Contrôle douanier pour arrivées internationales\",\"status\":\"open\"},{\"id\":\"info-main\",\"name\":\"Information Principale\",\"type\":\"information\",\"floor\":0,\"coordinates\":[1.25455,6.16585],\"description\":\"Renseignements, objets trouvés, assistance\",\"status\":\"open\"},{\"id\":\"info-gates\",\"name\":\"Information Zone Embarquement\",\"type\":\"information\",\"floor\":1,\"coordinates\":[1.255,6.1659],\"description\":\"Informations vols et assistance embarquement\",\"status\":\"open\"},{\"id\":\"toilet-arrival\",\"name\":\"Toilettes Zone Arrivées\",\"type\":\"toilet\",\"floor\":0,\"coordinates\":[1.25515,6.16575],\"description\":\"Toilettes accessibles PMR\",\"status\":\"open\"},{\"id\":\"toilet-checkin\",\"name\":\"Toilettes Zone Enregistrement\",\"type\":\"toilet\",\"floor\":0,\"coordinates\":[1.25465,6.1658],\"description\":\"Toilettes accessibles PMR\",\"status\":\"open\"},{\"id\":\"toilet-gates-a\",\"name\":\"Toilettes Portes A\",\"type\":\"toilet\",\"floor\":1,\"coordinates\":[1.25505,6.1659],\"description\":\"Toilettes zone internationale\",\"status\":\"open\"},{\"id\":\"toilet-gates-b\",\"name\":\"Toilettes Portes B\",\"type\":\"toilet\",\"floor\":1,\"coordinates\":[1.25495,6.166],\"description\":\"Toilettes zone domestique\",\"status\":\"open\"},{\"id\":\"medical-main\",\"name\":\"Infirmerie\",\"type\":\"medical\",\"floor\":0,\"coordinates\":[1.2546,6.1658],\"description\":\"Assistance médicale d'urgence - 24/7\",\"status\":\"open\"},{\"id\":\"prayer-room\",\"name\":\"Salle de Prière\",\"type\":\"prayer\",\"floor\":1,\"coordinates\":[1.2551,6.1659],\"description\":\"Espace de recueillement multi-confessionnel\",\"status\":\"open\"},{\"id\":\"lounge-asky\",\"name\":\"Salon VIP ASKY Airlines\",\"type\":\"lounge\",\"floor\":1,\"coordinates\":[1.25485,6.16595],\"description\":\"Salon VIP avec restauration, Wi-Fi, douches\",\"status\":\"open\",\"accessibleTo\":[\"business\",\"first\"]},{\"id\":\"restaurant-maquis\",\"name\":\"Le Maquis de l'Aéroport\",\"type\":\"restaurant\",\"floor\":0,\"coordinates\":[1.2547,6.1658],\"description\":\"Cuisine togolaise authentique - Fufu, Akpan, Akoumé\",\"status\":\"open\",\"hours\":\"6h - 22h\"},{\"id\":\"restaurant-teranga\",\"name\":\"Restaurant Teranga\",\"type\":\"restaurant\",\"floor\":1,\"coordinates\":[1.25505,6.16592],\"description\":\"Cuisine africaine et internationale\",\"status\":\"open\",\"hours\":\"5h - 23h\"},{\"id\":\"cafe-express\",\"name\":\"Café Express\",\"type\":\"restaurant\",\"floor\":1,\"coordinates\":[1.25495,6.16592],\"description\":\"Café, viennoiseries, sandwichs rapides\",\"status\":\"open\",\"hours\":\"4h30 - 23h30\"},{\"id\":\"restaurant-fastfood\",\"name\":\"Quick Bites\",\"type\":\"restaurant\",\"floor\":1,\"coordinates\":[1.2551,6.16592],\"description\":\"Fast-food international - Burgers, pizzas, salades\",\"status\":\"open\",\"hours\":\"6h - 23h\"},{\"id\":\"shop-dutyfree\",\"name\":\"Duty Free Lomé\",\"type\":\"shop\",\"floor\":1,\"coordinates\":[1.2549,6.16592],\"description\":\"Parfums, alcools, tabac, cosmétiques hors taxes\",\"status\":\"open\",\"hours\":\"5h - 23h\"},{\"id\":\"shop-artisanat\",\"name\":\"Artisanat Togolais\",\"type\":\"shop\",\"floor\":1,\"coordinates\":[1.255,6.16592],\"description\":\"Tissus batik, sculptures, bijoux locaux, souvenirs\",\"status\":\"open\",\"hours\":\"6h - 22h\"},{\"id\":\"shop-presse\",\"name\":\"Relay Presse\",\"type\":\"shop\",\"floor\":1,\"coordinates\":[1.25515,6.16592],\"description\":\"Presse internationale, livres, snacks\",\"status\":\"open\",\"hours\":\"5h - 23h\"},{\"id\":\"shop-electronics\",\"name\":\"Tech & Travel\",\"type\":\"shop\",\"floor\":1,\"coordinates\":[1.25505,6.16597],\"description\":\"Électronique, accessoires voyage, adaptateurs\",\"status\":\"open\",\"hours\":\"6h - 22h\"},{\"id\":\"bank-utb\",\"name\":\"Union Togolaise de Banque (UTB)\",\"type\":\"shop\",\"floor\":0,\"coordinates\":[1.25475,6.16575],\"description\":\"Distributeur automatique et services bancaires\",\"status\":\"open\",\"hours\":\"24/7 (DAB)\"},{\"id\":\"exchange-office\",\"name\":\"Bureau de Change\",\"type\":\"shop\",\"floor\":0,\"coordinates\":[1.2548,6.16575],\"description\":\"Change de devises - CFA, EUR, USD\",\"status\":\"open\",\"hours\":\"6h - 22h\"},{\"id\":\"car-rental-avis\",\"name\":\"Avis Location de Voitures\",\"type\":\"shop\",\"floor\":0,\"coordinates\":[1.25535,6.1658],\"description\":\"Location de véhicules\",\"status\":\"open\",\"hours\":\"7h - 22h\",\"contact\":\"+228 22 21 05 82\"},{\"id\":\"car-rental-europcar\",\"name\":\"Europcar\",\"type\":\"shop\",\"floor\":0,\"coordinates\":[1.2554,6.1658],\"description\":\"Location de véhicules\",\"status\":\"open\",\"hours\":\"7h - 22h\",\"contact\":\"+228 22 21 13 24\"},{\"id\":\"car-rental-hertz\",\"name\":\"Hertz\",\"type\":\"shop\",\"floor\":0,\"coordinates\":[1.25545,6.1658],\"description\":\"Location de véhicules\",\"status\":\"open\",\"hours\":\"7h - 22h\",\"contact\":\"+228 22 21 44 79\"},{\"id\":\"parking-main\",\"name\":\"Parking Principal\",\"type\":\"parking\",\"floor\":0,\"coordinates\":[1.2544,6.1658],\"description\":\"Parking longue durée - 650 places\",\"status\":\"open\",\"hours\":\"24/7\"}],\"services\":[{\"id\":\"service-prmassist\",\"name\":\"Assistance Passagers à Mobilité Réduite\",\"category\":\"assistance\",\"description\":\"Accompagnement personnalisé, fauteuils roulants, assistance embarquement/débarquement\",\"location\":\"info-main\",\"hours\":\"24/7\",\"contact\":\"+228 22 23 44 55\",\"icon\":\"accessibility\",\"free\":true},{\"id\":\"service-medical\",\"name\":\"Assistance Médicale d'Urgence\",\"category\":\"medical\",\"description\":\"Infirmerie avec personnel qualifié, premiers secours, défibrillateur\",\"location\":\"medical-main\",\"hours\":\"24/7\",\"contact\":\"+228 22 23 44 56\",\"icon\":\"cross\",\"free\":true},{\"id\":\"service-lostfound\",\"name\":\"Objets Trouvés\",\"category\":\"lost_found\",\"description\":\"Déclaration et récupération d'objets perdus dans l'enceinte de l'aéroport\",\"location\":\"info-main\",\"hours\":\"6h - 23h\",\"contact\":\"+228 22 23 44 57\",\"icon\":\"briefcase\",\"free\":true},{\"id\":\"service-flightinfo\",\"name\":\"Information Vols en Temps Réel\",\"category\":\"information\",\"description\":\"Horaires, retards, annulations, changements de porte\",\"location\":\"info-main\",\"hours\":\"24/7\",\"contact\":\"+228 22 23 44 58\",\"icon\":\"info\",\"free\":true},{\"id\":\"service-customs\",\"name\":\"Services Douaniers\",\"category\":\"customs\",\"description\":\"Déclarations douanières, contrôles, informations réglementaires\",\"location\":\"customs-arrival\",\"hours\":\"Selon horaires des vols\",\"contact\":\"+228 22 23 44 59\",\"icon\":\"shield\",\"free\":true},{\"id\":\"service-wifi\",\"name\":\"Wi-Fi Gratuit\",\"category\":\"connectivity\",\"description\":\"Accès Internet sans fil gratuit dans tout l'aéroport\",\"location\":\"Partout\",\"hours\":\"24/7\",\"network\":\"Aeroport_LFW_Free\",\"icon\":\"wifi\",\"free\":true},{\"id\":\"service-porter\",\"name\":\"Porteurs de Bagages\",\"category\":\"assistance\",\"description\":\"Aide au transport des bagages\",\"location\":\"entrance-main\",\"hours\":\"5h - 23h\",\"icon\":\"luggage\",\"free\":false,\"pricing\":\"2000-5000 CFA selon distance\"},{\"id\":\"service-vip\",\"name\":\"Service VIP & Meet & Greet\",\"category\":\"premium\",\"description\":\"Accueil personnalisé, assistance formalités, salon VIP, voie rapide\",\"location\":\"entrance-vip\",\"hours\":\"24/7 (sur réservation)\",\"contact\":\"+228 22 23 44 60\",\"icon\":\"star\",\"free\":false,\"pricing\":\"À partir de 50 000 CFA\"},{\"id\":\"service-avis\",\"name\":\"Location Voitures Avis\",\"category\":\"transport\",\"description\":\"Large gamme de véhicules disponibles\",\"location\":\"car-rental-avis\",\"hours\":\"7h - 22h\",\"contact\":\"+228 22 21 05 82\",\"icon\":\"car\",\"free\":false,\"website\":\"https://www.avis.com\"},{\"id\":\"service-europcar\",\"name\":\"Location Voitures Europcar\",\"category\":\"transport\",\"description\":\"Véhicules neufs et bien entretenus\",\"location\":\"car-rental-europcar\",\"hours\":\"7h - 22h\",\"contact\":\"+228 22 21 13 24\",\"icon\":\"car\",\"free\":false,\"website\":\"https://www.europcar.com\"},{\"id\":\"service-hertz\",\"name\":\"Location Voitures Hertz\",\"category\":\"transport\",\"description\":\"Leader mondial de la location de véhicules\",\"location\":\"car-rental-hertz\",\"hours\":\"7h - 22h\",\"contact\":\"+228 22 21 44 79\",\"icon\":\"car\",\"free\":false,\"website\":\"https://www.hertz.com\"},{\"id\":\"service-utb\",\"name\":\"Services Bancaires UTB\",\"category\":\"financial\",\"description\":\"Distributeur automatique 24/7, services bancaires\",\"location\":\"bank-utb\",\"hours\":\"24/7 (DAB)\",\"icon\":\"banknote\",\"free\":true},{\"id\":\"service-exchange\",\"name\":\"Bureau de Change\",\"category\":\"financial\",\"description\":\"Change CFA, Euro, Dollar US, autres devises principales\",\"location\":\"exchange-office\",\"hours\":\"6h - 22h\",\"icon\":\"coins\",\"free\":false,\"commission\":\"Commission 2-3%\"}],\"floors\":[{\"level\":0,\"name\":\"Rez-de-chaussée - Arrivées & Départs\",\"description\":\"Zone publique : Enregistrement, Bagages, Services\",\"bounds\":[[1.2544,6.1657],[1.2556,6.1661]]},{\"level\":1,\"name\":\"Étage 1 - Zone d'Embarquement\",\"description\":\"Zone sécurisée : Portes d'embarquement, Restaurants, Boutiques\",\"bounds\":[[1.2548,6.1659],[1.2552,6.1661]]}],\"airlines\":[{\"code\":\"KP\",\"name\":\"ASKY Airlines\",\"type\":\"hub\",\"destinations\":[\"Dakar\",\"Abidjan\",\"Ouagadougou\",\"Niamey\",\"Cotonou\",\"Accra\",\"Lagos\",\"Libreville\"]},{\"code\":\"AF\",\"name\":\"Air France\",\"type\":\"international\",\"destinations\":[\"Paris CDG\"]},{\"code\":\"SN\",\"name\":\"Brussels Airlines\",\"type\":\"international\",\"destinations\":[\"Bruxelles\"]},{\"code\":\"ET\",\"name\":\"Ethiopian Airlines\",\"type\":\"international\",\"destinations\":[\"Addis-Abeba\"]},{\"code\":\"TK\",\"name\":\"Turkish Airlines\",\"type\":\"international\",\"destinations\":[\"Istanbul\"]},{\"code\":\"AT\",\"name\":\"Royal Air Maroc\",\"type\":\"international\",\"destinations\":[\"Casablanca\"]},{\"code\":\"EK\",\"name\":\"Emirates\",\"type\":\"international\",\"destinations\":[\"Dubaï\"]},{\"code\":\"HF\",\"name\":\"Air Côte d'Ivoire\",\"type\":\"regional\",\"destinations\":[\"Abidjan\",\"Dakar\"]}]}"));}),
"[project]/app/navigation/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavigationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2f$EnhancedAirportMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/map/EnhancedAirportMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/data/airport-data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/theme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function NavigationPage() {
    _s();
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [floors, setFloors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentFloor, setCurrentFloor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [startLocation, setStartLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [endLocation, setEndLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [route, setRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [routeSteps, setRouteSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalDistance, setTotalDistance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalDuration, setTotalDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationPage.useEffect": ()=>{
            setLocations(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__["default"].locations);
            setFloors(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__["default"].floors);
        }
    }["NavigationPage.useEffect"], []);
    const handleCalculateRoute = ()=>{
        if (!startLocation || !endLocation) {
            return;
        }
        const start = locations.find((loc)=>loc.id === startLocation);
        const end = locations.find((loc)=>loc.id === endLocation);
        if (!start || !end) return;
        const calculatedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findRoute"])(start, end, locations);
        if (calculatedRoute) {
            setRoute(calculatedRoute.path);
            setRouteSteps(calculatedRoute.instructions);
            setTotalDistance(calculatedRoute.distance);
            setTotalDuration(calculatedRoute.duration);
            setCurrentFloor(start.floor);
        }
    };
    const groupedLocations = locations.reduce((acc, loc)=>{
        const type = loc.type;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(loc);
        return acc;
    }, {});
    const locationTypeLabels = {
        entrance: "Entrées",
        gate: "Portes d'embarquement",
        checkin: "Enregistrement",
        security: "Sécurité",
        toilet: "Toilettes",
        restaurant: "Restauration",
        shop: "Boutiques",
        information: "Information",
        lounge: "Salons",
        baggage: "Bagages",
        medical: "Services médicaux"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[calc(100vh-64px)] flex flex-col md:flex-row",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.paper
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-96 flex flex-col border-r",
                style: {
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated,
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border.main
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b",
                        style: {
                            padding: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].spacing[6],
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border.main
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold mb-2",
                                style: {
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.h3.fontSize,
                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.h3.fontWeight,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                },
                                children: "Navigation"
                            }, void 0, false, {
                                fileName: "[project]/app/navigation/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.small.fontSize,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                },
                                children: "Calculez votre itinéraire dans l'aéroport"
                            }, void 0, false, {
                                fileName: "[project]/app/navigation/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/navigation/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        style: {
                            padding: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].spacing[6]
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium mb-2",
                                            style: {
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.small.fontSize,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                            },
                                            children: "Point de départ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: startLocation,
                                            onChange: (e)=>setStartLocation(e.target.value),
                                            className: "w-full rounded-lg focus:outline-none transition-all",
                                            style: {
                                                padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].spacing[3]} ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].spacing[4]}`,
                                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border.main}`,
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary,
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.default
                                            },
                                            onFocus: (e)=>{
                                                e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main;
                                                e.currentTarget.style.boxShadow = `0 0 0 3px ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main}20`;
                                            },
                                            onBlur: (e)=>{
                                                e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border.main;
                                                e.currentTarget.style.boxShadow = 'none';
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Sélectionner..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navigation/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                Object.entries(groupedLocations).map(([type, locs])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                        label: locationTypeLabels[type] || type,
                                                        children: locs.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: loc.id,
                                                                children: loc.name
                                                            }, loc.id, false, {
                                                                fileName: "[project]/app/navigation/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, type, false, {
                                                        fileName: "[project]/app/navigation/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium mb-2",
                                            style: {
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.small.fontSize,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                            },
                                            children: "Destination"
                                        }, void 0, false, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: endLocation,
                                            onChange: (e)=>setEndLocation(e.target.value),
                                            className: "w-full rounded-lg focus:outline-none transition-all",
                                            style: {
                                                padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].spacing[3]} ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].spacing[4]}`,
                                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border.main}`,
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary,
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.default
                                            },
                                            onFocus: (e)=>{
                                                e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main;
                                                e.currentTarget.style.boxShadow = `0 0 0 3px ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main}20`;
                                            },
                                            onBlur: (e)=>{
                                                e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border.main;
                                                e.currentTarget.style.boxShadow = 'none';
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Sélectionner..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navigation/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this),
                                                Object.entries(groupedLocations).map(([type, locs])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                        label: locationTypeLabels[type] || type,
                                                        children: locs.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: loc.id,
                                                                children: loc.name
                                                            }, loc.id, false, {
                                                                fileName: "[project]/app/navigation/page.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, type, false, {
                                                        fileName: "[project]/app/navigation/page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCalculateRoute,
                                    disabled: !startLocation || !endLocation,
                                    className: "w-full rounded-lg font-medium transition-all",
                                    style: {
                                        padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].spacing[3]} ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].spacing[6]}`,
                                        backgroundColor: !startLocation || !endLocation ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.gray[300] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main,
                                        color: !startLocation || !endLocation ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.gray[500] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.contrast,
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.button.fontSize,
                                        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.button.fontWeight,
                                        boxShadow: !startLocation || !endLocation ? 'none' : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadow.sm,
                                        cursor: !startLocation || !endLocation ? 'not-allowed' : 'pointer'
                                    },
                                    onMouseEnter: (e)=>{
                                        if (startLocation && endLocation) {
                                            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.dark;
                                            e.currentTarget.style.transform = 'translateY(-1px)';
                                            e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadow.md;
                                        }
                                    },
                                    onMouseLeave: (e)=>{
                                        if (startLocation && endLocation) {
                                            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main;
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadow.sm;
                                        }
                                    },
                                    children: "Calculer l'itinéraire"
                                }, void 0, false, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                route && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 rounded-lg",
                                    style: {
                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].spacing[4],
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main + '10',
                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main}30`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.dark
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/navigation/page.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.dark,
                                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize
                                                            },
                                                            children: [
                                                                totalDistance.toFixed(0),
                                                                "m"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/navigation/page.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/navigation/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.dark
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/navigation/page.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.dark,
                                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize
                                                            },
                                                            children: [
                                                                "~",
                                                                totalDuration,
                                                                " min"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/navigation/page.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/navigation/page.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: routeSteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-semibold",
                                                            style: {
                                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main,
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.contrast,
                                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.tiny.fontSize
                                                            },
                                                            children: index + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/navigation/page.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium",
                                                                    style: {
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary,
                                                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.small.fontSize
                                                                    },
                                                                    children: step.instruction
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/navigation/page.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 25
                                                                }, this),
                                                                step.distance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1",
                                                                    style: {
                                                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.tiny.fontSize,
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                                                    },
                                                                    children: [
                                                                        step.distance.toFixed(0),
                                                                        "m"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/navigation/page.tsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/navigation/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/app/navigation/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/navigation/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/navigation/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/navigation/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2f$EnhancedAirportMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        locations: locations,
                        selectedLocation: endLocation,
                        showRoute: route,
                        currentFloor: currentFloor
                    }, void 0, false, {
                        fileName: "[project]/app/navigation/page.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 rounded-xl overflow-hidden",
                        style: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated,
                            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadow.lg
                        },
                        children: floors.map((floor)=>{
                            const isActive = currentFloor === floor.level;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentFloor(floor.level),
                                className: "block w-full text-left transition-all",
                                style: {
                                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].spacing[4]} ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].spacing[6]}`,
                                    borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border.light}`,
                                    backgroundColor: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated,
                                    color: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.contrast : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                },
                                onMouseEnter: (e)=>{
                                    if (!isActive) {
                                        e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.gray[50];
                                    }
                                },
                                onMouseLeave: (e)=>{
                                    if (!isActive) {
                                        e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated;
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        style: {
                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize
                                        },
                                        children: floor.level === 0 ? "RDC" : `Étage ${floor.level}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/navigation/page.tsx",
                                        lineNumber: 365,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1",
                                        style: {
                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.tiny.fontSize,
                                            color: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.contrast + 'CC' : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                        },
                                        children: floor.name.split(" - ")[1] || floor.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/navigation/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, floor.level, true, {
                                fileName: "[project]/app/navigation/page.tsx",
                                lineNumber: 342,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/navigation/page.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/navigation/page.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/navigation/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(NavigationPage, "cKOX3fePJLPX7m6Oc0WYftieP3Q=");
_c = NavigationPage;
var _c;
__turbopack_context__.k.register(_c, "NavigationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f3b6f0e8._.js.map