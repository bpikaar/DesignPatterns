/// <reference path="question.ts" />

class SingleQuestion extends Question {
    
    public _question : string;
    public _answer : string;
    private _view : QuestionView;

    public get questionText() : string {
        return this._question;
    }

    public set view(view : QuestionView) {
        this._view = view;
    }

	constructor(num : number, question : string = "vraag", answer : string = "antwoord",
        view : QuestionView = null) {
        super(num);

        this._question = question;
        this._answer = answer;
        this._view = view ? 
            view : 
            new OpenQuestionView(this.questionNumber, this._question);
        
        
	}
    
    /**Observer method */
    public save() : void {
        console.log("Notification for: " + this.questionNumber);
    }

    public show(parent : HTMLElement, questionNumber : string) : void {
        
        this._view.show(parent, questionNumber);
    }
}