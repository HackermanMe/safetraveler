module.exports = [
"[project]/lib/data/airport-data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"airport":{"name":"Aéroport International Gnassingbé Eyadéma","code":"LFW","city":"Lomé","country":"Togo","coordinates":[1.2549,6.1659],"capacity":"2 000 000 passagers/an","hub":"ASKY Airlines","distance_city":"6.8 km du centre-ville"},"locations":[{"id":"gate-a1","name":"Porte A1","type":"gate","floor":1,"coordinates":[1.253568,6.170194],"description":"Porte d'embarquement A1 - Vols internationaux","status":"open"},{"id":"gate-a2","name":"Porte A2","type":"gate","floor":1,"coordinates":[1.253185,6.169748],"description":"Porte d'embarquement A2 - Vols internationaux","status":"open"},{"id":"gate-a3","name":"Porte A3","type":"gate","floor":1,"coordinates":[1.252825,6.169437],"description":"Porte d'embarquement A3 - Vols internationaux","status":"open"},{"id":"gate-b1","name":"Porte B1","type":"gate","floor":1,"coordinates":[1.254069,6.171084],"description":"Porte d'embarquement B1 - Vols régionaux","status":"open"},{"id":"gate-b2","name":"Porte B2","type":"gate","floor":1,"coordinates":[1.253923,6.170668],"description":"Porte d'embarquement B2 - Vols régionaux","status":"open"},{"id":"checkin-economy-1","name":"Enregistrement Zone A","type":"checkin","floor":0,"coordinates":[1.253038,6.170017],"description":"Comptoirs 1-20 - Classe Économique","status":"open","accessibleTo":["economy"]},{"id":"checkin-economy-2","name":"Enregistrement Zone B","type":"checkin","floor":0,"coordinates":[1.253899,6.170813],"description":"Comptoirs 21-40 - Classe Économique","status":"open","accessibleTo":["economy"]},{"id":"checkin-business","name":"Enregistrement Business","type":"checkin","floor":0,"coordinates":[1.252822,6.169666],"description":"Comptoirs Business & Première Classe","status":"open","accessibleTo":["business","first"]},{"id":"security-main","name":"Contrôle de Sécurité Principal","type":"security","floor":0,"coordinates":[1.253083,6.172066],"description":"Point de contrôle sécurité et passeport","status":"busy"},{"id":"security-fast","name":"Contrôle Fast Track","type":"security","floor":0,"coordinates":[1.253317,6.170509],"description":"Voie rapide Business/Première Classe","status":"open","accessibleTo":["business","first"]},{"id":"toilet-arrival","name":"Toilettes Zone Arrivées","type":"toilet","floor":0,"coordinates":[1.253572,6.170538],"description":"Toilettes accessibles PMR","status":"open"},{"id":"toilet-checkin","name":"Toilettes Zone Enregistrement","type":"toilet","floor":0,"coordinates":[1.253357,6.170299],"description":"Toilettes accessibles PMR","status":"open"},{"id":"toilet-gates-a","name":"Toilettes Portes A","type":"toilet","floor":1,"coordinates":[1.253572,6.170538],"description":"Toilettes zone internationale","status":"open"},{"id":"toilet-gates-b","name":"Toilettes Portes B","type":"toilet","floor":1,"coordinates":[1.253357,6.170299],"description":"Toilettes zone domestique","status":"open"},{"id":"restaurant-maquis","name":"Le Maquis de l'Aéroport","type":"restaurant","floor":0,"coordinates":[1.252739,6.170065],"description":"Cuisine togolaise authentique - Fufu, Akpan, Akoumé","status":"open","hours":"6h - 22h"},{"id":"restaurant-teranga","name":"Restaurant Teranga","type":"restaurant","floor":1,"coordinates":[1.252739,6.170065],"description":"Cuisine africaine et internationale","status":"open","hours":"5h - 23h"},{"id":"cafe-express","name":"Café Express","type":"restaurant","floor":1,"coordinates":[1.252739,6.170065],"description":"Café, viennoiseries, sandwichs rapides","status":"open","hours":"4h30 - 23h30"},{"id":"shop-dutyfree","name":"Duty Free Lomé","type":"shop","floor":1,"coordinates":[1.25217,6.169382],"description":"Parfums, alcools, tabac, cosmétiques hors taxes","status":"open","hours":"5h - 23h"},{"id":"shop-artisanat","name":"Artisanat Togolais","type":"shop","floor":1,"coordinates":[1.251705,6.169352],"description":"Tissus batik, sculptures, bijoux locaux, souvenirs","status":"open","hours":"6h - 22h"},{"id":"shop-presse","name":"Relay Presse","type":"shop","floor":1,"coordinates":[1.252265,6.169839],"description":"Presse internationale, livres, snacks","status":"open","hours":"5h - 23h"},{"id":"info-main","name":"Information Principale","type":"information","floor":0,"coordinates":[1.253386,6.17088],"description":"Renseignements, objets trouvés, assistance","status":"open"},{"id":"info-gates","name":"Information Zone Embarquement","type":"information","floor":1,"coordinates":[1.252895,6.170068],"description":"Informations vols et assistance embarquement","status":"open"},{"id":"lounge-asky","name":"Salon VIP ASKY Airlines","type":"lounge","floor":1,"coordinates":[1.252755,6.170232],"description":"Salon VIP avec restauration, Wi-Fi, douches","status":"open","accessibleTo":["business","first"]},{"id":"lounge-business","name":"Salon Business","type":"lounge","floor":1,"coordinates":[1.253317,6.170509],"description":"Salon Business avec bar et restauration","status":"open","accessibleTo":["business","first"]}],"services":[{"id":"service-prmassist","name":"Assistance Passagers à Mobilité Réduite","category":"assistance","description":"Accompagnement personnalisé, fauteuils roulants, assistance embarquement/débarquement","location":"info-main","hours":"24/7","contact":"+228 22 23 44 55","icon":"accessibility","free":true},{"id":"service-medical","name":"Assistance Médicale d'Urgence","category":"medical","description":"Infirmerie avec personnel qualifié, premiers secours, défibrillateur","location":"medical-main","hours":"24/7","contact":"+228 22 23 44 56","icon":"cross","free":true},{"id":"service-lostfound","name":"Objets Trouvés","category":"lost_found","description":"Déclaration et récupération d'objets perdus dans l'enceinte de l'aéroport","location":"info-main","hours":"6h - 23h","contact":"+228 22 23 44 57","icon":"briefcase","free":true},{"id":"service-flightinfo","name":"Information Vols en Temps Réel","category":"information","description":"Horaires, retards, annulations, changements de porte","location":"info-main","hours":"24/7","contact":"+228 22 23 44 58","icon":"info","free":true},{"id":"service-customs","name":"Services Douaniers","category":"customs","description":"Déclarations douanières, contrôles, informations réglementaires","location":"customs-arrival","hours":"Selon horaires des vols","contact":"+228 22 23 44 59","icon":"shield","free":true},{"id":"service-wifi","name":"Wi-Fi Gratuit","category":"connectivity","description":"Accès Internet sans fil gratuit dans tout l'aéroport","location":"Partout","hours":"24/7","network":"Aeroport_LFW_Free","icon":"wifi","free":true},{"id":"service-porter","name":"Porteurs de Bagages","category":"assistance","description":"Aide au transport des bagages","location":"entrance-main","hours":"5h - 23h","icon":"luggage","free":false,"pricing":"2000-5000 CFA selon distance"},{"id":"service-vip","name":"Service VIP & Meet & Greet","category":"premium","description":"Accueil personnalisé, assistance formalités, salon VIP, voie rapide","location":"entrance-vip","hours":"24/7 (sur réservation)","contact":"+228 22 23 44 60","icon":"star","free":false,"pricing":"À partir de 50 000 CFA"}],"floors":[{"level":0,"name":"Rez-de-chaussée - Arrivées & Départs","description":"Zone publique : Enregistrement, Bagages, Services","bounds":[[1.251,6.163],[1.2595,6.169]]},{"level":1,"name":"Étage 1 - Zone d'Embarquement","description":"Zone sécurisée : Portes d'embarquement, Restaurants, Boutiques","bounds":[[1.255,6.166],[1.2595,6.169]]}],"airlines":[{"code":"KP","name":"ASKY Airlines","type":"hub","destinations":["Dakar","Abidjan","Ouagadougou","Niamey","Cotonou","Accra","Lagos","Libreville"]},{"code":"AF","name":"Air France","type":"international","destinations":["Paris CDG"]},{"code":"SN","name":"Brussels Airlines","type":"international","destinations":["Bruxelles"]},{"code":"ET","name":"Ethiopian Airlines","type":"international","destinations":["Addis-Abeba"]},{"code":"TK","name":"Turkish Airlines","type":"international","destinations":["Istanbul"]},{"code":"AT","name":"Royal Air Maroc","type":"international","destinations":["Casablanca"]},{"code":"EK","name":"Emirates","type":"international","destinations":["Dubaï"]},{"code":"HF","name":"Air Côte d'Ivoire","type":"regional","destinations":["Abidjan","Dakar"]}]});}),
"[project]/app/report/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context/LocaleContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/data/airport-data.json (json)");
"use client";
;
;
;
;
;
;
function ReportPage() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const [problemType, setProblemType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [photo, setPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocations(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$airport$2d$data$2e$json__$28$json$29$__["default"].locations);
    }, []);
    const problemTypes = [
        {
            value: "security",
            labelKey: "report.categories.security"
        },
        {
            value: "cleanliness",
            labelKey: "report.categories.cleanliness"
        },
        {
            value: "maintenance",
            labelKey: "report.categories.maintenance"
        },
        {
            value: "other",
            labelKey: "report.categories.other"
        }
    ];
    // Group locations by type for dropdown (same as navigation page)
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
    const handlePhotoCapture = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!problemType || !location || !description.trim()) {
            return;
        }
        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise((resolve)=>setTimeout(resolve, 1500));
            // In a real app, you would send the data to your API
            // await fetch("/api/reports", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify({ problemType, location, description, photo }),
            // });
            setSubmitted(true);
        } catch (error) {
            console.error("Error submitting report:", error);
            // Still show success for demo purposes
            setSubmitted(true);
        } finally{
            setIsSubmitting(false);
        }
    };
    const resetForm = ()=>{
        setProblemType("");
        setLocation("");
        setDescription("");
        setPhoto(null);
        setSubmitted(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    // Success screen
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-64px)] flex items-center justify-center px-4",
            style: {
                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.default
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
                        style: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.success.main + "20",
                            border: `3px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.success.main}`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-12 h-12",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.success.main
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/report/page.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold mb-3",
                        style: {
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.h3.fontSize,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.h3.fontWeight,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                        },
                        children: t("report.success.title")
                    }, void 0, false, {
                        fileName: "[project]/app/report/page.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-8",
                        style: {
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary,
                            lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.lineHeight
                        },
                        children: t("report.success.description")
                    }, void 0, false, {
                        fileName: "[project]/app/report/page.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: resetForm,
                        className: "rounded-lg font-medium transition-all px-8 py-3",
                        style: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.contrast,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.button.fontSize,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.button.fontWeight,
                            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.sm
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.dark;
                            e.currentTarget.style.transform = "translateY(-1px)";
                            e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.md;
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main;
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.sm;
                        },
                        children: t("common.close")
                    }, void 0, false, {
                        fileName: "[project]/app/report/page.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/report/page.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/report/page.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh-64px)] pb-8",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.default
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-bold mb-2",
                            style: {
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.display.fontSize,
                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.display.fontWeight,
                                lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.display.lineHeight,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                            },
                            children: t("report.title")
                        }, void 0, false, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.large.fontSize,
                                lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.large.lineHeight,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                            },
                            children: t("report.subtitle")
                        }, void 0, false, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/report/page.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 shadow-sm border border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-medium mb-4",
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: t("report.typeLabel")
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: problemTypes.map((type)=>{
                                        const isSelected = problemType === type.value;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setProblemType(type.value),
                                            className: `p-4 rounded-lg border-2 transition-all text-left ${isSelected ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300 bg-white"}`,
                                            style: {
                                                boxShadow: isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.sm : "none"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                style: {
                                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                                    color: isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                                },
                                                children: t(type.labelKey)
                                            }, void 0, false, {
                                                fileName: "[project]/app/report/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this)
                                        }, type.value, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 shadow-sm border border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-medium mb-3 flex items-center gap-2",
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-5 h-5",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this),
                                        t("report.locationLabel")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: location,
                                    onChange: (e)=>setLocation(e.target.value),
                                    className: "w-full rounded-lg focus:outline-none transition-all p-3",
                                    style: {
                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.main}`,
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary,
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.default
                                    },
                                    onFocus: (e)=>{
                                        e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main;
                                        e.currentTarget.style.boxShadow = `0 0 0 3px ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main}20`;
                                    },
                                    onBlur: (e)=>{
                                        e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.main;
                                        e.currentTarget.style.boxShadow = "none";
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: t("report.locationPlaceholder")
                                        }, void 0, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this),
                                        airportZones.map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: zone.value,
                                                children: t(zone.labelKey)
                                            }, zone.value, false, {
                                                fileName: "[project]/app/report/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 shadow-sm border border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-medium mb-3",
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: t("report.descriptionLabel")
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: description,
                                    onChange: (e)=>setDescription(e.target.value),
                                    rows: 5,
                                    placeholder: t("report.descriptionPlaceholder"),
                                    className: "w-full rounded-lg focus:outline-none transition-all resize-none p-3",
                                    style: {
                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.main}`,
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary,
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.default
                                    },
                                    onFocus: (e)=>{
                                        e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main;
                                        e.currentTarget.style.boxShadow = `0 0 0 3px ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.accent.main}20`;
                                    },
                                    onBlur: (e)=>{
                                        e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.main;
                                        e.currentTarget.style.boxShadow = "none";
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 shadow-sm border border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-medium mb-3",
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: t("report.photoLabel")
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileInputRef,
                                    type: "file",
                                    accept: "image/*",
                                    capture: "environment",
                                    onChange: handlePhotoCapture,
                                    className: "hidden"
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: photo,
                                            alt: "Preview",
                                            className: "w-full h-48 object-cover rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setPhoto(null);
                                                if (fileInputRef.current) {
                                                    fileInputRef.current.value = "";
                                                }
                                            },
                                            className: "absolute top-2 right-2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors",
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>fileInputRef.current?.click(),
                                    className: "w-full p-8 border-2 border-dashed rounded-lg transition-all flex flex-col items-center gap-3 hover:border-blue-600 hover:bg-blue-50",
                                    style: {
                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.border.main,
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.background.default
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                            className: "w-10 h-10",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[400]
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 371,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                            },
                                            children: t("report.photoButton")
                                        }, void 0, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg p-4 flex items-start gap-3",
                            style: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.info.main + "10",
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.info.main}30`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-5 h-5 flex-shrink-0 mt-0.5",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.info.main
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 395,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.small.fontSize,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary,
                                        lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.small.lineHeight
                                    },
                                    children: t("report.anonymousNotice")
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 399,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: !problemType || !location || !description.trim() || isSubmitting,
                            className: "w-full rounded-lg font-medium transition-all flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed",
                            style: {
                                backgroundColor: problemType && location && description.trim() && !isSubmitting ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[700] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[300],
                                color: problemType && location && description.trim() && !isSubmitting ? "white" : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[500],
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.button.fontSize,
                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].typography.button.fontWeight,
                                boxShadow: problemType && location && description.trim() && !isSubmitting ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.sm : "none"
                            },
                            onMouseEnter: (e)=>{
                                if (problemType && location && description.trim() && !isSubmitting) {
                                    e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[800];
                                    e.currentTarget.style.transform = "translateY(-1px)";
                                    e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.md;
                                }
                            },
                            onMouseLeave: (e)=>{
                                if (problemType && location && description.trim() && !isSubmitting) {
                                    e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].colors.gray[700];
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].shadow.sm;
                                }
                            },
                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 border-2 rounded-full animate-spin",
                                        style: {
                                            borderColor: "white",
                                            borderTopColor: "transparent"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/report/page.tsx",
                                        lineNumber: 445,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("common.loading")
                                    }, void 0, false, {
                                        fileName: "[project]/app/report/page.tsx",
                                        lineNumber: 452,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/report/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("report.submit")
                                    }, void 0, false, {
                                        fileName: "[project]/app/report/page.tsx",
                                        lineNumber: 457,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/report/page.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/report/page.tsx",
            lineNumber: 177,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/report/page.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Camera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
            key: "18u6gg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "13",
            r: "3",
            key: "1vg3eu"
        }
    ]
];
const Camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("camera", __iconNode);
;
 //# sourceMappingURL=camera.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Camera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Send
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("send", __iconNode);
;
 //# sourceMappingURL=send.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-check", __iconNode);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MapPin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
];
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("map-pin", __iconNode);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_42a803d9._.js.map