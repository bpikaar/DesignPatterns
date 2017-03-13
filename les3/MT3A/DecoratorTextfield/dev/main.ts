/// <reference path="defaultTxt.ts" />


window.addEventListener("load", function() {

    let submit = document.getElementById("submit");
    submit.addEventListener("click", handleSubmit);
});

function handleSubmit(e) {
    e.preventDefault();
    let value : Txt = new DefaultTxt();
    let form = document.getElementById("the-form");

    if(form.lowercase.checked) {
        console.log("Alle karakters naar lowercase");    
        value = new LowercaseTextDecorator(value);
    }
    
    if(form.summary.checked) {
        console.log("Alleen de eerste 10 woorden van de string");
        value = new SummarizeTextDecorator(value);
    }
    
    if(form.capital.checked) {
        console.log("Na elke punt spatie een hoofdletter");
        value = new CapitalizeTextDecorator(value);
    }
    
    if(form.reverse.checked) {
        console.log("De tekst achterstevoren.");
        value = new ReverseTextDecorator(value);
    }

    if(form.navo.checked) {
        console.log("De tekst achterstevoren.");
        value = new NAVOTextDecorator(value);
    }
    
    let output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = value.getText();
}