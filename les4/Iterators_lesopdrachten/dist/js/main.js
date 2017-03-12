class SimpleIterator {
    constructor(collection) {
        this.pointer = 0;
        this.collection = collection;
    }
    next() {
        if (this.hasNext()) {
            return this.collection[this.pointer++];
        }
        else {
            return null;
        }
    }
    hasNext() {
        return this.pointer < this.collection.length;
    }
}
class TypeScriptIterator {
    constructor(collection) {
        this.pointer = 0;
        this.collection = collection;
    }
    next() {
        if (this.hasNext()) {
            return {
                done: false,
                value: this.collection[this.pointer++]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    }
    hasNext() {
        return this.pointer < this.collection.length;
    }
}
class TypeScriptIterableIterator {
    constructor(collection) {
        this.pointer = 0;
        this.collection = collection;
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        if (this.hasNext()) {
            return {
                done: false,
                value: this.collection[this.pointer++]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    }
    hasNext() {
        return this.pointer < this.collection.length;
    }
}
window.addEventListener("load", function () {
    let simpleIterator = new SimpleIterator([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    while (simpleIterator.hasNext()) {
        console.log(simpleIterator.next());
    }
    let typeScriptIterator = new TypeScriptIterator([89, 144, 233, 377, 610, 987, 1597]);
    while (typeScriptIterator.hasNext()) {
        console.log(typeScriptIterator.next());
    }
    let typeScriptItrableIterator = new TypeScriptIterableIterator([2584, 4181, 6765, 10946]);
    for (let item of typeScriptItrableIterator) {
        console.log(item);
    }
    function* idMaker() {
        let randomChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "A", "B", "C", "D", "E", "F", "G", "H", "I", 0, 1, 2, 3, 4, 5, 6];
        let idString = "";
        let index = 0;
        while (idString.length < 10) {
            let r = Math.round(Math.random() * (randomChars.length - 1));
            let char = randomChars[r];
            idString += char;
            yield char;
        }
    }
    let gen = idMaker();
    for (let item of idMaker()) {
        console.log(item);
    }
});
//# sourceMappingURL=main.js.map