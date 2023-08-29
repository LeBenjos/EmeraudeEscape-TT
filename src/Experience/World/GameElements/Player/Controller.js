export default class Controller {
    constructor(_options){
        this.player = _options.mesh;
        this.parameter = _options.parameter;

        this.setDesktopController();
        this.setMobileController();
    }

    setDesktopController(){
        window.addEventListener("keydown", (key) => {
            if(key.code === "KeyA" || key.code === "ArrowLeft"){
                this.player.isMovingLeft = true;
            } else if(key.code === "KeyD" || key.code === "ArrowRight"){
                this.player.isMovingRight = true;
            }
        });

        window.addEventListener("keyup", (key) => {
            if(key.code === "KeyA" || key.code === "ArrowLeft"){
                this.player.isMovingLeft = false;
            } else if(key.code === "KeyD" || key.code === "ArrowRight"){
                this.player.isMovingRight = false;
            }
        });
    }

    setMobileController(){
        this.touchX = 0;

        document.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.touchX = event.touches[0].clientX;
        }, false);

        document.addEventListener('touchmove', (event) => {
            event.preventDefault();
            const deltaX = event.touches[0].clientX - this.touchX;
            this.player.position.x += deltaX * 0.0125;
            this.player.hitbox.position.x += deltaX * 0.0125;
            this.touchX = event.touches[0].clientX;
        }, false);
    }
}
