# Case Study

## Instructions
1. Create the controller for player movement in Controller.js.
    - The game is mobile based so the player has to move on touch events.
2. Inside CollisionChecker.js, implement collision detection by checking for collisions between the player and falling entities using the colliders when the player object is moved by the controller.
    - Consider using shapes or geometries to represent the boundaries of the player, which can be used to detect collisions with falling entities.
    - You can also detect collision by calculating the distance between the two objects or by using [ThreeJS OBB method](https://threejs.org/examples/#webgl_math_obb).
3. If the falling entity enters inside the player, destroy it and update the score with addPoint function in CollisionChecker.js.  

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Journal de Bord - Test Technique ThreeJs | 28/08/2023
### Lundi :
---
**Entretien** pour le poste de Creative Developer (HTML5, ThreeJS) au sein d'Emeraude Escape.  
**Téléchargement du projet** via le lien fourni.  
**Mise en place du projet :**

- Création du Repo Git, prise de connaissance des conventions de nommage des commits.
- Importation du projet sur le Repository et installation des dépendances.
- Ouverture du journal de bord.
- Prise de connaissance des objectifs et de l'architecture du test.
  
**Déplacement version Desktop** du player.  
**Limite les déplacements** du player à l'intérieur de la scène.  

### Mardi :
---
**Déplacement version Mobile** du player.

## Enseignements
✨ Amélioration des messages de commit selon les conventions de nommage.  
✨ Utilisation de "touchstart" et "touchmove".  

## Améliorations Possibles
🚀 Agrandir la zone de spawn des popcorns en fonction de la taille de l'écran.  
🚀 Empêcher le player de quitter la scène lors des déplacements sur mobile.  

## Réflexions Personnelles

