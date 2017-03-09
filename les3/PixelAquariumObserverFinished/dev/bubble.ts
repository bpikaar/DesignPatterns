class Bubble {
    constructor() {
        let div:HTMLElement = document.createElement("bubble");
        document.body.appendChild(div);
  
        let startx:number = (Math.random() * window.innerWidth);
                   
        div.style.left = startx + "px";
        div.style.top = "0px";
    }
}