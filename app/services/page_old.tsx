"use client";

import { useState, useEffect } from "react";
import {
  Info,
  Phone,
  Clock,
  MapPin,
  Accessibility,
  Cross,
  Briefcase,
  Shield,
  Building2,
  Search,
} from "lucide-react";
import { ServiceInfo } from "@/lib/types";
import airportData from "@/lib/data/airport-data.json";

const serviceIcons: { [key: string]: any } = {
  accessibility: Accessibility,
  medical: Cross,
  lost_found: Briefcase,
  information: Info,
  customs: Shield,
  currency: Building2,
};

export default function ServicesPage() {
  const [services, setServices] = useState<ServiceInfo[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    setServices(airportData.services as ServiceInfo[]);
  }, []);

  const categories = [
    { value: "all", label: "Tous" },
    { value: "assistance", label: "Assistance" },
    { value: "medical", label: "Médical" },
    { value: "information", label: "Information" },
    { value: "lost_found", label: "Objets trouvés" },
    { value: "customs", label: "Douane" },
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-blue-600 text-white p-4 safe-area-top sticky top-0 z-10">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Info className="w-6 h-6" />
          Services & Informations
        </h1>
      </header>

      {/* Search and Filter */}
      <div className="bg-white border-b border-gray-200 p-4 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un service..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Important Info Cards */}
      <div className="p-4 space-y-3">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
            <Cross className="w-5 h-5" />
            Urgence Médicale
          </h3>
          <p className="text-red-800 text-sm mb-2">
            En cas d'urgence médicale, contactez immédiatement :
          </p>
          <a
            href="tel:+22822234456"
            className="text-red-900 font-bold text-lg flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            +228 22 23 44 56
          </a>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Information Générale
          </h3>
          <a
            href="tel:+22822234455"
            className="text-blue-900 font-bold text-lg flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            +228 22 23 44 55
          </a>
        </div>
      </div>

      {/* Services List */}
      <div className="p-4 space-y-3">
        <h2 className="text-lg font-bold text-gray-900">
          Tous les services ({filteredServices.length})
        </h2>

        {filteredServices.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun service trouvé</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredServices.map((service) => {
              const Icon = serviceIcons[service.icon] || Info;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {service.description}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="w-4 h-4" />
                          <span>{service.hours}</span>
                        </div>

                        {service.contact && (
                          <a
                            href={`tel:${service.contact}`}
                            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                          >
                            <Phone className="w-4 h-4" />
                            <span>{service.contact}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="p-4 mt-6 border-t border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Questions Fréquentes
        </h2>
        <div className="space-y-3">
          <details className="bg-white rounded-lg border border-gray-200 p-4">
            <summary className="font-medium text-gray-900 cursor-pointer">
              Combien de temps avant le vol dois-je arriver ?
            </summary>
            <p className="text-sm text-gray-600 mt-2">
              Il est recommandé d'arriver 2 heures avant pour les vols
              internationaux et 1h30 avant pour les vols régionaux.
            </p>
          </details>

          <details className="bg-white rounded-lg border border-gray-200 p-4">
            <summary className="font-medium text-gray-900 cursor-pointer">
              Où puis-je trouver les toilettes ?
            </summary>
            <p className="text-sm text-gray-600 mt-2">
              Des toilettes sont disponibles à tous les niveaux. Consultez la
              carte interactive pour localiser les plus proches.
            </p>
          </details>

          <details className="bg-white rounded-lg border border-gray-200 p-4">
            <summary className="font-medium text-gray-900 cursor-pointer">
              Y a-t-il un Wi-Fi gratuit ?
            </summary>
            <p className="text-sm text-gray-600 mt-2">
              Oui, le Wi-Fi gratuit est disponible dans tout l'aéroport.
              Connectez-vous au réseau "Airport-Free-WiFi".
            </p>
          </details>

          <details className="bg-white rounded-lg border border-gray-200 p-4">
            <summary className="font-medium text-gray-900 cursor-pointer">
              Assistance pour personnes à mobilité réduite ?
            </summary>
            <p className="text-sm text-gray-600 mt-2">
              Un service d'assistance est disponible 24/7. Contactez le +228 22
              23 44 55 ou demandez à n'importe quel agent de l'aéroport.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
