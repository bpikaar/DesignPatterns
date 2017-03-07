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
    }
}
//# sourceMappingURL=main.js.map