class Hungry extends FishBehavior {

    private speedX : number = 5;
    private speedY : number = 0;

    constructor(fish : Fish) {
        super();

        this._fish          = fish;
        this._behaviorTime  = 400;

        this._fish.div.classList.add('normal-fish');
	}
    
    public updatePosition() : void {
        this.updateTimer();

        this._fish.x -= this.speedX;
        this._fish.y -= this.speedY;
        
        this.checkCollision();
    }

    private checkCollision() : void {
        if(this._fish.x + this._fish.div.clientWidth > window.innerWidth || this._fish.x < 0) {
            this.speedX *= -1;
            
            
            this._fish.flip = this._fish.flip == 0 ? 180 : 0;
        }
    }

    public onTimerFinished() {
        this.die();
    }

    private die() : void {
        this._fish.setFishBehavior(new Dead(this._fish));
    }
}