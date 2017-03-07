/// <reference path="textObject.ts"/>
class Name extends TextObject
{
    constructor()
    {
        super();
    }

    public toString(): string
    {
        return this.text;
    }
}