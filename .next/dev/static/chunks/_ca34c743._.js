(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/data/airport-data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"airport":{"name":"Aéroport International Gnassingbé Eyadéma","code":"LFW","city":"Lomé","country":"Togo","coordinates":[1.2549,6.1659],"capacity":"2 000 000 passagers/an","hub":"ASKY Airlines","distance_city":"6.8 km du centre-ville"},"locations":[{"id":"gate-a1","name":"Porte A1","type":"gate","floor":1,"coordinates":[1.253568,6.170194],"description":"Porte d'embarquement A1 - Vols internationaux","status":"open"},{"id":"gate-a2","name":"Porte A2","type":"gate","floor":1,"coordinates":[1.253185,6.169748],"description":"Porte d'embarquement A2 - Vols internationaux","status":"open"},{"id":"gate-a3","name":"Porte A3","type":"gate","floor":1,"coordinates":[1.252825,6.169437],"description":"Porte d'embarquement A3 - Vols internationaux","status":"open"},{"id":"gate-b1","name":"Porte B1","type":"gate","floor":1,"coordinates":[1.254069,6.171084],"description":"Porte d'embarquement B1 - Vols régionaux","status":"open"},{"id":"gate-b2","name":"Porte B2","type":"gate","floor":1,"coordinates":[1.253923,6.170668],"description":"Porte d'embarquement B2 - Vols régionaux","status":"open"},{"id":"checkin-economy-1","name":"Enregistrement Zone A","type":"checkin","floor":0,"coordinates":[1.253038,6.170017],"description":"Comptoirs 1-20 - Classe Économique","status":"open","accessibleTo":["economy"]},{"id":"checkin-economy-2","name":"Enregistrement Zone B","type":"checkin","floor":0,"coordinates":[1.253899,6.170813],"description":"Comptoirs 21-40 - Classe Économique","status":"open","accessibleTo":["economy"]},{"id":"checkin-business","name":"Enregistrement Business","type":"checkin","floor":0,"coordinates":[1.252822,6.169666],"description":"Comptoirs Business & Première Classe","status":"open","accessibleTo":["business","first"]},{"id":"security-main","name":"Contrôle de Sécurité Principal","type":"security","floor":0,"coordinates":[1.253083,6.172066],"description":"Point de contrôle sécurité et passeport","status":"busy"},{"id":"security-fast","name":"Contrôle Fast Track","type":"security","floor":0,"coordinates":[1.253317,6.170509],"description":"Voie rapide Business/Première Classe","status":"open","accessibleTo":["business","first"]},{"id":"toilet-arrival","name":"Toilettes Zone Arrivées","type":"toilet","floor":0,"coordinates":[1.253572,6.170538],"description":"Toilettes accessibles PMR","status":"open"},{"id":"toilet-checkin","name":"Toilettes Zone Enregistrement","type":"toilet","floor":0,"coordinates":[1.253357,6.170299],"description":"Toilettes accessibles PMR","status":"open"},{"id":"toilet-gates-a","name":"Toilettes Portes A","type":"toilet","floor":1,"coordinates":[1.253572,6.170538],"description":"Toilettes zone internationale","status":"open"},{"id":"toilet-gates-b","name":"Toilettes Portes B","type":"toilet","floor":1,"coordinates":[1.253357,6.170299],"description":"Toilettes zone domestique","status":"open"},{"id":"restaurant-maquis","name":"Le Maquis de l'Aéroport","type":"restaurant","floor":0,"coordinates":[1.252739,6.170065],"description":"Cuisine togolaise authentique - Fufu, Akpan, Akoumé","status":"open","hours":"6h - 22h"},{"id":"restaurant-teranga","name":"Restaurant Teranga","type":"restaurant","floor":1,"coordinates":[1.252739,6.170065],"description":"Cuisine africaine et internationale","status":"open","hours":"5h - 23h"},{"id":"cafe-express","name":"Café Express","type":"restaurant","floor":1,"coordinates":[1.252739,6.170065],"description":"Café, viennoiseries, sandwichs rapides","status":"open","hours":"4h30 - 23h30"},{"id":"shop-dutyfree","name":"Duty Free Lomé","type":"shop","floor":1,"coordinates":[1.25217,6.169382],"description":"Parfums, alcools, tabac, cosmétiques hors taxes","status":"open","hours":"5h - 23h"},{"id":"shop-artisanat","name":"Artisanat Togolais","type":"shop","floor":1,"coordinates":[1.251705,6.169352],"description":"Tissus batik, sculptures, bijoux locaux, souvenirs","status":"open","hours":"6h - 22h"},{"id":"shop-presse","name":"Relay Presse","type":"shop","floor":1,"coordinates":[1.252265,6.169839],"description":"Presse internationale, livres, snacks","status":"open","hours":"5h - 23h"},{"id":"info-main","name":"Information Principale","type":"information","floor":0,"coordinates":[1.253386,6.17088],"description":"Renseignements, objets trouvés, assistance","status":"open"},{"id":"info-gates","name":"Information Zone Embarquement","type":"information","floor":1,"coordinates":[1.252895,6.170068],"description":"Informations vols et assistance embarquement","status":"open"},{"id":"lounge-asky","name":"Salon VIP ASKY Airlines","type":"lounge","floor":1,"coordinates":[1.252755,6.170232],"description":"Salon VIP avec restauration, Wi-Fi, douches","status":"open","accessibleTo":["business","first"]},{"id":"lounge-business","name":"Salon Business","type":"lounge","floor":1,"coordinates":[1.253317,6.170509],"description":"Salon Business avec bar et restauration","status":"open","accessibleTo":["business","first"]}],"services":[{"id":"service-prmassist","name":"Assistance Passagers à Mobilité Réduite","category":"assistance","description":"Accompagnement personnalisé, fauteuils roulants, assistance embarquement/débarquement","location":"info-main","hours":"24/7","contact":"+228 22 23 44 55","icon":"accessibility","free":true},{"id":"service-medical","name":"Assistance Médicale d'Urgence","category":"medical","description":"Infirmerie avec personnel qualifié, premiers secours, défibrillateur","location":"medical-main","hours":"24/7","contact":"+228 22 23 44 56","icon":"cross","free":true},{"id":"service-lostfound","name":"Objets Trouvés","category":"lost_found","description":"Déclaration et récupération d'objets perdus dans l'enceinte de l'aéroport","location":"info-main","hours":"6h - 23h","contact":"+228 22 23 44 57","icon":"briefcase","free":true},{"id":"service-flightinfo","name":"Information Vols en Temps Réel","category":"information","description":"Horaires, retards, annulations, changements de porte","location":"info-main","hours":"24/7","contact":"+228 22 23 44 58","icon":"info","free":true},{"id":"service-customs","name":"Services Douaniers","category":"customs","description":"Déclarations douanières, contrôles, informations réglementaires","location":"customs-arrival","hours":"Selon horaires des vols","contact":"+228 22 23 44 59","icon":"shield","free":true},{"id":"service-wifi","name":"Wi-Fi Gratuit","category":"connectivity","description":"Accès Internet sans fil gratuit dans tout l'aéroport","location":"Partout","hours":"24/7","network":"Aeroport_LFW_Free","icon":"wifi","free":true},{"id":"service-porter","name":"Porteurs de Bagages","category":"assistance","description":"Aide au transport des bagages","location":"entrance-main","hours":"5h - 23h","icon":"luggage","free":false,"pricing":"2000-5000 CFA selon distance"},{"id":"service-vip","name":"Service VIP & Meet & Greet","category":"premium","description":"Accueil personnalisé, assistance formalités, salon VIP, voie rapide","location":"entrance-vip","hours":"24/7 (sur réservation)","contact":"+228 22 23 44 60","icon":"star","free":false,"pricing":"À partir de 50 000 CFA"}],"floors":[{"level":0,"name":"Rez-de-chaussée - Arrivées & Départs","description":"Zone publique : Enregistrement, Bagages, Services","bounds":[[1.251,6.163],[1.2595,6.169]]},{"level":1,"name":"Étage 1 - Zone d'Embarquement","description":"Zone sécurisée : Portes d'embarquement, Restaurants, Boutiques","bounds":[[1.255,6.166],[1.2595,6.169]]}],"airlines":[{"code":"KP","name":"ASKY Airlines","type":"hub","destinations":["Dakar","Abidjan","Ouagadougou","Niamey","Cotonou","Accra","Lagos","Libreville"]},{"code":"AF","name":"Air France","type":"international","destinations":["Paris CDG"]},{"code":"SN","name":"Brussels Airlines","type":"international","destinations":["Bruxelles"]},{"code":"ET","name":"Ethiopian Airlines","type":"international","destinations":["Addis-Abeba"]},{"code":"TK","name":"Turkish Airlines","type":"international","destinations":["Istanbul"]},{"code":"AT","name":"Royal Air Maroc","type":"international","destinations":["Casablanca"]},{"code":"EK","name":"Emirates","type":"international","destinations":["Dubaï"]},{"code":"HF","name":"Air Côte d'Ivoire","type":"regional","destinations":["Abidjan","Dakar"]}]});}),
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
    const imageCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedAirportMap.useEffect": ()=>{
            if (!mapContainer.current || map.current) return;
            const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYm9iMTIxMyIsImEiOiJjbWVlcXc3MzcwajN2MmxzYXVka3VxM2hoIn0.UPSA0mrxW5qYD0SarZWtYQ");
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = token;
            // Create map with Streets style for Gnassingbé Eyadéma Airport (LFW)
            // Gnassingbé Eyadéma Airport coordinates: [1.2549, 6.1659]
            map.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedAirportMap.useEffect": ()=>{
            if (!map.current || !mapLoaded) return;
            // Remove existing markers and layers
            Object.values(markers.current).forEach({
                "EnhancedAirportMap.useEffect": (marker)=>marker.remove()
            }["EnhancedAirportMap.useEffect"]);
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
            const floorLocations = locations.filter({
                "EnhancedAirportMap.useEffect.floorLocations": (loc)=>loc.floor === currentFloor
            }["EnhancedAirportMap.useEffect.floorLocations"]);
            // Create GeoJSON features
            const features = floorLocations.map({
                "EnhancedAirportMap.useEffect.features": (location)=>({
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
                    })
            }["EnhancedAirportMap.useEffect.features"]);
            // Add source
            map.current.addSource(sourceId, {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features
                }
            });
            // Load images and add layer
            const loadImagesAndAddLayer = {
                "EnhancedAirportMap.useEffect.loadImagesAndAddLayer": async ()=>{
                    if (!map.current) return;
                    const uniqueMarkers = new Set();
                    floorLocations.forEach({
                        "EnhancedAirportMap.useEffect.loadImagesAndAddLayer": (location)=>{
                            const color = locationColors[location.type] || "#757575";
                            const initial = getLocationInitial(location.type);
                            const isSelected = selectedLocation === location.id;
                            uniqueMarkers.add(`${color}-${initial}-${isSelected}`);
                        }
                    }["EnhancedAirportMap.useEffect.loadImagesAndAddLayer"]);
                    // Load all unique marker images
                    await Promise.all(Array.from(uniqueMarkers).map({
                        "EnhancedAirportMap.useEffect.loadImagesAndAddLayer": async (key)=>{
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
                        }
                    }["EnhancedAirportMap.useEffect.loadImagesAndAddLayer"]));
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
                    const clickHandler = {
                        "EnhancedAirportMap.useEffect.loadImagesAndAddLayer.clickHandler": (e)=>{
                            if (!e.features || !e.features[0] || !map.current) return;
                            const props = e.features[0].properties;
                            if (!props) return;
                            const color = props.color;
                            const coordinates = e.features[0].geometry.coordinates.slice();
                            const location = floorLocations.find({
                                "EnhancedAirportMap.useEffect.loadImagesAndAddLayer.clickHandler.location": (loc)=>loc.id === props.id
                            }["EnhancedAirportMap.useEffect.loadImagesAndAddLayer.clickHandler.location"]);
                            if (!location) return;
                            if (onLocationSelect) {
                                onLocationSelect(location.id);
                            }
                            const popup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
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
                        }
                    }["EnhancedAirportMap.useEffect.loadImagesAndAddLayer.clickHandler"];
                    const mouseEnterHandler = {
                        "EnhancedAirportMap.useEffect.loadImagesAndAddLayer.mouseEnterHandler": ()=>{
                            if (map.current) {
                                map.current.getCanvas().style.cursor = "pointer";
                            }
                        }
                    }["EnhancedAirportMap.useEffect.loadImagesAndAddLayer.mouseEnterHandler"];
                    const mouseLeaveHandler = {
                        "EnhancedAirportMap.useEffect.loadImagesAndAddLayer.mouseLeaveHandler": ()=>{
                            if (map.current) {
                                map.current.getCanvas().style.cursor = "";
                            }
                        }
                    }["EnhancedAirportMap.useEffect.loadImagesAndAddLayer.mouseLeaveHandler"];
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
                }
            }["EnhancedAirportMap.useEffect.loadImagesAndAddLayer"];
            loadImagesAndAddLayer();
            return ({
                "EnhancedAirportMap.useEffect": ()=>{
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
                }
            })["EnhancedAirportMap.useEffect"];
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
                    "line-width": [
                        "interpolate",
                        [
                            "linear"
                        ],
                        [
                            "zoom"
                        ],
                        10,
                        4,
                        15,
                        6,
                        18,
                        8
                    ],
                    "line-opacity": 0.9
                }
            });
            // Add a subtle outline for better visibility
            map.current.addLayer({
                id: `${routeId}-outline`,
                type: "line",
                source: routeId,
                layout: {
                    "line-join": "round",
                    "line-cap": "round"
                },
                paint: {
                    "line-color": "#ffffff",
                    "line-width": [
                        "interpolate",
                        [
                            "linear"
                        ],
                        [
                            "zoom"
                        ],
                        10,
                        6,
                        15,
                        8,
                        18,
                        10
                    ],
                    "line-opacity": 0.5
                }
            }, routeId); // Insert before the main route layer
            // Fit map to route bounds with padding
            if (showRoute.length > 0) {
                const bounds = showRoute.reduce({
                    "EnhancedAirportMap.useEffect.bounds": (bounds, coord)=>bounds.extend(coord)
                }["EnhancedAirportMap.useEffect.bounds"], new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LngLatBounds(showRoute[0], showRoute[0]));
                map.current.fitBounds(bounds, {
                    padding: {
                        top: 100,
                        bottom: 100,
                        left: 100,
                        right: 100
                    },
                    maxZoom: 18,
                    duration: 1000
                });
            }
            return ({
                "EnhancedAirportMap.useEffect": ()=>{
                    if (map.current) {
                        if (map.current.getLayer(`${routeId}-outline`)) {
                            map.current.removeLayer(`${routeId}-outline`);
                        }
                        if (map.current.getLayer(routeId)) {
                            map.current.removeLayer(routeId);
                        }
                        if (map.current.getSource(routeId)) {
                            map.current.removeSource(routeId);
                        }
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
        lineNumber: 431,
        columnNumber: 10
    }, this);
}
_s(EnhancedAirportMap, "BLZB6/4utv9kF7X1oEWQwxWHZfE=");
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
"[project]/components/ui/FloorSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloorSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function FloorSelector({ currentFloor, floors, onFloorChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-4 left-4 bg-white rounded-lg shadow-lg overflow-hidden z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: floors.map((floor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onFloorChange(floor.level),
                    className: `px-4 py-3 text-sm font-medium transition-colors border-b last:border-b-0 ${currentFloor === floor.level ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = FloorSelector;
var _c;
__turbopack_context__.k.register(_c, "FloorSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils/mapbox-directions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mapbox Directions API utility
 * Calculates routes between two points using Mapbox Directions API
 */ __turbopack_context__.s([
    "extractRouteInstructions",
    ()=>extractRouteInstructions,
    "extractRoutePath",
    ()=>extractRoutePath,
    "findIntermediateWaypoints",
    ()=>findIntermediateWaypoints,
    "getAlternativeRoutes",
    ()=>getAlternativeRoutes,
    "getMapboxDirections",
    ()=>getMapboxDirections,
    "getRouteSummary",
    ()=>getRouteSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function getMapboxDirections(start, end, options = {}) {
    const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYm9iMTIxMyIsImEiOiJjbWVlcXc3MzcwajN2MmxzYXVka3VxM2hoIn0.UPSA0mrxW5qYD0SarZWtYQ");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { profile = "walking", alternatives = false, steps = true, geometries = "geojson", overview = "full", language = "fr", waypoints, radiuses, bearings, continue_straight = false, annotations = [
        "distance",
        "duration"
    ], exclude, approaches, waypoint_names, waypoint_targets } = options;
    try {
        // Build coordinates string with waypoints
        let coordinates = `${start[0]},${start[1]}`;
        const validWaypoints = [];
        if (waypoints && Array.isArray(waypoints) && waypoints.length > 0) {
            waypoints.forEach((waypoint)=>{
                if (waypoint && Array.isArray(waypoint) && waypoint.length === 2 && typeof waypoint[0] === 'number' && typeof waypoint[1] === 'number') {
                    validWaypoints.push(waypoint);
                    coordinates += `;${waypoint[0]},${waypoint[1]}`;
                }
            });
        }
        coordinates += `;${end[0]},${end[1]}`;
        // Build query parameters - only include supported parameters
        const params = new URLSearchParams({
            geometries,
            steps: steps.toString(),
            overview,
            language,
            alternatives: alternatives.toString(),
            continue_straight: continue_straight.toString()
        });
        // Add annotations only if provided and valid
        if (annotations && annotations.length > 0) {
            // Filter valid annotation types
            const validAnnotations = annotations.filter((a)=>[
                    "distance",
                    "duration",
                    "speed",
                    "congestion",
                    "congestion_numeric"
                ].includes(a));
            if (validAnnotations.length > 0) {
                params.append("annotations", validAnnotations.join(","));
            }
        }
        // Add optional parameters only if they have valid values
        const numCoords = 2 + validWaypoints.length;
        if (radiuses && Array.isArray(radiuses) && radiuses.length > 0) {
            // Ensure we have the right number of radiuses (one per coordinate)
            if (radiuses.length === numCoords) {
                params.append("radiuses", radiuses.join(";"));
            }
        }
        if (bearings && Array.isArray(bearings) && bearings.length > 0) {
            if (bearings.length === numCoords) {
                params.append("bearings", bearings.map((b)=>`${b[0]},${b[1]}`).join(";"));
            }
        }
        if (exclude && typeof exclude === 'string') {
            params.append("exclude", exclude);
        }
        if (approaches && typeof approaches === 'string') {
            params.append("approaches", approaches);
        }
        if (waypoint_names && Array.isArray(waypoint_names) && waypoint_names.length > 0 && waypoint_names.length === validWaypoints.length) {
            params.append("waypoint_names", waypoint_names.join(";"));
        }
        if (waypoint_targets && Array.isArray(waypoint_targets) && waypoint_targets.length > 0 && waypoint_targets.length === validWaypoints.length) {
            params.append("waypoint_targets", waypoint_targets.map((t)=>`${t[0]},${t[1]}`).join(";"));
        }
        // Note: snapping_include_closures and snapping_include_ways are not widely supported
        // Removing them to avoid API errors
        params.append("access_token", token);
        const url = `https://api.mapbox.com/directions/v5/mapbox/${profile}/${coordinates}?${params.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Mapbox Directions API error: ${response.statusText} - ${errorText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching directions:", error);
        return null;
    }
}
function extractRoutePath(directions) {
    if (!directions.routes || directions.routes.length === 0) {
        return [];
    }
    const route = directions.routes[0];
    return route.geometry.coordinates;
}
function extractRouteInstructions(directions) {
    if (!directions.routes || directions.routes.length === 0) {
        return [];
    }
    const route = directions.routes[0];
    const instructions = [];
    route.legs.forEach((leg)=>{
        leg.steps.forEach((step)=>{
            instructions.push({
                instruction: step.maneuver.instruction,
                distance: step.distance,
                duration: step.duration,
                coordinates: step.geometry.coordinates,
                maneuver: step.maneuver.type
            });
        });
    });
    return instructions;
}
function getRouteSummary(directions) {
    if (!directions.routes || directions.routes.length === 0) {
        return {
            distance: 0,
            duration: 0
        };
    }
    const route = directions.routes[0];
    return {
        distance: route.distance,
        duration: Math.round(route.duration / 60),
        weight: route.weight,
        weight_name: route.weight_name
    };
}
function getAlternativeRoutes(directions) {
    if (!directions.routes || directions.routes.length <= 1) {
        return [];
    }
    return directions.routes.slice(1).map((route)=>({
            path: route.geometry.coordinates,
            distance: route.distance,
            duration: Math.round(route.duration / 60)
        }));
}
function findIntermediateWaypoints(start, end, locations, currentFloor) {
    const waypoints = [];
    // Filter locations on the same floor
    const floorLocations = locations.filter((loc)=>loc.floor === currentFloor);
    // Key waypoint types for airport navigation with priorities
    const keyTypes = {
        security: 3,
        elevator: 2,
        escalator: 2,
        information: 1,
        entrance: 1,
        exit: 1
    };
    // Find key locations between start and end
    const startX = start[0];
    const startY = start[1];
    const endX = end[0];
    const endY = end[1];
    // Calculate distance from start to end
    const totalDistance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
    // Find locations that are roughly between start and end
    floorLocations.forEach((loc)=>{
        const priority = keyTypes[loc.type];
        if (priority) {
            const locX = loc.coordinates[0];
            const locY = loc.coordinates[1];
            // Calculate distance from start
            const distFromStart = Math.sqrt(Math.pow(locX - startX, 2) + Math.pow(locY - startY, 2));
            // Check if location is roughly between start and end (within 120% of direct distance)
            const isReasonable = distFromStart <= totalDistance * 1.2;
            // Check if location is roughly in the direction of the destination
            const directionToEnd = Math.atan2(endY - startY, endX - startX);
            const directionToLoc = Math.atan2(locY - startY, locX - startX);
            const angleDiff = Math.abs(directionToEnd - directionToLoc);
            const isInDirection = angleDiff < Math.PI / 3; // Within 60 degrees
            if (isReasonable && isInDirection) {
                waypoints.push({
                    coordinates: loc.coordinates,
                    priority,
                    distance: distFromStart
                });
            }
        }
    });
    // Sort by priority (higher first), then by distance (closer first)
    waypoints.sort((a, b)=>{
        if (b.priority !== a.priority) {
            return b.priority - a.priority;
        }
        return a.distance - b.distance;
    });
    // Limit to 2-3 waypoints to avoid too complex routes
    // Only include high priority waypoints if they exist
    const highPriorityWaypoints = waypoints.filter((w)=>w.priority >= 2);
    if (highPriorityWaypoints.length > 0) {
        return highPriorityWaypoints.slice(0, 2).map((w)=>w.coordinates);
    }
    return waypoints.slice(0, 2).map((w)=>w.coordinates);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/navigation/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavigationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/data/airport-data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context/LocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2f$EnhancedAirportMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/map/EnhancedAirportMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$FloorSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/FloorSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$mapbox$2d$directions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/mapbox-directions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function NavigationPage() {
    _s();
    const { t, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [floors, setFloors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentFloor, setCurrentFloor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [startLocation, setStartLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [endLocation, setEndLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [route, setRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [routeInstructions, setRouteInstructions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [routeSummary, setRouteSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationPage.useEffect": ()=>{
            setLocations(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__["default"].locations);
            setFloors(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__["default"].floors);
        }
    }["NavigationPage.useEffect"], []);
    const handleCalculateRoute = async ()=>{
        if (!startLocation || !endLocation) {
            return;
        }
        const start = locations.find((loc)=>loc.id === startLocation);
        const end = locations.find((loc)=>loc.id === endLocation);
        if (!start || !end) return;
        setIsLoading(true);
        setRoute(undefined);
        setRouteInstructions([]);
        setRouteSummary(null);
        try {
            // Find intermediate waypoints for better routing in airport context
            const waypoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$mapbox$2d$directions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findIntermediateWaypoints"])(start.coordinates, end.coordinates, locations.map((loc)=>({
                    coordinates: loc.coordinates,
                    type: loc.type,
                    floor: loc.floor
                })), start.floor);
            // Use Mapbox Directions API with advanced options for better routing
            const directions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$mapbox$2d$directions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMapboxDirections"])(start.coordinates, end.coordinates, {
                profile: "walking",
                alternatives: true,
                steps: true,
                geometries: "geojson",
                overview: "full",
                language: locale === "ewe" ? "en" : locale,
                waypoints: waypoints.length > 0 ? waypoints : undefined,
                annotations: [
                    "distance",
                    "duration"
                ],
                continue_straight: false
            });
            if (directions) {
                const routePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$mapbox$2d$directions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractRoutePath"])(directions);
                const instructions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$mapbox$2d$directions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractRouteInstructions"])(directions);
                const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$mapbox$2d$directions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRouteSummary"])(directions);
                const alternatives = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$mapbox$2d$directions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlternativeRoutes"])(directions);
                setRoute(routePath);
                setRouteInstructions(instructions);
                setRouteSummary(summary);
                setCurrentFloor(start.floor);
                // Log alternative routes for future use
                if (alternatives.length > 0) {
                    console.log(`Found ${alternatives.length} alternative route(s)`);
                }
                // Fit map to route bounds if needed
                if (routePath.length > 0) {
                // The map will automatically fit to the route
                }
            } else {
                // Fallback to simple route if Mapbox API fails
                const simpleRoute = [
                    start.coordinates,
                    end.coordinates
                ];
                setRoute(simpleRoute);
                setCurrentFloor(start.floor);
            }
        } catch (error) {
            console.error("Error calculating route:", error);
            // Fallback to simple route
            const startLoc = locations.find((loc)=>loc.id === startLocation);
            const endLoc = locations.find((loc)=>loc.id === endLocation);
            if (startLoc && endLoc) {
                const simpleRoute = [
                    startLoc.coordinates,
                    endLoc.coordinates
                ];
                setRoute(simpleRoute);
                setCurrentFloor(startLoc.floor);
            }
        } finally{
            setIsLoading(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen overflow-hidden",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.default
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-80 lg:w-72 flex-shrink-0 overflow-y-auto",
                style: {
                    backgroundColor: "#ffffff"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-bold mb-2",
                                    style: {
                                        fontSize: "28px",
                                        fontWeight: 700,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: t("navigation.title")
                                }, void 0, false, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                    },
                                    children: t("navigation.calculateItinerary")
                                }, void 0, false, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/navigation/page.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: t("navigation.startingPoint")
                                }, void 0, false, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: startLocation,
                                            onChange: (e)=>{
                                                setStartLocation(e.target.value);
                                                setSelectedLocation(e.target.value);
                                            },
                                            className: "w-full appearance-none rounded-lg border px-4 py-3 pr-10 text-sm transition-all focus:outline-none focus:ring-2",
                                            style: {
                                                backgroundColor: "#ffffff",
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border.main,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: t("navigation.selectPlaceholder")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navigation/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this),
                                                Object.entries(groupedLocations).map(([type, locs])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                        label: locationTypeLabels[type] || type,
                                                        children: locs.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: loc.id,
                                                                children: loc.name
                                                            }, loc.id, false, {
                                                                fileName: "[project]/app/navigation/page.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, type, false, {
                                                        fileName: "[project]/app/navigation/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/navigation/page.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: t("navigation.destination")
                                }, void 0, false, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: endLocation,
                                            onChange: (e)=>{
                                                setEndLocation(e.target.value);
                                                setSelectedLocation(e.target.value);
                                            },
                                            className: "w-full appearance-none rounded-lg border px-4 py-3 pr-10 text-sm transition-all focus:outline-none focus:ring-2",
                                            style: {
                                                backgroundColor: "#ffffff",
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border.main,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: t("navigation.selectPlaceholder")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navigation/page.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 17
                                                }, this),
                                                Object.entries(groupedLocations).map(([type, locs])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                        label: locationTypeLabels[type] || type,
                                                        children: locs.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: loc.id,
                                                                children: loc.name
                                                            }, loc.id, false, {
                                                                fileName: "[project]/app/navigation/page.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, type, false, {
                                                        fileName: "[project]/app/navigation/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/navigation/page.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCalculateRoute,
                            className: "w-full rounded-lg font-semibold transition-all py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                            style: {
                                backgroundColor: startLocation && endLocation ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.gray[300],
                                color: startLocation && endLocation ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.contrast : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary,
                                boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadow.sm
                            },
                            disabled: !startLocation || !endLocation || isLoading,
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-4 h-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/navigation/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this),
                                    t("navigation.calculating")
                                ]
                            }, void 0, true) : t("navigation.calculateRoute")
                        }, void 0, false, {
                            fileName: "[project]/app/navigation/page.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        routeSummary && route && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg p-4 space-y-3",
                            style: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated,
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border.main}`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/navigation/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                                },
                                                children: [
                                                    (routeSummary.distance / 1000).toFixed(2),
                                                    " km"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/navigation/page.tsx",
                                                lineNumber: 298,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/navigation/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/navigation/page.tsx",
                                                lineNumber: 303,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                                },
                                                children: [
                                                    "~",
                                                    routeSummary.duration,
                                                    " min"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/navigation/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/navigation/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/navigation/page.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/navigation/page.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this),
                        routeInstructions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: t("navigation.navigationInstructions")
                                }, void 0, false, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 max-h-64 overflow-y-auto",
                                    children: routeInstructions.map((instruction, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg p-3 text-xs",
                                            style: {
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.elevated,
                                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border.main}`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                                                        style: {
                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main,
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.contrast
                                                        },
                                                        children: index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/navigation/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                                                },
                                                                children: instruction.instruction
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/navigation/page.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 25
                                                            }, this),
                                                            instruction.distance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                                                },
                                                                children: [
                                                                    (instruction.distance / 1000).toFixed(2),
                                                                    " km"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/navigation/page.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/navigation/page.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/navigation/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 21
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/app/navigation/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/navigation/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/navigation/page.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/navigation/page.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/navigation/page.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative",
                style: {
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.default
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2f$EnhancedAirportMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        locations: locations,
                        selectedLocation: selectedLocation,
                        onLocationSelect: setSelectedLocation,
                        showRoute: route,
                        currentFloor: currentFloor
                    }, void 0, false, {
                        fileName: "[project]/app/navigation/page.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$FloorSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        lineNumber: 369,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/navigation/page.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/navigation/page.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s(NavigationPage, "dDwARo1lu9tdVKFA7TURF9de9ug=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c = NavigationPage;
var _c;
__turbopack_context__.k.register(_c, "NavigationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_ca34c743._.js.map