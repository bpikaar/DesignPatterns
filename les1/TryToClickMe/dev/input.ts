class Input {

    private div : HTMLElement;

    constructor() {
        // Create a new 'div' element
        this.div = document.createElement('div');
        // Append to body
        document.body.appendChild(this.div);

        // Create a new 'label' element
        let label : HTMLElement = document.createElement('label');
        // Set innerHTML of label
        label.innerHTML = "Try to";
        // Append to this.div
        this.div.appendChild(label);


        // Create a new 'input' element
        let input = document.createElement('input');
        // Set placeholer of Input
        input.setAttribute('placeholder', 'Click me!');
        // Append to this.div
        this.div.appendChild(input);

       this.mouseOverHandler();

        // Set the width of 'this.div' 150
        this.div.style.width = "150px";
        // Set the height of 'this.div' 50
        this.div.style.height = "50px";

        this.div.addEventListener("mouseover", () => this.mouseOverHandler());
    }

    private mouseOverHandler() {
        
        let startx : number = (Math.random() * window.innerWidth);
        let starty : number = (Math.random() * window.innerHeight);
        
        // Position 'this.div' on screen
        this.div.style.transform = `translate(${startx}px, ${starty}px)`;
    }
}





















