var Input = (function () {
    function Input() {
        var _this = this;
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
        var label = document.createElement('label');
        label.innerHTML = "Try to";
        this.div.appendChild(label);
        var input = document.createElement('input');
        input.setAttribute("placeholder", "Click me!");
        this.div.appendChild(input);
        this.positionDiv();
        this.div.style.width = "150px";
        this.div.style.height = "50px";
        this.div.addEventListener("mouseover", function () { return _this.positionDiv(); });
    }
    Input.prototype.positionDiv = function () {
        var startx = (Math.random() * window.innerWidth);
        var starty = (Math.random() * window.innerHeight);
        this.div.style.transform = "translate(" + startx + "px, " + starty + "px)";
    };
    return Input;
}());
var Main = (function () {
    function Main() {
        var input = new Input();
    }
    return Main;
}());
window.addEventListener("load", function () {
    new Main();
});
//# sourceMappingURL=main.js.map