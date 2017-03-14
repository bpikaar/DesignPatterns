<<<<<<< HEAD
class TextDecorator {
    get decoratedTxt() {
        return this.decoratedText;
    }
    constructor(decoratedTxt) {
        this.decoratedText = decoratedTxt;
    }
}
class Capital extends TextDecorator {
    getText() {
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
class LowerCase extends TextDecorator {
    getText() {
        return this.decoratedTxt.getText().toLowerCase();
    }
}
class Reverse extends TextDecorator {
    getText() {
        let text = this.decoratedTxt.getText();
        let newString = '';
        for (let i = text.length - 1; i >= 0; i--) {
            newString += text[i];
        }
        return newString;
    }
}
class Summary extends TextDecorator {
    getText() {
        let words = this.decoratedTxt.getText().split(' ', 10);
        return words.join(' ');
=======
class TextObject {
    constructor() {
        this.text = "";
    }
}
class CapsName extends TextObject {
    constructor(base) {
        super();
        this.base = null;
        this.base = base;
    }
    toString() {
        return this.base.toString().toUpperCase();
    }
}
String.prototype.shuffle = function () {
    var a = this.split(""), n = a.length;
    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};
class LeetName extends TextObject {
    constructor(base) {
        super();
        this.base = null;
        this.base = base;
    }
    toString() {
        let baseStr = this.base.toString();
        return baseStr.replace(/l/gi, "1")
            .replace(/e/gi, "3")
            .replace(/t/gi, "7")
            .replace(/o/gi, "0")
            .replace(/a/gi, "4");
>>>>>>> bpikaar/master
    }
}
window.addEventListener("load", function () {
    let submit = document.getElementById("submit");
    submit.addEventListener("click", handleSubmit);
});
function handleSubmit(e) {
    e.preventDefault();
    let form = document.getElementById("the-form");
    let text = form.search.value;
<<<<<<< HEAD
    var rawString = new RawString(text);
    if (form.lowercase.checked) {
        console.log("Alle karakters naar lowercase");
        rawString = new LowerCase(rawString);
    }
    if (form.summary.checked) {
        console.log("Alleen de eerste 10 woorden van de string");
        rawString = new Summary(rawString);
    }
    if (form.capital.checked) {
        console.log("Na elke punt spatie een hoofdletter");
        rawString = new Capital(rawString);
    }
    if (form.reverse.checked) {
        console.log("De tekst achterstevoren.");
        rawString = new Reverse(rawString);
    }
    if (form.removevowels.checked) {
        console.log("klinkers verwijderen");
        rawString = new RemoveVowels(rawString);
    }
    let output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = rawString.getText();
}
class RawString {
    constructor(text) {
        this._rawString = text;
    }
    getText() {
        return this._rawString;
    }
}
class RemoveVowels extends TextDecorator {
    getText() {
        let splits = this.decoratedTxt.getText().split('');
        let newString = '';
        for (let letter of splits) {
            if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
            }
            else {
                newString += letter;
            }
        }
        return newString;
=======
    let name = new Name();
    name.text = text;
    if (form.Scrambled.checked) {
        name = new ScrambledName(name);
    }
    if (form.to1337.checked) {
        name = new LeetName(name);
    }
    if (form.FULLCAPS.checked) {
        name = new CapsName(name);
    }
    if (form.XxxX.checked) {
        name = new XxxXName(name);
    }
    let output = document.getElementById("output");
    output.style.display = "block";
    output.innerText = name.toString();
}
class Name extends TextObject {
    constructor() {
        super();
    }
    toString() {
        return this.text;
    }
}
class ScrambledName extends TextObject {
    constructor(base) {
        super();
        this.base = null;
        this.base = base;
    }
    toString() {
        return this.base.toString().shuffle();
    }
}
class XxxXName extends TextObject {
    constructor(base) {
        super();
        this.base = null;
        this.base = base;
    }
    toString() {
        return "Xx" + this.base.toString() + "xX";
>>>>>>> bpikaar/master
    }
}
//# sourceMappingURL=main.js.map