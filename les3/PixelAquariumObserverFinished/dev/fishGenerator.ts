class FishGenerator {
    private static _instance : FishGenerator;

    private constructor() {
        
    }

    public static instance() {
        if (this._instance == null) this._instance = new FishGenerator();

        return this._instance;
    }

    public newFish() : Fish {
        
        let behavior : SwimBehavior;
        let fish : Fish = new Fish();

        behavior = Math.random() < 0.5 ? 
            new SearchFood(fish) :
            new FloatingBehavior(fish);
        
        fish.setSwimBehavior(behavior);

        return fish;
    }
}