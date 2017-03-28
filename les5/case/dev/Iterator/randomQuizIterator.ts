class RandomQuizIterator extends QuizIterator {
    
    private pointer : number;
    private pickedCollection : number[];

    constructor(collection : Question[]) {
        super(collection);

        this.pickedCollection = [];
    }
    
    public next() : IteratorResult<Question> {
        if (this.hasNext()) {

            let item : RandomResult;

            do {
                item = this.pickItem();
            }while(this.isItemPicked(item.key))

            this.pickedCollection.push(item.key);

            return {
                done: false,
                value: item.value
            }
        }
        else {
            return {
                done: true,
                value: null
            }
        }
    }

    public hasNext() : Boolean {
        return this.pickedCollection.length < this.collection.length;
    }

    private pickItem() : RandomResult {
        let random = Math.floor((Math.random() * (this.collection.length)));
        return {
            key : random,
            value: this.collection[random]
        };
    }
    private isItemPicked(index : number) : Boolean {
        let found = false;
        console.log(this.pickedCollection);
        
        
        for (let i of this.pickedCollection) {
            if (i == index) found = true;
        }
        return found;
    }
}

interface RandomResult {
    key : number, 
    value : Question
}