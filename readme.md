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
**Création de la hitbox** du player.  
**Interaction avec les collisions** entre les entités et le player.  
**Incrémentation du score** en fonction des entités.  
**Uniformisation du code**.  
**Ajout du visuel du score**.  
**Ajout d'une musique** d'arrière-plan et modification des options liées aux autres sons.  

## Enseignements
✨ Amélioration des messages de commit selon les conventions de nommage.  
✨ Utilisation de "touchstart" et "touchmove".  
✨ Coder à partir d'un projet existant en respectant son architecture, sa syntaxe et ses règles...  

## Améliorations Possibles
🚀 Agrandir la zone de spawn des popcorns en fonction de la taille de l'écran.  
🚀 Empêchez le player de quitter la scène lors des déplacements sur mobile.  
🚀 Supprimez les popcorns tombés par terre depuis trop longtemps.  
🚀 Ajout de sons divers lors des collisions entre les entités et le player.  

## Réflexions Personnelles
J'ai adoré réaliser ce test, car j'ai pu apprendre de nombreuses choses, notamment comment mieux gérer mes commits, créer un contrôleur adapté aux mobiles et m'adapter à la syntaxe déjà présente. La formation de Bruno Simon m'a préparé pour ce test, et j'y ai d'ailleurs retrouvé des similitudes, notamment en ce qui concerne l'architecture.  
J'ai également beaucoup apprécié d'ajouter des fonctionnalités supplémentaires, comme les contrôleurs pour desktop, la musique de fond et l'affichage du score.  
Après avoir terminé ce test, mon enthousiasme pour rejoindre votre équipe et travailler dans le domaine du développement créatif n'a fait que grandir.  
