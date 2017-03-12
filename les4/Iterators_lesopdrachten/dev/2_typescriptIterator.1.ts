class TypeScriptIterator implements Iterator<Object> {

    private collection : number[];
    private pointer = 0;

    constructor(collection: number[]) {
        this.collection = collection;
     }

    public next(): IteratorResult<Object> {
        
    }

    public hasNext(): Boolean {
    }
}

