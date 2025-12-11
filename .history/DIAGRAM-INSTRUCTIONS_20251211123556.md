# Instructions pour Générer les Diagrammes SafeTraveler

J'ai créé 2 fichiers de diagrammes Mermaid pour votre projet SafeTraveler :

## 📁 Fichiers créés :
1. **`architecture-diagram.mmd`** - Diagramme d'architecture globale
2. **`data-flow-diagram.mmd`** - Diagrammes des flux de données

---

## 🎨 Comment générer les images :

### Méthode 1 : Mermaid Live Editor (Recommandé - Gratuit)

1. Allez sur **https://mermaid.live**
2. Ouvrez le fichier `architecture-diagram.mmd` dans votre éditeur
3. Copiez tout le contenu
4. Collez-le dans l'éditeur Mermaid Live
5. Le diagramme s'affiche automatiquement à droite
6. Cliquez sur **"Download PNG"** ou **"Download SVG"** pour sauvegarder l'image

Répétez pour `data-flow-diagram.mmd`

### Méthode 2 : Visual Studio Code (avec extension)

1. Installez l'extension **"Markdown Preview Mermaid Support"**
2. Créez un fichier `.md` et ajoutez :
   ````markdown
   ```mermaid
   [Collez ici le contenu du fichier .mmd]
   ```
   ````
3. Ouvrez la prévisualisation Markdown (Ctrl+Shift+V)
4. Clic droit sur le diagramme → Copier l'image

### Méthode 3 : draw.io / diagrams.net (Alternative)

1. Allez sur **https://app.diagrams.net**
2. Créez un nouveau diagramme
3. Utilisez les formes pour recréer manuellement le diagramme
4. Exportez en PNG/SVG/PDF

### Méthode 4 : Excalidraw (Style dessiné à la main)

1. Allez sur **https://excalidraw.com**
2. Recréez le diagramme avec l'interface intuitive
3. Exportez en PNG

### Méthode 5 : Mermaid CLI (Pour développeurs)

```bash
# Installer Mermaid CLI
npm install -g @mermaid-js/mermaid-cli

# Générer l'image
mmdc -i architecture-diagram.mmd -o architecture-diagram.png
mmdc -i data-flow-diagram.mmd -o data-flow-diagram.png
```

---

## 📊 Contenu des diagrammes :

### `architecture-diagram.mmd`
- Vue d'ensemble de l'architecture en couches
- Tous les composants et leurs relations
- Couleurs par couche (Présentation, Composants, État, Logique, Données)

### `data-flow-diagram.mmd`
- 4 flux principaux :
  1. Navigation et calcul d'itinéraire
  2. Sélection de classe passager
  3. Recherche et filtrage
  4. Changement de langue (i18n)

---

## 🎨 Personnalisation :

Les diagrammes utilisent des couleurs codées :
- 🔵 Bleu : Actions utilisateur
- 🟢 Vert : Processus/Calculs
- 🟠 Orange : Données/État
- 🔴 Rouge : API externes
- 🟣 Violet : Logique métier

Vous pouvez modifier les couleurs dans les fichiers `.mmd` en changeant les valeurs hexadécimales.

---

## 💡 Conseils :

1. **Pour une présentation** : Utilisez le format PNG haute résolution
2. **Pour la documentation** : Utilisez le format SVG (vectoriel, redimensionnable)
3. **Pour l'impression** : Exportez en PDF depuis Mermaid Live

---

## 🔗 Ressources utiles :

- Mermaid Live Editor : https://mermaid.live
- Documentation Mermaid : https://mermaid.js.org
- Excalidraw : https://excalidraw.com
- draw.io : https://app.diagrams.net

---

**Note** : Les fichiers `.mmd` sont du texte brut, vous pouvez les ouvrir avec n'importe quel éditeur de texte et les modifier facilement.

