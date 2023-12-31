import Sounds from "./Sounds.js";

export default class GlobalParameter {
    constructor(_options){
        this.event = _options.event;
        this.scene = _options.scene;

        this.sounds = new Sounds();

        this.eventReceiver();
        this.reset();
    }

    eventReceiver(){
        this.event.on('Start', () => {
            this.counterOn = true;
        });

        this.event.on('Reset', () => {
            this.reset();
            this.counterOn = true;
        });

        this.event.on('StopTimer', () => {
            this.canUpdate = false;
        });
    }

    reset(){
        this.canUpdate = true;
        
        this.setScore();
        this.setSpawner();
        this.setStarter();
    }

    setScore(){
        this.score = 0;

        this.multiplierOn = false;
        this.multiplier = 1;
    }

    setSpawner(){
        this.canSpawn = false;
    }

    setStarter(){
        this.counterOn = false;
        this.TimerCount = 300;
        this.timer = this.TimerCount;
    }

    destroy(item){
        item.geometry.dispose();
          for (const key in item.material) {
            const value = item.material[key];
  
            if (value && typeof value.dispose === 'function') {
              value.dispose();
            }
        }
        this.scene.remove(item);
    }
}
