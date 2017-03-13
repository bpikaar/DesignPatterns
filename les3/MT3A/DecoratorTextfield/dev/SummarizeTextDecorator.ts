/// <reference path="TextDecorator.ts" />

class SummarizeTextDecorator extends TextDecorator {
    public txt : Txt;

    constructor(txt : Txt) {
        super();
        this.txt = txt;
    }
    
    public getText() : string {
        let text : string = this.txt.getText();
        
        return text.split(/\s+/).slice(0,10).join(" ");
    }
}