module.exports = [
"[project]/lib/utils/navigation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/data/airport-data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"airport":{"name":"Aéroport International Gnassingbé Eyadéma","code":"LFW","city":"Lomé","country":"Togo","coordinates":[1.2549,6.1659],"capacity":"2 000 000 passagers/an","hub":"ASKY Airlines","distance_city":"6.8 km du centre-ville"},"locations":[{"id":"gate-a1","name":"Porte A1","type":"gate","floor":1,"coordinates":[1.253568,6.170194],"description":"Porte d'embarquement A1 - Vols internationaux","status":"open"},{"id":"gate-a2","name":"Porte A2","type":"gate","floor":1,"coordinates":[1.253185,6.169748],"description":"Porte d'embarquement A2 - Vols internationaux","status":"open"},{"id":"gate-a3","name":"Porte A3","type":"gate","floor":1,"coordinates":[1.252825,6.169437],"description":"Porte d'embarquement A3 - Vols internationaux","status":"open"},{"id":"gate-b1","name":"Porte B1","type":"gate","floor":1,"coordinates":[1.254069,6.171084],"description":"Porte d'embarquement B1 - Vols régionaux","status":"open"},{"id":"gate-b2","name":"Porte B2","type":"gate","floor":1,"coordinates":[1.253923,6.170668],"description":"Porte d'embarquement B2 - Vols régionaux","status":"open"},{"id":"checkin-economy-1","name":"Enregistrement Zone A","type":"checkin","floor":0,"coordinates":[1.253038,6.170017],"description":"Comptoirs 1-20 - Classe Économique","status":"open","accessibleTo":["economy"]},{"id":"checkin-economy-2","name":"Enregistrement Zone B","type":"checkin","floor":0,"coordinates":[1.253899,6.170813],"description":"Comptoirs 21-40 - Classe Économique","status":"open","accessibleTo":["economy"]},{"id":"checkin-business","name":"Enregistrement Business","type":"checkin","floor":0,"coordinates":[1.252822,6.169666],"description":"Comptoirs Business & Première Classe","status":"open","accessibleTo":["business","first"]},{"id":"security-main","name":"Contrôle de Sécurité Principal","type":"security","floor":0,"coordinates":[1.253083,6.172066],"description":"Point de contrôle sécurité et passeport","status":"busy"},{"id":"security-fast","name":"Contrôle Fast Track","type":"security","floor":0,"coordinates":[1.253317,6.170509],"description":"Voie rapide Business/Première Classe","status":"open","accessibleTo":["business","first"]},{"id":"toilet-arrival","name":"Toilettes Zone Arrivées","type":"toilet","floor":0,"coordinates":[1.253572,6.170538],"description":"Toilettes accessibles PMR","status":"open"},{"id":"toilet-checkin","name":"Toilettes Zone Enregistrement","type":"toilet","floor":0,"coordinates":[1.253357,6.170299],"description":"Toilettes accessibles PMR","status":"open"},{"id":"toilet-gates-a","name":"Toilettes Portes A","type":"toilet","floor":1,"coordinates":[1.253572,6.170538],"description":"Toilettes zone internationale","status":"open"},{"id":"toilet-gates-b","name":"Toilettes Portes B","type":"toilet","floor":1,"coordinates":[1.253357,6.170299],"description":"Toilettes zone domestique","status":"open"},{"id":"restaurant-maquis","name":"Le Maquis de l'Aéroport","type":"restaurant","floor":0,"coordinates":[1.252739,6.170065],"description":"Cuisine togolaise authentique - Fufu, Akpan, Akoumé","status":"open","hours":"6h - 22h"},{"id":"restaurant-teranga","name":"Restaurant Teranga","type":"restaurant","floor":1,"coordinates":[1.252739,6.170065],"description":"Cuisine africaine et internationale","status":"open","hours":"5h - 23h"},{"id":"cafe-express","name":"Café Express","type":"restaurant","floor":1,"coordinates":[1.252739,6.170065],"description":"Café, viennoiseries, sandwichs rapides","status":"open","hours":"4h30 - 23h30"},{"id":"shop-dutyfree","name":"Duty Free Lomé","type":"shop","floor":1,"coordinates":[1.25217,6.169382],"description":"Parfums, alcools, tabac, cosmétiques hors taxes","status":"open","hours":"5h - 23h"},{"id":"shop-artisanat","name":"Artisanat Togolais","type":"shop","floor":1,"coordinates":[1.251705,6.169352],"description":"Tissus batik, sculptures, bijoux locaux, souvenirs","status":"open","hours":"6h - 22h"},{"id":"shop-presse","name":"Relay Presse","type":"shop","floor":1,"coordinates":[1.252265,6.169839],"description":"Presse internationale, livres, snacks","status":"open","hours":"5h - 23h"},{"id":"info-main","name":"Information Principale","type":"information","floor":0,"coordinates":[1.253386,6.17088],"description":"Renseignements, objets trouvés, assistance","status":"open"},{"id":"info-gates","name":"Information Zone Embarquement","type":"information","floor":1,"coordinates":[1.252895,6.170068],"description":"Informations vols et assistance embarquement","status":"open"},{"id":"lounge-asky","name":"Salon VIP ASKY Airlines","type":"lounge","floor":1,"coordinates":[1.252755,6.170232],"description":"Salon VIP avec restauration, Wi-Fi, douches","status":"open","accessibleTo":["business","first"]},{"id":"lounge-business","name":"Salon Business","type":"lounge","floor":1,"coordinates":[1.253317,6.170509],"description":"Salon Business avec bar et restauration","status":"open","accessibleTo":["business","first"]}],"services":[{"id":"service-prmassist","name":"Assistance Passagers à Mobilité Réduite","category":"assistance","description":"Accompagnement personnalisé, fauteuils roulants, assistance embarquement/débarquement","location":"info-main","hours":"24/7","contact":"+228 22 23 44 55","icon":"accessibility","free":true},{"id":"service-medical","name":"Assistance Médicale d'Urgence","category":"medical","description":"Infirmerie avec personnel qualifié, premiers secours, défibrillateur","location":"medical-main","hours":"24/7","contact":"+228 22 23 44 56","icon":"cross","free":true},{"id":"service-lostfound","name":"Objets Trouvés","category":"lost_found","description":"Déclaration et récupération d'objets perdus dans l'enceinte de l'aéroport","location":"info-main","hours":"6h - 23h","contact":"+228 22 23 44 57","icon":"briefcase","free":true},{"id":"service-flightinfo","name":"Information Vols en Temps Réel","category":"information","description":"Horaires, retards, annulations, changements de porte","location":"info-main","hours":"24/7","contact":"+228 22 23 44 58","icon":"info","free":true},{"id":"service-customs","name":"Services Douaniers","category":"customs","description":"Déclarations douanières, contrôles, informations réglementaires","location":"customs-arrival","hours":"Selon horaires des vols","contact":"+228 22 23 44 59","icon":"shield","free":true},{"id":"service-wifi","name":"Wi-Fi Gratuit","category":"connectivity","description":"Accès Internet sans fil gratuit dans tout l'aéroport","location":"Partout","hours":"24/7","network":"Aeroport_LFW_Free","icon":"wifi","free":true},{"id":"service-porter","name":"Porteurs de Bagages","category":"assistance","description":"Aide au transport des bagages","location":"entrance-main","hours":"5h - 23h","icon":"luggage","free":false,"pricing":"2000-5000 CFA selon distance"},{"id":"service-vip","name":"Service VIP & Meet & Greet","category":"premium","description":"Accueil personnalisé, assistance formalités, salon VIP, voie rapide","location":"entrance-vip","hours":"24/7 (sur réservation)","contact":"+228 22 23 44 60","icon":"star","free":false,"pricing":"À partir de 50 000 CFA"}],"floors":[{"level":0,"name":"Rez-de-chaussée - Arrivées & Départs","description":"Zone publique : Enregistrement, Bagages, Services","bounds":[[1.251,6.163],[1.2595,6.169]]},{"level":1,"name":"Étage 1 - Zone d'Embarquement","description":"Zone sécurisée : Portes d'embarquement, Restaurants, Boutiques","bounds":[[1.255,6.166],[1.2595,6.169]]}],"airlines":[{"code":"KP","name":"ASKY Airlines","type":"hub","destinations":["Dakar","Abidjan","Ouagadougou","Niamey","Cotonou","Accra","Lagos","Libreville"]},{"code":"AF","name":"Air France","type":"international","destinations":["Paris CDG"]},{"code":"SN","name":"Brussels Airlines","type":"international","destinations":["Bruxelles"]},{"code":"ET","name":"Ethiopian Airlines","type":"international","destinations":["Addis-Abeba"]},{"code":"TK","name":"Turkish Airlines","type":"international","destinations":["Istanbul"]},{"code":"AT","name":"Royal Air Maroc","type":"international","destinations":["Casablanca"]},{"code":"EK","name":"Emirates","type":"international","destinations":["Dubaï"]},{"code":"HF","name":"Air Côte d'Ivoire","type":"regional","destinations":["Abidjan","Dakar"]}]});}),
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
    const imageCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mapContainer.current || map.current) return;
        const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYm9iMTIxMyIsImEiOiJjbWVlcXc3MzcwajN2MmxzYXVka3VxM2hoIn0.UPSA0mrxW5qYD0SarZWtYQ");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken = token;
        // Create map with Streets style for Gnassingbé Eyadéma Airport (LFW)
        // Gnassingbé Eyadéma Airport coordinates: [1.2549, 6.1659]
        map.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [
                1.2549,
                6.1659
            ],
            zoom: 15.5,
            pitch: 0,
            bearing: 0,
            attributionControl: true,
            minZoom: 11,
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
    // Create SVG image for marker
    const createMarkerImage = (color, initial, isSelected)=>{
        return new Promise((resolve)=>{
            const imageId = `${color}-${initial}-${isSelected}`;
            // Always create new image to ensure it's up to date
            const pinHeadSize = isSelected ? 28 : 24;
            const pinPointSize = 12;
            const totalHeight = pinHeadSize + pinPointSize;
            const totalWidth = pinHeadSize;
            const svg = `
        <svg width="${totalWidth}" height="${totalHeight}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="shadow-${imageId.replace(/[^a-zA-Z0-9]/g, '_')}" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="${isSelected ? '2' : '1'}" stdDeviation="${isSelected ? '2' : '1.5'}" flood-opacity="0.3"/>
            </filter>
          </defs>
          <g filter="url(#shadow-${imageId.replace(/[^a-zA-Z0-9]/g, '_')})">
            <circle cx="${totalWidth / 2}" cy="${pinHeadSize / 2}" r="${pinHeadSize / 2 - 1}" fill="${color}" stroke="${isSelected ? '#fff' : 'rgba(255,255,255,0.9)'}" stroke-width="2"/>
            <path d="M ${totalWidth / 2 - pinPointSize / 2} ${pinHeadSize} L ${totalWidth / 2} ${totalHeight} L ${totalWidth / 2 + pinPointSize / 2} ${pinHeadSize} Z" fill="${color}"/>
            <text x="${totalWidth / 2}" y="${pinHeadSize / 2}" font-family="system-ui, -apple-system, sans-serif" font-size="${isSelected ? '14' : '12'}" font-weight="bold" fill="#fff" text-anchor="middle" dominant-baseline="central">${initial}</text>
          </g>
        </svg>
      `;
            const img = new Image();
            img.onload = ()=>{
                imageCache.current.set(imageId, img);
                resolve(img);
            };
            img.src = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
        });
    };
    // Add enhanced markers using Mapbox symbols (fixed size on zoom)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!map.current || !mapLoaded) return;
        // Remove existing markers and layers
        Object.values(markers.current).forEach((marker)=>marker.remove());
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
        const floorLocations = locations.filter((loc)=>loc.floor === currentFloor);
        // Create GeoJSON features
        const features = floorLocations.map((location)=>({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: location.coordinates
                },
                properties: {
                    id: location.id,
                    name: location.name,
                    type: location.type,
                    description: location.description || "",
                    status: location.status || "",
                    color: locationColors[location.type] || "#757575",
                    initial: getLocationInitial(location.type),
                    isSelected: selectedLocation === location.id
                }
            }));
        // Add source
        map.current.addSource(sourceId, {
            type: "geojson",
            data: {
                type: "FeatureCollection",
                features
            }
        });
        // Load images and add layer
        const loadImagesAndAddLayer = async ()=>{
            if (!map.current) return;
            const uniqueMarkers = new Set();
            floorLocations.forEach((location)=>{
                const color = locationColors[location.type] || "#757575";
                const initial = getLocationInitial(location.type);
                const isSelected = selectedLocation === location.id;
                uniqueMarkers.add(`${color}-${initial}-${isSelected}`);
            });
            // Load all unique marker images
            await Promise.all(Array.from(uniqueMarkers).map(async (key)=>{
                if (!map.current) return;
                // Parse key: format is "color-initial-selected"
                // Color may contain dashes, so we need to split from the end
                const parts = key.split("-");
                const selected = parts[parts.length - 1];
                const initial = parts[parts.length - 2];
                const color = parts.slice(0, -2).join("-");
                const isSelected = selected === "true";
                const imageId = `marker-${key}`;
                const img = await createMarkerImage(color, initial, isSelected);
                if (!map.current.hasImage(imageId)) {
                    map.current.addImage(imageId, img);
                }
            }));
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
                            [
                                "get",
                                "isSelected"
                            ],
                            [
                                "concat",
                                "marker-",
                                [
                                    "get",
                                    "color"
                                ],
                                "-",
                                [
                                    "get",
                                    "initial"
                                ],
                                "-true"
                            ],
                            [
                                "concat",
                                "marker-",
                                [
                                    "get",
                                    "color"
                                ],
                                "-",
                                [
                                    "get",
                                    "initial"
                                ],
                                "-false"
                            ]
                        ],
                        "icon-size": 1,
                        "icon-anchor": "bottom",
                        "icon-allow-overlap": true,
                        "icon-ignore-placement": true
                    }
                });
            }
            // Define event handlers
            const clickHandler = (e)=>{
                if (!e.features || !e.features[0] || !map.current) return;
                const props = e.features[0].properties;
                if (!props) return;
                const color = props.color;
                const coordinates = e.features[0].geometry.coordinates.slice();
                const location = floorLocations.find((loc)=>loc.id === props.id);
                if (!location) return;
                if (onLocationSelect) {
                    onLocationSelect(location.id);
                }
                const popup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Popup({
                    offset: 25,
                    closeButton: false,
                    maxWidth: "300px"
                }).setLngLat(coordinates).setHTML(`
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
          `).addTo(map.current);
            };
            const mouseEnterHandler = ()=>{
                if (map.current) {
                    map.current.getCanvas().style.cursor = "pointer";
                }
            };
            const mouseLeaveHandler = ()=>{
                if (map.current) {
                    map.current.getCanvas().style.cursor = "";
                }
            };
            // Add event handlers
            map.current.on("click", layerId, clickHandler);
            map.current.on("mouseenter", layerId, mouseEnterHandler);
            map.current.on("mouseleave", layerId, mouseLeaveHandler);
            // Store handlers for cleanup
            map.current._markerHandlers = {
                click: clickHandler,
                mouseenter: mouseEnterHandler,
                mouseleave: mouseLeaveHandler
            };
        };
        loadImagesAndAddLayer();
        return ()=>{
            if (map.current) {
                const handlers = map.current._markerHandlers;
                if (handlers) {
                    map.current.off("click", layerId, handlers.click);
                    map.current.off("mouseenter", layerId, handlers.mouseenter);
                    map.current.off("mouseleave", layerId, handlers.mouseleave);
                    delete map.current._markerHandlers;
                }
                if (map.current.getLayer(layerId)) {
                    map.current.removeLayer(layerId);
                }
                if (map.current.getSource(sourceId)) {
                    map.current.removeSource(sourceId);
                }
            }
        };
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
        lineNumber: 389,
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
"[project]/components/ui/FloorSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloorSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function FloorSelector({ currentFloor, floors, onFloorChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-4 left-4 bg-white rounded-lg shadow-lg overflow-hidden z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: floors.map((floor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onFloorChange(floor.level),
                    className: `px-4 py-3 text-sm font-medium transition-colors border-b last:border-b-0 ${currentFloor === floor.level ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: floor.level === 0 ? "RDC" : `Étage ${floor.level}`
                            }, void 0, false, {
                                fileName: "[project]/components/ui/FloorSelector.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/FloorSelector.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-xs mt-1 whitespace-nowrap max-w-[150px] truncate ${currentFloor === floor.level ? "opacity-90" : "opacity-70"}`,
                            children: floor.name.split(" - ")[1] || floor.name
                        }, void 0, false, {
                            fileName: "[project]/components/ui/FloorSelector.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    ]
                }, floor.level, true, {
                    fileName: "[project]/components/ui/FloorSelector.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/ui/FloorSelector.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/FloorSelector.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/navigation/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavigationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/data/airport-data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context/LocaleContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2f$EnhancedAirportMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/map/EnhancedAirportMap.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$FloorSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/FloorSelector.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function NavigationPage() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [floors, setFloors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentFloor, setCurrentFloor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [startLocation, setStartLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [endLocation, setEndLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [route, setRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocations(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__["default"].locations);
        setFloors(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__["default"].floors);
    }, []);
    const handleCalculateRoute = ()=>{
        if (!startLocation || !endLocation) {
            return;
        }
        const start = locations.find((loc)=>loc.id === startLocation);
        const end = locations.find((loc)=>loc.id === endLocation);
        if (!start || !end) return;
        const calculatedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findRoute"])(start, end, locations);
        if (calculatedRoute) {
            setRoute(calculatedRoute.path);
            setCurrentFloor(start.floor);
        }
    };
    // Group locations by type for dropdown
    const groupedLocations = locations.reduce((acc, loc)=>{
        if (!acc[loc.type]) {
            acc[loc.type] = [];
        }
        acc[loc.type].push(loc);
        return acc;
    }, {});
    const locationTypeLabels = {
        gate: t("map.locationTypes.gate"),
        checkin: t("map.locationTypes.checkin"),
        security: t("map.locationTypes.security"),
        toilet: t("map.locationTypes.toilet"),
        restaurant: t("map.locationTypes.restaurant"),
        shop: t("map.locationTypes.shop"),
        information: t("map.locationTypes.information"),
        lounge: t("map.locationTypes.lounge")
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen overflow-hidden",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.default
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-80 lg:w-72 flex-shrink-0 overflow-y-auto",
                style: {
                    backgroundColor: "#ffffff"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-bold mb-2",
                                    style: {
                                        fontSize: "28px",
                                        fontWeight: 700,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: t("navigation.title")
                                }, void 0, false, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                    },
                                    children: "Calculez votre itinéraire dans l'aéroport"
                                }, void 0, false, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/navigation/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: "Point de départ"
                                }, void 0, false, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: startLocation,
                                            onChange: (e)=>{
                                                setStartLocation(e.target.value);
                                                setSelectedLocation(e.target.value);
                                            },
                                            className: "w-full appearance-none rounded-lg border px-4 py-3 pr-10 text-sm transition-all focus:outline-none focus:ring-2",
                                            style: {
                                                backgroundColor: "#ffffff",
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.main,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Sélectionner..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navigation/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this),
                                                Object.entries(groupedLocations).map(([type, locs])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                        label: locationTypeLabels[type] || type,
                                                        children: locs.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: loc.id,
                                                                children: loc.name
                                                            }, loc.id, false, {
                                                                fileName: "[project]/app/navigation/page.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, type, false, {
                                                        fileName: "[project]/app/navigation/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/navigation/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: "Destination"
                                }, void 0, false, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: endLocation,
                                            onChange: (e)=>{
                                                setEndLocation(e.target.value);
                                                setSelectedLocation(e.target.value);
                                            },
                                            className: "w-full appearance-none rounded-lg border px-4 py-3 pr-10 text-sm transition-all focus:outline-none focus:ring-2",
                                            style: {
                                                backgroundColor: "#ffffff",
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.main,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Sélectionner..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navigation/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this),
                                                Object.entries(groupedLocations).map(([type, locs])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                        label: locationTypeLabels[type] || type,
                                                        children: locs.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: loc.id,
                                                                children: loc.name
                                                            }, loc.id, false, {
                                                                fileName: "[project]/app/navigation/page.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, type, false, {
                                                        fileName: "[project]/app/navigation/page.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/navigation/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCalculateRoute,
                            className: "w-full rounded-lg font-semibold transition-all py-3 text-sm",
                            style: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[300],
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary,
                                boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.sm
                            },
                            disabled: !startLocation || !endLocation,
                            children: "Calculer l'itinéraire"
                        }, void 0, false, {
                            fileName: "[project]/app/navigation/page.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/navigation/page.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/navigation/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative",
                style: {
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.default
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2f$EnhancedAirportMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        locations: locations,
                        selectedLocation: selectedLocation,
                        onLocationSelect: setSelectedLocation,
                        showRoute: route,
                        currentFloor: currentFloor
                    }, void 0, false, {
                        fileName: "[project]/app/navigation/page.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$FloorSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        currentFloor: currentFloor,
                        floors: floors,
                        onFloorChange: (floor)=>{
                            setCurrentFloor(floor);
                            // Filter locations by floor when floor changes
                            const floorLoc = locations.find((loc)=>loc.floor === floor);
                            if (floorLoc && (startLocation || endLocation)) {
                                // Keep selection if location exists on new floor
                                const start = locations.find((loc)=>loc.id === startLocation);
                                const end = locations.find((loc)=>loc.id === endLocation);
                                if (start && start.floor !== floor) setStartLocation("");
                                if (end && end.floor !== floor) setEndLocation("");
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/navigation/page.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/navigation/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/navigation/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_8092c429._.js.map