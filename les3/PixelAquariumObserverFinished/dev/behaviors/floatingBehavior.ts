/// <reference path="SwimBahavior.ts" />


class FloatingBehavior extends SwimBehavior {
    
	private startY : number;
    private speed : number = 1;

    constructor(fish : Fish) {
        super();
        this.fish          = fish;
        this.behaviorTime  = 300;

        this.startY = this.fish.y;
	}
    
    public updatePosition() {
        this.updateTimer();

        this.fish.y += this.speed;

        if(this.fish.y > this.startY + 50 ||
            this.fish.y < this.startY - 50) { 
            this.speed *= -1;
        }
        
    }

    public onTimerFinished() {
        this.hungry();
    }

    private hungry(){
        this.fish.setSwimBehavior(new SearchFood(this.fish));
    }
}