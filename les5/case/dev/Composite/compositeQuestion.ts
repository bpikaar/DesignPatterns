/// <reference path="../Questions/question.ts" />

class CompositeQuestion extends Question{

    private questions : Array<Question> = new Array<Question>();
    public get questionText() : string {
        return this.questionNumber + ". " + "Samengestelde vraag: ";
    }

    public add(question : Question) : void {
        this.questions.push(question);
    }

    public remove(question : Question) : void {

    } 

    public show(parent : HTMLElement, questionNumber : string) {
        new CompositeView(this.questionNumber, this.questions, this.questionText, parent);
    }

    public save() {
        console.log("Saving composite");
    }
}