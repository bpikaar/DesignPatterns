/// <reference path="../text.ts" />

class Decorator implements Txt {
    private text: Txt;

    constructor(text: Txt) {
        this.text = text;
    }

    public getText(): string {
        return this.text.getText();
    }
}

class ConcreteDecorator extends Decorator {
    constructor(text: Txt) {
        super(text);
    }

    public getText(): string {
        console.log('concrete called');
        return super.getText() + "<br />";
    }
}