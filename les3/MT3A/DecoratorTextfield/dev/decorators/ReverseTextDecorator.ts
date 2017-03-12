/// <reference path="ConcreteDecorator.ts" />
/// <reference path="../text.ts" />

class ReverseTextDecorator implements Txt {
    private s: String;

    constructor(s: String) {
        this.s = s;
    }

    public getText(): string {
        return this.s.split("").reverse().join("");
    }
}