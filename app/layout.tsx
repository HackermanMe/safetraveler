import type { Metadata } from "next";
import "./globals.css";
import { PassengerProvider } from "@/lib/context/PassengerContext";
import { LocaleProvider } from "@/lib/context/LocaleContext";
import Navbar from "@/components/layout/Navbar";
import ClassFAB from "@/components/ui/ClassFAB";
import DemoModeBanner from "@/components/ui/DemoModeBanner";
import InstallPrompt from "@/components/pwa/InstallPrompt";

export const metadata: Metadata = {
  title: "SafeTraveler - Aéroport de Lomé",
  description: "Navigation et services pour l'aéroport de Lomé",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SafeTraveler",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#1976d2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-roboto antialiased bg-gray-50">
        <LocaleProvider>
          <PassengerProvider>
            <Navbar />
            <main className="pb-16 md:pb-0">{children}</main>
            <ClassFAB />
            <DemoModeBanner />
            <InstallPrompt />
          </PassengerProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
