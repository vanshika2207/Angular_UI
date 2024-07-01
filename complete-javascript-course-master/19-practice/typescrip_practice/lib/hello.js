"use strict";
console.log("hello world");
//primitive types
//this is boolean type
let isPresent = false;
//number type
let fact = 123;
//string type
let myName = "vanshika";
//undefined
let unknown = undefined;
//null
let nothing = null;
//array
let arr1 = [1, 2, 3];
//array shorthand
let arr2 = [23, 45, 67];
//can be of any length , but type should be number
//array of fixed length=tuple
let tuple = [0, 0];
tuple = [1, 34]; //no error
// tuple=[2,5,6] //an error
//generic type
class queue {
    constructor() {
        this.data = [];
    }
}
//objects
let intro = {
    name: "Vanshika",
    age: 21,
};
let vanshika = {
    name: "vanshika",
    age: 21,
    isJob: true,
};
//const declaration
const vardaan = {
    name: "vardaan",
    age: 17,
    isJob: true,
};
// vardaan = {
//   name: "vardaan",
//   age: 17,
//   isJob: false,
// };
vardaan.isJob = false;
//functions
function addNum(a, b) {
    return a + b;
}
function printMessage() {
    console.log("hello");
}
function show(...value) {
    for (let x of value) {
        console.log(x);
    }
}
let sub;
sub = (num1, num2) => num1 - num2;
let User = { id: "abc" };
let Product = { id: "edb" };
User = Product;
Product = User;
let point2d = { x: 0, y: 0 };
let point3d = { x: 0, y: 0, z: 0 };
point2d = point3d;
// point3d=point2d missing info
//classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(`${this.name} move ${distance} m`);
    }
}
class Bird extends Animal {
    constructor(name) {
        super(name);
    }
    fly(distance) {
        console.log(`${this.name} flys ${distance}`);
    }
}
//any
let exampleAny;
exampleAny = 123;
exampleAny = "hello";
exampleAny.allows.anythin.you.can.imagine();
//unknown
let exampleunknown;
exampleAny = 123;
exampleAny = "hello";
const you = { x: 0 };
//  you.x=5
//type union
let anything;
//literal string
let something;
