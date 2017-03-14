class TypeScriptIterator implements Iterator<Object> {

    private collection : number[];
    private pointer = 0;

    constructor(collection: number[]) {
        this.collection = collection;
     }

    public next(): IteratorResult<Object> {
      if (this.hasNext()) { 
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
        return this.pointer < this.collection.length;
    }
}

