"use client";

import { useState, useEffect } from "react";
import { Phone, Clock, Search, X, ChevronRight } from "lucide-react";
import { ServiceInfo } from "@/lib/types";
import airportData from "@/lib/data/airport-data.json";

const serviceIcons: { [key: string]: string } = {
  accessibility: "♿",
  medical: "⚕️",
  lost_found: "🧳",
  information: "ℹ️",
  customs: "🛃",
  currency: "💱",
};

export default function ServicesPage() {
  const [services, setServices] = useState<ServiceInfo[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<ServiceInfo | null>(null);

  useEffect(() => {
    setServices(airportData.services as ServiceInfo[]);
  }, []);

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-3">
            Services et Informations
          </h1>
          <p className="text-gray-600">
            Tous les services disponibles dans l'aéroport
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un service..."
              className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>

        {/* Emergency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Urgence Médicale</h3>
                <p className="text-red-100 text-sm mb-4">
                  Assistance médicale d'urgence 24/7
                </p>
                <a
                  href="tel:+22822234456"
                  className="inline-flex items-center space-x-2 bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+228 22 23 44 56</span>
                </a>
              </div>
              <div className="text-5xl">⚕️</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Information</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Assistance et renseignements
                </p>
                <a
                  href="tel:+22822234455"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+228 22 23 44 55</span>
                </a>
              </div>
              <div className="text-5xl">ℹ️</div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-medium text-gray-900">
              Tous les services ({filteredServices.length})
            </h2>
          </div>

          {filteredServices.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-500">Aucun service trouvé</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="text-4xl">
                      {serviceIcons[service.icon] || "🏢"}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.hours}</span>
                        </div>
                        {service.contact && (
                          <div className="flex items-center space-x-1">
                            <Phone className="w-4 h-4" />
                            <span>{service.contact}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="font-medium text-gray-900">
                  Combien de temps avant le vol dois-je arriver ?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="p-4 text-gray-600 text-sm">
                Il est recommandé d'arriver 2 heures avant pour les vols
                internationaux et 1h30 avant pour les vols régionaux.
              </p>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="font-medium text-gray-900">
                  Y a-t-il un Wi-Fi gratuit ?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="p-4 text-gray-600 text-sm">
                Oui, le Wi-Fi gratuit est disponible dans tout l'aéroport.
                Connectez-vous au réseau "Airport-Free-WiFi".
              </p>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="font-medium text-gray-900">
                  Assistance pour personnes à mobilité réduite ?
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="p-4 text-gray-600 text-sm">
                Un service d'assistance est disponible 24/7. Contactez le +228 22
                23 44 55 ou demandez à n'importe quel agent de l'aéroport.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-5xl">
                  {serviceIcons[selectedService.icon] || "🏢"}
                </div>
                <h3 className="text-2xl font-normal text-gray-900">
                  {selectedService.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <p className="text-gray-600 mb-6">{selectedService.description}</p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Clock className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="text-sm text-gray-500">Horaires</div>
                  <div className="font-medium text-gray-900">
                    {selectedService.hours}
                  </div>
                </div>
              </div>

              {selectedService.contact && (
                <a
                  href={`tel:${selectedService.contact}`}
                  className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-blue-600">Téléphone</div>
                    <div className="font-medium text-blue-900">
                      {selectedService.contact}
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
