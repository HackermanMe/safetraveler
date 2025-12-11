# 🗺️ SafeTraveler - Roadmap & User Journey

## 📱 Guide Utilisateur - Parcours Étape par Étape

### 1️⃣ Accueil & Navigation (Home Page)
**Objectif** : Découvrir l'application et ses fonctionnalités principales

**Étapes utilisateur** :
1. L'utilisateur arrive sur la page d'accueil
2. Visualise le carrousel de présentation des services
3. Découvre les 4 sections principales :
   - 🗺️ **Navigation** - Planifier son trajet
   - 🚨 **Signaler** - Rapporter un incident
   - 📊 **Services** - Consulter les services aéroportuaires
   - 🛫 **Vols** - Rechercher et réserver des vols
4. Sélectionne la langue (FR/EN/EWE)
5. Choisit une fonctionnalité via les boutons d'action

---

### 2️⃣ Navigation & Carte Interactive
**Objectif** : Se repérer dans l'aéroport et planifier son itinéraire

**Étapes utilisateur** :
1. Accède à la page "Navigation"
2. Visualise la carte interactive de l'aéroport
3. Recherche une destination (terminal, porte, service)
4. Obtient l'itinéraire en temps réel
5. Suit les instructions de navigation
6. Consulte les points d'intérêt à proximité

**Fonctionnalités disponibles** :
- 📍 Géolocalisation en temps réel
- 🧭 Calcul d'itinéraire optimal
- 🏢 Points d'intérêt (restaurants, toilettes, boutiques)
- ⏱️ Estimation du temps de trajet

---

### 3️⃣ Signalement d'Incidents (Report)
**Objectif** : Rapporter un problème observé dans l'aéroport selon les normes OACI

**Étapes utilisateur** :
1. Accède à la page "Signaler un incident"
2. Sélectionne le **type d'incident OACI** :
   - 🔒 **SECURITY_BREACH** (SEC) - Faille de sécurité
   - 🧹 **FOD** - Corps étranger sur piste (Foreign Object Debris)
   - 🦅 **BIRD_STRIKE** (BS) - Collision avec oiseau/faune
   - 👥 **PASSENGER_SAFETY** (PS) - Sécurité des passagers
   - 🏗️ **FACILITY_MAINTENANCE** (FM) - Maintenance des installations
   - ⚡ **GROUND_HANDLING** (GH) - Manutention au sol
   - 🌍 **ENVIRONMENTAL** (ENV) - Problème environnemental
   - 📋 **OTHER** (OTH) - Autre préoccupation opérationnelle
3. Rédige une description détaillée
4. Sélectionne la localisation sur la carte
5. Ajoute une photo (optionnel)
6. Soumet le rapport
7. Reçoit une confirmation avec numéro de suivi

**Processus backend** :
- Analyse IA de la photo (si fournie)
- Classification automatique selon OACI
- Attribution d'une priorité (CRITIQUE/ÉLEVÉE/MOYENNE/FAIBLE)
- Notification aux autorités compétentes
- Tracking du statut (EN_ATTENTE → EN_COURS → RÉSOLU/REJETÉ)

---

### 4️⃣ Services Aéroportuaires
**Objectif** : Découvrir et accéder aux services disponibles

**Étapes utilisateur** :
1. Accède à la page "Services"
2. Consulte les catégories de services :
   - 🍽️ Restaurants & Cafés
   - 🛍️ Boutiques duty-free
   - 💱 Change de devises
   - 🚖 Transport & Location
   - ♿ Assistance PMR
   - 📶 WiFi & Charging
   - 💼 Salons VIP
   - 🏥 Services médicaux
3. Filtre par localisation ou catégorie
4. Visualise les horaires d'ouverture
5. Obtient l'itinéraire vers le service

---

### 5️⃣ Recherche & Réservation de Vols
**Objectif** : Trouver et réserver un vol

**Étapes utilisateur** :
1. Accède à la page "Vols"
2. Saisit les critères de recherche :
   - Aéroport de départ
   - Destination
   - Dates (aller/retour)
   - Nombre de passagers
   - Classe (Économique/Affaires/Première)
3. Lance la recherche
4. Compare les résultats (prix, horaires, compagnies)
5. Sélectionne un vol
6. Procède à la réservation

---

## 🚀 Feuille de Route Technique

### ✅ Phase 1 - Fondations (Complétée)
- [x] Architecture Next.js 14 avec App Router
- [x] Système de navigation multilingue (FR/EN/EWE)
- [x] Carte interactive avec Leaflet
- [x] Design système responsive
- [x] Composants UI réutilisables
- [x] Gestion du thème (light/dark)

### ✅ Phase 2 - Fonctionnalités Core (Complétée)
- [x] Page d'accueil avec carrousel
- [x] Système de navigation avec carte
- [x] Formulaire de signalement d'incidents OACI
- [x] Page services aéroportuaires
- [x] Page recherche de vols
- [x] Sélecteur de langue dynamique

### 🔄 Phase 3 - Intégration Backend (En cours)
- [x] Configuration ANAC API Spring Boot
- [x] Modèle d'incidents selon normes OACI
- [x] Analyse IA des photos (Hugging Face Vision Transformer)
- [x] Classification automatique des incidents
- [x] Système d'alertes email
- [ ] Connexion frontend ↔ backend
- [ ] Authentification utilisateur
- [ ] Upload de photos vers API
- [ ] Récupération des incidents en temps réel

### 📋 Phase 4 - Dashboard Admin (Planifiée)
**Objectifs** :
- [ ] Dashboard ANAC pour les administrateurs
- [ ] Liste des incidents signalés
- [ ] Système de filtrage et recherche
- [ ] Détails d'incident avec photos et analyse IA
- [ ] Modification du statut (EN_COURS, RÉSOLU, REJETÉ)
- [ ] Assignation aux agents
- [ ] Statistiques et rapports
- [ ] Export des données (PDF/CSV)

### 🔐 Phase 5 - Authentification & Sécurité (Planifiée)
**Objectifs** :
- [ ] Authentification JWT frontend
- [ ] Gestion des rôles (ADMIN, USER, AGENT)
- [ ] Protection des routes sensibles
- [ ] Profil utilisateur
- [ ] Historique des signalements
- [ ] Notifications push

### 📊 Phase 6 - Analytics & Monitoring (Planifiée)
**Objectifs** :
- [ ] Tableau de bord statistiques
- [ ] Heatmap des incidents par zone
- [ ] Graphiques de tendances
- [ ] Temps de résolution moyen
- [ ] Performance par type OACI
- [ ] Export de rapports mensuels

### 🌐 Phase 7 - Fonctionnalités Avancées (Future)
**Objectifs** :
- [ ] Mode hors-ligne (PWA)
- [ ] Notifications en temps réel (WebSocket)
- [ ] Chatbot d'assistance
- [ ] Reconnaissance vocale pour signalements
- [ ] Réalité augmentée pour navigation
- [ ] Intégration avec systèmes aéroportuaires
- [ ] API publique pour développeurs tiers

---

## 🎯 Objectifs de Performance

### Disponibilité
- ✅ Uptime cible : 99.9%
- ✅ Temps de réponse API : < 200ms
- ✅ Chargement initial : < 2 secondes

### Accessibilité
- ✅ Conformité WCAG 2.1 AA
- ✅ Support clavier complet
- ✅ Screen readers compatibles
- ✅ Contraste des couleurs optimisé

### Internationalisation
- ✅ 3 langues : Français, Anglais, Éwé
- 🔄 Extension future : Arabe, Chinois, Espagnol

---

## 📈 Métriques de Succès

### KPIs Utilisateur
- Temps moyen de signalement : **< 2 minutes**
- Taux de complétion des rapports : **> 85%**
- Satisfaction utilisateur (NPS) : **> 70**
- Incidents résolus sous 24h : **> 80%**

### KPIs Techniques
- Performance Lighthouse : **> 90/100**
- Taux d'erreur : **< 0.1%**
- Couverture de tests : **> 80%**
- Time to Interactive : **< 3s**

---

## 🛠️ Stack Technique

### Frontend
- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Maps** : Leaflet + React-Leaflet
- **Icons** : Lucide React
- **i18n** : next-intl
- **State** : React Context + Hooks

### Backend
- **Framework** : Spring Boot 3.4.12
- **Language** : Java 17
- **Database** : MySQL 8.0
- **Security** : JWT + Spring Security
- **AI** : Hugging Face API (Vision Transformer)
- **Email** : Spring Mail + Thymeleaf
- **Storage** : Local filesystem (uploads/)

### Infrastructure
- **Version Control** : Git
- **Deployment** : À définir (Vercel/AWS/Azure)
- **CI/CD** : À définir (GitHub Actions)
- **Monitoring** : À définir (Sentry/DataDog)

---

## 📞 Contact & Support

Pour toute question ou suggestion concernant cette roadmap :

- 📧 Email : contact@anac.tg
- 🐛 Issues : [GitHub Repository](https://github.com/HackermanMe/safetraveler)
- 📖 Documentation : [Wiki](https://github.com/HackermanMe/safetraveler/wiki)

---

**Dernière mise à jour** : 11 décembre 2025
**Version** : 1.0.0
**Statut** : Phase 3 en cours
