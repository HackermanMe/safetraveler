"use client";

interface FloorSelectorProps {
  currentFloor: number;
  floors: { level: number; name: string }[];
  onFloorChange: (floor: number) => void;
}

export default function FloorSelector({
  currentFloor,
  floors,
  onFloorChange,
}: FloorSelectorProps) {
  return (
    <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg overflow-hidden z-10">
      <div className="flex flex-col">
        {floors.map((floor) => (
          <button
            key={floor.level}
            onClick={() => onFloorChange(floor.level)}
            className={`px-4 py-3 text-sm font-medium transition-colors border-b last:border-b-0 ${
              currentFloor === floor.level
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="font-bold">{floor.level === 0 ? "RDC" : `Étage ${floor.level}`}</span>
            </div>
            <div className={`text-xs mt-1 whitespace-nowrap max-w-[150px] truncate ${
              currentFloor === floor.level ? "opacity-90" : "opacity-70"
            }`}>
              {floor.name.split(" - ")[1] || floor.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
