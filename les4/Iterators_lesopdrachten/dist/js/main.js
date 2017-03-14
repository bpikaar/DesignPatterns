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
class Generator {
    constructor() {
        this.idString = "";
        this.randomChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "A", "B", "C", "D", "E", "F", "G", "H", "I", 0, 1, 2, 3, 4, 5, 6];
    }
    *generatorMethod() {
        let index = 0;
        while (this.idString.length < 10) {
            let r = Math.round(Math.random() * (this.randomChars.length - 1));
            let char = this.randomChars[r];
            this.idString += char;
            yield char;
        }
    }
    getId() {
        return this.idString;
    }
}
window.addEventListener("load", function () {
    let simpleIterator = new SimpleIterator([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    console.log(simpleIterator.next());
    console.log(simpleIterator.next());
    console.log(simpleIterator.next());
    while (simpleIterator.hasNext()) {
        console.log("rest " + simpleIterator.next());
    }
    let typeScriptIterator = new TypeScriptIterator([89, 144, 233, 377, 610, 987, 1597]);
    while (typeScriptIterator.hasNext()) {
        console.log(typeScriptIterator.next());
    }
    let typeScriptIterableIterator = new TypeScriptIterableIterator([2584, 4181, 6765, 10946]);
    for (let item of typeScriptIterableIterator) {
        console.log(item);
    }
    let gen = new Generator();
    for (let item of gen.generatorMethod()) {
        console.log(item);
    }
    console.log(gen.getId());
});
//# sourceMappingURL=main.js.map