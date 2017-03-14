window.addEventListener("load", function() {
    
    // Voorbeeld 1: Basis iterator met IteratorInterface

    let simpleIterator : SimpleIterator = 
        new SimpleIterator([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);

    // Een combinatie van het aanroepen van next() en een while loop 
    // is mogelijk omdat de iterator zelf zijn status behoudt
    console.log(simpleIterator.next()); // return 0
    console.log(simpleIterator.next()); // return 1
    console.log(simpleIterator.next()); // return 1
        

    while(simpleIterator.hasNext()) {   // return 2 t/m 55
        console.log("rest " + simpleIterator.next());
    }


    // Voorbeeld 2: gebruik van TypeScript Iterator

    let typeScriptIterator : TypeScriptIterator = new TypeScriptIterator([89, 144, 233, 377, 610, 987, 1597]);

    while(typeScriptIterator.hasNext()) { // return Object met done en value
        console.log(typeScriptIterator.next());
    }
    // next().value geeft de waarde terug.
    
    // Voorbeeld 3: gebruik van TypeScript IterableIterator

    let typeScriptIterableIterator : TypeScriptIterableIterator = new TypeScriptIterableIterator([2584, 4181, 6765, 10946]);

    // pas als het object de Iterface IterableIterator implementeert
    // is het mogelijk om met een for...of loop door de collectie te lopen.
    for(let item of typeScriptIterableIterator) {
        console.log(item);
        
    }

    // Voorbeeld 4: gebruik van generator

    // Maakt gebruik van een generatorMethod
    let gen : Generator = new Generator();

    for(let item of gen.generatorMethod()) {
        console.log(item);
    }

    console.log(gen.getId());
    
});