/// <reference path="SwimBahavior.ts" />


class SwimToBread extends SwimBehavior {

    private speedX : number = 5;
    private speedY : number = 0;
    private bread  : Bread;

    constructor(fish : Fish, bread : Bread) {
        super();

        this.fish          = fish;
        this.bread         = bread;
        this.behaviorTime  = 400;

        this.fish.div.classList.add('normal-fish');
	}
    
    public updatePosition() : void {
        this.updateTimer();

        this.fish.x -= this.speedX;
        this.fish.y -= this.speedY;
        
        let lengthX = this.fish.x - this.bread.x;
        let lengthY = this.fish.y - this.bread.y;
        let lengthXY = Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2))

        this.speedX = lengthX / lengthXY;
        this.speedY = lengthY / lengthXY;

        // Fish is on right side of bread
        if(this.bread.x - this.fish.x < 0) this.fish.flip = 0;
        else this.fish.flip = 180;

        this.checkCollision();

    }

    private checkCollision() : void {
        let lengthX = this.fish.x - this.bread.x;
        let lengthY = this.fish.y - this.bread.y;
        let lengthXY = Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2))

        if (lengthXY < 10) this.eatBread();
    }

    private eatBread() : void {
        this.fish.setSwimBehavior(new FloatingBehavior(this.fish));
    }

    public onTimerFinished() {
        this.die();
    }

    private die() : void {
        this.fish.setSwimBehavior(new DeadBehavior(this.fish));
    }
}