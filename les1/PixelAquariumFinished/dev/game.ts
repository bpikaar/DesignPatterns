class Game {
    
    private numBubbles      : number    = 0;
    
    private gameObjects     : Array<GameObject>;
    private bubbleInterval  : number;
        
    constructor() {
    
        this.gameObjects = new Array<GameObject>();

        setInterval(() => this.generateFish(), 3000);
        this.bubbleInterval = setInterval(() => this.generateBubble(), 500);

        requestAnimationFrame(() => this.update());
    }
    
    private generateFish() : void {

        let behavior : FishBehavior;
        let fish : Fish = new Fish();

        let random = Math.round(Math.random());
        
        switch (random) {
            case 0:
                behavior = new Hungry(fish);
                break;
            case 1:
                behavior = new Satisfied(fish);
                break;
        }
                
        fish.setFishBehavior(behavior);

        this.gameObjects.push(fish);
    }

    private generateBubble() : void {
        if (this.numBubbles > 15) clearInterval(this.bubbleInterval);
        new Bubble();
        this.numBubbles++;
    }

    private update(){

        for(let obj of this.gameObjects) {
            obj.update();
        }
        
        this.draw();
    }

    private draw() {
        for(let obj of this.gameObjects) {
            obj.draw();
        }
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(() => this.update());
    }

}