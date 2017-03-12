window.addEventListener("load", function() {
    
    // Voorbeeld 1: Basis iterator met IteratorInterface

    let simpleIterator : SimpleIterator = new SimpleIterator([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);


    // Voorbeeld 2: gebruik van TypeScript Iterator

    let typeScriptIterator : TypeScriptIterator = new TypeScriptIterator([89, 144, 233, 377, 610, 987, 1597]);

    
    // Voorbeeld 3: gebruik van TypeScript IterableIterator

    let typeScriptItrableIterator : TypeScriptIterableIterator = new TypeScriptIterableIterator([2584, 4181, 6765, 10946]);


    // Voorbeeld 4: gebruik van generator
    function* idMaker(){
        let randomChars = ["a","b","c","d","e","f","g","h","i","A","B","C","D","E","F","G","H","I", 0, 1, 2, 3, 4, 5, 6];
        let idString = "";
        let index = 0;
        while(idString.length < 10) {
            let r = Math.round(Math.random() * (randomChars.length - 1));
            let char = randomChars[r];
            idString += char;
            yield char;
        }
    }

    let gen = idMaker();

    //console.log(gen.next());
    
    for(let item of idMaker()) {
        console.log(item);
    }
});