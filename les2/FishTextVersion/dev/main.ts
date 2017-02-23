class Main {

    private allFish:Array<Fish> = new Array();

    private fishFactory:AquariumFactory = new UnhealthyAquariumFactory();

    constructor() {
        console.log("Fish strategies - List version");

        document.addEventListener('keydown', (e) => this.keyboardInput(e));


    }

    public keyboardInput(event: KeyboardEvent) {

        console.log(event.keyCode);

        let fish:Fish;

        switch (event.keyCode) {
            case 65: // A
                // spawn new fish

                this.allFish.push(this.fishFactory.getFish());

                this.update();
                break;
            case 66: // B
                // spawn new fish

                this.fishFactory = new HealthyAquariumFactory();
                break;
            case 67: // C
                // spawn new fish

                this.fishFactory = new UnhealthyAquariumFactory();
                break;
        }
    }

    public update()
    {
        let aquarium:HTMLElement = document.getElementById('fish');
        aquarium.innerHTML = '';

        for (let fish of this.allFish) {
            fish.update();
            aquarium.appendChild(fish.getHTMLElement())
        }

    }



}


window.addEventListener("load", () => new Main());