class RawString implements Txt{

    private _rawString : string;

    constructor(text : string) {
        this._rawString = text;
    }

    public getText() : string {
        return this._rawString
    }
}