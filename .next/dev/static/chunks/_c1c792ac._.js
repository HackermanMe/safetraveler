(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/report/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context/LocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/theme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ReportPage() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const [problemType, setProblemType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [photo, setPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    const airportZones = [
        {
            value: "entrance",
            labelKey: "report.zones.entrance"
        },
        {
            value: "checkin",
            labelKey: "report.zones.checkin"
        },
        {
            value: "security",
            labelKey: "report.zones.security"
        },
        {
            value: "gatesA",
            labelKey: "report.zones.gatesA"
        },
        {
            value: "gatesB",
            labelKey: "report.zones.gatesB"
        },
        {
            value: "baggageClaim",
            labelKey: "report.zones.baggageClaim"
        },
        {
            value: "foodCourt",
            labelKey: "report.zones.foodCourt"
        },
        {
            value: "shops",
            labelKey: "report.zones.shops"
        },
        {
            value: "toilets",
            labelKey: "report.zones.toilets"
        },
        {
            value: "parking",
            labelKey: "report.zones.parking"
        },
        {
            value: "other",
            labelKey: "report.zones.other"
        }
    ];
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-64px)] flex items-center justify-center px-4",
            style: {
                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.default
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
                        style: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.success.main + "20",
                            border: `3px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.success.main}`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-12 h-12",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.success.main
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/report/page.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold mb-3",
                        style: {
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.h3.fontSize,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.h3.fontWeight,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                        },
                        children: t("report.success.title")
                    }, void 0, false, {
                        fileName: "[project]/app/report/page.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-8",
                        style: {
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary,
                            lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.lineHeight
                        },
                        children: t("report.success.description")
                    }, void 0, false, {
                        fileName: "[project]/app/report/page.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: resetForm,
                        className: "rounded-lg font-medium transition-all px-8 py-3",
                        style: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.contrast,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.button.fontSize,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.button.fontWeight,
                            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadow.sm
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.dark;
                            e.currentTarget.style.transform = "translateY(-1px)";
                            e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadow.md;
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main;
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadow.sm;
                        },
                        children: t("common.close")
                    }, void 0, false, {
                        fileName: "[project]/app/report/page.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/report/page.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/report/page.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh-64px)] pb-8",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.default
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-bold mb-2",
                            style: {
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.display.fontSize,
                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.display.fontWeight,
                                lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.display.lineHeight,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                            },
                            children: t("report.title")
                        }, void 0, false, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.large.fontSize,
                                lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.large.lineHeight,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                            },
                            children: t("report.subtitle")
                        }, void 0, false, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/report/page.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 shadow-sm border border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-medium mb-4",
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: t("report.typeLabel")
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: problemTypes.map((type)=>{
                                        const isSelected = problemType === type.value;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setProblemType(type.value),
                                            className: `p-4 rounded-lg border-2 transition-all text-left ${isSelected ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300 bg-white"}`,
                                            style: {
                                                boxShadow: isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadow.sm : "none"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                style: {
                                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                                    color: isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                                },
                                                children: t(type.labelKey)
                                            }, void 0, false, {
                                                fileName: "[project]/app/report/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 21
                                            }, this)
                                        }, type.value, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 shadow-sm border border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-medium mb-3 flex items-center gap-2",
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-5 h-5",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent.main
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        t("report.locationLabel")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: location,
                                    onChange: (e)=>setLocation(e.target.value),
                                    className: "w-full rounded-lg focus:outline-none transition-all p-3",
                                    style: {
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
                                        e.currentTarget.style.boxShadow = "none";
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: t("report.locationPlaceholder")
                                        }, void 0, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this),
                                        airportZones.map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: zone.value,
                                                children: t(zone.labelKey)
                                            }, zone.value, false, {
                                                fileName: "[project]/app/report/page.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 shadow-sm border border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-medium mb-3",
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: t("report.descriptionLabel")
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: description,
                                    onChange: (e)=>setDescription(e.target.value),
                                    rows: 5,
                                    placeholder: t("report.descriptionPlaceholder"),
                                    className: "w-full rounded-lg focus:outline-none transition-all resize-none p-3",
                                    style: {
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
                                        e.currentTarget.style.boxShadow = "none";
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 shadow-sm border border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-medium mb-3",
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.primary
                                    },
                                    children: t("report.photoLabel")
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileInputRef,
                                    type: "file",
                                    accept: "image/*",
                                    capture: "environment",
                                    onChange: handlePhotoCapture,
                                    className: "hidden"
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: photo,
                                            alt: "Preview",
                                            className: "w-full h-48 object-cover rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>fileInputRef.current?.click(),
                                    className: "w-full p-8 border-2 border-dashed rounded-lg transition-all flex flex-col items-center gap-3 hover:border-blue-600 hover:bg-blue-50",
                                    style: {
                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border.main,
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.background.default
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                            className: "w-10 h-10",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.gray[400]
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.base.fontSize,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary
                                            },
                                            children: t("report.photoButton")
                                        }, void 0, false, {
                                            fileName: "[project]/app/report/page.tsx",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg p-4 flex items-start gap-3",
                            style: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.info.main + "10",
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.info.main}30`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-5 h-5 flex-shrink-0 mt-0.5",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.info.main
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.small.fontSize,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.text.secondary,
                                        lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.small.lineHeight
                                    },
                                    children: t("report.anonymousNotice")
                                }, void 0, false, {
                                    fileName: "[project]/app/report/page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: !problemType || !location || !description.trim() || isSubmitting,
                            className: "w-full rounded-lg font-medium transition-all flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed",
                            style: {
                                backgroundColor: problemType && location && description.trim() && !isSubmitting ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.gray[700] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.gray[300],
                                color: problemType && location && description.trim() && !isSubmitting ? "white" : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.gray[500],
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.button.fontSize,
                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.button.fontWeight,
                                boxShadow: problemType && location && description.trim() && !isSubmitting ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadow.sm : "none"
                            },
                            onMouseEnter: (e)=>{
                                if (problemType && location && description.trim() && !isSubmitting) {
                                    e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.gray[800];
                                    e.currentTarget.style.transform = "translateY(-1px)";
                                    e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadow.md;
                                }
                            },
                            onMouseLeave: (e)=>{
                                if (problemType && location && description.trim() && !isSubmitting) {
                                    e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.gray[700];
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadow.sm;
                                }
                            },
                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 border-2 rounded-full animate-spin",
                                        style: {
                                            borderColor: "white",
                                            borderTopColor: "transparent"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/report/page.tsx",
                                        lineNumber: 432,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("common.loading")
                                    }, void 0, false, {
                                        fileName: "[project]/app/report/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/report/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("report.submit")
                                    }, void 0, false, {
                                        fileName: "[project]/app/report/page.tsx",
                                        lineNumber: 444,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/app/report/page.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/report/page.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/report/page.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/report/page.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_s(ReportPage, "9oQmIVN0zmU+tzJ/iLqfONmzcEo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$LocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c = ReportPage;
var _c;
__turbopack_context__.k.register(_c, "ReportPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const Camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("camera", __iconNode);
;
 //# sourceMappingURL=camera.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Camera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("send", __iconNode);
;
 //# sourceMappingURL=send.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check", __iconNode);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("map-pin", __iconNode);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_c1c792ac._.js.map