abstract class  QuizIterator implements IterableIterator<Object> {
    private _collection  : Question[];

    public get collection() : Question[] {
        return this._collection;
    }
    public set collection(col : Question[]) {
        this._collection = col;
    }

    [Symbol.iterator]() : IterableIterator<Question> {
        return this;
    }


    constructor(collection : Question[]) {
        this._collection = collection;
    }

    abstract next() : IteratorResult<Question>;

    abstract hasNext() : Boolean;
}