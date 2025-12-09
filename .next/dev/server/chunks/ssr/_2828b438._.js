module.exports = [
"[project]/components/map/EnhancedAirportMap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnhancedAirportMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/theme.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Use location colors from theme
const locationColors = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationColors"];
function EnhancedAirportMap({ locations, selectedLocation, onLocationSelect, showRoute, currentFloor = 0 }) {
    const mapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const [mapLoaded, setMapLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mapContainer.current || map.current) return;
        const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYm9iMTIxMyIsImEiOiJjbWVlcXc3MzcwajN2MmxzYXVka3VxM2hoIn0.UPSA0mrxW5qYD0SarZWtYQ");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken = token;
        // Create map with improved style for Lomé Airport
        map.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Map({
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
        map.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].NavigationControl({
            showCompass: true,
            showZoom: true,
            visualizePitch: false
        }), "top-right");
        map.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true,
            showUserLocation: true
        }), "top-right");
        map.current.on("load", ()=>{
            setMapLoaded(true);
        });
        return ()=>{
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, []);
    // Add enhanced markers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!map.current || !mapLoaded) return;
        Object.values(markers.current).forEach((marker)=>marker.remove());
        markers.current = {};
        const floorLocations = locations.filter((loc)=>loc.floor === currentFloor);
        floorLocations.forEach((location)=>{
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
            el.addEventListener("mouseenter", ()=>{
                el.style.transform = "scale(1.15)";
                el.style.zIndex = "1000";
            });
            el.addEventListener("mouseleave", ()=>{
                el.style.transform = "scale(1)";
                el.style.zIndex = "1";
            });
            const popup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Popup({
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
            const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Marker(el).setLngLat(location.coordinates).setPopup(popup).addTo(map.current);
            el.addEventListener("click", ()=>{
                if (onLocationSelect) {
                    onLocationSelect(location.id);
                }
            });
            markers.current[location.id] = marker;
        });
    }, [
        locations,
        mapLoaded,
        currentFloor,
        selectedLocation,
        onLocationSelect
    ]);
    // Draw route
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
                "line-color": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main,
                "line-width": 6,
                "line-opacity": 0.9
            }
        });
        const bounds = showRoute.reduce((bounds, coord)=>bounds.extend(coord), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].LngLatBounds(showRoute[0], showRoute[0]));
        map.current.fitBounds(bounds, {
            padding: 80
        });
        return ()=>{
            if (map.current && map.current.getSource(routeId)) {
                map.current.removeLayer(routeId);
                map.current.removeSource(routeId);
            }
        };
    }, [
        showRoute,
        mapLoaded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapContainer,
        className: "w-full h-full rounded-lg"
    }, void 0, false, {
        fileName: "[project]/components/map/EnhancedAirportMap.tsx",
        lineNumber: 224,
        columnNumber: 10
    }, this);
}
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
        open: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.success.main,
        closed: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.error.main,
        busy: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.warning.main
    };
    return colors[status] || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[500];
}
function getStatusLabel(status) {
    const labels = {
        open: "Ouvert",
        closed: "Fermé",
        busy: "Affluence"
    };
    return labels[status] || status;
}
}),
"[project]/lib/data/airport-data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"airport\":{\"name\":\"Aéroport International Gnassingbé Eyadéma\",\"code\":\"LFW\",\"city\":\"Lomé\",\"country\":\"Togo\",\"coordinates\":[1.2549,6.1659],\"capacity\":\"2 000 000 passagers/an\",\"hub\":\"ASKY Airlines\",\"distance_city\":\"6.8 km du centre-ville\"},\"locations\":[{\"id\":\"entrance-main\",\"name\":\"Entrée Principale\",\"type\":\"entrance\",\"floor\":0,\"coordinates\":[1.2545,6.1658],\"description\":\"Entrée principale du terminal international\",\"status\":\"open\"},{\"id\":\"entrance-vip\",\"name\":\"Entrée VIP\",\"type\":\"entrance\",\"floor\":0,\"coordinates\":[1.25455,6.1658],\"description\":\"Entrée réservée Business et Première Classe\",\"status\":\"open\",\"accessibleTo\":[\"business\",\"first\"]},{\"id\":\"checkin-economy\",\"name\":\"Enregistrement Zone A\",\"type\":\"checkin\",\"floor\":0,\"coordinates\":[1.2546,6.16585],\"description\":\"Comptoirs 1-20 - Classe Économique\",\"status\":\"open\",\"accessibleTo\":[\"economy\"]},{\"id\":\"checkin-business\",\"name\":\"Enregistrement Zone B\",\"type\":\"checkin\",\"floor\":0,\"coordinates\":[1.25465,6.16585],\"description\":\"Comptoirs 21-26 - Business & Première Classe\",\"status\":\"open\",\"accessibleTo\":[\"business\",\"first\"]},{\"id\":\"checkin-asky\",\"name\":\"Enregistrement ASKY Airlines\",\"type\":\"checkin\",\"floor\":0,\"coordinates\":[1.2547,6.16585],\"description\":\"Comptoirs dédiés ASKY Airlines (hub)\",\"status\":\"open\"},{\"id\":\"security-main\",\"name\":\"Contrôle de Sécurité Principal\",\"type\":\"security\",\"floor\":0,\"coordinates\":[1.25475,6.1659],\"description\":\"Point de contrôle sécurité et passeport\",\"status\":\"busy\"},{\"id\":\"security-fast\",\"name\":\"Contrôle Fast Track\",\"type\":\"security\",\"floor\":0,\"coordinates\":[1.2548,6.1659],\"description\":\"Voie rapide Business/Première Classe\",\"status\":\"open\",\"accessibleTo\":[\"business\",\"first\"]},{\"id\":\"gate-a1\",\"name\":\"Porte A1\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.2549,6.16595],\"description\":\"Vols internationaux - Air France, Brussels Airlines\",\"status\":\"open\"},{\"id\":\"gate-a2\",\"name\":\"Porte A2\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.25495,6.16595],\"description\":\"Vols internationaux - Ethiopian Airlines\",\"status\":\"open\"},{\"id\":\"gate-a3\",\"name\":\"Porte A3\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.255,6.16595],\"description\":\"Vols internationaux - Turkish Airlines\",\"status\":\"open\"},{\"id\":\"gate-a4\",\"name\":\"Porte A4\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.25505,6.16595],\"description\":\"Vols internationaux - Royal Air Maroc\",\"status\":\"open\"},{\"id\":\"gate-a5\",\"name\":\"Porte A5\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.2551,6.16595],\"description\":\"Vols internationaux - ASKY Airlines\",\"status\":\"open\"},{\"id\":\"gate-a6\",\"name\":\"Porte A6\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.25515,6.16595],\"description\":\"Vols internationaux - Emirates, Air Côte d'Ivoire\",\"status\":\"open\"},{\"id\":\"gate-b1\",\"name\":\"Porte B1\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.2549,6.166],\"description\":\"Vols régionaux - Destinations Afrique de l'Ouest\",\"status\":\"open\"},{\"id\":\"gate-b2\",\"name\":\"Porte B2\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.25495,6.166],\"description\":\"Vols domestiques\",\"status\":\"open\"},{\"id\":\"gate-b3\",\"name\":\"Porte B3\",\"type\":\"gate\",\"floor\":1,\"coordinates\":[1.255,6.166],\"description\":\"Vols régionaux - ASKY Airlines\",\"status\":\"open\"},{\"id\":\"baggage-1\",\"name\":\"Tapis 1 - Arrivées Internationales\",\"type\":\"baggage\",\"floor\":0,\"coordinates\":[1.2552,6.16575],\"description\":\"Récupération bagages vols internationaux\",\"status\":\"open\"},{\"id\":\"baggage-2\",\"name\":\"Tapis 2 - Arrivées Régionales\",\"type\":\"baggage\",\"floor\":0,\"coordinates\":[1.25525,6.16575],\"description\":\"Récupération bagages vols régionaux\",\"status\":\"open\"},{\"id\":\"customs-arrival\",\"name\":\"Douane Arrivées\",\"type\":\"customs\",\"floor\":0,\"coordinates\":[1.2553,6.16575],\"description\":\"Contrôle douanier pour arrivées internationales\",\"status\":\"open\"},{\"id\":\"info-main\",\"name\":\"Information Principale\",\"type\":\"information\",\"floor\":0,\"coordinates\":[1.25455,6.16585],\"description\":\"Renseignements, objets trouvés, assistance\",\"status\":\"open\"},{\"id\":\"info-gates\",\"name\":\"Information Zone Embarquement\",\"type\":\"information\",\"floor\":1,\"coordinates\":[1.255,6.1659],\"description\":\"Informations vols et assistance embarquement\",\"status\":\"open\"},{\"id\":\"toilet-arrival\",\"name\":\"Toilettes Zone Arrivées\",\"type\":\"toilet\",\"floor\":0,\"coordinates\":[1.25515,6.16575],\"description\":\"Toilettes accessibles PMR\",\"status\":\"open\"},{\"id\":\"toilet-checkin\",\"name\":\"Toilettes Zone Enregistrement\",\"type\":\"toilet\",\"floor\":0,\"coordinates\":[1.25465,6.1658],\"description\":\"Toilettes accessibles PMR\",\"status\":\"open\"},{\"id\":\"toilet-gates-a\",\"name\":\"Toilettes Portes A\",\"type\":\"toilet\",\"floor\":1,\"coordinates\":[1.25505,6.1659],\"description\":\"Toilettes zone internationale\",\"status\":\"open\"},{\"id\":\"toilet-gates-b\",\"name\":\"Toilettes Portes B\",\"type\":\"toilet\",\"floor\":1,\"coordinates\":[1.25495,6.166],\"description\":\"Toilettes zone domestique\",\"status\":\"open\"},{\"id\":\"medical-main\",\"name\":\"Infirmerie\",\"type\":\"medical\",\"floor\":0,\"coordinates\":[1.2546,6.1658],\"description\":\"Assistance médicale d'urgence - 24/7\",\"status\":\"open\"},{\"id\":\"prayer-room\",\"name\":\"Salle de Prière\",\"type\":\"prayer\",\"floor\":1,\"coordinates\":[1.2551,6.1659],\"description\":\"Espace de recueillement multi-confessionnel\",\"status\":\"open\"},{\"id\":\"lounge-asky\",\"name\":\"Salon VIP ASKY Airlines\",\"type\":\"lounge\",\"floor\":1,\"coordinates\":[1.25485,6.16595],\"description\":\"Salon VIP avec restauration, Wi-Fi, douches\",\"status\":\"open\",\"accessibleTo\":[\"business\",\"first\"]},{\"id\":\"restaurant-maquis\",\"name\":\"Le Maquis de l'Aéroport\",\"type\":\"restaurant\",\"floor\":0,\"coordinates\":[1.2547,6.1658],\"description\":\"Cuisine togolaise authentique - Fufu, Akpan, Akoumé\",\"status\":\"open\",\"hours\":\"6h - 22h\"},{\"id\":\"restaurant-teranga\",\"name\":\"Restaurant Teranga\",\"type\":\"restaurant\",\"floor\":1,\"coordinates\":[1.25505,6.16592],\"description\":\"Cuisine africaine et internationale\",\"status\":\"open\",\"hours\":\"5h - 23h\"},{\"id\":\"cafe-express\",\"name\":\"Café Express\",\"type\":\"restaurant\",\"floor\":1,\"coordinates\":[1.25495,6.16592],\"description\":\"Café, viennoiseries, sandwichs rapides\",\"status\":\"open\",\"hours\":\"4h30 - 23h30\"},{\"id\":\"restaurant-fastfood\",\"name\":\"Quick Bites\",\"type\":\"restaurant\",\"floor\":1,\"coordinates\":[1.2551,6.16592],\"description\":\"Fast-food international - Burgers, pizzas, salades\",\"status\":\"open\",\"hours\":\"6h - 23h\"},{\"id\":\"shop-dutyfree\",\"name\":\"Duty Free Lomé\",\"type\":\"shop\",\"floor\":1,\"coordinates\":[1.2549,6.16592],\"description\":\"Parfums, alcools, tabac, cosmétiques hors taxes\",\"status\":\"open\",\"hours\":\"5h - 23h\"},{\"id\":\"shop-artisanat\",\"name\":\"Artisanat Togolais\",\"type\":\"shop\",\"floor\":1,\"coordinates\":[1.255,6.16592],\"description\":\"Tissus batik, sculptures, bijoux locaux, souvenirs\",\"status\":\"open\",\"hours\":\"6h - 22h\"},{\"id\":\"shop-presse\",\"name\":\"Relay Presse\",\"type\":\"shop\",\"floor\":1,\"coordinates\":[1.25515,6.16592],\"description\":\"Presse internationale, livres, snacks\",\"status\":\"open\",\"hours\":\"5h - 23h\"},{\"id\":\"shop-electronics\",\"name\":\"Tech & Travel\",\"type\":\"shop\",\"floor\":1,\"coordinates\":[1.25505,6.16597],\"description\":\"Électronique, accessoires voyage, adaptateurs\",\"status\":\"open\",\"hours\":\"6h - 22h\"},{\"id\":\"bank-utb\",\"name\":\"Union Togolaise de Banque (UTB)\",\"type\":\"shop\",\"floor\":0,\"coordinates\":[1.25475,6.16575],\"description\":\"Distributeur automatique et services bancaires\",\"status\":\"open\",\"hours\":\"24/7 (DAB)\"},{\"id\":\"exchange-office\",\"name\":\"Bureau de Change\",\"type\":\"shop\",\"floor\":0,\"coordinates\":[1.2548,6.16575],\"description\":\"Change de devises - CFA, EUR, USD\",\"status\":\"open\",\"hours\":\"6h - 22h\"},{\"id\":\"car-rental-avis\",\"name\":\"Avis Location de Voitures\",\"type\":\"shop\",\"floor\":0,\"coordinates\":[1.25535,6.1658],\"description\":\"Location de véhicules\",\"status\":\"open\",\"hours\":\"7h - 22h\",\"contact\":\"+228 22 21 05 82\"},{\"id\":\"car-rental-europcar\",\"name\":\"Europcar\",\"type\":\"shop\",\"floor\":0,\"coordinates\":[1.2554,6.1658],\"description\":\"Location de véhicules\",\"status\":\"open\",\"hours\":\"7h - 22h\",\"contact\":\"+228 22 21 13 24\"},{\"id\":\"car-rental-hertz\",\"name\":\"Hertz\",\"type\":\"shop\",\"floor\":0,\"coordinates\":[1.25545,6.1658],\"description\":\"Location de véhicules\",\"status\":\"open\",\"hours\":\"7h - 22h\",\"contact\":\"+228 22 21 44 79\"},{\"id\":\"parking-main\",\"name\":\"Parking Principal\",\"type\":\"parking\",\"floor\":0,\"coordinates\":[1.2544,6.1658],\"description\":\"Parking longue durée - 650 places\",\"status\":\"open\",\"hours\":\"24/7\"}],\"services\":[{\"id\":\"service-prmassist\",\"name\":\"Assistance Passagers à Mobilité Réduite\",\"category\":\"assistance\",\"description\":\"Accompagnement personnalisé, fauteuils roulants, assistance embarquement/débarquement\",\"location\":\"info-main\",\"hours\":\"24/7\",\"contact\":\"+228 22 23 44 55\",\"icon\":\"accessibility\",\"free\":true},{\"id\":\"service-medical\",\"name\":\"Assistance Médicale d'Urgence\",\"category\":\"medical\",\"description\":\"Infirmerie avec personnel qualifié, premiers secours, défibrillateur\",\"location\":\"medical-main\",\"hours\":\"24/7\",\"contact\":\"+228 22 23 44 56\",\"icon\":\"cross\",\"free\":true},{\"id\":\"service-lostfound\",\"name\":\"Objets Trouvés\",\"category\":\"lost_found\",\"description\":\"Déclaration et récupération d'objets perdus dans l'enceinte de l'aéroport\",\"location\":\"info-main\",\"hours\":\"6h - 23h\",\"contact\":\"+228 22 23 44 57\",\"icon\":\"briefcase\",\"free\":true},{\"id\":\"service-flightinfo\",\"name\":\"Information Vols en Temps Réel\",\"category\":\"information\",\"description\":\"Horaires, retards, annulations, changements de porte\",\"location\":\"info-main\",\"hours\":\"24/7\",\"contact\":\"+228 22 23 44 58\",\"icon\":\"info\",\"free\":true},{\"id\":\"service-customs\",\"name\":\"Services Douaniers\",\"category\":\"customs\",\"description\":\"Déclarations douanières, contrôles, informations réglementaires\",\"location\":\"customs-arrival\",\"hours\":\"Selon horaires des vols\",\"contact\":\"+228 22 23 44 59\",\"icon\":\"shield\",\"free\":true},{\"id\":\"service-wifi\",\"name\":\"Wi-Fi Gratuit\",\"category\":\"connectivity\",\"description\":\"Accès Internet sans fil gratuit dans tout l'aéroport\",\"location\":\"Partout\",\"hours\":\"24/7\",\"network\":\"Aeroport_LFW_Free\",\"icon\":\"wifi\",\"free\":true},{\"id\":\"service-porter\",\"name\":\"Porteurs de Bagages\",\"category\":\"assistance\",\"description\":\"Aide au transport des bagages\",\"location\":\"entrance-main\",\"hours\":\"5h - 23h\",\"icon\":\"luggage\",\"free\":false,\"pricing\":\"2000-5000 CFA selon distance\"},{\"id\":\"service-vip\",\"name\":\"Service VIP & Meet & Greet\",\"category\":\"premium\",\"description\":\"Accueil personnalisé, assistance formalités, salon VIP, voie rapide\",\"location\":\"entrance-vip\",\"hours\":\"24/7 (sur réservation)\",\"contact\":\"+228 22 23 44 60\",\"icon\":\"star\",\"free\":false,\"pricing\":\"À partir de 50 000 CFA\"},{\"id\":\"service-avis\",\"name\":\"Location Voitures Avis\",\"category\":\"transport\",\"description\":\"Large gamme de véhicules disponibles\",\"location\":\"car-rental-avis\",\"hours\":\"7h - 22h\",\"contact\":\"+228 22 21 05 82\",\"icon\":\"car\",\"free\":false,\"website\":\"https://www.avis.com\"},{\"id\":\"service-europcar\",\"name\":\"Location Voitures Europcar\",\"category\":\"transport\",\"description\":\"Véhicules neufs et bien entretenus\",\"location\":\"car-rental-europcar\",\"hours\":\"7h - 22h\",\"contact\":\"+228 22 21 13 24\",\"icon\":\"car\",\"free\":false,\"website\":\"https://www.europcar.com\"},{\"id\":\"service-hertz\",\"name\":\"Location Voitures Hertz\",\"category\":\"transport\",\"description\":\"Leader mondial de la location de véhicules\",\"location\":\"car-rental-hertz\",\"hours\":\"7h - 22h\",\"contact\":\"+228 22 21 44 79\",\"icon\":\"car\",\"free\":false,\"website\":\"https://www.hertz.com\"},{\"id\":\"service-utb\",\"name\":\"Services Bancaires UTB\",\"category\":\"financial\",\"description\":\"Distributeur automatique 24/7, services bancaires\",\"location\":\"bank-utb\",\"hours\":\"24/7 (DAB)\",\"icon\":\"banknote\",\"free\":true},{\"id\":\"service-exchange\",\"name\":\"Bureau de Change\",\"category\":\"financial\",\"description\":\"Change CFA, Euro, Dollar US, autres devises principales\",\"location\":\"exchange-office\",\"hours\":\"6h - 22h\",\"icon\":\"coins\",\"free\":false,\"commission\":\"Commission 2-3%\"}],\"floors\":[{\"level\":0,\"name\":\"Rez-de-chaussée - Arrivées & Départs\",\"description\":\"Zone publique : Enregistrement, Bagages, Services\",\"bounds\":[[1.2544,6.1657],[1.2556,6.1661]]},{\"level\":1,\"name\":\"Étage 1 - Zone d'Embarquement\",\"description\":\"Zone sécurisée : Portes d'embarquement, Restaurants, Boutiques\",\"bounds\":[[1.2548,6.1659],[1.2552,6.1661]]}],\"airlines\":[{\"code\":\"KP\",\"name\":\"ASKY Airlines\",\"type\":\"hub\",\"destinations\":[\"Dakar\",\"Abidjan\",\"Ouagadougou\",\"Niamey\",\"Cotonou\",\"Accra\",\"Lagos\",\"Libreville\"]},{\"code\":\"AF\",\"name\":\"Air France\",\"type\":\"international\",\"destinations\":[\"Paris CDG\"]},{\"code\":\"SN\",\"name\":\"Brussels Airlines\",\"type\":\"international\",\"destinations\":[\"Bruxelles\"]},{\"code\":\"ET\",\"name\":\"Ethiopian Airlines\",\"type\":\"international\",\"destinations\":[\"Addis-Abeba\"]},{\"code\":\"TK\",\"name\":\"Turkish Airlines\",\"type\":\"international\",\"destinations\":[\"Istanbul\"]},{\"code\":\"AT\",\"name\":\"Royal Air Maroc\",\"type\":\"international\",\"destinations\":[\"Casablanca\"]},{\"code\":\"EK\",\"name\":\"Emirates\",\"type\":\"international\",\"destinations\":[\"Dubaï\"]},{\"code\":\"HF\",\"name\":\"Air Côte d'Ivoire\",\"type\":\"regional\",\"destinations\":[\"Abidjan\",\"Dakar\"]}]}"));}),
"[project]/app/map/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2f$EnhancedAirportMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/map/EnhancedAirportMap.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/data/airport-data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/theme.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const locationTypeLabels = {
    gate: "Portes",
    checkin: "Enregistrement",
    security: "Sécurité",
    toilet: "Toilettes",
    restaurant: "Restauration",
    shop: "Boutiques",
    information: "Information",
    lounge: "Salons",
    baggage: "Bagages",
    entrance: "Entrées",
    exit: "Sorties",
    medical: "Médical",
    prayer: "Prière"
};
function MapPage() {
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [floors, setFloors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentFloor, setCurrentFloor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTypes, setSelectedTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocations(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__["default"].locations);
        setFloors(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__["default"].floors);
    }, []);
    const locationTypes = Array.from(new Set(locations.map((loc)=>loc.type))).sort();
    const filteredLocations = locations.filter((loc)=>{
        const matchesSearch = loc.name.toLowerCase().includes(searchQuery.toLowerCase()) || loc.description?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedTypes.size === 0 || selectedTypes.has(loc.type);
        return matchesSearch && matchesType;
    });
    const handleLocationSelect = (locationId)=>{
        setSelectedLocation(locationId);
        const location = locations.find((loc)=>loc.id === locationId);
        if (location) {
            setCurrentFloor(location.floor);
        }
    };
    const toggleType = (type)=>{
        const newTypes = new Set(selectedTypes);
        if (newTypes.has(type)) {
            newTypes.delete(type);
        } else {
            newTypes.add(type);
        }
        setSelectedTypes(newTypes);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] flex flex-col",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.paper
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b p-4",
                style: {
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated,
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.main,
                    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.sm
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[400]
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/map/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value),
                                            placeholder: "Rechercher un lieu...",
                                            className: "w-full rounded-lg focus:outline-none transition-all",
                                            style: {
                                                paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].spacing[10],
                                                paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].spacing[10],
                                                paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].spacing[3],
                                                paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].spacing[3],
                                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.main}`,
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                            },
                                            onFocus: (e)=>{
                                                e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main;
                                                e.currentTarget.style.boxShadow = `0 0 0 3px ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main}20`;
                                            },
                                            onBlur: (e)=>{
                                                e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.main;
                                                e.currentTarget.style.boxShadow = 'none';
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/map/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSearchQuery(""),
                                            className: "absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded transition-colors",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[400]
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[600];
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[400];
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/map/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/map/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/map/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowFilters(!showFilters),
                                    className: "rounded-lg transition-all flex items-center space-x-2",
                                    style: {
                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].spacing[3],
                                        border: `1px solid ${showFilters ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.main}`,
                                        backgroundColor: showFilters ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main + '10' : 'transparent',
                                        color: showFilters ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[700]
                                    },
                                    onMouseEnter: (e)=>{
                                        if (!showFilters) {
                                            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[50];
                                        }
                                    },
                                    onMouseLeave: (e)=>{
                                        if (!showFilters) {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                        }
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/map/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/map/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/map/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-wrap gap-2",
                            children: locationTypes.map((type)=>{
                                const isSelected = selectedTypes.has(type);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleType(type),
                                    className: "rounded-lg text-sm font-medium transition-all",
                                    style: {
                                        padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].spacing[2]} ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].spacing[4]}`,
                                        backgroundColor: isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated,
                                        border: `1px solid ${isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.main}`,
                                        color: isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.contrast : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary,
                                        boxShadow: isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.sm : 'none'
                                    },
                                    onMouseEnter: (e)=>{
                                        if (!isSelected) {
                                            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[100];
                                        }
                                    },
                                    onMouseLeave: (e)=>{
                                        if (!isSelected) {
                                            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated;
                                        }
                                    },
                                    children: locationTypeLabels[type] || type
                                }, type, false, {
                                    fileName: "[project]/app/map/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/map/page.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/map/page.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/map/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2f$EnhancedAirportMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        locations: filteredLocations,
                        selectedLocation: selectedLocation,
                        onLocationSelect: handleLocationSelect,
                        currentFloor: currentFloor
                    }, void 0, false, {
                        fileName: "[project]/app/map/page.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 rounded-xl overflow-hidden",
                        style: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated,
                            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.lg
                        },
                        children: floors.map((floor)=>{
                            const isActive = currentFloor === floor.level;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentFloor(floor.level),
                                className: "block w-full text-left transition-all",
                                style: {
                                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].spacing[4]} ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].spacing[6]}`,
                                    borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.light}`,
                                    backgroundColor: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated,
                                    color: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.contrast : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                },
                                onMouseEnter: (e)=>{
                                    if (!isActive) {
                                        e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[50];
                                    }
                                },
                                onMouseLeave: (e)=>{
                                    if (!isActive) {
                                        e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated;
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        style: {
                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize
                                        },
                                        children: floor.level === 0 ? "RDC" : `Étage ${floor.level}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/map/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1",
                                        style: {
                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.tiny.fontSize,
                                            color: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.contrast + 'CC' : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                        },
                                        children: floor.name.split(" - ")[1] || floor.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/map/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, floor.level, true, {
                                fileName: "[project]/app/map/page.tsx",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/map/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 right-4 rounded-xl p-4 max-w-xs",
                        style: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated,
                            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.lg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold mb-3 flex items-center",
                                style: {
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/map/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    "Légende"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/map/page.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                style: {
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.tiny.fontSize
                                },
                                children: Object.entries(locationTypeLabels).slice(0, 8).map(([type, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 rounded-full flex-shrink-0",
                                                style: {
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationColors"][type] || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[500],
                                                    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.sm
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/map/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                                },
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/app/map/page.tsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, type, true, {
                                        fileName: "[project]/app/map/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/map/page.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/map/page.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/map/page.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/map/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_2828b438._.js.map