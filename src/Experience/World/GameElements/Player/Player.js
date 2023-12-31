import * as THREE from 'three';
import Controller from './Controller.js';

export default class Player {
    constructor(_options) {
        this.event = _options.event;
        this.scene = _options.scene;
        this.resources = _options.resources;
        this.parameter = _options.parameter;
        this.camera = _options.camera;

        this.setPlayer();

        this.controller = new Controller({
            mesh: this.player,
            parameter: this.parameter
        });
    }

    setPlayer(){
        this.setMesh();
    }

    setMesh(){
        this.playerGeometry = new THREE.PlaneGeometry(2.5,2);

        this.player = new THREE.Mesh(this.playerGeometry,  new THREE.MeshBasicMaterial({transparent: true, visible: false}));
        this.player.position.set(0,-3.8,0);

        this.setAssets(this.playerGeometry);
        this.scene.add(this.player);

        this.setColliders();

    }

    setAssets(geometry){
        this.bucketBackground = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({map: this.resources.items.player_background, transparent: true}));
        this.bucketBackground.position.x = -.35;
        this.bucketBackground.renderOrder = 1;
        
        this.bucketForeground = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({map: this.resources.items.player_foreground, transparent: true}));
        this.bucketForeground.position.x = -.35;
        this.bucketForeground.renderOrder = 3;

        this.player.add(this.bucketBackground, this.bucketForeground);
    }

    setColliders(){
        // Create colliders for the player
        this.player.hitbox = new THREE.Mesh(new THREE.PlaneGeometry(1.7,0.1),  new THREE.MeshBasicMaterial({visible: false}));
        this.player.hitbox.position.set(-0.01, -2.95, 0);

        this.scene.add(this.player.hitbox);
    }

    updatePlayer(deltaT){
        // Move the player according to the controller
        const projectedPosition = new THREE.Vector3(this.player.position.x, this.player.position.y, this.player.position.z).project(this.camera.instance)
        if(this.player.isMovingLeft && projectedPosition.x >= -1){
            this.player.position.x -= 0.005 * deltaT;
            this.player.hitbox.position.x -= 0.005 * deltaT;
        }
        if(this.player.isMovingRight && projectedPosition.x <= 1){
            this.player.position.x += 0.005 * deltaT;
            this.player.hitbox.position.x += 0.005 * deltaT;
        }
    }

    update(deltaT){
        this.updatePlayer(deltaT);
    }
}
