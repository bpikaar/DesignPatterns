abstract class FishBehavior {

    protected _fish : Fish;
    protected _timer : number = 0;
    protected _behaviorTime = 0;


    public updateTimer() {
        this._timer++;

        if(this._timer > this._behaviorTime) this.onTimerFinished();
    }

    public abstract updatePosition() : void;
    public abstract onTimerFinished() : void;
}