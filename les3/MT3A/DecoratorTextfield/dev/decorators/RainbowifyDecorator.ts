/// <reference path="../text.ts" />

class RainbowifyDecorator implements Txt {
    private _s: String;
    private _colors: String[];

    constructor(s: String) {
        this._s = s;
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
        [...this._s].forEach((c) => {
            returnString += `<span class="${this._colors[counter]}">${c}</span>`;
            counter++;
            if(counter >= this._colors.length) {
                counter = 0;
            }
        });
        return returnString;
    }
}
