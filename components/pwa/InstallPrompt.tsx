"use client";

import { useState, useEffect } from "react";
import { X, Share, Download } from "lucide-react";
import { theme } from "@/lib/config/theme";
import { useLocale } from "@/lib/context/LocaleContext";

export default function InstallPrompt() {
    const [showPrompt, setShowPrompt] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

    useEffect(() => {
        // Check if running as standalone (already installed)
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window.navigator as any).standalone ||
            document.referrer.includes('android-app://');

        if (isStandalone) {
            return;
        }

        // iOS Detection
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
        setIsIOS(isIosDevice);

        if (isIosDevice) {
            // Show prompt for iOS after a delay
            const hasSeenPrompt = localStorage.getItem('pwaPromptShown');
            if (!hasSeenPrompt) {
                setTimeout(() => setShowPrompt(true), 3000);
            }
        }

        // Android/Desktop Detection
        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            const hasSeenPrompt = localStorage.getItem('pwaPromptShown');
            if (!hasSeenPrompt) {
                setShowPrompt(true);
            }
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (deferredPrompt as any).prompt();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const { outcome } = await (deferredPrompt as any).userChoice;
            if (outcome === 'accepted') {
                setShowPrompt(false);
            }
            setDeferredPrompt(null);
        }
    };

    const handleDismiss = () => {
        setShowPrompt(false);
        localStorage.setItem('pwaPromptShown', 'true');
        // Stop bubbling to prevent immediate reopen
    };

    if (!showPrompt) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
            <div
                className="max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-md"
                style={{
                    background: "rgba(255, 255, 255, 0.95)",
                }}
            >
                <div className="p-5 flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">SafeTraveler</h3>
                                <p className="text-sm text-gray-500">{isIOS ? 'Install sur iOS' : 'Install App'}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleDismiss}
                            className="text-gray-400 hover:text-gray-600 p-1"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="text-gray-600 text-sm leading-relaxed">
                        {isIOS ? (
                            <p>
                                Pour la meilleure expérience, ajoutez cette app à votre écran d&apos;accueil.
                                Appuyez sur <span className="inline-flex items-center mx-1"><Share size={14} /></span>
                                puis <span className="font-semibold">&quot;Sur l&apos;écran d&apos;accueil&quot;</span>.
                            </p>
                        ) : (
                            <p>
                                Installez l&apos;application SafeTraveler pour un accès rapide, des notifications et une utilisation hors-ligne.
                            </p>
                        )}
                    </div>

                    {!isIOS && (
                        <button
                            onClick={handleInstallClick}
                            className="w-full py-3 px-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-transform active:scale-95"
                            style={{ backgroundColor: theme.colors.accent.main }}
                        >
                            <Download size={18} />
                            Installer l'application
                        </button>
                    )}

                    {isIOS && (
                        <div className="w-full py-3 px-4 rounded-xl bg-gray-100 text-gray-500 text-center text-sm font-medium">
                            Suivez les instructions ci-dessus
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
