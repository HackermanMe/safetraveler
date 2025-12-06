# SafeTraveler - PWA pour Aéroport de Lomé

Application web progressive (PWA) pour améliorer l'expérience des passagers à l'aéroport de Lomé.

## Fonctionnalités

### 1. Carte Interactive de l'Aéroport
- Plan détaillé des terminaux et halls
- Localisation des portes d'embarquement
- Points d'intérêt (toilettes, restaurants, boutiques, services)
- Sélecteur d'étage
- Recherche de lieux

### 2. Navigation Intelligente
- Calcul d'itinéraire entre deux points
- Instructions étape par étape
- Affichage visuel sur la carte
- Support multi-étages

### 3. Système de Signalement Anonyme
- Signalement d'incidents de sécurité
- Problèmes de propreté
- Maintenance et équipement
- Comportements suspects
- Upload de photos
- Totalement anonyme

### 4. Services et Informations
- Catalogue complet des services
- Informations de contact
- Horaires d'ouverture
- FAQ
- Numéros d'urgence

## Technologies Utilisées

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, TailwindCSS 4
- **Carte**: Mapbox GL
- **Base de données**: PostgreSQL avec Prisma
- **PWA**: next-pwa
- **Icons**: Lucide React
- **TypeScript**: Pour la sécurité des types

## Installation

### Prérequis
- Node.js 18+
- PostgreSQL
- Compte Mapbox (pour la clé API)

### Étapes

1. Cloner le projet
```bash
git clone <url>
cd safetraveler
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer les variables d'environnement
```bash
cp .env.example .env
```

Modifier `.env` avec vos valeurs:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/safetraveler?schema=public"
NEXT_PUBLIC_MAPBOX_TOKEN="your_mapbox_access_token"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. Initialiser la base de données
```bash
npx prisma generate
npx prisma db push
```

5. Lancer le serveur de développement
```bash
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## Configuration Mapbox

1. Créer un compte sur [mapbox.com](https://mapbox.com)
2. Créer un token d'accès
3. Ajouter le token dans `.env` comme `NEXT_PUBLIC_MAPBOX_TOKEN`

## Déploiement

### Vercel (Recommandé)
```bash
npm run build
vercel deploy
```

## PWA

L'application est configurée comme PWA:
- Installation sur l'écran d'accueil
- Fonctionne offline (cartes en cache)
- Service Worker automatique
- Optimisée pour mobile

## Structure du Projet

```
safetraveler/
├── app/                     # Pages et routes
├── components/              # Composants React
├── lib/                     # Utilitaires et données
├── prisma/                  # Base de données
└── public/                  # Assets statiques
```

## Sécurité

- Signalements anonymes (pas de collecte d'informations personnelles)
- Validation des entrées
- HTTPS obligatoire en production

## Licence

MIT License
