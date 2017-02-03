var FloatingBehavior = (function () {
    function FloatingBehavior(fish) {
        this.speed = 1;
        this.fish = fish;
        this.startY = this.fish.y;
    }
    FloatingBehavior.prototype.swim = function () {
        this.fish.y += this.speed;
        if (this.fish.y > this.startY + 50 ||
            this.fish.y < this.startY - 50) {
            this.speed *= -1;
        }
    };
    return FloatingBehavior;
}());
var NormalSwimBehavior = (function () {
    function NormalSwimBehavior(fish) {
        this.fish = fish;
    }
    NormalSwimBehavior.prototype.swim = function () {
        this.fish.x -= this.fish.speed;
        this.checkCollision();
    };
    NormalSwimBehavior.prototype.checkCollision = function () {
        if (this.fish.x + this.fish.div.clientWidth > window.innerWidth || this.fish.x < 0) {
            this.fish.speed *= -1;
            this.fish.flip = this.fish.flip == 0 ? 180 : 0;
        }
    };
    return NormalSwimBehavior;
}());
var Bubble = (function () {
    function Bubble() {
        var div = document.createElement("bubble");
        document.body.appendChild(div);
        var startx = (Math.random() * window.innerWidth);
        div.style.left = startx + "px";
        div.style.top = "0px";
    }
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        this.x = 0;
        this.y = 0;
        this.speed = 5;
        this.flip = 0;
        this.createElement();
    }
    Fish.prototype.createElement = function () {
        this.div = document.createElement("fish");
        document.body.appendChild(this.div);
        var startx = (Math.random() * window.innerWidth);
        var starty = (Math.random() * window.innerHeight);
        this.x = startx;
        this.y = starty;
        var color = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate(" + color + "deg)";
        this.div.style.filter = "hue-rotate(" + color + "deg)";
    };
    Fish.prototype.update = function () {
        this.x -= this.speed;
        this.checkCollision();
    };
    Fish.prototype.checkCollision = function () {
        if (this.x + this.div.clientWidth > window.innerWidth || this.x < 0) {
            this.speed *= -1;
            this.flip = this.flip == 0 ? 180 : 0;
        }
    };
    Fish.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotatey(" + this.flip + "deg)";
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.numBubbles = 0;
        this.timer = 0;
        this.normalFish = new Fish();
        requestAnimationFrame(function () { return _this.update(); });
    }
    Game.prototype.update = function () {
        this.normalFish.update();
        if (this.numBubbles < 15 && this.timer % 20 == 0) {
            new Bubble();
            this.numBubbles++;
        }
        this.timer++;
        this.draw();
    };
    Game.prototype.draw = function () {
        var _this = this;
        this.normalFish.draw();
        requestAnimationFrame(function () { return _this.update(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map