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
### Lundi : Introduction
12h30 - Réunion
13h00 - Téléchargement du projet
20h00 - Création du Repository, prise de connaissance du test, mise en place du projet et installation des dépendances, ouverture du journal de bord.
