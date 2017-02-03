/// <reference path="fish.ts"/>
/// <reference path="bubble.ts"/>

class Game {
    
    private normalFish:Fish;
    private numBubbles:number = 0;
    private timer : number = 0;
        
    constructor() {
       this.normalFish = new Fish();

       requestAnimationFrame(() => this.update());
    }
    
    private update(){
        this.normalFish.update();

        if (this.numBubbles < 15 && this.timer % 20 == 0) {
            new Bubble();
            this.numBubbles++; 
        }
        this.timer++;
        
        this.draw();
    }

    private draw() {
        this.normalFish.draw();

        // hiermee wordt de update opnieuw aangeroepen
        requestAnimationFrame(() => this.update());
    }
}