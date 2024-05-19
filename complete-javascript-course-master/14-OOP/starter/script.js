// // // 'use strict';
// // // //constructor function
// // // const Person = function (firstName, birthYear) {
// // //   // console.log(this);
// // //   this.firstName = firstName; //instance property
// // //   this.birthYear = birthYear;
// // //   //never usethis
// // //   // this.calcAge = function () {
// // //   //   console.log(2024 - this.birthYear);
// // //   // };
// // // };

// // // //create objects/instances
// // // const vanshika = new Person('Vanshika', 2002);
// // // console.log(vanshika);

// // // console.log(Person.prototype);
// // // Person.prototype.calcAge = function () {
// // //   console.log(2024 - this.birthYear);
// // // };
// // // const vardaan = new Person('Vardaan', 2006);
// // // console.log(vardaan.calcAge());

// // // console.log(vanshika.__proto__);
// // // console.log(vardaan.__proto__ === Person.prototype);

// // // console.log(Person.prototype.isPrototypeOf(Person));
// // // console.log(Person.prototype.isPrototypeOf(vardaan));

// // // //set property on prototype
// // // Person.prototype.species = 'Homo Sapiens';
// // // console.log(vanshika.species);

// // // //check for the properties
// // // console.log(vardaan.hasOwnProperty('firstName'));
// // // console.log(vardaan.hasOwnProperty('species'));

// // // console.log(vardaan.__proto__);
// // // //object prototype
// // // console.log(vardaan.__proto__.__proto__);
// // // console.log(vardaan.__proto__.__proto__.__proto__);

// // // console.dir(Person.prototype.constructor);
// // // console.log(Object.getPrototypeOf(Object));
// // // //array prototype
// // // const arr = [3, 3, 6];
// // // console.log(arr.__proto__);
// // // console.log(arr.__proto__.__proto__);

// // // Array.prototype.unique = function () {
// // //   return [...new Set(this)];
// // // };
// // // console.log(arr.unique());

// // // const h1 = document.querySelector('h1');
// // // console.dir(h1);
// // // console.dir(x => x + 1);

// // // //questions
// // // let obj1 = {
// // //   params: true,
// // // };
// // // function obj2(name) {
// // //   this.name = name;
// // // }
// // // obj2.prototype = obj1;
// // // console.log(obj2.prototype);
// // // let obj = new obj2('New Object');
// // // console.log(obj.name);

// //ES6 CLASSES
// //class expression
// // const PersonCl=class{}
// //classes are like special function

// //class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   //method will be added to .prototype property
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }
// }

// const jessica = new PersonCl('Jessica', 1990);

// console.log(jessica);
// console.log(jessica.calcAge());
// //functions are at prototype level , not manually define prototype
// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log('hello');
// };
// console.log(jessica.greet());

/ /; // const Car = function (make, speed) {
// //   this.speed = speed;
// //   this.make = make;
// // };
// // Car.prototype.accelerate = function () {
// //   this.speed = this.speed + 10;
// //   console.log(this.speed);
// // };
// // Car.prototype.brake = function () {
// //   this.speed = this.speed - 5;
// //   console.log(this.speed);
// // };
// // const car1 = new Car('BMW', 120);
// // const car2 = new Car('Mercedes', 95);
// // console.log(car1.accelerate());
// // console.log(car1.brake());
// // console.log(car1.accelerate());

class Car {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed);
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(this.speed);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new Car('ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
