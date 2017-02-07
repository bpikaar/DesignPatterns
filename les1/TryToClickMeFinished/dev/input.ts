class Input {
    private div: HTMLElement;

    constructor() {
        // Create a new 'div' element
        this.div = document.createElement('div');
        // Append to body
        document.body.appendChild(this.div);

        // Create a new 'label' element
        let label: HTMLElement = document.createElement('label');
        // Set innerHTML of label
        label.innerHTML = "Try to";
        // Append to div
        this.div.appendChild(label);

        // Create a new 'input' element
        let input: HTMLElement = document.createElement('input');
        // Set placeholer of Input
        input.setAttribute("placeholder", "Click me!")
        // Append to div
        this.div.appendChild(input);

        this.positionDiv();

        // Set the width of 'div' 150
        this.div.style.width = "150px";
        // Set the height of 'div' 50
        this.div.style.height= "50px";

        this.div.addEventListener("mouseover", () => this.positionDiv());
    }

    private positionDiv() {
        let startx: number = (Math.random() * window.innerWidth);
        let starty: number = (Math.random() * window.innerHeight);
        
        

        // var in string http://es6-features.org/#StringInterpolation 
        this.div.style.transform = `translate(${startx}px, ${starty}px)`;
    }
}