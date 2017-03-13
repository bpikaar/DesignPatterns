/// <reference path="TextDecorator.ts" />

class LowercaseTextDecorator extends TextDecorator {
    public txt : Txt;

    constructor(txt : Txt) {
        super();
        this.txt = txt;
    }
    
    public getText() : string {
        let text : string = this.txt.getText();
        
        return text.toLowerCase();
    }
}