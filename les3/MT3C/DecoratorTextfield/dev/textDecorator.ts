abstract class TextDecorator implements Txt{

    private decoratedText : Txt;
	
    public get decoratedTxt(): Txt {
		return this.decoratedText;
	}

	constructor(decoratedTxt : Txt) {
        this.decoratedText = decoratedTxt;
	}
    
    public abstract getText() : string;
}