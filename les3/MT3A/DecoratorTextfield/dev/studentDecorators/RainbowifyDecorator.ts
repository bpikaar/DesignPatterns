class RainbowifyDecorator extends TxtDecorator {
    private _colors: String[];
    private _animate: Boolean = false;

    constructor(decoratedTxt : Txt, animate: Boolean) {
        super(decoratedTxt);
        this._animate = animate;
        
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
        let s = this.decoratedTxt.getText();
        [...s].forEach((c) => {
            returnString += `<span class="${this._colors[counter]}">${c}</span>`;
            counter++;
            if(counter >= this._colors.length) {
                counter = 0;
            }
        });

        return (this._animate ? `<span class="rainbow">${returnString}</span>` : returnString);
    }
}
