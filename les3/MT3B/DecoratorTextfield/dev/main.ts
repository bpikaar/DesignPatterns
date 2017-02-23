window.addEventListener("load", function() {

    let submit = document.getElementById("submit");
    submit.addEventListener("click", handleSubmit);
});

function handleSubmit(e) {
    e.preventDefault();
    let form = document.getElementById("the-form");
    
    let text = form.search.value;
    
    // Textobject
    
    if(form.lowercase.checked) {
        console.log("Alle karakters naar lowercase");
        
    }
    
    if(form.summary.checked) {
        console.log("Alleen de eerste 10 woorden van de string");
        
    }
    
    if(form.capital.checked) {
        console.log("Na elke punt spatie een hoofdletter");
        
    }
    
    if(form.reverse.checked) {
        console.log("De tekst achterstevoren.");
        
    }
    
    
    let output = document.getElementById("output");
    output.style.display = "block";
    //output.innerHTML = 
}