/// <reference path="textObject.ts"/>

class XxxXName extends TextObject
{
    private base : TextObject = null;

    constructor(base:TextObject)
    {
        super();

        this.base = base;
    }

    public toString(): string
    {
        return "Xx" + this.base.toString() + "xX";
    }
}