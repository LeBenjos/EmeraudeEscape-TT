import * as THREE from "three"

export default class Controller {
    constructor(_options){
        this.player = _options.mesh
        this.parameter = _options.parameter
        console.log()

        this.setDesktopController()
    }

    setDesktopController(){
        window.addEventListener("keydown", (key) => {
            if(key.code === "KeyA" || key.code === "ArrowLeft"){
                this.player.isMovingLeft = true
            } else if(key.code === "KeyD" || key.code === "ArrowRight"){
                this.player.isMovingRight = true
            }
        })

        window.addEventListener("keyup", (key) => {
            if(key.code === "KeyA" || key.code === "ArrowLeft"){
                this.player.isMovingLeft = false
            } else if(key.code === "KeyD" || key.code === "ArrowRight"){
                this.player.isMovingRight = false
            }
        })
    }

    setMobileController(){
        console.log("Mobile Controller : TODO")
    }
}