/// <reference path="quizFactory.ts" />


class DayQuizFactory extends QuizFactory {

    /**Haalt alle vragen per type op */
    public static make(type: QuizTypes) : QuizIterator {

        let iterator : QuizIterator;

        switch (type) {
            case QuizTypes.PROGRAMMEREN:
                // haal programmeervragen op
                //todo wat te doen met de collectie?
                let comp : CompositeQuestion  = new CompositeQuestion(1);
                
                comp.add(new SingleQuestion(1, "Wat is een Interface", "Een software laag"));
                comp.add(new SingleQuestion(2, "Kan een Interface een variabele bevatten?", "ja/nee"));

                iterator = new RandomQuizIterator(
                    [ 
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