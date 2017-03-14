/// <reference path="textObject.ts"/>

class ScrambledName extends TextObject
{
    private base : TextObject = null;

    constructor(base:TextObject)
    {
        super();

        this.base = base;
    }

    public toString(): string
    {
        return this.base.toString().shuffle();
    }
}