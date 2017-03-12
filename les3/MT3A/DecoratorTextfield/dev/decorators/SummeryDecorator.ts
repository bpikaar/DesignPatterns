/// <reference path="ConcreteDecorator.ts" />
/// <reference path="../text.ts" />

class SummeryDecorator implements Txt {
    private s: String;

    constructor(s: String) {
        this.s = s;
    }

    public getText(): string {
        return this.s.split(" ").slice(0, 6).join("") + '...';
    }
}