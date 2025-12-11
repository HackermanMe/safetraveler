import { NextResponse } from "next/server";

// Mock data store
let reports = [
  {
    id: "rep_1",
    type: "security",
    location: "gate-1",
    description: "Suspicious bag left unattended near the seating area.",
    status: "pending",
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 mins ago
    severity: "high"
  },
  {
    id: "rep_2",
    type: "cleanliness",
    location: "toilet-main",
    description: "Spill on the floor, needs cleaning.",
    status: "resolved",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    severity: "low"
  },
  {
    id: "rep_3",
    type: "maintenance",
    location: "checkin-business",
    description: "Conveyor belt making loud noise.",
    status: "investigating",
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
    severity: "medium"
  }
];

export async function GET() {
  return NextResponse.json(reports);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newReport = {
      id: `rep_${Date.now()}`,
      ...data,
      status: "pending",
      timestamp: new Date().toISOString(),
      severity: "medium"
    };
    
    reports.unshift(newReport);
    
    return NextResponse.json({ success: true, report: newReport });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
