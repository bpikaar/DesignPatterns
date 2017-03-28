/// <reference path="quizIterator.ts" />

class NormalQuizIterator extends QuizIterator {
    
    private pointer : number = 0; 
    
    public next() : IteratorResult<Question> {
        if (this.hasNext()) {
            return { done: false, value: this.collection[this.pointer++]
            }
        }
        else {
            return { done: true, value: null }
        }
    }

    public hasNext() : Boolean {
        return this.pointer < this.collection.length;
    }

    public reset() : void {
        this.pointer = 0;
    }
}