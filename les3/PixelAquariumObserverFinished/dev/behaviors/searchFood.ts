/// <reference path="SwimBahavior.ts" />

class SearchFood extends SwimBehavior {

    private speedX : number = 5;
    private speedY : number = 0;

    constructor(fish : Fish) {
        super();

        this.fish          = fish;
        this.behaviorTime  = 400;
        this.speedX        *= this.fish.flip ? -1 : 1;

        this.fish.div.classList.add('normal-fish');
	}
    
    public updatePosition() : void {
        this.updateTimer();

        this.fish.x -= this.speedX;
        this.fish.y -= this.speedY;
        
        this.checkCollision();
    }

    public breadAdded(bread: Bread) : void {
        this.fish.setSwimBehavior(new SwimToBread(this.fish, bread));
    }

    private checkCollision() : void {
        if(this.fish.x + this.fish.div.clientWidth > window.innerWidth || this.fish.x < 0) {
            this.speedX *= -1;
            
            this.fish.flipFish();
        }
    }

    public onTimerFinished() {
        this.die();
    }

    private die() : void {
        this.fish.setSwimBehavior(new DeadBehavior(this.fish));
    }
}