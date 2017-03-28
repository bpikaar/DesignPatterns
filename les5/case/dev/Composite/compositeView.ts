class CompositeView {
    private form:HTMLElement;

    constructor(
        num: number, 
        questions : Array<Question>, 
        questionText : string, 
        parent : HTMLElement) 
    {
        this.form = parent;
        this.buildHead(num, questionText);

        let ul = document.createElement("ul");
        this.form.appendChild(ul);

        for(let q of questions) {
            let li = document.createElement("li");
            this.form.appendChild(li);

            // let div = document.createElement("div");
            // li.appendChild(div)

            q.show(li, String.fromCharCode(q.questionNumber + 64));
            // let label = document.createElement("label");
            // label.innerHTML = String.fromCharCode(q.questionNumber + 64) + ". " + q.questionText;
            // li.appendChild(label);

            // let input = document.createElement("input");
            // li.appendChild(input);
            // input.setAttribute("type", "search");
            
        }
        

        
    }

    private buildHead(num : number, questionText : string) {
        
        let p = document.createElement("p");
        p.innerHTML = questionText;
        this.form.appendChild(p);
    }
}