/// <reference path="../textDecorator.ts" />

class Capital extends TextDecorator{
    
    public getText() : string{
        let splits = this.decoratedTxt.getText().split('. ');

        let newString = '';
        for (let word of splits) {
            newString += word.charAt(0).toUpperCase();
            newString += word.substr(1, word.length - 1);
            newString += '. ';
            
        }
        return newString;
    }
}