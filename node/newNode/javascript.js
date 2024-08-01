//weekly typed language
//object oriented language
//versatile language

//variables-var keyword
var name = "Vanshika";
console.log(name);
var age = 22;
console.log(age);
var hasHobbies = true;
console.log(typeof hasHobbies);

//let and const
let firstName = "Teesha";
const lastName = "Saxena";
//functions

function summarizeUser(userName, userAge, userHobby) {
  return `Name is ${userName} age is ${userAge} and user has Hobbies ${userHobby}`;
}

console.log(summarizeUser(name, age, hasHobbies));
//arrow function
summary = (userName, userAge, userHobby) =>
  `Name is ${userName} age is ${userAge} and user has Hobbies ${userHobby}`;
console.log(summary(name, age, hasHobbies));

//object

const person = {
  name: "Yash",
  age: 17,
  greet() {
    console.log("Hi I am " + this.name);
  },
};
console.log(person.greet());
//arrays
const hobbies = ["Sports", "Cooking"];
for (let hobby of hobbies) {
  console.log(hobby);
}
console.log(hobbies.map((hobby) => `hobby :${hobby}`));
console.log(hobbies);
console.log(hobbies.push("Coding"));

//array and object are reference types
//built in types =primitive types

//rest and spread operator

// const copyArray = hobbies.slice();
const copyArray = [...hobbies]; //spread operator
console.log(copyArray);

const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3, 4));

//destructuring

const printName = ({ name }) => {
  console.log(name);
};
printName(person);

const { vname, vage } = person;
console.log(vage);

const array = [1, 2, 3];
const [a, b, c] = array;
console.log(a, b, c);

//Async code and promises
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done");
  fetchData().then((text) => {
    console.log(text);
    return fetchData();
  });
}, 1000);

console.log("hello");
console.log("hi");
