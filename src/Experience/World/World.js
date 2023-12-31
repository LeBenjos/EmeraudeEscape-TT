import * as THREE from "three";

import GlobalParameter from "./GlobalParameter.js";

import Layout from "./GameElements/Layout.js";
import Player from "./GameElements/Player/Player.js";
import ObjectSpawner from "./GameElements/Corns/ObjectSpawner.js";
import CollisionChecker from "./CollisionChecker.js";

export default class World 
{
    constructor(_options){
        this.event = _options.event;
        this.scene = _options.scene;
        this.resources = _options.resources;
        this.camera = _options.camera;

        this.parameter = new GlobalParameter({
            event: this.event,
            scene: this.scene
        });
    }

    ready(){
        this.layout = new Layout({
            scene: this.scene,
            resources: this.resources,
            parameter: this.parameter
        });

        this.player = new Player({
            event: this.event,
            scene: this.scene,
            resources: this.resources,
            parameter: this.parameter,
            camera: this.camera
        });

        this.spawner = new ObjectSpawner({
            event: this.event,
            scene: this.scene,
            resources: this.resources,
            parameter : this.parameter,
            player: this.player
        });

        this.collisionChecker = new CollisionChecker({
            event: this.event,
            parameter : this.parameter,
            player: this.player,
            spawner: this.spawner,
            scene: this.scene
        });

        this.isReady = true;
        this.event.start();
    }

    update(deltaT){
        if(this.isReady && this.parameter.canUpdate){
            this.player.update(deltaT)
            this.spawner.update(deltaT)
            this.collisionChecker.update();
        }
    }
}
