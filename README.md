# SafeTraveler 🛫

**Application PWA de navigation et de sécurité pour l'Aéroport International Gnassingbé Eyadéma de Lomé (LFW)**

Une Progressive Web App moderne développée pour améliorer l'expérience des passagers et renforcer la sécurité aéroportuaire conformément aux standards OACI.

---

## 📋 Table des matières

- [Vue d'ensemble](#-vue-densemble)
- [Fonctionnalités implémentées](#-fonctionnalités-implémentées)
- [Technologies utilisées](#-technologies-utilisées)
- [Architecture du projet](#-architecture-du-projet)
- [Installation et démarrage](#-installation-et-démarrage)
- [Perspectives et évolutions futures](#-perspectives-et-évolutions-futures)

---

## 🎯 Vue d'ensemble

SafeTraveler est une application web progressive conçue pour l'Autorité Nationale de l'Aviation Civile (ANAC) du Togo. Elle vise à :

- **Guider les passagers** à travers leur parcours aéroportuaire de manière personnalisée
- **Faciliter la navigation** dans l'aéroport avec des cartes interactives
- **Améliorer la sécurité** via un système de signalement d'incidents conforme aux normes OACI
- **Informer en temps réel** sur les vols et services disponibles

L'application est multilingue (Français, Anglais, Éwé) et fonctionne hors ligne grâce aux capacités PWA.

---

## ✅ Fonctionnalités implémentées

### 🏠 Page d'accueil personnalisée

- **Sélection de classe de voyage** : Économique, Business, Première Classe
- **Parcours personnalisé** : Roadmap visuelle interactive en forme de route sinueuse
- **Étapes adaptatives** : Affichage des étapes pertinentes selon la classe du passager
  - Économique : Enregistrement standard, contrôle de sécurité, embarquement
  - Business/Première : Enregistrement prioritaire, accès salon VIP, embarquement prioritaire
- **Carousel héroïque** : Présentation visuelle attrayante avec animations
- **Détails des privilèges** : Informations sur les avantages de chaque classe

### 🗺️ Carte interactive de l'aéroport

- **Visualisation Mapbox GL** : Carte interactive haute qualité
- **Points d'intérêt** : Portes d'embarquement, enregistrement, sécurité, restaurants, boutiques, toilettes, salons, etc.
- **Sélecteur d'étage** : Navigation entre RDC et étages supérieurs
- **Recherche de lieux** : Filtrage par type et recherche textuelle
- **Légende interactive** : Catégorisation claire des différents services

### 🧭 Navigation guidée

- **Calcul d'itinéraire** : Sélection point de départ et destination
- **Instructions détaillées** : Guidage étape par étape
- **Informations de trajet** : Distance, durée estimée, niveau de difficulté
- **Destinations populaires** : Accès rapide aux zones fréquentes

### ✈️ Informations sur les vols

- **Tableau des vols en temps réel** : Départs et arrivées
- **Filtres** : Tous les vols, départs uniquement, arrivées uniquement
- **Statuts détaillés** : À l'heure, retardé, embarquement, parti, arrivé, annulé
- **Mode démonstration** : Données de test pour développement
- **Actualisation** : Mise à jour manuelle des informations

### 🏪 Services et boutiques

- **Catalogue complet** : Restaurants, boutiques, salons, services médicaux, informations
- **Recherche et filtrage** : Par catégorie et mot-clé
- **Contacts d'urgence** : Accès rapide aux numéros médicaux et d'information
- **Conseils pratiques** : WiFi, horaires recommandés, accessibilité, change
- **Détails des services** : Horaires, localisation, conditions d'accès

### 📢 Signalement d'incidents (Conforme OACI)

- **Catégories standardisées** :
  - Violation de sécurité (SECURITY_BREACH)
  - Corps étrangers FOD (FOD)
  - Sécurité passagers (PASSENGER_SAFETY)
  - Maintenance infrastructures (FACILITY_MAINTENANCE)
  - Environnement/Propreté (ENVIRONMENTAL)
  - Autres incidents (OTHER)
- **Signalement anonyme** : Conforme à l'Annexe 13 de l'OACI
- **Capture photo** : Documentation visuelle optionnelle
- **Sélection de zone** : Localisation précise de l'incident
- **API backend** : Transmission sécurisée à l'ANAC

### 🌍 Internationalisation (i18n)

- **3 langues supportées** :
  - Français (fr)
  - Anglais (en)
  - Éwé (ewe) - langue locale togolaise
- **Sélecteur de langue** : Changement dynamique sans rechargement
- **Traductions complètes** : Toutes les interfaces et messages

### 📱 Progressive Web App (PWA)

- **Installation** : Ajout à l'écran d'accueil mobile/desktop
- **Mode hors ligne** : Fonctionnement sans connexion internet
- **Cache intelligent** : Mise en cache des cartes Mapbox et ressources
- **Manifest** : Configuration complète avec icônes et screenshots
- **Service Worker** : Gestion automatique du cache

### 🎨 Interface utilisateur

- **Design moderne** : Interface épurée et intuitive
- **Responsive** : Adaptation mobile, tablette, desktop
- **Navigation bottom bar** : Accès rapide aux sections principales
- **Navbar sticky** : Toujours accessible avec sélecteur de langue
- **Thème cohérent** : Système de design centralisé
- **Animations fluides** : Transitions et micro-interactions

### 🔧 Composants réutilisables

- `ClassSelectorModal` : Sélection de classe avec détails des privilèges
- `HeroCarousel` : Carousel de présentation
- `Roadmap` : Visualisation du parcours en SVG animé
- `EnhancedAirportMap` : Carte Mapbox avec contrôles personnalisés
- `FloorSelector` : Sélection d'étage
- `LanguageSelector` : Changement de langue
- `BottomNav` : Navigation mobile
- `InstallPrompt` : Invitation à installer la PWA

---

## 🛠️ Technologies utilisées

### Frontend

- **Next.js 16** : Framework React avec App Router
- **React 19** : Bibliothèque UI
- **TypeScript** : Typage statique
- **Tailwind CSS 4** : Framework CSS utility-first
- **Lucide React** : Icônes modernes
- **next-intl** : Internationalisation
- **Mapbox GL** : Cartes interactives

### PWA

- **next-pwa** : Configuration PWA pour Next.js
- **Service Worker** : Cache et mode hors ligne

### Backend & Base de données

- **Prisma** : ORM pour la base de données
- **MySQL** : Base de données relationnelle
- **API Routes Next.js** : Endpoints backend

### Développement

- **ESLint** : Linting du code
- **PostCSS** : Traitement CSS
- **dotenv** : Gestion des variables d'environnement

---

## 📁 Architecture du projet

```
safetraveler/
├── app/                          # Pages et routes Next.js
│   ├── page.tsx                  # Page d'accueil avec roadmap
│   ├── map/                      # Carte interactive
│   ├── navigation/               # Navigation guidée
│   ├── flights/                  # Informations vols
│   ├── services/                 # Services et boutiques
│   ├── report/                   # Signalement d'incidents
│   ├── admin/                    # Interface admin (future)
│   └── api/                      # API routes backend
│       ├── reports/              # Endpoints signalements
│       └── flights/              # Endpoints vols
│
├── components/                   # Composants React
│   ├── home/                     # Composants page d'accueil
│   │   ├── HeroCarousel.tsx
│   │   └── Roadmap.tsx
│   ├── map/                      # Composants carte
│   │   ├── AirportMap.tsx
│   │   └── EnhancedAirportMap.tsx
│   ├── layout/                   # Layout composants
│   │   └── Navbar.tsx
│   ├── ui/                       # Composants UI réutilisables
│   │   ├── ClassSelectorModal.tsx
│   │   ├── FloorSelector.tsx
│   │   ├── LanguageSelector.tsx
│   │   ├── BottomNav.tsx
│   │   └── ...
│   └── pwa/                      # Composants PWA
│       └── InstallPrompt.tsx
│
├── lib/                          # Bibliothèques et utilitaires
│   ├── config/                   # Configuration
│   │   └── theme.ts              # Thème et constantes design
│   ├── context/                  # Contextes React
│   │   ├── PassengerContext.tsx  # État passager
│   │   └── LocaleContext.tsx     # État langue
│   ├── data/                     # Données statiques
│   │   └── airport-data.json     # Données aéroport
│   ├── services/                 # Services API
│   │   └── incident-api.ts       # API signalements
│   ├── types/                    # Types TypeScript
│   │   ├── passenger.ts          # Types passager
│   │   └── index.ts              # Types généraux
│   └── utils/                    # Fonctions utilitaires
│
├── messages/                     # Fichiers de traduction
│   ├── fr.json                   # Français
│   ├── en.json                   # Anglais
│   └── ewe.json                  # Éwé
│
├── prisma/                       # Configuration Prisma
│   └── schema.prisma             # Schéma base de données
│
├── public/                       # Ressources statiques
│   ├── icons/                    # Icônes PWA
│   ├── screenshots/              # Screenshots PWA
│   └── manifest.json             # Manifest PWA
│
├── .env                          # Variables d'environnement
├── next.config.ts                # Configuration Next.js
├── tailwind.config.ts            # Configuration Tailwind
├── tsconfig.json                 # Configuration TypeScript
└── package.json                  # Dépendances
```

---

## 🚀 Installation et démarrage

### Prérequis

- Node.js 20+ et npm
- MySQL 8+
- Compte Mapbox (pour la clé API)

### Installation

```bash
# Cloner le projet
git clone <repository-url>
cd safetraveler

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos configurations
```

### Configuration `.env`

```env
# Base de données
DATABASE_URL="mysql://user:password@localhost:3306/safetraveler"

# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN="votre_token_mapbox"

# Autres configurations
NODE_ENV="development"
```

### Initialisation de la base de données

```bash
# Générer le client Prisma
npx prisma generate

# Exécuter les migrations
npx prisma migrate dev

# (Optionnel) Seed de données de test
npx prisma db seed
```

### Démarrage

```bash
# Mode développement (port 3001)
npm run dev

# Build production
npm run build

# Démarrer en production
npm start
```

L'application sera accessible sur `http://localhost:3001`

---

## 🔮 Perspectives et évolutions futures

### 🎯 Court terme (Phase 2)

#### Backend et données réelles

- [ ] **Intégration API vols en temps réel** : Connexion aux systèmes FIDS de l'aéroport
- [ ] **Base de données de production** : Migration vers un environnement de production sécurisé
- [ ] **Authentification admin** : Système de connexion pour le personnel ANAC
- [ ] **Dashboard admin** : Interface de gestion des signalements et statistiques

#### Améliorations UX

- [ ] **Notifications push** : Alertes pour changements de porte, retards, etc.
- [ ] **Mode sombre** : Thème dark pour économie d'énergie et confort visuel
- [ ] **Tutoriel interactif** : Onboarding pour les nouveaux utilisateurs
- [ ] **Favoris** : Sauvegarde des destinations fréquentes

#### Fonctionnalités de navigation

- [ ] **Navigation en réalité augmentée** : Guidage AR avec caméra
- [ ] **Géolocalisation indoor** : Positionnement précis dans l'aéroport
- [ ] **Temps de parcours dynamique** : Calcul basé sur l'affluence réelle
- [ ] **Alertes de proximité** : Notifications quand proche de la destination

### 🚀 Moyen terme (Phase 3)

#### Intégrations tierces

- [ ] **Systèmes de paiement** : Pré-commande restaurants, boutiques
- [ ] **Compagnies aériennes** : Intégration APIs pour check-in mobile
- [ ] **Services de transport** : Réservation taxi, VTC depuis l'app
- [ ] **Programmes de fidélité** : Intégration cartes de fidélité

#### Intelligence artificielle

- [ ] **Chatbot IA** : Assistant virtuel pour questions fréquentes
- [ ] **Prédiction d'affluence** : ML pour estimer temps d'attente
- [ ] **Recommandations personnalisées** : Suggestions restaurants/boutiques
- [ ] **Traduction automatique** : Support de langues supplémentaires

#### Accessibilité

- [ ] **Mode malvoyants** : Interface adaptée avec synthèse vocale
- [ ] **Guidage audio** : Instructions vocales pour navigation
- [ ] **Contraste élevé** : Thème pour déficience visuelle
- [ ] **Support PMR** : Itinéraires adaptés personnes à mobilité réduite

### 🌟 Long terme (Phase 4)

#### Extension régionale

- [ ] **Multi-aéroports** : Support d'autres aéroports de la région
- [ ] **Réseau ANAC** : Déploiement dans tous les aéroports togolais
- [ ] **Collaboration CEDEAO** : Extension aux aéroports d'Afrique de l'Ouest

#### Fonctionnalités avancées

- [ ] **Blockchain pour bagages** : Traçabilité sécurisée des bagages
- [ ] **Biométrie** : Reconnaissance faciale pour check-in
- [ ] **IoT** : Intégration capteurs pour données temps réel
- [ ] **Jumeau numérique** : Modèle 3D complet de l'aéroport

#### Analytics et reporting

- [ ] **Business Intelligence** : Tableaux de bord décisionnels
- [ ] **Analyse comportementale** : Étude des flux de passagers
- [ ] **Rapports OACI** : Génération automatique de rapports conformes
- [ ] **Prédiction de maintenance** : Anticipation des besoins d'entretien

---

## 📊 Modèle de données

### Tables principales

**Report** (Signalements)
- `id` : Identifiant unique
- `type` : Catégorie d'incident (OACI)
- `location` : Zone concernée
- `description` : Description détaillée
- `photo` : Photo optionnelle (base64)
- `severity` : Gravité (low, medium, high, critical)
- `status` : Statut (pending, reviewing, resolved)
- `createdAt` / `updatedAt` : Horodatage

**FlightStatus** (Vols)
- `id` : Identifiant unique
- `flightNumber` : Numéro de vol
- `airline` : Compagnie aérienne
- `destination` / `origin` : Aéroports
- `gate` / `terminal` : Porte et terminal
- `scheduledTime` : Heure prévue
- `status` : Statut du vol
- `delay` : Retard en minutes
- `createdAt` / `updatedAt` : Horodatage

---

## 🤝 Contribution

Ce projet est développé pour l'ANAC Togo. Pour toute contribution ou suggestion :

1. Créer une branche feature
2. Implémenter les changements
3. Soumettre une pull request avec description détaillée

---

## 📄 Licence

Propriété de l'Autorité Nationale de l'Aviation Civile (ANAC) du Togo.

---

## 👥 Contact

**ANAC Togo**  
Aéroport International Gnassingbé Eyadéma  
Lomé, Togo

Pour toute question technique ou fonctionnelle, contacter l'équipe de développement.

---

**Version** : 0.1.0  
**Dernière mise à jour** : Décembre 2025
