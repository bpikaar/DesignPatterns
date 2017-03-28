class Question {
    get questionNumber() {
        return this._questionNumber;
    }
    constructor(num) {
        this._questionNumber = num;
        Page.getInstance().add(this);
    }
}
class CompositeQuestion extends Question {
    constructor() {
        super(...arguments);
        this.questions = new Array();
    }
    get questionText() {
        return this.questionNumber + ". " + "Samengestelde vraag: ";
    }
    add(question) {
        this.questions.push(question);
    }
    remove(question) {
    }
    show(parent, questionNumber) {
        new CompositeView(this.questionNumber, this.questions, this.questionText, parent);
    }
    save() {
        console.log("Saving composite");
    }
}
class CompositeView {
    constructor(num, questions, questionText, parent) {
        this.form = parent;
        this.buildHead(num, questionText);
        let ul = document.createElement("ul");
        this.form.appendChild(ul);
        for (let q of questions) {
            let li = document.createElement("li");
            this.form.appendChild(li);
            q.show(li, String.fromCharCode(q.questionNumber + 64));
        }
    }
    buildHead(num, questionText) {
        let p = document.createElement("p");
        p.innerHTML = questionText;
        this.form.appendChild(p);
    }
}
class QuizFactory {
}
class DayQuizFactory extends QuizFactory {
    static make(type) {
        let iterator;
        switch (type) {
            case QuizTypes.PROGRAMMEREN:
                let comp = new CompositeQuestion(1);
                comp.add(new SingleQuestion(1, "Wat is een Interface", "Een software laag"));
                comp.add(new SingleQuestion(2, "Kan een Interface een variabele bevatten?", "ja/nee"));
                iterator = new RandomQuizIterator([
                    comp,
                    new SingleQuestion(2, "Wat is de hoofstad van Nederland?", "Amsterdam"),
                    new SingleQuestion(3, "Op welke dag valt Pi-dag?", "14 maart"),
                    new SingleQuestion(4, "Bevat TypeScript integers?", "Nee", new CheckboxQuestionView(4, "Bevat TypeScript integers?")),
                    new SingleQuestion(5, "Wat is de return type van een Iterable", "Iterator")
                ]);
                break;
            case QuizTypes.VERKIEZINGEN:
                iterator = new RandomQuizIterator([]);
                break;
            default:
                iterator = null;
                break;
        }
        return iterator;
    }
}
class NightQuizFactory extends QuizFactory {
    static make(type) {
        let iterator;
        switch (type) {
            case QuizTypes.PROGRAMMEREN:
                iterator = new RandomQuizIterator([]);
                break;
            case QuizTypes.VERKIEZINGEN:
                iterator = new RandomQuizIterator([]);
                break;
            default:
                iterator = null;
                break;
        }
        return iterator;
    }
}
var QuizTypes;
(function (QuizTypes) {
    QuizTypes[QuizTypes["VERKIEZINGEN"] = 0] = "VERKIEZINGEN";
    QuizTypes[QuizTypes["PROGRAMMEREN"] = 1] = "PROGRAMMEREN";
})(QuizTypes || (QuizTypes = {}));
class QuizIterator {
    get collection() {
        return this._collection;
    }
    set collection(col) {
        this._collection = col;
    }
    [Symbol.iterator]() {
        return this;
    }
    constructor(collection) {
        this._collection = collection;
    }
}
class NormalQuizIterator extends QuizIterator {
    constructor() {
        super(...arguments);
        this.pointer = 0;
    }
    next() {
        if (this.hasNext()) {
            return { done: false, value: this.collection[this.pointer++]
            };
        }
        else {
            return { done: true, value: null };
        }
    }
    hasNext() {
        return this.pointer < this.collection.length;
    }
    reset() {
        this.pointer = 0;
    }
}
class RandomQuizIterator extends QuizIterator {
    constructor(collection) {
        super(collection);
        this.pickedCollection = [];
    }
    next() {
        if (this.hasNext()) {
            let item;
            do {
                item = this.pickItem();
            } while (this.isItemPicked(item.key));
            this.pickedCollection.push(item.key);
            return {
                done: false,
                value: item.value
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    }
    hasNext() {
        return this.pickedCollection.length < this.collection.length;
    }
    pickItem() {
        let random = Math.floor((Math.random() * (this.collection.length)));
        return {
            key: random,
            value: this.collection[random]
        };
    }
    isItemPicked(index) {
        let found = false;
        console.log(this.pickedCollection);
        for (let i of this.pickedCollection) {
            if (i == index)
                found = true;
        }
        return found;
    }
}
window.addEventListener("load", function () {
    let dayQuizIterator = DayQuizFactory.make(QuizTypes.PROGRAMMEREN);
    Page.getInstance().quiz = dayQuizIterator;
    let saveButton = document.getElementById("btn-save");
    saveButton.addEventListener("click", handleSave);
    function handleSave(e) {
        e.preventDefault();
        Page.getInstance().save();
    }
});
class SingleQuestion extends Question {
    get questionText() {
        return this._question;
    }
    set view(view) {
        this._view = view;
    }
    constructor(num, question = "vraag", answer = "antwoord", view = null) {
        super(num);
        this._question = question;
        this._answer = answer;
        this._view = view ?
            view :
            new OpenQuestionView(this.questionNumber, this._question);
    }
    save() {
        console.log("Notification for: " + this.questionNumber);
    }
    show(parent, questionNumber) {
        this._view.show(parent, questionNumber);
    }
}
class Page {
    set quiz(iterator) {
        this.iterator = iterator;
        this.buildPage();
    }
    constructor() {
        this.questions = new Array();
    }
    static getInstance() {
        if (!this.instance)
            this.instance = new Page();
        return this.instance;
    }
    buildPage() {
        for (let question of this.iterator) {
            let form = document.getElementById("form");
            question.show(form, question.questionNumber.toString());
        }
        this.addSubmit();
    }
    addSubmit() {
        let form = document.getElementById("form");
        let submit = document.createElement("input");
        submit.setAttribute("class", "button");
        submit.setAttribute("value", "Opslaan");
        submit.setAttribute("type", "submit");
        submit.setAttribute("id", "btn-save");
        form.appendChild(document.createElement("p"));
        form.appendChild(submit);
    }
    add(question) {
        this.questions.push(question);
    }
    save() {
        for (let question of this.questions) {
            question.save();
        }
    }
}
class CheckboxQuestionView {
    constructor(num, questionText) {
        this.num = num;
        this.text = questionText;
    }
    show(parent, questionNumber) {
        let div = document.createElement("div");
        parent.appendChild(div);
        let label = document.createElement("label");
        label.innerHTML = questionNumber + ". " + this.text;
        div.appendChild(label);
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        div.appendChild(input);
    }
}
class OpenQuestionView {
    constructor(num, questionText) {
        this.num = num;
        this.text = questionText;
    }
    show(parent, questionNumber) {
        let div = document.createElement("div");
        parent.appendChild(div);
        let label = document.createElement("label");
        label.innerHTML = questionNumber + ". " + this.text;
        div.appendChild(label);
        let input = document.createElement("input");
        input.setAttribute("type", "search");
        div.appendChild(input);
    }
}
//# sourceMappingURL=main.js.map