class TypeScriptIterableIterator implements IterableIterator<Object> {

    private collection : number[];
    private pointer = 0;

    [Symbol.iterator]() : IterableIterator<Object> {
        return this;
    }

    constructor(collection: number[]) {
        this.collection = collection;
     }

    public next(): IteratorResult<Object> {
        if (this.hasNext()){
            return {
                done: false,
                value: this.collection[this.pointer++] 
            }
       }
       else {
           return {
               done: true,
               value: null
           }
       }
    }

    public hasNext(): Boolean {
    }
}

