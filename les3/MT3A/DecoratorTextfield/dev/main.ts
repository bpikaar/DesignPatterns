/// <reference path="decorators/ConcreteDecorator.ts" />
/// <reference path="decorators/ReverseTextDecorator.ts" />
/// <reference path="decorators/RainbowifyDecorator.ts" />

window.addEventListener("load", function() {
    let submit = document.getElementById("submit");
    submit.addEventListener("click", handleSubmit);
});

function handleSubmit(e) {
    e.preventDefault();
    let form: any = document.getElementById("the-form");

    let text = form.search.value,
        output_text = ""

    if(form.lowercase.checked) {
        output_text += new ConcreteDecorator(
            new LowercaseDecorator(text)
        ).getText();
    }

    if(form.summary.checked) {
        output_text += new ConcreteDecorator(
            new SummeryDecorator(text)
        ).getText();
    }

    if(form.capital.checked) {
        output_text += new ConcreteDecorator(
            new CapitalDecorator(text)
        ).getText();
    }

    if(form.reverse.checked) {
        output_text += new ConcreteDecorator(
            new ReverseTextDecorator(text)
        ).getText();
    }

    if(form.emojify.checked) {
        output_text += new ConcreteDecorator(
            new EmojiDecorator(text)
        ).getText();
    }
    
    if(form.rainbowify.checked) {
        output_text += new ConcreteDecorator(
            new RainbowifyDecorator(text, form.rainbowify_animated.value == "yes")
        ).getText();
    }

    let output = document.getElementById("output");
    output.style.display = "block";

    output.innerHTML = output_text;
}