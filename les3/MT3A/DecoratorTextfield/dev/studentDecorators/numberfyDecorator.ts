/**
 * Wesley Cheung
 * Numberfy - Translates words into numbers.
 */

class NumberfyTextDecorator extends TxtDecorator {
    
    private numbers;

    private buildNumbers() : void {
        this.numbers = [
            {  
                "word" : "a",
                "number" : 1
            },
            {
                "word" : "b",
                "number" : 2
            },
            {
                
                "word" : "c",
                "number" : 3
            },
            {
                "word" : "d",
                "number" : 4
            },
            {
                "word" : "e",
                "number" : 5
            }, 
            {
                "word" : "f",
                "number" : 6
            }, 
            {
                "word" : "g",
                "number" : 7
            }, 
            {
                "word" : "h",
                "number" : 8
            },
            {
                "word" : "i",
                "number" : 9
            },
            {
                "word" : "j",
                "number" : 10
            }, 
            {
                "word" : "k",
                "number" : 11
            }, 
            {
                "word" : "l",
                "number" : 12
            }, 
            {
                "word" : "m",
                "number" : 13
            }, 
            {
                "word" : "n",
                "number" : 14
            }, 
            {
                "word" : "o",
                "number" : 15
            }, 
            {
                "word" : "p",
                "number" : 16
            }, 
            {
                "word" : "q",
                "number" : 17
            }, 
            {
                "word" : "r",
                "number" : 18
            }, 
            {
                "word" : "s",
                "number" : 19
            },
            {
                "word" : "t",
                "number" : 20
            }, 
            {
                "word" : "u",
                "number" : 21
            }, 
            {
                "word" : "v",
                "number" : 22
            }, 
            {
                "word" : "w",
                "number" : 24
            }, 
            {
                "word" : "x",
                "number" : 25
            }, 
            {
                "word" : "y",
                "number" : 26
            }, 
            {
                "word" : "z",
                "number" : 27
            }
        ];
    } 

    constructor(decoratedTxt : Txt) {
        super(decoratedTxt);
        
        this.buildNumbers();
    }

    public getText(): string {
        const split_words = this.decoratedTxt.getText().split("");
        let return_string = "";

        for(let i = 0; i < split_words.length; i++){
            let word = split_words[i];

            this.numbers.forEach(function(value, key) {
                if(word == value.word) {
                    return_string += value.number;
                }
            });
        }
        
        return return_string;
    }
}