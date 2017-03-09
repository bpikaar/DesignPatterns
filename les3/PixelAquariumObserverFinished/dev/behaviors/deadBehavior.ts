/// <reference path="SwimBahavior.ts" />

class DeadBehavior extends SwimBehavior{

    
    private speed : number = 1;

	constructor(fish : Fish) {
        super();
        this.fish = fish;
        
        this.fish.div.style.backgroundImage = "url(images/bones.png)";

	}

    public updatePosition(): void {
        this.fish.y -= this.speed;

        if (this.checkTop()) {
            this.fish.y = 0;
            this.speed = 0;
        }
    }

    private checkTop() {
        return (this.fish.y < 0);
    }

    public onTimerFinished() {

    }
}