var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Species = /** @class */ (function () {
    function Species(animal) {
        this.type = animal.type;
        this.name = animal.name;
        this.color = animal.color;
        this.foot = animal.foot;
    }
    return Species;
}());
var Actions = /** @class */ (function (_super) {
    __extends(Actions, _super);
    function Actions(animal) {
        return _super.call(this, animal) || this;
    }
    // We take photos of all the animals
    Actions.prototype.photos = function () {
        console.log("We can take photos of ".concat(this.type, " ").concat(this.name));
    };
    // Only cats can mew
    Actions.prototype.mew = function () {
        if (this.type === 'cat') {
            console.log("".concat(this.type, " ").concat(this.name, " can mew"));
        }
        else {
            console.log("{this.type} ".concat(this.name, " can't mew"));
        }
    };
    // Only dog can bark
    Actions.prototype.bark = function () {
        if (this.type === 'dog') {
            console.log("".concat(this.type, " ").concat(this.name, " can bark"));
        }
        else {
            console.log("{this.type} ".concat(this.name, " can't bark"));
        }
    };
    // Only bird cvan fly
    Actions.prototype.fly = function () {
        if (this.type === 'bird') {
            console.log("".concat(this.name, " ").concat(this.name, " can fly"));
        }
        else {
            console.log("{this.name} ".concat(this.name, " can't fly"));
        }
    };
    // Only fish can swim
    Actions.prototype.swim = function () {
        if (this.type === 'fish') {
            console.log("".concat(this.name, " ").concat(this.name, " can swim"));
        }
        else {
            console.log("".concat(this.name, " ").concat(this.name, " can't swim"));
        }
    };
    // 
    Actions.prototype.caress = function () {
        if (this.foot === 4) {
            console.log("".concat(this.type, " ").concat(this.name, " can be caress"));
        }
        else {
            console.log("".concat(this.type, " ").concat(this.name, " can't be caress"));
        }
    };
    Actions.prototype.eat = function () {
        if (this.color === 'black') {
            console.log("".concat(this.type, " ").concat(this.name, " can eat"));
        }
        else {
            console.log("".concat(this.type, " ").concat(this.name, " can't eat"));
        }
    };
    return Actions;
}(Species));
