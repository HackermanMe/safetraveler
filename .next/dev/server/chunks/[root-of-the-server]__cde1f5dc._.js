module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/flights/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// Cache en mémoire (30 minutes)
let flightCache = {
    data: null,
    timestamp: 0
};
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes
const AVIATIONSTACK_API_KEY = process.env.AVIATIONSTACK_API_KEY;
const LFW_AIRPORT_CODE = 'LFW'; // Lomé
// Données simulées réalistes basées sur les vraies compagnies de Lomé
function generateSimulatedFlights() {
    const now = new Date();
    const flights = [];
    // Configuration des vols réels de Lomé
    const realFlights = [
        // Départs
        {
            airline: 'Air France',
            code: 'AF',
            number: '942',
            destination: 'CDG',
            destinationName: 'Paris Charles de Gaulle',
            hour: 23,
            minute: 55,
            type: 'departure'
        },
        {
            airline: 'Brussels Airlines',
            code: 'SN',
            number: '238',
            destination: 'BRU',
            destinationName: 'Bruxelles',
            hour: 14,
            minute: 30,
            type: 'departure'
        },
        {
            airline: 'Ethiopian Airlines',
            code: 'ET',
            number: '928',
            destination: 'ADD',
            destinationName: 'Addis-Abeba',
            hour: 2,
            minute: 15,
            type: 'departure'
        },
        {
            airline: 'Turkish Airlines',
            code: 'TK',
            number: '538',
            destination: 'IST',
            destinationName: 'Istanbul',
            hour: 22,
            minute: 45,
            type: 'departure'
        },
        {
            airline: 'Royal Air Maroc',
            code: 'AT',
            number: '566',
            destination: 'CMN',
            destinationName: 'Casablanca',
            hour: 15,
            minute: 20,
            type: 'departure'
        },
        {
            airline: 'Emirates',
            code: 'EK',
            number: '787',
            destination: 'DXB',
            destinationName: 'Dubaï',
            hour: 1,
            minute: 30,
            type: 'departure'
        },
        {
            airline: 'ASKY Airlines',
            code: 'KP',
            number: '102',
            destination: 'DKR',
            destinationName: 'Dakar',
            hour: 8,
            minute: 0,
            type: 'departure'
        },
        {
            airline: 'ASKY Airlines',
            code: 'KP',
            number: '201',
            destination: 'ABJ',
            destinationName: 'Abidjan',
            hour: 10,
            minute: 15,
            type: 'departure'
        },
        {
            airline: 'ASKY Airlines',
            code: 'KP',
            number: '304',
            destination: 'ACC',
            destinationName: 'Accra',
            hour: 12,
            minute: 30,
            type: 'departure'
        },
        {
            airline: 'ASKY Airlines',
            code: 'KP',
            number: '407',
            destination: 'LOS',
            destinationName: 'Lagos',
            hour: 16,
            minute: 45,
            type: 'departure'
        },
        {
            airline: 'Air Côte d\'Ivoire',
            code: 'HF',
            number: '542',
            destination: 'ABJ',
            destinationName: 'Abidjan',
            hour: 11,
            minute: 0,
            type: 'departure'
        },
        // Arrivées
        {
            airline: 'Air France',
            code: 'AF',
            number: '941',
            destination: 'CDG',
            destinationName: 'Paris Charles de Gaulle',
            hour: 20,
            minute: 30,
            type: 'arrival'
        },
        {
            airline: 'Brussels Airlines',
            code: 'SN',
            number: '237',
            destination: 'BRU',
            destinationName: 'Bruxelles',
            hour: 13,
            minute: 15,
            type: 'arrival'
        },
        {
            airline: 'Ethiopian Airlines',
            code: 'ET',
            number: '927',
            destination: 'ADD',
            destinationName: 'Addis-Abeba',
            hour: 0,
            minute: 45,
            type: 'arrival'
        },
        {
            airline: 'Turkish Airlines',
            code: 'TK',
            number: '537',
            destination: 'IST',
            destinationName: 'Istanbul',
            hour: 21,
            minute: 0,
            type: 'arrival'
        },
        {
            airline: 'ASKY Airlines',
            code: 'KP',
            number: '101',
            destination: 'DKR',
            destinationName: 'Dakar',
            hour: 7,
            minute: 0,
            type: 'arrival'
        },
        {
            airline: 'ASKY Airlines',
            code: 'KP',
            number: '202',
            destination: 'ABJ',
            destinationName: 'Abidjan',
            hour: 9,
            minute: 30,
            type: 'arrival'
        },
        {
            airline: 'ASKY Airlines',
            code: 'KP',
            number: '305',
            destination: 'ACC',
            destinationName: 'Accra',
            hour: 14,
            minute: 15,
            type: 'arrival'
        }
    ];
    const gates = [
        'A1',
        'A2',
        'A3',
        'A4',
        'A5',
        'A6',
        'B1',
        'B2',
        'B3'
    ];
    const statuses = [
        'on-time',
        'on-time',
        'on-time',
        'delayed',
        'boarding'
    ];
    realFlights.forEach((flight, index)=>{
        const scheduledTime = new Date(now);
        scheduledTime.setHours(flight.hour, flight.minute, 0, 0);
        // Si le vol est dans le passé, le mettre à demain
        if (scheduledTime < now) {
            scheduledTime.setDate(scheduledTime.getDate() + 1);
        }
        const status = statuses[index % statuses.length];
        const delay = status === 'delayed' ? Math.floor(Math.random() * 60) + 15 : 0;
        const estimatedTime = new Date(scheduledTime);
        if (delay > 0) {
            estimatedTime.setMinutes(estimatedTime.getMinutes() + delay);
        }
        flights.push({
            id: `${flight.code}${flight.number}-${flight.type}-${index}`,
            flightNumber: `${flight.code}${flight.number}`,
            airline: flight.airline,
            airlineCode: flight.code,
            origin: flight.type === 'departure' ? 'Lomé (LFW)' : flight.destinationName,
            destination: flight.type === 'departure' ? flight.destinationName : 'Lomé (LFW)',
            scheduledTime: scheduledTime.toISOString(),
            estimatedTime: estimatedTime.toISOString(),
            status,
            gate: gates[index % gates.length],
            terminal: '1',
            delay: delay > 0 ? delay : undefined,
            type: flight.type
        });
    });
    // Trier par heure
    return flights.sort((a, b)=>new Date(a.scheduledTime).getTime() - new Date(b.scheduledTime).getTime());
}
// Fonction pour récupérer les vols depuis AviationStack
async function fetchFlightsFromAPI() {
    if (!AVIATIONSTACK_API_KEY) {
        console.log('No AviationStack API key - using simulated data');
        return generateSimulatedFlights();
    }
    try {
        // Récupérer les départs
        const departuresUrl = `http://api.aviationstack.com/v1/flights?access_key=${AVIATIONSTACK_API_KEY}&dep_iata=${LFW_AIRPORT_CODE}&limit=50`;
        const arrivalsUrl = `http://api.aviationstack.com/v1/flights?access_key=${AVIATIONSTACK_API_KEY}&arr_iata=${LFW_AIRPORT_CODE}&limit=50`;
        const [departuresRes, arrivalsRes] = await Promise.all([
            fetch(departuresUrl),
            fetch(arrivalsUrl)
        ]);
        if (!departuresRes.ok || !arrivalsRes.ok) {
            console.error('AviationStack API error - falling back to simulated data');
            return generateSimulatedFlights();
        }
        const departuresData = await departuresRes.json();
        const arrivalsData = await arrivalsRes.json();
        const flights = [];
        // Traiter les départs
        if (departuresData.data) {
            departuresData.data.forEach((flight, index)=>{
                flights.push({
                    id: `${flight.flight.iata}-dep-${flight.flight_date}-${index}`,
                    flightNumber: flight.flight.iata,
                    airline: flight.airline.name,
                    airlineCode: flight.airline.iata,
                    origin: flight.departure.airport,
                    destination: flight.arrival.airport,
                    scheduledTime: flight.departure.scheduled,
                    estimatedTime: flight.departure.estimated || flight.departure.scheduled,
                    status: mapFlightStatus(flight.flight_status),
                    gate: flight.departure.gate || undefined,
                    terminal: flight.departure.terminal || undefined,
                    delay: flight.departure.delay || undefined,
                    type: 'departure'
                });
            });
        }
        // Traiter les arrivées
        if (arrivalsData.data) {
            arrivalsData.data.forEach((flight, index)=>{
                flights.push({
                    id: `${flight.flight.iata}-arr-${flight.flight_date}-${index}`,
                    flightNumber: flight.flight.iata,
                    airline: flight.airline.name,
                    airlineCode: flight.airline.iata,
                    origin: flight.departure.airport,
                    destination: flight.arrival.airport,
                    scheduledTime: flight.arrival.scheduled,
                    estimatedTime: flight.arrival.estimated || flight.arrival.scheduled,
                    status: mapFlightStatus(flight.flight_status),
                    gate: flight.arrival.gate || undefined,
                    terminal: flight.arrival.terminal || undefined,
                    delay: flight.arrival.delay || undefined,
                    type: 'arrival'
                });
            });
        }
        return flights.length > 0 ? flights : generateSimulatedFlights();
    } catch (error) {
        console.error('Error fetching flights from AviationStack:', error);
        return generateSimulatedFlights();
    }
}
function mapFlightStatus(status) {
    const statusMap = {
        'scheduled': 'on-time',
        'active': 'boarding',
        'landed': 'arrived',
        'cancelled': 'cancelled',
        'incident': 'delayed',
        'diverted': 'delayed'
    };
    return statusMap[status] || 'on-time';
}
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type'); // 'departure' | 'arrival' | null (all)
        // Vérifier le cache
        const now = Date.now();
        if (flightCache.data && now - flightCache.timestamp < CACHE_DURATION) {
            console.log('Returning cached flight data');
            let data = flightCache.data;
            if (type) {
                data = data.filter((flight)=>flight.type === type);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                cached: true,
                data,
                cacheAge: Math.floor((now - flightCache.timestamp) / 1000)
            });
        }
        // Récupérer de nouvelles données
        console.log('Fetching fresh flight data');
        const flights = await fetchFlightsFromAPI();
        // Mettre en cache
        flightCache = {
            data: flights,
            timestamp: now
        };
        let data = flights;
        if (type) {
            data = data.filter((flight)=>flight.type === type);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            cached: false,
            data,
            source: AVIATIONSTACK_API_KEY ? 'api' : 'simulated'
        });
    } catch (error) {
        console.error('Error in flights API:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to fetch flight data',
            data: generateSimulatedFlights()
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cde1f5dc._.js.map