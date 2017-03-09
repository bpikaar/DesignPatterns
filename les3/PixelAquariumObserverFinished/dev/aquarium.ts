class Aquarium {
    private _fishes : Array<Fish>;

	constructor() {
        this._fishes = new Array<Fish>();
	}

    public addFish(fish : Fish) : void {
        this._fishes.push(fish);
    }

    public addBread(bread : Bread) : void {
        this.notifyFish(bread);
    }

    private notifyFish(bread : Bread) : void {
        for (let fish of this._fishes) {
            fish.breadAdded(bread);
        }
    }
}