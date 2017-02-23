/**
 * Created by bas on 20-02-17.
 */
abstract class FishBehaviour {
    get fish(): Fish {
        return this._fish;
    }

    set fish(value: Fish) {
        this._fish = value;
    }
    private _fish:Fish;

    constructor(fish: Fish) {
        this.fish = fish;
    }
    public abstract swim();
}