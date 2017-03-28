class CheckboxQuestionView implements QuestionView{
    private num : number;
    private text : string;

    constructor(num: number, questionText : string) {
        this.num = num;
        this.text = questionText;
    }

    show(parent : HTMLElement, questionNumber : string) : void {
        let div = document.createElement("div");
        parent.appendChild(div)

        let label = document.createElement("label");
        label.innerHTML = questionNumber + ". " + this.text;
        div.appendChild(label);

        let input = document.createElement("input");
        // input.setAttribute("type", "search");
        input.setAttribute("type", "checkbox");
        div.appendChild(input);
    }
}