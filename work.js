"use strict";
//Typescript Annotation
//Interface
//Classes
//Types Alias
// Generics
Object.defineProperty(exports, "__esModule", { value: true });
var fullName = "jack";
fullName = 'jhon';
var num;
num = 1;
var names = [];
names.push("h1");
function sum(a, b) {
    return a + b;
}
//tuples
var address;
address = [111, "karachi", 31111];
//object
var person;
person = { name: 'jhon' };
//optional property
var anotherperson;
anotherperson = { name: 'jhon', age: 21 };
anotherperson = { name: 'cena' };
function add(a, b) {
    return b ? a + b : a;
}
console.log(add('1', '2'));
console.log(add('1'));
var p;
p = { name: 'jhon', age: 21, id: 1 };
var p1;
p1 = { name: 'jack', age: 2, rollNum: 1 };
var p2;
p1 = { name: 'jack', age: 2, id: 1, rollNum: 1 };
var c;
c = 1;
c = "one";
var n = []; // never arry
//n.push("h1");
//class
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car('Audi');
c1.getBrand();
var CarX = /** @class */ (function () {
    function CarX() {
    }
    CarX.prototype.Constructor = function (brand) {
    };
    CarX.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new CarX('BMW');
c2.getBrand();
