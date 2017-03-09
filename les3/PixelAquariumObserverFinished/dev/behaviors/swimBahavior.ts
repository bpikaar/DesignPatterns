abstract class SwimBehavior {

    protected fish : Fish;
    protected timer : number = 0;
    protected behaviorTime = 0;


    public updateTimer() {
        this.timer++;

        if(this.timer > this.behaviorTime) this.onTimerFinished();
    }

    public breadAdded(bread : Bread) {
        
    }

    public abstract updatePosition();
    public abstract onTimerFinished();
}