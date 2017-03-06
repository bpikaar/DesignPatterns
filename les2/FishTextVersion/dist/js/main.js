var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by bas on 20-02-17.
 */
var FishBehaviour = (function () {
    function FishBehaviour(fish) {
        this.fish = fish;
    }
    Object.defineProperty(FishBehaviour.prototype, "fish", {
        get: function () {
            return this._fish;
        },
        set: function (value) {
            this._fish = value;
        },
        enumerable: true,
        configurable: true
    });
    return FishBehaviour;
}());
/// <reference path="fishbehaviour.ts" />
var DeadBehaviour = (function (_super) {
    __extends(DeadBehaviour, _super);
    function DeadBehaviour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeadBehaviour.prototype.swim = function () {
        this.fish.message = "dode vis";
    };
    return DeadBehaviour;
}(FishBehaviour));
/**
 * Created by bas on 19-02-17.
 */
var Fish = (function () {
    function Fish() {
        this.fishBehaviour = null;
        this._message = "";
        this.fishBehaviour = new NothingBehaviour(this);
    }
    Object.defineProperty(Fish.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    Fish.prototype.setFishBehaviour = function (fishBehaviour) {
        this.fishBehaviour = fishBehaviour;
    };
    Fish.prototype.swim = function () {
        this.fishBehaviour.swim();
    };
    Fish.prototype.update = function () {
        this.swim();
    };
    Fish.prototype.getHTMLElement = function () {
        var fish = document.createElement("li");
        fish.innerHTML = this.message;
        return fish;
    };
    return Fish;
}());
/**
 * Created by bas on 20-02-17.
 */
/**
 * Created by bas on 20-02-17.
 */
var HealthyAquariumFactory = (function () {
    function HealthyAquariumFactory() {
    }
    // factory method
    HealthyAquariumFactory.prototype.getFish = function () {
        var r = Math.floor(Math.random() * 3);
        var fish = new Fish();
        switch (r) {
            case 0:
                fish.setFishBehaviour(new SatisfiedBehaviour(fish));
                break;
            case 1:
                fish.setFishBehaviour(new HungryBehaviour(fish));
                break;
            case 2:
                fish.setFishBehaviour(new DeadBehaviour(fish));
            default:
                break;
        }
        return fish;
    };
    return HealthyAquariumFactory;
}());
/**
 * Created by bas on 20-02-17.
 */
var HungryBehaviour = (function (_super) {
    __extends(HungryBehaviour, _super);
    function HungryBehaviour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HungryBehaviour.prototype.swim = function () {
        this.fish.message = "hongerige vis";
    };
    return HungryBehaviour;
}(FishBehaviour));
var Main = (function () {
    function Main() {
        var _this = this;
        this.allFish = new Array();
        this.fishFactory = new UnhealthyAquariumFactory();
        console.log("Fish strategies - List version");
        document.addEventListener('keydown', function (e) { return _this.keyboardInput(e); });
    }
    Main.prototype.keyboardInput = function (event) {
        console.log(event.keyCode);
        var fish;
        switch (event.keyCode) {
            case 65:
                // spawn new fish
                this.allFish.push(this.fishFactory.getFish());
                this.update();
                break;
            case 66:
                // spawn new fish
                this.fishFactory = new HealthyAquariumFactory();
                break;
            case 67:
                // spawn new fish
                this.fishFactory = new UnhealthyAquariumFactory();
                break;
        }
    };
    Main.prototype.update = function () {
        var aquarium = document.getElementById('fish');
        aquarium.innerHTML = '';
        for (var _i = 0, _a = this.allFish; _i < _a.length; _i++) {
            var fish = _a[_i];
            fish.update();
            aquarium.appendChild(fish.getHTMLElement());
        }
    };
    return Main;
}());
window.addEventListener("load", function () { return new Main(); });
/**
 * Created by bas on 20-02-17.
 */
var NothingBehaviour = (function (_super) {
    __extends(NothingBehaviour, _super);
    function NothingBehaviour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NothingBehaviour.prototype.swim = function () {
        // doe niks
    };
    return NothingBehaviour;
}(FishBehaviour));
/**
 * Created by bas on 20-02-17.
 */
var SatisfiedBehaviour = (function (_super) {
    __extends(SatisfiedBehaviour, _super);
    function SatisfiedBehaviour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SatisfiedBehaviour.prototype.swim = function () {
        this.fish.message = "tevreden vis";
    };
    return SatisfiedBehaviour;
}(FishBehaviour));
/**
 * Created by bas on 20-02-17.
 */
var UnhealthyAquariumFactory = (function () {
    function UnhealthyAquariumFactory() {
    }
    // factory method
    UnhealthyAquariumFactory.prototype.getFish = function () {
        var r = Math.floor(Math.random() * 3);
        var fish = new Fish();
        switch (r) {
            case 0:
                fish.setFishBehaviour(new DeadBehaviour(fish));
                break;
            case 1:
                fish.setFishBehaviour(new HungryBehaviour(fish));
                break;
            case 2:
                fish.setFishBehaviour(new DeadBehaviour(fish));
            default:
                break;
        }
        return fish;
    };
    return UnhealthyAquariumFactory;
}());
//# sourceMappingURL=main.js.map