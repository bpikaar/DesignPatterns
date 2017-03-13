class TextDecorator {
}
class CapitalizeTextDecorator extends TextDecorator {
    constructor(txt) {
        super();
        this.txt = txt;
    }
    getText() {
        let text = this.txt.getText();
        return text.replace(/^\w|\.\s?\w/g, l => l.toUpperCase());
    }
}
class DefaultTxt {
    getText() {
        let form = document.getElementById("the-form");
        return form.search.value;
    }
}
class LowercaseTextDecorator extends TextDecorator {
    constructor(txt) {
        super();
        this.txt = txt;
    }
    getText() {
        let text = this.txt.getText();
        return text.toLowerCase();
    }
}
window.addEventListener("load", function () {
    let submit = document.getElementById("submit");
    submit.addEventListener("click", handleSubmit);
});
function handleSubmit(e) {
    e.preventDefault();
    let value = new DefaultTxt();
    let form = document.getElementById("the-form");
    if (form.lowercase.checked) {
        console.log("Alle karakters naar lowercase");
        value = new LowercaseTextDecorator(value);
    }
    if (form.summary.checked) {
        console.log("Alleen de eerste 10 woorden van de string");
        value = new SummarizeTextDecorator(value);
    }
    if (form.capital.checked) {
        console.log("Na elke punt spatie een hoofdletter");
        value = new CapitalizeTextDecorator(value);
    }
    if (form.reverse.checked) {
        console.log("De tekst achterstevoren.");
        value = new ReverseTextDecorator(value);
    }
    if (form.navo.checked) {
        console.log("De tekst achterstevoren.");
        value = new NAVOTextDecorator(value);
    }
    let output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = value.getText();
}
class NAVOTextDecorator extends TextDecorator {
    constructor(txt) {
        super();
        this.txt = txt;
    }
    getText() {
        let text = this.txt.getText();
        text = text.toUpperCase();
        let navoSpelling = {
            "A": "Alpha",
            "B": "Bravo",
            "C": "Charlie",
            "D": "Delta",
            "E": "Echo",
            "F": "Foxtrot",
            "G": "Golf",
            "H": "Hotel",
            "I": "India",
            "J": "Juliet",
            "K": "Kilo",
            "L": "Lima",
            "M": "Mike",
            "N": "November",
            "O": "Oscar",
            "P": "Papa",
            "Q": "Quebec",
            "R": "Romeo",
            "S": "Sierra",
            "T": "Tango",
            "U": "Uniform",
            "V": "Victor",
            "W": "Whiskey",
            "X": "Xray",
            "Y": "Yankee",
            "Z": "Zulu"
        };
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            if (!navoSpelling.hasOwnProperty(text[i])) {
                newText += text[i];
                continue;
            }
            newText += text[i].replace(text[i], navoSpelling[text[i]]);
        }
        return newText;
    }
}
class ReverseTextDecorator extends TextDecorator {
    constructor(txt) {
        super();
        this.txt = txt;
    }
    getText() {
        let text = this.txt.getText();
        return text.split("").reverse().join("");
    }
}
class SummarizeTextDecorator extends TextDecorator {
    constructor(txt) {
        super();
        this.txt = txt;
    }
    getText() {
        let text = this.txt.getText();
        return text.split(/\s+/).slice(0, 10).join(" ");
    }
}
//# sourceMappingURL=main.js.map