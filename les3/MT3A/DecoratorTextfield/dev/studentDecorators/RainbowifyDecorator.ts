class RainbowifyDecorator extends TxtDecorator {
    private _colors: String[];

    constructor(decoratedTxt : Txt) {
        super(decoratedTxt);

        this._colors = [
            "color-red",
            "color-yellow",
            "color-orange",
            "color-green",
            "color-indigo",
            "color-violet",
        ];
    }

    public getText(): string {
        let returnString = '';
        let counter = 0;
        [this.decoratedTxt.getText()].forEach((c) => {
            returnString += `<span class="${this._colors[counter]}">${c}</span>`;
            counter++;
            if(counter >= this._colors.length) {
                counter = 0;
            }
        });
        return returnString;
    }
}
