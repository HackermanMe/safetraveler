"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation, AlertTriangle, Info, User, Plane, PlaneTakeoff } from "lucide-react";
import { usePassenger } from "@/lib/context/PassengerContext";
import { passengerClassColors, theme } from "@/lib/config/theme";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { useLocale } from "@/lib/context/LocaleContext";

export default function Navbar() {
  const pathname = usePathname();
  const { profile } = usePassenger();
  const { locale, t } = useLocale();

  const navItems = [
    { nameKey: "nav.navigation", href: "/navigation", icon: Navigation },
    { nameKey: "nav.flights", href: "/flights", icon: PlaneTakeoff },
    { nameKey: "nav.report", href: "/report", icon: AlertTriangle },
    { nameKey: "nav.services", href: "/services", icon: Info },
  ];

  const classColor = profile
    ? passengerClassColors[profile.class].primary
    : theme.colors.gray[600];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="hidden md:block sticky top-0 z-50 backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderBottom: `1px solid ${theme.colors.border.main}`,
          boxShadow: theme.shadow.sm,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center" style={{ height: "64px" }}>
            {/* Logo */}
            <Link
              href="/"
            >
              <img
                src="/icons/logo.png"
                alt="SafeTraveler Logo"
                className="w-50 h-auto my-9"
              />
            </Link>
            {/* <Link
              href="/"
              className="flex items-center space-x-3 transition-transform hover:scale-105"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.accent.main} 0%, ${theme.colors.accent.dark} 100%)`,
                  boxShadow: theme.shadow.md,
                }}
              >
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className="font-semibold"
                  style={{
                    fontSize: theme.typography.h6.fontSize,
                    fontWeight: theme.typography.h6.fontWeight,
                    color: theme.colors.text.primary,
                    lineHeight: 1.2,
                  }}
                >
                  SafeTraveler
                </h1>
                <p
                  className="text-xs"
                  style={{
                    color: theme.colors.text.secondary,
                    fontSize: theme.typography.tiny.fontSize,
                  }}
                >
                  Aéroport de Lomé
                </p>
              </div>
            </Link> */}

            {/* Nav Items */}
            <div className="flex items-center" style={{ gap: theme.spacing[1] }}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.nameKey}
                    href={item.href}
                    className="flex items-center rounded-lg transition-all"
                    style={{
                      padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
                      backgroundColor: isActive
                        ? theme.colors.accent.main + "15"
                        : "transparent",
                      color: isActive
                        ? theme.colors.accent.dark
                        : theme.colors.text.secondary,
                      fontSize: theme.typography.small.fontSize,
                      fontWeight: isActive ? 600 : 500,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = theme.colors.gray[100];
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    <span>{t(item.nameKey)}</span>
                  </Link>
                );
              })}

              {/* Language Selector */}
              <LanguageSelector currentLocale={locale} />
            </div>

            {/* Profile Badge */}
            {profile && (
              <div
                className="flex items-center space-x-3 rounded-lg"
                style={{
                  padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
                  backgroundColor: theme.colors.gray[50],
                  border: `1px solid ${theme.colors.border.main}`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: classColor + "15",
                    border: `2px solid ${classColor}`,
                  }}
                >
                  <User className="w-5 h-5" style={{ color: classColor }} />
                </div>
                <div className="text-left">
                  <p
                    className="font-medium"
                    style={{
                      fontSize: theme.typography.small.fontSize,
                      color: theme.colors.text.primary,
                    }}
                  >
                    {t(`home.class.${profile.class === "economy" ? "economy" : profile.class === "business" ? "business" : "first"}`)}
                  </p>
                  {profile.flightNumber && (
                    <p
                      className="font-semibold"
                      style={{
                        fontSize: theme.typography.tiny.fontSize,
                        color: classColor,
                      }}
                    >
                      {profile.flightNumber}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className="md:hidden sticky top-0 z-50 backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderBottom: `1px solid ${theme.colors.border.main}`,
          boxShadow: theme.shadow.sm,
        }}
      >
        <div className="px-4">
          <div className="flex justify-between items-center" style={{ height: "56px" }}>
            {/* Logo */}
            <Link href="/">
              <img
                src="/icons/logo.png"
                alt="SafeTraveler Logo"
                className="h-16 w-auto"
              />
            </Link>

            {/* Language Selector */}
            <LanguageSelector currentLocale={locale} />
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white"
        style={{
          borderTop: `1px solid ${theme.colors.border.main}`,
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="flex justify-around items-center px-4" style={{ height: "68px" }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.nameKey}
                href={item.href}
                className="flex flex-col items-center justify-center transition-all flex-1"
              >
                <Icon
                  className="w-6 h-6 mb-1"
                  style={{
                    color: isActive ? theme.colors.accent.main : theme.colors.text.secondary,
                    strokeWidth: isActive ? 2.5 : 2,
                  }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? theme.colors.accent.main : theme.colors.text.secondary,
                  }}
                >
                  {t(item.nameKey)}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
