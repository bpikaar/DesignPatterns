
/// <reference path="../textDecorator.ts" />
class RemoveVowels extends TextDecorator {
      public getText() : string{
        let splits = this.decoratedTxt.getText().split('');

        let newString = '';
        for (let letter of splits) {

            if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){

            } else {
                newString += letter;
            }
        }
        return newString;
      }
} 
