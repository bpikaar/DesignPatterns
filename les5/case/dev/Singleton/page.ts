class Page {
    private iterator : QuizIterator;
    
    // collectie voor Subject
    private questions : Array<Question>;

    private static instance : Page;

    public set quiz(iterator : QuizIterator) {
        this.iterator = iterator;

        this.buildPage();
    }

    // Singleton
    private constructor() {
        this.questions = new Array<Question>();
    }

    public static getInstance() {
        if(!this.instance) this.instance = new Page();
        return this.instance;
    }

    private buildPage() : void {
        for(let question of this.iterator) {
            let form = document.getElementById("form");
            question.show(form, question.questionNumber.toString());
        }
        this.addSubmit();
    }

    private addSubmit() {
        let form = document.getElementById("form");
        let submit = document.createElement("input");
        submit.setAttribute("class", "button");
        submit.setAttribute("value", "Opslaan");
        submit.setAttribute("type" , "submit");
        submit.setAttribute("id"   , "btn-save");

        form.appendChild(document.createElement("p"));
        form.appendChild(submit);
    }
    // Subject
    public add(question : Question) {
        this.questions.push(question)
    } 

    public save() : void {
        for(let question of this.questions) {
            question.save();
        }
    }
}