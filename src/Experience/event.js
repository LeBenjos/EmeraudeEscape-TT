import EventEmitter from "./Utils/EventEmitter.js";

export default class Event extends EventEmitter{
    constructor(_options){
        super();
    }

    start(){
        this.trigger('Start');
    }

    reset(){
        this.trigger('Reset');
    }

    ready(){
        this.trigger('Ready');
    }

    dead(){
        this.trigger('Dead');
    }

    updateScoreIndicator(){
        this.trigger('updateScoreIndicator');
    }

    startTimer(){
        this.trigger('StartTimer');
    }

    stopTimer(){
        this.trigger('StopTimer');
    }
}
