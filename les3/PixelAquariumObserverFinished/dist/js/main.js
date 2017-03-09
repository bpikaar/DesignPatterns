var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aquarium = (function () {
    function Aquarium() {
        this._fishes = new Array();
    }
    Aquarium.prototype.addFish = function (fish) {
        this._fishes.push(fish);
    };
    Aquarium.prototype.addBread = function (bread) {
        this.notifyFish(bread);
    };
    Aquarium.prototype.notifyFish = function (bread) {
        for (var _i = 0, _a = this._fishes; _i < _a.length; _i++) {
            var fish = _a[_i];
            fish.breadAdded(bread);
        }
    };
    return Aquarium;
}());
var SwimBehavior = (function () {
    function SwimBehavior() {
        this.timer = 0;
        this.behaviorTime = 0;
    }
    SwimBehavior.prototype.updateTimer = function () {
        this.timer++;
        if (this.timer > this.behaviorTime)
            this.onTimerFinished();
    };
    SwimBehavior.prototype.breadAdded = function (bread) {
    };
    return SwimBehavior;
}());
var DeadBehavior = (function (_super) {
    __extends(DeadBehavior, _super);
    function DeadBehavior(fish) {
        var _this = _super.call(this) || this;
        _this.speed = 1;
        _this.fish = fish;
        _this.fish.div.style.backgroundImage = "url(images/bones.png)";
        return _this;
    }
    DeadBehavior.prototype.updatePosition = function () {
        this.fish.y -= this.speed;
        if (this.checkTop()) {
            this.fish.y = 0;
            this.speed = 0;
        }
    };
    DeadBehavior.prototype.checkTop = function () {
        return (this.fish.y < 0);
    };
    DeadBehavior.prototype.onTimerFinished = function () {
    };
    return DeadBehavior;
}(SwimBehavior));
var FloatingBehavior = (function (_super) {
    __extends(FloatingBehavior, _super);
    function FloatingBehavior(fish) {
        var _this = _super.call(this) || this;
        _this.speed = 1;
        _this.fish = fish;
        _this.behaviorTime = 300;
        _this.startY = _this.fish.y;
        return _this;
    }
    FloatingBehavior.prototype.updatePosition = function () {
        this.updateTimer();
        this.fish.y += this.speed;
        if (this.fish.y > this.startY + 50 ||
            this.fish.y < this.startY - 50) {
            this.speed *= -1;
        }
    };
    FloatingBehavior.prototype.onTimerFinished = function () {
        this.hungry();
    };
    FloatingBehavior.prototype.hungry = function () {
        this.fish.setSwimBehavior(new SearchFood(this.fish));
    };
    return FloatingBehavior;
}(SwimBehavior));
var SearchFood = (function (_super) {
    __extends(SearchFood, _super);
    function SearchFood(fish) {
        var _this = _super.call(this) || this;
        _this.speedX = 5;
        _this.speedY = 0;
        _this.fish = fish;
        _this.behaviorTime = 400;
        _this.speedX *= _this.fish.flip ? -1 : 1;
        _this.fish.div.classList.add('normal-fish');
        return _this;
    }
    SearchFood.prototype.updatePosition = function () {
        this.updateTimer();
        this.fish.x -= this.speedX;
        this.fish.y -= this.speedY;
        this.checkCollision();
    };
    SearchFood.prototype.breadAdded = function (bread) {
        this.fish.setSwimBehavior(new SwimToBread(this.fish, bread));
    };
    SearchFood.prototype.checkCollision = function () {
        if (this.fish.x + this.fish.div.clientWidth > window.innerWidth || this.fish.x < 0) {
            this.speedX *= -1;
            this.fish.flipFish();
        }
    };
    SearchFood.prototype.onTimerFinished = function () {
        this.die();
    };
    SearchFood.prototype.die = function () {
        this.fish.setSwimBehavior(new DeadBehavior(this.fish));
    };
    return SearchFood;
}(SwimBehavior));
var SwimToBread = (function (_super) {
    __extends(SwimToBread, _super);
    function SwimToBread(fish, bread) {
        var _this = _super.call(this) || this;
        _this.speedX = 5;
        _this.speedY = 0;
        _this.fish = fish;
        _this.bread = bread;
        _this.behaviorTime = 400;
        _this.fish.div.classList.add('normal-fish');
        return _this;
    }
    SwimToBread.prototype.updatePosition = function () {
        this.updateTimer();
        this.fish.x -= this.speedX;
        this.fish.y -= this.speedY;
        var lengthX = this.fish.x - this.bread.x;
        var lengthY = this.fish.y - this.bread.y;
        var lengthXY = Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2));
        this.speedX = lengthX / lengthXY;
        this.speedY = lengthY / lengthXY;
        if (this.bread.x - this.fish.x < 0)
            this.fish.flip = 0;
        else
            this.fish.flip = 180;
        this.checkCollision();
    };
    SwimToBread.prototype.checkCollision = function () {
        var lengthX = this.fish.x - this.bread.x;
        var lengthY = this.fish.y - this.bread.y;
        var lengthXY = Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2));
        if (lengthXY < 10)
            this.eatBread();
    };
    SwimToBread.prototype.eatBread = function () {
        this.fish.setSwimBehavior(new FloatingBehavior(this.fish));
    };
    SwimToBread.prototype.onTimerFinished = function () {
        this.die();
    };
    SwimToBread.prototype.die = function () {
        this.fish.setSwimBehavior(new DeadBehavior(this.fish));
    };
    return SwimToBread;
}(SwimBehavior));
var Bread = (function () {
    function Bread(mouseX, mouseY) {
        this.x = 0;
        this.y = 0;
        this.x = mouseX;
        this.y = mouseY;
        this.div = document.createElement('bread');
        document.body.appendChild(this.div);
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    Bread.prototype.remove = function () {
        this.div.remove();
    };
    return Bread;
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
        this.flip = 0;
        this.createElement();
    }
    Fish.prototype.setSwimBehavior = function (behavior) {
        this.swimBehavior = behavior;
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
        this.swimBehavior.updatePosition();
    };
    Fish.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotatey(" + this.flip + "deg)";
    };
    Fish.prototype.breadAdded = function (bread) {
        this.swimBehavior.breadAdded(bread);
    };
    Fish.prototype.flipFish = function () {
        this.flip = this.flip == 0 ? 180 : 0;
    };
    return Fish;
}());
var FishGenerator = (function () {
    function FishGenerator() {
    }
    FishGenerator.instance = function () {
        if (this._instance == null)
            this._instance = new FishGenerator();
        return this._instance;
    };
    FishGenerator.prototype.newFish = function () {
        var behavior;
        var fish = new Fish();
        behavior = Math.random() < 0.5 ?
            new SearchFood(fish) :
            new FloatingBehavior(fish);
        fish.setSwimBehavior(behavior);
        return fish;
    };
    return FishGenerator;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.numBubbles = 0;
        this.aquarium = new Aquarium();
        this.gameObjects = new Array();
        setInterval(function () { return _this.generateFish(); }, 3000);
        this.bubbleInterval = setInterval(function () { return _this.generateBubble(); }, 500);
        document.addEventListener("click", function (e) { return _this.addBread(e); });
        requestAnimationFrame(function () { return _this.update(); });
    }
    Game.prototype.generateFish = function () {
        var fish = FishGenerator.instance().newFish();
        this.aquarium.addFish(fish);
        this.gameObjects.push(fish);
    };
    Game.prototype.generateBubble = function () {
        if (this.numBubbles > 15)
            clearInterval(this.bubbleInterval);
        new Bubble();
        this.numBubbles++;
    };
    Game.prototype.addBread = function (e) {
        var bread = new Bread(e.clientX, e.clientY);
        this.aquarium.addBread(bread);
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