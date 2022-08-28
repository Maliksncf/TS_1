"use strict";
class Species {
    constructor(animal) {
        this.type = animal.type;
        this.name = animal.name;
        this.color = animal.color;
        this.foot = animal.foot;
    }
}
class Actions extends Species {
    constructor(animal) {
        super(animal);
    }
    // We take photos of all the animals
    photos() {
        console.log(`We can take photos of ${this.type} ${this.name}`);
    }
    // Only cats can mew
    mew() {
        if (this.type === 'cat') {
            console.log(`${this.type} ${this.name} can mew`);
        }
        else {
            console.log(`{this.type} ${this.name} can't mew`);
        }
    }
    // Only dog can bark
    bark() {
        if (this.type === 'dog') {
            console.log(`${this.type} ${this.name} can bark`);
        }
        else {
            console.log(`{this.type} ${this.name} can't bark`);
        }
    }
    // Only bird cvan fly
    fly() {
        if (this.type === 'bird') {
            console.log(`${this.name} ${this.name} can fly`);
        }
        else {
            console.log(`{this.name} ${this.name} can't fly`);
        }
    }
    // Only fish can swim
    swim() {
        if (this.type === 'fish') {
            console.log(`${this.name} ${this.name} can swim`);
        }
        else {
            console.log(`${this.name} ${this.name} can't swim`);
        }
    }
    // 
    caress() {
        if (this.foot === 4) {
            console.log(`${this.type} ${this.name} can be caress`);
        }
        else {
            console.log(`${this.type} ${this.name} can't be caress`);
        }
    }
    eat() {
        if (this.color === 'black') {
            console.log(`${this.type} ${this.name} can eat`);
        }
        else {
            console.log(`${this.type} ${this.name} can't eat`);
        }
    }
}
