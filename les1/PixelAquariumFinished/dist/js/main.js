var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FishBehavior = (function () {
    function FishBehavior() {
        this._timer = 0;
        this._behaviorTime = 0;
    }
    FishBehavior.prototype.updateTimer = function () {
        this._timer++;
        if (this._timer > this._behaviorTime)
            this.onTimerFinished();
    };
    return FishBehavior;
}());
var Dead = (function (_super) {
    __extends(Dead, _super);
    function Dead(fish) {
        var _this = _super.call(this) || this;
        _this._speed = 1;
        _this._fish = fish;
        _this._fish.div.style.backgroundImage = "url(images/bones.png)";
        return _this;
    }
    Dead.prototype.updatePosition = function () {
        this._fish.y -= this._speed;
        if (this.checkTop()) {
            this._fish.y = 0;
            this._speed = 0;
        }
    };
    Dead.prototype.checkTop = function () {
        return (this._fish.y < 0);
    };
    Dead.prototype.onTimerFinished = function () {
    };
    return Dead;
}(FishBehavior));
var Hungry = (function (_super) {
    __extends(Hungry, _super);
    function Hungry(fish) {
        var _this = _super.call(this) || this;
        _this.speedX = 5;
        _this.speedY = 0;
        _this._fish = fish;
        _this._behaviorTime = 400;
        _this._fish.div.classList.add('normal-fish');
        return _this;
    }
    Hungry.prototype.updatePosition = function () {
        this.updateTimer();
        this._fish.x -= this.speedX;
        this._fish.y -= this.speedY;
        this.checkCollision();
    };
    Hungry.prototype.checkCollision = function () {
        if (this._fish.x + this._fish.div.clientWidth > window.innerWidth || this._fish.x < 0) {
            this.speedX *= -1;
            this._fish.flip = this._fish.flip == 0 ? 180 : 0;
        }
    };
    Hungry.prototype.onTimerFinished = function () {
        this.die();
    };
    Hungry.prototype.die = function () {
        this._fish.setFishBehavior(new Dead(this._fish));
    };
    return Hungry;
}(FishBehavior));
var Satisfied = (function (_super) {
    __extends(Satisfied, _super);
    function Satisfied(fish) {
        var _this = _super.call(this) || this;
        _this._speed = 1;
        _this._fish = fish;
        _this._behaviorTime = 300;
        _this._startY = _this._fish.y;
        return _this;
    }
    Satisfied.prototype.updatePosition = function () {
        this.updateTimer();
        this._fish.y += this._speed;
        if (this._fish.y > this._startY + 50 ||
            this._fish.y < this._startY - 50) {
            this._speed *= -1;
        }
    };
    Satisfied.prototype.onTimerFinished = function () {
        this.hungry();
    };
    Satisfied.prototype.hungry = function () {
        this._fish.setSwimBehavior(new Hungry(this._fish));
    };
    return Satisfied;
}(FishBehavior));
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
        this.flip = 0;
        this.createElement();
    }
    Fish.prototype.setFishBehavior = function (behavior) {
        this.fishBehavior = behavior;
    };
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
        this.fishBehavior.updatePosition();
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
        this.gameObjects = new Array();
        setInterval(function () { return _this.generateFish(); }, 3000);
        this.bubbleInterval = setInterval(function () { return _this.generateBubble(); }, 500);
        requestAnimationFrame(function () { return _this.update(); });
    }
    Game.prototype.generateFish = function () {
        var behavior;
        var fish = new Fish();
        var random = Math.round(Math.random());
        switch (random) {
            case 0:
                behavior = new Hungry(fish);
                break;
            case 1:
                behavior = new Satisfied(fish);
                break;
        }
        fish.setFishBehavior(behavior);
        this.gameObjects.push(fish);
    };
    Game.prototype.generateBubble = function () {
        if (this.numBubbles > 15)
            clearInterval(this.bubbleInterval);
        new Bubble();
        this.numBubbles++;
    };
    Game.prototype.update = function () {
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.update();
        }
        this.draw();
    };
    Game.prototype.draw = function () {
        var _this = this;
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.draw();
        }
        requestAnimationFrame(function () { return _this.update(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map