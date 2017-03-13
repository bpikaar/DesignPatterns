/*
 * Jens van de Graaf
 *
 */

class NAVOTextDecorator extends TxtDecorator {
    
    public getText() : string {
        let text : string = this.decoratedTxt.getText();
        text = text.toUpperCase();

        let navoSpelling = {
            "A" : "Alpha", 
            "B" : "Bravo", 
            "C" : "Charlie", 
            "D" : "Delta",  
            "E" : "Echo", 
            "F" : "Foxtrot", 
            "G" : "Golf", 
            "H" : "Hotel",         
            "I" : "India", 
            "J" : "Juliet", 
            "K" : "Kilo", 
            "L" : "Lima", 
            "M" : "Mike", 
            "N" : "November", 
            "O" : "Oscar", 
            "P" : "Papa", 
            "Q" : "Quebec", 
            "R" : "Romeo", 
            "S" : "Sierra", 
            "T" : "Tango", 
            "U" : "Uniform", 
            "V" : "Victor", 
            "W" : "Whiskey", 
            "X" : "Xray", 
            "Y" : "Yankee", 
            "Z" : "Zulu"
        };

        let newText : string = "";

        for(let i = 0; i < text.length; i++) {
            if(!navoSpelling.hasOwnProperty(text[i])) {
                newText += text[i];
                continue;
            }

            newText += text[i].replace(text[i], navoSpelling[text[i]]);
        }

        return newText;
    }
}
