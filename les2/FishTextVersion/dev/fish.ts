/**
 * Created by bas on 19-02-17.
 */
class Fish {
    private fishBehaviour:FishBehaviour = null;

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }

    constructor() {
        this.fishBehaviour = new NothingBehaviour(this);
    }

    public setFishBehaviour(fishBehaviour: FishBehaviour) {

        this.fishBehaviour = fishBehaviour;
    }

    private _message:string = "";
    
    public swim() {
        this.fishBehaviour.swim();
    }

    public update() {
        this.swim();
    }

    public getHTMLElement():HTMLElement {
        let fish:HTMLElement = document.createElement("li");

        fish.innerHTML = this.message;

        return fish;
    }
}