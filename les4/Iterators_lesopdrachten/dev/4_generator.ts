class Generator {

    private idString : string = "";
    private randomChars : (string|number)[] = 
        ["a","b","c","d","e","f","g","h","i","A","B","C","D","E","F","G","H","I", 0, 1, 2, 3, 4, 5, 6];
    
    // Let hier op de notatie van het "*" voor de functienaam
    // Hierdoor wordt de method een generatorMethod
    public *generatorMethod() : IterableIterator<Object> {

        let index = 0;

        while(this.idString.length < 10) {
            let r = Math.round(Math.random() * (this.randomChars.length - 1));
            let char = this.randomChars[r];
            this.idString += char;
            yield char; // yield retouneert een value een onthoudt de status van de loop
        }
    }

    public getId() : string {
        return this.idString;
    }
}