/// <reference path="text.ts" />

abstract class TxtDecorator implements Txt{

    private _decoratedTxt : Txt;
	
    public get decoratedTxt(): Txt {
		return this._decoratedTxt;
	}

	constructor(decoratedTxt : Txt) {
        this._decoratedTxt = decoratedTxt;
	}
    
    public abstract getText() : string;
}