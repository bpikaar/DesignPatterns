window.addEventListener("load", function() {
    let dayQuizIterator : QuizIterator = DayQuizFactory.make(QuizTypes.PROGRAMMEREN);

    Page.getInstance().quiz = dayQuizIterator;

    let saveButton : HTMLElement = document.getElementById("btn-save");
    saveButton.addEventListener("click", handleSave);

    function handleSave(e : Event) {
        e.preventDefault();
        
        Page.getInstance().save();
    }
});

