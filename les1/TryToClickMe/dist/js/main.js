class Input {
    constructor() {
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
        let label = document.createElement('label');
        label.innerHTML = "Try to";
        this.div.appendChild(label);
        let input = document.createElement('input');
        input.setAttribute('placeholder', 'Click me!');
        this.div.appendChild(input);
        this.mouseOverHandler();
        this.div.style.width = "150px";
        this.div.style.height = "50px";
        this.div.addEventListener("mouseover", () => this.mouseOverHandler());
    }
    mouseOverHandler() {
        let startx = (Math.random() * window.innerWidth);
        let starty = (Math.random() * window.innerHeight);
        this.div.style.transform = `translate(${startx}px, ${starty}px)`;
    }
}
class Main {
    constructor() {
        new Input();
    }
}
window.addEventListener("load", function () {
    new Main();
});
//# sourceMappingURL=main.js.map