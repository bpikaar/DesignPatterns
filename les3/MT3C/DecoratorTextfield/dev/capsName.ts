/// <reference path="textObject.ts"/>

class CapsName extends TextObject
{

    constructor(base:TextObject)
    {
        super();

        this.base = base;
    }

    public toString(): string
    {
        return this.base.toString().toUpperCase();
    }
}