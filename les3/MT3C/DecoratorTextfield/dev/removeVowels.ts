/*
 * Thrandy
 */

class RemoveVowels extends TextObject {
    private base : TextObject = null;

    constructor(base:TextObject)
    {
        super();
        
        this.base = base;
    }

    public toString(): string {
        let splits = this.base.toString().split('');

        let newString = '';
        for (let letter of splits) {
            
            if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {

            } else {
                newString += letter;
            }
        }
        return newString;
    }
} 