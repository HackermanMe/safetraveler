"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, Navigation, AlertCircle, Info } from "lucide-react";

const navItems = [
  {
    name: "Carte",
    href: "/map",
    icon: Map,
  },
  {
    name: "Navigation",
    href: "/navigation",
    icon: Navigation,
  },
  {
    name: "Signaler",
    href: "/report",
    icon: AlertCircle,
  },
  {
    name: "Services",
    href: "/services",
    icon: Info,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom z-50">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
