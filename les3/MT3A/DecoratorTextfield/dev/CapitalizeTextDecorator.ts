/// <reference path="TextDecorator.ts" />

class CapitalizeTextDecorator extends TextDecorator {
    public txt : Txt;

    constructor(txt : Txt) {
        super();
        this.txt = txt;
    }
    
    public getText() : string {
        let text : string = this.txt.getText();
        
        return text.replace(/^\w|\.\s?\w/g, l => l.toUpperCase())
    }
}