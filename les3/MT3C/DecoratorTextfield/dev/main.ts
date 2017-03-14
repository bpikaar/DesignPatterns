window.addEventListener("load", function() {

    let submit = document.getElementById("submit");
    submit.addEventListener("click", handleSubmit);
});

function handleSubmit(e) {
    e.preventDefault();
    let form = document.getElementById("the-form");
    
    let text = form.search.value;
    
    // Textobject
    var rawString : Txt = new RawString(text);
    
    if(form.lowercase.checked) {
        console.log("Alle karakters naar lowercase");
        rawString = new LowerCase(rawString);
        
    }
    
    if(form.summary.checked) {
        console.log("Alleen de eerste 10 woorden van de string");
        rawString = new Summary(rawString);
    }
    
    if(form.capital.checked) {
        console.log("Na elke punt spatie een hoofdletter");
        rawString = new Capital(rawString);
    }
    
    if(form.reverse.checked) {
        console.log("De tekst achterstevoren.");
        rawString = new Reverse(rawString);
    }

    // student Decorators
    if(form.removevowels.checked) {
        console.log("klinkers verwijderen");
        rawString = new RemoveVowels(rawString);
    }
    
    
    let output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = rawString.getText();
}