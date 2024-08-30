const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log(this);
};

const me = new Person("vanshika", 2002);
const me1 = new Person("teesha", 2002);

console.log(me instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
console.log(Person.prototype);
me.calcAge();

console.log(me.__proto__);
console.log(me.__proto__ === Person.prototype);

Person.prototype.species = "Homo sapieins";
console.log(me.__proto__);

console.log(me.hasOwnProperty("species")); //false
console.log(me.hasOwnProperty("firstName")); //true

console.log(me.__proto__.__proto__);
console.log(me.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 6, 9, 6];
console.log(arr.__proto__);
console.log(Array.prototype.constructor);

//ES6 =2015
class PersonCl {
  lastName;
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  get info() {
    return `Hi ${this.firstName} ${this.lastName}`;
  }
  set lastName(lastName) {
    this.lastName = lastName;
  }
  static greet() {
    return "Hello";
  }
}

const me3 = new PersonCl("vanshika", 2002);
console.log(me3.__proto__);
console.log(PersonCl.prototype.constructor);
console.log(me3.hasOwnProperty("firstName"));
console.log(me3.hasOwnProperty("lastName"));
me3.lastName = "saxena";
console.log(me3.info);
console.log(PersonCl.greet());
console.log(me3.__proto__);
