window.addEventListener("load", function() {

    let submit = document.getElementById("submit");
    submit.addEventListener("click", handleSubmit);
});

function handleSubmit(e) {
    e.preventDefault();
    let form = document.getElementById("the-form");
    
    let text = form.search.value;
    
    let name = new Name();
    name.text = text;
    
    if(form.Scrambled.checked) {
        name = new ScrambledName(name);
        
    }
    
    if(form.to1337.checked) {
        name = new LeetName(name);
        
    }
    
    if(form.FULLCAPS.checked) {
        name = new CapsName(name);
    }
    
    if(form.XxxX.checked) {
        name = new XxxXName(name);
    }
    
    
    let output = document.getElementById("output");
    output.style.display = "block";
    output.innerText = name.toString();
}