"use client";

import { useState, useEffect } from "react";

interface WelcomeMessage {
  text: string;
  language: string;
  locale: string;
}

const welcomeMessages: WelcomeMessage[] = [
  { text: "Bienvenue à l'aéroport de Lomé", language: "Français", locale: "fr" },
  { text: "Welcome to Lomé Airport", language: "English", locale: "en" },
  { text: "Woezɔ ɖe Lomé Dzodzodzeƒe", language: "Eʋegbe", locale: "ewe" },
  { text: "Kɩbarʊ Lomé Ɛyɔbʊ pɔzʊʊ ɖɩ-taa", language: "Kabɩyɛ", locale: "kabiye" },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % welcomeMessages.length);
        setIsAnimating(false);
      }, 300);
    }, 5000); // Changed from 4000 to 5000ms

    return () => clearInterval(interval);
  }, []);

  const currentMessage = welcomeMessages[currentIndex];

  return (
    <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl">
          {/* Animated Welcome Text */}
          <h1
            className={`text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-3 md:mb-4 transition-all duration-300 ${
              isAnimating ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
            }`}
          >
            {currentMessage.text}
          </h1>

          {/* Language Label */}
          <div
            className={`inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 transition-all duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-xs md:text-sm font-medium">{currentMessage.language}</span>
          </div>

          {/* Tagline */}
          <p className="text-sm md:text-xl lg:text-2xl text-white/90 mb-4 md:mb-8 font-light">
            Votre parcours simplifié de l'arrivée à l'embarquement
          </p>

          {/* Features Badge */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-full px-3 py-1.5 md:px-4 md:py-2 shadow-lg">
              <span className="text-white text-xs md:text-sm font-semibold">Course à l'heure</span>
            </div>
            <div className="bg-yellow-400 text-gray-900 rounded-full px-2 py-1 md:px-3 text-xs font-bold uppercase">
              New
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 lg:left-16 flex space-x-2">
          {welcomeMessages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 md:w-12 bg-white"
                  : "w-4 md:w-6 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
    </div>
  );
}
