class Game {
    
    private numBubbles      : number    = 0;
    private aquarium        : Aquarium;
    private gameObjects     : Array<GameObject>;
    private bubbleInterval  : number;
        
    constructor() {
        this.aquarium = new Aquarium();
        this.gameObjects = new Array<GameObject>();

        setInterval(() => this.generateFish(), 3000);
        this.bubbleInterval = setInterval(() => this.generateBubble(), 500);

        document.addEventListener("click", (e) => this.addBread(e));

        requestAnimationFrame(() => this.update());
    }
    
    private generateFish() : void {
        let fish = FishGenerator.instance().newFish();
        this.aquarium.addFish(fish);
        this.gameObjects.push(fish);
    }

    private generateBubble() : void {
        if (this.numBubbles > 15) clearInterval(this.bubbleInterval);
        new Bubble();
        this.numBubbles++;
    }

    private addBread(e : MouseEvent) {
        let bread = new Bread(e.clientX, e.clientY);
        this.aquarium.addBread(bread);
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