/// <reference path="fishbehaviour.ts" />

class DeadBehaviour extends FishBehaviour {

    public swim() {
        this.fish.message = "dode vis";
    }

}