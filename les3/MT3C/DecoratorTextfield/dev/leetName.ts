/// <reference path="textObject.ts"/>

class LeetName extends TextObject
{
    private base : TextObject = null;

    constructor(base:TextObject)
    {
        super();

        this.base = base;
    }

    public toString(): string
    {
        let baseStr = this.base.toString();

        return baseStr.replace(/l/gi, "1")
            .replace(/e/gi, "3")
            .replace(/t/gi, "7")
            .replace(/o/gi, "0")
            .replace(/a/gi, "4");
    }
}