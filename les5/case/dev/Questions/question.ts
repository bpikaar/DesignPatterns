abstract class Question implements Observer{

    private _questionNumber : number;

    public abstract questionText : string;    

	public get questionNumber(): number {
		return this._questionNumber;
	}
	
    constructor(num : number) 
    {
        this._questionNumber = num;
        

        Page.getInstance().add(this);
    }

    // From Question
    abstract show(parent : HTMLElement, questionNumber : string) : void;

    // From Observer
    abstract save() : void;
}