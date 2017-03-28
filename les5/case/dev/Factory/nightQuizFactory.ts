class NightQuizFactory extends QuizFactory {
    
    /**Haalt de helft van de vragen per type op */
    public static make(type: QuizTypes) : QuizIterator {

        let iterator : QuizIterator;

        switch (type) {
            case QuizTypes.PROGRAMMEREN:
                // haal programmeervragen op
                //todo wat te doen met de collectie?
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