/// <reference path="ConcreteDecorator.ts" />
/// <reference path="../text.ts" />

class LowercaseDecorator implements Txt {
    private s: String;

    constructor(s: String) {
        this.s = s;
    }

    public getText(): string {
        console.log(this.s.toLowerCase());
        return this.s.toLowerCase();
    }
}