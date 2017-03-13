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
        rawString = new LowerCase(rawString);
    }
    
    if(form.summary.checked) {
        rawString = new Summary(rawString);
    }
    
    if(form.capital.checked) {
        rawString = new Capital(rawString);
    }
    
    if(form.reverse.checked) {
        rawString = new Reverse(rawString);
    }

    // Tim van de Vathorst
    if(form.emojify.checked) {
         rawString = new EmojiDecorator(rawString);
    }
    
    // Wesley Kroon
    if(form.removeSwear.checked) {
         rawString = new AntiSwearDectorater(rawString);
    }

    // Jens van de Graaf
    if(form.NAVO.checked) {
         rawString = new NAVOTextDecorator(rawString);
    }
    
    // Wesley Cheung
    if(form.numberfy.checked) {
         rawString = new NumberfyTextDecorator(rawString);
    }

    let output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = rawString.getText();
}