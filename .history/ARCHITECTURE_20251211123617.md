# Architecture SafeTraveler - Diagramme et Flux de Données

## Vue d'ensemble du système

SafeTraveler est une Progressive Web App (PWA) développée avec Next.js 14, TypeScript et Tailwind CSS, conçue pour guider les passagers dans l'aéroport international Gnassingbé Eyadéma de Lomé (Togo).

---

## Diagramme d'Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         UTILISATEUR / CLIENT                         │
│                    (Navigateur Web / Mobile PWA)                     │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        COUCHE PRÉSENTATION                           │
│                         (Next.js App Router)                         │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │
│  │   Page       │  │   Page       │  │   Page       │             │
│  │   Accueil    │  │  Navigation  │  │   Vols       │             │
│  │  (Roadmap)   │  │   (Carte)    │  │  (Infos)     │             │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘             │
│         │                 │                  │                      │
│  ┌──────┴───────┐  ┌──────┴───────┐  ┌──────┴───────┐             │
│  │   Page       │  │   Page       │  │   Page       │             │
│  │  Signaler    │  │   Services   │  │   Profil     │             │
│  └──────────────┘  └──────────────┘  └──────────────┘             │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      COUCHE COMPOSANTS UI                            │
├─────────────────────────────────────────────────────────────────────┤
│  Layout Components          │  Map Components                       │
│  ┌──────────────┐           │  ┌──────────────────┐                │
│  │   Navbar     │           │  │ EnhancedAirport  │                │
│  │  (Desktop)   │           │  │      Map         │                │
│  └──────────────┘           │  │  (Mapbox GL JS)  │                │
│  ┌──────────────┐           │  └──────────────────┘                │
│  │  BottomNav   │           │                                       │
│  │  (Mobile)    │           │  UI Components                        │
│  └──────────────┘           │  ┌──────────────────┐                │
│                             │  │ ClassSelector    │                │
│  Home Components            │  │     Modal        │                │
│  ┌──────────────┐           │  └──────────────────┘                │
│  │ HeroCarousel │           │  ┌──────────────────┐                │
│  │  (Slider)    │           │  │  ClassFAB        │                │
│  └──────────────┘           │  │ (Floating Btn)   │                │
│                             │  └──────────────────┘                │
│                             │  ┌──────────────────┐                │
│                             │  │ Language         │                │
│                             │  │   Selector       │                │
│                             │  └──────────────────┘                │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    COUCHE GESTION D'ÉTAT                             │
├─────────────────────────────────────────────────────────────────────┤
│  Context API (React)                                                │
│  ┌──────────────────────┐     ┌──────────────────────┐             │
│  │  PassengerContext    │     │   LocaleContext      │             │
│  │  ─────────────────   │     │  ─────────────────   │             │
│  │  • Classe passager   │     │  • Langue (FR/EN)    │             │
│  │  • Numéro de vol     │     │  • Traductions i18n  │             │
│  │  • Porte embarquement│     │  • Fonction t()      │             │
│  │  • Étape actuelle    │     │                      │             │
│  └──────────────────────┘     └──────────────────────┘             │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    COUCHE LOGIQUE MÉTIER                             │
├─────────────────────────────────────────────────────────────────────┤
│  Utils & Services                                                   │
│  ┌──────────────────────┐     ┌──────────────────────┐             │
│  │ mapbox-directions.ts │     │   navigation.ts      │             │
│  │  ─────────────────   │     │  ─────────────────   │             │
│  │  • Calcul itinéraire │     │  • Recherche chemin  │             │
│  │  • Instructions      │     │  • Waypoints         │             │
│  │  • Résumé trajet     │     │  • Filtrage lieux    │             │
│  └──────────────────────┘     └──────────────────────┘             │
│                                                                      │
│  Types & Configuration                                              │
│  ┌──────────────────────┐     ┌──────────────────────┐             │
│  │    passenger.ts      │     │      theme.ts        │             │
│  │  ─────────────────   │     │  ─────────────────   │             │
│  │  • PassengerClass    │     │  • Couleurs          │             │
│  │  • JourneyStep       │     │  • Typographie       │             │
│  │  • Location types    │     │  • Ombres/Espacements│             │
│  └──────────────────────┘     └──────────────────────┘             │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       COUCHE DONNÉES                                 │
├─────────────────────────────────────────────────────────────────────┤
│  Données Statiques              │  Services Externes                │
│  ┌──────────────────────┐       │  ┌──────────────────────┐        │
│  │ airport-data.json    │       │  │   Mapbox API         │        │
│  │  ─────────────────   │       │  │  ─────────────────   │        │
│  │  • Lieux (400+)      │       │  │  • Cartes            │        │
│  │  • Coordonnées GPS   │       │  │  • Directions        │        │
│  │  • Types de lieux    │       │  │  • Géolocalisation   │        │
│  │  • Étages (RDC/1)    │       │  └──────────────────────┘        │
│  │  • Descriptions      │       │                                   │
│  │  • Statuts           │       │  Messages i18n                    │
│  └──────────────────────┘       │  ┌──────────────────────┐        │
│                                 │  │  messages/fr.json    │        │
│                                 │  │  messages/en.json    │        │
│                                 │  └──────────────────────┘        │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Flux de Données Principaux

### 1. **Flux d'Initialisation de l'Application**

```
Démarrage App
     │
     ▼
Layout.tsx (Root)
     │
     ├──► LocaleContext Provider (Langue)
     │         │
     │         └──► Charge messages i18n (FR/EN)
     │
     ├──► PassengerContext Provider (Profil)
     │         │
     │         └──► Vérifie localStorage
     │                   │
     │                   ├──► Profil existe → Charge profil
     │                   └──► Pas de profil → Affiche modal sélection
     │
     └──► Rendu Page + Navbar/BottomNav
```

### 2. **Flux de Sélection de Classe Passager**

```
Utilisateur arrive
     │
     ▼
ClassSelectorModal s'affiche
     │
     ▼
Utilisateur choisit classe (Economy/Business/First)
     │
     ▼
PassengerContext.setProfile()
     │
     ├──► Sauvegarde dans localStorage
     ├──► Met à jour state global
     └──► Déclenche re-render des composants
           │
           ├──► Roadmap affiche étapes adaptées
           ├──► ClassFAB affiche couleur classe
           └──► Navigation filtre lieux accessibles
```

### 3. **Flux de Navigation et Calcul d'Itinéraire**

```
Page Navigation
     │
     ▼
Utilisateur sélectionne départ + destination
     │
     ▼
handleCalculateRoute()
     │
     ├──► Récupère coordonnées des lieux (airport-data.json)
     │
     ├──► findIntermediateWaypoints()
     │         │
     │         └──► Identifie points intermédiaires optimaux
     │
     ├──► getMapboxDirections() → Appel API Mapbox
     │         │
     │         └──► Reçoit géométrie du trajet
     │
     ├──► extractRoutePath()
     │         │
     │         └──► Convertit en coordonnées [lng, lat]
     │
     ├──► extractRouteInstructions()
     │         │
     │         └──► Génère instructions étape par étape
     │
     └──► Mise à jour state
           │
           ├──► setRoute() → Affiche ligne sur carte
           ├──► setRouteInstructions() → Affiche panel
           └──► setRouteSummary() → Distance/Durée
```

### 4. **Flux de Recherche et Filtrage de Lieux**

```
Page Navigation/Services
     │
     ▼
Utilisateur tape dans barre de recherche
     │
     ▼
setSearchQuery(query)
     │
     ▼
filteredLocations = locations.filter()
     │
     ├──► Filtre par nom (includes query)
     ├──► Filtre par description
     └──► Filtre par type sélectionné
           │
           ▼
     EnhancedAirportMap reçoit filteredLocations
           │
           └──► Affiche uniquement marqueurs filtrés
```

### 5. **Flux de Changement d'Étage**

```
Utilisateur clique sur bouton étage (RDC/Étage 1)
     │
     ▼
setCurrentFloor(level)
     │
     ├──► Met à jour state
     │
     └──► EnhancedAirportMap filtre locations
           │
           └──► Affiche uniquement lieux de l'étage actif
                 │
                 └──► Cache/Affiche marqueurs dynamiquement
```

### 6. **Flux d'Internationalisation (i18n)**

```
Utilisateur change langue (FR ↔ EN)
     │
     ▼
LanguageSelector.onChange()
     │
     ▼
LocaleContext.setLocale(newLocale)
     │
     ├──► Met à jour cookie
     ├──► Recharge messages (messages/fr.json ou en.json)
     │
     └──► Tous composants utilisant t() se re-rendent
           │
           └──► Textes mis à jour instantanément
```

### 7. **Flux de Signalement d'Incident**

```
Page Report
     │
     ▼
Utilisateur remplit formulaire
     │
     ├──► Type d'incident
     ├──► Localisation
     ├──► Description
     └──► Photo (optionnel)
           │
           ▼
     handleSubmit()
           │
           ├──► Validation des données
           ├──► Géolocalisation automatique
           │
           └──► Envoi vers API/Base de données
                 │
                 ├──► Succès → Confirmation
                 └──► Erreur → Message d'erreur
```

---

## Interactions Entre Modules

### Module de Carte (Map) ↔ Données
```
EnhancedAirportMap
     │
     ├──► Lit airport-data.json
     ├──► Utilise Mapbox GL JS
     ├──► Crée marqueurs SVG dynamiques
     └──► Affiche routes calculées
```

### Contextes ↔ Composants
```
PassengerContext
     │
     ├──► ClassFAB (affiche classe)
     ├──► Roadmap (filtre étapes)
     ├──► Navigation (filtre lieux)
     └──► Services (adapte contenu)

LocaleContext
     │
     └──► Tous composants (traductions)
```

### Utils ↔ API Externes
```
mapbox-directions.ts
     │
     └──► Mapbox Directions API
           │
           ├──► Calcul itinéraire
           ├──► Optimisation route
           └──► Instructions navigation
```

---

## Technologies Clés

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS
- **Cartographie**: Mapbox GL JS
- **État Global**: React Context API
- **i18n**: next-intl
- **PWA**: next-pwa
- **Base de données**: Prisma (prévu)

---

## Points d'Extension Futurs

1. **API Backend** : Ajout d'endpoints pour signalements en temps réel
2. **Base de données** : Stockage des incidents et statistiques
3. **Notifications Push** : Alertes pour changements de porte, retards
4. **Mode Hors-ligne** : Cache des cartes et données essentielles
5. **Analytics** : Suivi des parcours utilisateurs

---

*Document généré pour SafeTraveler - Aéroport International Gnassingbé Eyadéma, Lomé, Togo*

