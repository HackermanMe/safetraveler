"use client";

import React, { useEffect, useRef, useState } from "react";
import { JourneyStep, PassengerClass } from "@/lib/types/passenger";
import { passengerClassColors, theme } from "@/lib/config/theme";
import { MapPin, Check, Clock } from "lucide-react";
import { useLocale } from "@/lib/context/LocaleContext";

interface RoadmapProps {
    steps: JourneyStep[];
    currentStepIndex: number;
    passengerClass: PassengerClass;
    onStepClick: (index: number) => void;
}

export default function Roadmap({
    steps,
    currentStepIndex,
    passengerClass,
    onStepClick,
}: RoadmapProps) {
    const { t } = useLocale();
    const svgRef = useRef<SVGSVGElement>(null);
    const [pathLength, setPathLength] = useState(0);

    // Configuration for the winding road
    const stepHeight = 150;
    const width = 320; // Base width for SVG coordinate system
    const paddingX = 60;
    const startY = 40;

    const totalHeight = Math.max(600, steps.length * stepHeight + 100);

    // Calculate coordinates for each step
    const getCoordinates = (index: number) => {
        const y = startY + index * stepHeight;
        // Zig-zag pattern: even indices on left, odd on right (or vice versa)
        // We want a smooth curve, so x should oscillate
        const isEven = index % 2 === 0;
        const x = isEven ? width - paddingX : paddingX;
        return { x, y };
    };

    // Generate SVG Path Command
    const generatePath = () => {
        if (steps.length === 0) return "";

        let d = `M ${getCoordinates(0).x} ${getCoordinates(0).y}`;

        for (let i = 0; i < steps.length - 1; i++) {
            const current = getCoordinates(i);
            const next = getCoordinates(i + 1);

            const controlY = (current.y + next.y) / 2;

            // Cubic bezier curve for smooth S-shape
            // data: C x1 y1, x2 y2, x y
            d += ` C ${current.x} ${controlY}, ${next.x} ${controlY}, ${next.x} ${next.y}`;
        }

        return d;
    };

    const pathD = generatePath();
    const classColor = passengerClassColors[passengerClass];

    return (
        <div className="relative w-full max-w-md mx-auto selection:bg-none">
            <svg
                ref={svgRef}
                viewBox={`0 0 ${width} ${totalHeight}`}
                className="w-full h-auto overflow-visible"
                style={{ minHeight: `${totalHeight}px` }}
            >
                {/* Background Road (Gray/Base) */}
                <path
                    d={pathD}
                    fill="none"
                    stroke={theme.colors.gray[200]}
                    strokeWidth="40"
                    strokeLinecap="round"
                    className="opacity-50"
                />

                {/* Dashed Line Center */}
                <path
                    d={pathD}
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="10 10"
                    strokeLinecap="round"
                    className="opacity-60"
                />

                {/* Progress Path (Colored) - Optional: could animate this based on progress */}
                {/* Calculating strict length on SVG without JS is hard, so we skip exact progress fill for now or implement approx */}

                {/* Markers */}
                {steps.map((step, index) => {
                    const { x, y } = getCoordinates(index);
                    const isCompleted = index < currentStepIndex;
                    const isCurrent = index === currentStepIndex;
                    const isActive = index <= currentStepIndex;

                    return (
                        <g
                            key={step.id}
                            className="cursor-pointer transition-all duration-300"
                            onClick={() => onStepClick(index)}
                        >
                            {/* Ripple effect for current step */}
                            {isCurrent && (
                                <circle cx={x} cy={y} r="30" fill={classColor.primary} opacity="0.2">
                                    <animate attributeName="r" from="30" to="50" dur="1.5s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" from="0.3" to="0" dur="1.5s" repeatCount="indefinite" />
                                </circle>
                            )}

                            {/* Step Circle Content */}
                            <circle
                                cx={x}
                                cy={y}
                                r="24"
                                fill={isActive ? classColor.primary : "white"}
                                stroke={isActive ? "white" : theme.colors.gray[300]}
                                strokeWidth="4"
                                className="shadow-lg transition-colors duration-300"
                            />

                            {/* Icon / Number */}
                            <g transform={`translate(${x - 12}, ${y - 12})`}>
                                <foreignObject width="24" height="24">
                                    <div className="w-full h-full flex items-center justify-center text-white">
                                        {isCompleted ? (
                                            <Check size={16} strokeWidth={3} />
                                        ) : (
                                            <span className={`font-bold text-lg ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                                {index + 1}
                                            </span>
                                        )}
                                    </div>
                                </foreignObject>
                            </g>

                            {/* Label (Alternating Left/Right) */}
                            <foreignObject
                                x={index % 2 === 0 ? x - 200 : x + 40}
                                y={y - 40}
                                width="160"
                                height="100"
                                className="overflow-visible"
                            >
                                <div
                                    className={`flex flex-col ${index % 2 === 0 ? 'items-end text-right pr-4' : 'items-start text-left pl-4'}`}
                                >
                                    <div
                                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-1 shadow-sm
                        ${isCurrent ? 'bg-white text-gray-900 border-2' : ''}`}
                                        style={{
                                            borderColor: isActive ? classColor.primary : 'transparent',
                                            backgroundColor: isCurrent ? 'white' : 'rgba(255,255,255,0.8)',
                                            color: isCurrent ? classColor.primary : theme.colors.gray[600]
                                        }}
                                    >
                                        {t(`home.journey.steps.${step.id}.title`)}
                                    </div>
                                    {step.estimatedTime > 0 && (
                                        <div className="flex items-center gap-1 text-xs text-gray-500 font-medium bg-white/80 px-2 py-0.5 rounded-full">
                                            <Clock size={10} />
                                            <span>{step.estimatedTime} min</span>
                                        </div>
                                    )}
                                </div>
                            </foreignObject>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
