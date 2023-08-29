import * as THREE from "three";
import { ceilPowerOfTwo } from "three/src/math/MathUtils";

export default class CollisionChecker{
    constructor(_options){
        this.event = _options.event;
        this.parameter = _options.parameter;
        this.player = _options.player;
        this.spawner = _options.spawner;
        this.scene = _options.scene;

        this.player.cornCatch = [];
        this.score = document.querySelector('.score')
    }

    checkCollision(){
        this.spawner.objectLists.forEach(cornType => {
            cornType.forEach(corn => {
                if(
                    corn.position.x > this.player.player.hitbox.position.x - this.player.player.hitbox.geometry.parameters.width/2 &&
                    corn.position.x < this.player.player.hitbox.position.x + this.player.player.hitbox.geometry.parameters.width/2 &&
                    corn.position.y > this.player.player.hitbox.position.y - this.player.player.hitbox.geometry.parameters.height/2 &&
                    corn.position.y < this.player.player.hitbox.position.y + this.player.player.hitbox.geometry.parameters.height/2 &&
                    !this.player.cornCatch.includes(corn)
                ){
                    this.player.cornCatch.push(corn);
                    corn.geometry.dispose();
                    corn.material.dispose();
                    this.scene.remove(corn);
                    this.addPoint(corn);
                }
            });
        });
    }

    addPoint(item){
        if(item.name == 'good'){
            this.parameter.score += 1;
        } else if (item.name == 'bad'){
            if(this.parameter.score > 0){
                this.parameter.score -= 1;
            }
            this.parameter.multiplier = 1;
        } else {
            this.parameter.score += 5 * this.parameter.multiplier;
            this.parameter.multiplier += 1;
        }
        this.event.updateScoreIndicator();
        
        this.score.innerText = this.parameter.score
    }

    update(){
        this.checkCollision();
    }
}
