// console.log("jonas");
// let js = "javscript";
// console.log(js);
// //variable
// firstName = "this is a came case";
// //variables canot begin with numbers
// // 3aaa='xyz' //syntax error
// _xyz = 12;
// $xyz = 13;
// //reserve words are not allowed
// // function=123
// $function = 123; //this way we can use reserved words

// //constants
// const PI = 3.14;

// //data types
// //-primitives-number,string,boolean,null,undefined,symbol,bigint(stack)
// //-object types-every thing else (heap)

// let age = 123;
// let a = 12.4455;
// console.log(typeof a); //number

// console.log(typeof firstName); //string
// isbool = true;
// console.log(typeof isbool); //boolean

// let notknownatPrest;
// console.log(notknownatPrest);
// console.log(typeof notknownatPrest);
// //for th undefined the type and the value points to same thing that is undefined

// let anan = null;
// console.log(anan);
// console.log(typeof anan);
// //type of null is object

// console.log(anan == notknownatPrest); //true
// console.log(anan === notknownatPrest); //false

// //different ways of declaring variables
// let variable; //block scope
// variable = 12;
// variable = 13;
// console.log(variable);

// const variable1 = 23;
// // variable1 = 45;//typeerror
// console.log(variable1);

// //var works similar to let but it is a function scope

// const aval = 23;
// if (aval > 20) {
//   let b = 34;
//   console.log(b);
// }
// // console.log(b);//refernce error

// if (aval > 21) {
//   var b = 35;
//   console.log(b);
// }
// console.log(b); //no error

// console.log("a", "b", 1, 23); //multiple values
// //operators
// //arithmetic
// console.log(2 + 3);
// console.log(3 - 2);
// console.log(5 * 6);
// console.log(6 / 2);
// console.log(6 ** 2);
// console.log(7 % 2);

// //typeof
// console.log(typeof b);

// //assisgnment operators
// let x = 10;
// x += 10;
// x++;
// x *= 10;
// x--;
// console.log(x);

// //+ for string concatenation
// const first = "hello";
// const second = "world";
// console.log(first + second); //helloworld
// console.log(first + " " + second); //hello world

// //comparison operators
// let val1 = 23;
// let val2 = 20;
// let val3 = "23";
// let val4 = 20.0;
// console.log(val1 == val3); //true (only equality check not type check)
// //strict check
// console.log(val1 === val3); //false
// console.log(val4 === val2); //float and integer are equal

// console.log(val1 > val2);
// //template literal
// console.log(`${val1}>${val2}`);
// //take decisions
// if (val1 > val2) {
//   console.log("val1 is greater");
// } else if (val1 == val3) {
//   console.log("equal values");
// } else {
//   console.log("all done");
// }

// //string to number
// console.log(typeof 23);
// console.log(typeof +"23"); //string can be converted to number
// const inputYear = "2002";
// console.log(inputYear + 18); //200218
// console.log(Number(inputYear) + 18); //2020

// console.log(Number("Vanshika")); //NaN
// console.log(typeof NaN); //typeof NaN is number

// //string can also be converted to boolean
// console.log(Boolean("true")); //true
// console.log(Boolean("false")); //true
// console.log(Boolean("")); //false

// //number can be converted to string
// console.log(typeof String(89));
// //can also be converted to boolean values
// console.log(Boolean(0)); //false
// console.log(Boolean(1)); //true
// console.log(Boolean(124543)); //true
// console.log(Boolean(NaN)); //false

// //boolean of undefined and null
// console.log(Boolean(undefined)); //false
// console.log(Boolean(null)); //false

// //boolean to numbers
// console.log(Number(true)); //1
// console.log(Number(false)); //0

// //boolean to strings
// console.log(typeof String(true)); //string

// //conclude-falsy values :0,undefined,null,NaN,''
// //truthy values:'abc',234,empty object {}

// //exception empty object are not falsy values

// console.log(Boolean({})); //true

// console.log("hello " + 23 + "  how are u " + "10");
// console.log("23" - "4");

// //application of boolean conversion
// //conditional statements
// let height = 56;
// if (height) {
//   console.log(true); //if height is truthy value
// } else {
//   console.log(false); //if height is a falsy value
// }
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);
// console.log(!false);
// console.log(!true);

// //prompt function
// a = prompt("what is your age");
// console.log(typeof a);
// //to made calculation on it
// console.log(2024 - Number(a));

// //switch case
// let result;
// alert("Welcome to simple calculator");
// let op1 = Number(prompt("Enter the first number"));
// let op2 = Number(prompt("Enter the second number"));
// let opperation = prompt("What you want to perform (*,/,+.-.**)");
// switch (opperation) {
//   case "+":
//     result = op1 + op2;
//     break;
//   case "-":
//     result = op1 - op2;
//     break;
//   case "/":
//     result = op1 / op2;
//     break;
//   case "*":
//     result = op1 * op2;
//     break;
//   default:
//     alert("you have entered wrong operation");
// }
// alert(result22);

//statement and expression-expression make up the statement
//ternary operator
// const age = 23;
// const ans = age > 18 ? "vote" : "no vote";
// console.log(ans);
// //in template literal
// console.log(
//   `Shallen is ${age} ,therfore she can ${age > 18 ? "vote" : "no vote"}`
// );

//functions

//function declaration
// nameofFunction(); //hoisting

// function nameofFunction() {
//   console.log("this is function declartion");
// }

// nameofFunction();

// //function expression-defining the function as normal variable
// // functionExpression(); reference error
// const functionExpression = function () {
//   console.log("function expression");
// };
// functionExpression();

// //arrow function
// const arrow = () => console.log("this is arrow function");
// arrow();

// //function with default parameter
// const greet = (name = "user") => `hello ${name}`;
// a = greet();
// console.log(a);
// b = greet("vanshika");
// console.log(b);

//function returning another function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
//can be converted to a nested function
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const greetVanshika = greet("good morning");
// greetVanshika("Vanshika");

// greet("good night")("vanshika");
// //function calling another function
// function calculate(a, b) {
//   return a + b;
// }
// function print(a, b) {
//   result = calculate(a, b);
//   console.log(result);
// }
// print(23, 56);

//arrays

//two ways of declaring the arrays

//use the new keyword
// const years = new Array(10, 11, 12, 13);
// console.log(years);
// console.log(typeof years); //arrays are the type of object

// const friends = ["a", "b", "c", "d"];
// console.log(friends);
// //length or number of elemnets in the array
// console.log("length of array is", friends.length);

// //access the array elments
// console.log(friends[0]);
// console.log(friends[-1]); //undefineed
// console.log(friends[friends.length - 1]); //to access the last element of array
// //modify or add elements to the array
// friends[4] = "e";
// console.log(friends);

// // friends = [3, 45, 6]; type error
// //nested array and can strore hetrogeneous values in the array
// const firstArray = [3, 5, 6, 2];
// const secondArray = ["a", "b", firstArray];
// console.log(secondArray); //nested array , array remains seprate

// //basic operations on array
// console.log(friends.push("f")); //push() -insert the elemnet at the end of the array
// console.log(friends.unshift("alpha")); //unshift()-inserting the element at the first of array
// console.log(friends.pop()); //pop()-delete the last element of the array and return the deleted element
// console.log(friends.shift()); //shift()-delete the first element of the and returns it
// console.log(friends.indexOf("b")); //return first index
// console.log(friends.indexOf("f")); //if not return -1
// console.log(friends.includes("a")); //true if element is present
// console.log(friends.includes("alpha")); //else false

// const newArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(newArray.slice(0));
// console.log(newArray.slice(8));
// console.log(newArray.slice(10)); //empty array
// console.log(newArray.slice(2, 4));
// console.log(newArray.slice(-1)); //last element
// console.log(newArray.slice(-1, -4)); //always go towards right not left,empty array
// console.log(newArray.slice(-3, -1));
// console.log(newArray.slice(1, -1));
// console.log(newArray.slice(-3, 8));
// console.log(newArray.slice()); //shallow copy for the array
// //slice() operator does not mutate the array

// //splice() method adds or remove the element from an array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);
// fruits.splice(-1);
// console.log(fruits);
// fruits.splice(2);
// console.log(fruits);
// fruits.splice(2, 4, "Peach", "Strawberry", "Mango");
// console.log(fruits);
// fruits.splice(1, 1);
// console.log(fruits);
// //splie method mutates the original array , alternative toSpliced()
// const fruits2 = fruits.toSpliced(2, 0, "Lemon", "Kiwi"); //at position 2 i added two elements but i donot remove any element
// console.log(fruits, fruits2);

// //reverse method-mutates the original array
// console.log(fruits2.reverse()); //return the reverse of array and mutate it

// //arr2.concat(arr1)
// console.log(fruits.concat(fruits2)); //do not mutate the original array

// //at()
// console.log(fruits.at(-1));
// //works with string also
// const me = "vanshika";
// console.log(me.at(-1));

// //loop through array

// //simple loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// //reverse loop
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }
// //for__of
// for (val of fruits) {
//   console.log(val);
// }
// //reverse loop
// for (val of fruits.reverse()) {
//   console.log(val);
// }
// //forEach()
// newArray.forEach((val, index, array) => {
//   console.log(val * 4, index, array);
// });
// //continue and break do not work with forEach(), it only works with forof and simple for
// //forEach with Maps and Sets
// const fruitArray = fruits.concat(fruits2);
// console.log(fruitArray);

// //remove duplicate elements from the array
// const fruitSet = new Set(fruitArray);
// console.log(fruitSet);

// //forEach() with sets
// fruitSet.forEach((val1, val2, set) => {
//   console.log(val1, val2, set);
// });

// const currencyMap = new Map([
//   ["USD", "US dollars"],
//   ["INR", "Indian Rupee"],
//   ["EURO", "euro"],
// ]);
// console.log(currencyMap);
// //forEach() with map
// currencyMap.forEach((val, key, map) => {
//   console.log(key, val, map);
// });

// //forEach()-does not return any new array

// //array data transformation functions
// //map()-similar to forEach() but written a new array

// const squarred = newArray.map((val) => val ** 2);
// console.log(squarred);

// //filter()-based on certain condition filter out values and return a new array based on certain condition
// const filtered = squarred.filter((val) => {
//   return val % 2 == 0;
// });
// console.log(filtered);
// //alternative to filter -find() which only returns the first true value, not array
// const find = squarred.find((val) => val !== 0 && val % 2 == 0);
// console.log(find);

// //reduce()
// const reduce = filtered.reduce((accumlator, current) => {
//   return accumlator + current;
// }, 0);
// console.log(reduce);

// //sort()
// //mutates the original array,by default ascending order
// //based on ascii value
// console.log(fruits.sort()); //works fine with the string
// const alpha = ["m", "M"];
// console.log(alpha.sort());
// //A-Z--(65-90)
// //a-z--(97-122)
// //thereform 'M'<'m'
// //sorting numbers
// const numbers = [34, 12, 67];
// // console.log(numbers.sort());
// //ascending order
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// //descending order
// numbers.sort((a, b) => b - a);
// console.log(numbers);
// //note -toSorted() and toReverse() does not mutate the original array

// //fill()
// console.log(fruits);
// // fruits.fill("Cherry"); ['Cherry', 'Cherry', 'Cherry', 'Cherry']
// fruits.fill("cherry", 3, 5);
// console.log(fruits);
// //flat()
// const Array2d = [1, 2, 3, [4, 5]];
// console.log(Array2d.flat());

// //findIndex()
// console.log(squarred);
// const index = squarred.findIndex((val) => val != 0);
// console.log(index);

// //array->string-join()
// joinArray = ["v", "a", "n", "s", "h", "i", "k", "a"];
// console.log(joinArray.join()); //by default - comma inserted v,a,n,s,h,i,k,a
// console.log(joinArray.join("")); //vanshika
// console.log(joinArray.join(" ")); //v a n s h i k a
// console.log(joinArray.join("*")); //v*a*n*s*h*i*k*a

//objects

// //creating
// const vanshika = {
//   name: "Vanshika Saxena",
//   age: 22,
//   isGraduate: true,
//   job: "Software Engineer",
//   birth: 2002,
//   death: function () {
//     return 2080 - this.birth;
//   },
// };
// console.log(vanshika);

// const vardaan = new Object();
// console.log(vardaan);

// vardaan.name = "Vardaan Saxena";
// vardaan["age"] = 18;
// vardaan["isGraduate"] = false;
// vardaan.job = "Student";
// console.log(vardaan);

// //accessing values
// console.log(vardaan.job);
// console.log(vardaan["isGraduate"]);

// //mutating
// vanshika["father" + "Name"] = "Rajeev Saxena";
// console.log(vanshika.fatherName);
// //bracket notation allow us the flexibility of working with expressions
// //objects can also have functions attached
// vanshika.calcBirth = function (age) {
//   return 2024 - age;
// };
// console.log(vanshika.calcBirth(22));
// console.log(vanshika["calcBirth"](22));
// console.log(vanshika.death());

//iteration

//create a new array

// const arr1 = [1, 2, 3];
// const newArr = [];

// for (let i = 0; i < arr1.length; i++) {
//   newArr[i] = arr1[i] + 4;
// }
// console.log(newArr);

//DOM MANIPULATION

//SELECTING ,CREATING AND DELETING ELEMENTS

//SELECTING ELEMENTS

// console.log(document);
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// //by tag name
// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementsByTagName("div")[1]);
// //by class name
// console.log(document.getElementsByClassName("parent"));
// document.getElementsByClassName("parent")[0].style.backgroundColor = "red";
// //by id name
// console.log(document.getElementById("btn1"));
// //querySelector
// console.log(document.querySelector(".items")); //first item
// //querySelectorAll()
// console.log(document.querySelectorAll(".items"));

// //CREATE THE ELEMENTS
// const li = document.getElementById("item1");
// let html = "<p>My new paragragh</p>";
// li.insertAdjacentHTML("beforeend", html);

// const table = document.createElement("table");

// const row = table.insertRow();
// const cell1 = row.insertCell();
// const cell2 = row.insertCell();

// cell1.innerHTML = "Cell 1";
// cell2.innerHTML = "Cell 2";

// const row1 = table.insertRow();
// const cell3 = row1.insertCell();
// const cell4 = row1.insertCell();

// cell3.innerHTML = "Cell 3";
// cell4.innerHTML = "Cell 4";

// document.body.append(table);
// document.body.prepend(table);
// document.body.before(table);
// document.body.after(table);
// document.body.appendChild(table); //last child

// //Remove element
// li.remove();
// // document.querySelector("#item1").remove();

// //Style

// document.getElementById("item2").style.backgroundColor = "purple";
// console.log(document.getElementById("item2").style);

// const item = document.getElementById("item3");
// console.log(item.style);
// //getComputedStyle

// const computedStyle = getComputedStyle(item);
// console.log(computedStyle.backgroundColor);

// //attributes
// const button = document.getElementById("btn1");
// console.log(button.href);
// console.log(button.getAttribute("href"));
// button.href = "/mobile";
// console.log(button.href);

// //traversing
// console.log(document);
// console.log(document.firstElementChild);
// console.log(document.firstElementChild.firstElementChild);
// console.log(document.firstElementChild.lastElementChild);
// console.log(document.firstElementChild.lastElementChild.firstElementChild);
// console.log(
//   document.firstElementChild.lastElementChild.firstElementChild.children
// );
// console.log(document.firstChild);
// console.log(document.firstChild.childNodes);
// //childNode,children,firstElementChild,firstChild,lastElementChild,lastChild
// //previousElementSibling,nextElementSibling,previousSibling,nextSibling

// //classes
// //classlist
// console.log(document.querySelector("button").classList);
// //add a class
// document.querySelector("button").classList.add("button-display");
// console.log(document.querySelector("button").classList);
// //remove a class
// document.querySelector("button").classList.remove("button-display");
// console.log(document.querySelector("button").classList);
// //toggle between add and remove
// // document.querySelector("button").classList.toggle("button-display");
// // console.log(document.querySelector("button").classList);
// //if add--->remove it and vice versa

// //contains()--true/false
// console.log(
//   document.querySelector("button").classList.contains("button-display")
// );

// //manipulating the html
// item.innerHTML = "<strong>hello</strong>";
// item.textContent = "<strong>hello</strong>";
// //event listener
// //mouse click event
// const btn = document.getElementById("btn1");
// console.log(btn);
// btn.addEventListener("click", () => {
//   const head = document.getElementById("heading");
//   // console.log("button is clicked");

//   head.textContent = "button is clicked";
// });
// //keypress/keydown/keyup event
// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

// // const dblclickEvent = document.addEventListener("dblclick", () => {
// //   console.log("double clicked");
// // });

// document.ondblclick = () => console.log("double click");

// //remove the event listener
// // document.removeEventListener("dblclick", () => {
// //   console.log("removed");
// // });

//some advance topics

//destructiring of arrays
// const arr = [1, 2, 3];
// const [x, ...rest] = arr;
// console.log(x, rest);
// // const [x, y, z] = arr;
// // console.log(x, y, z);
// const [t, , p, q = 10] = [1, 2, 3];
// console.log(p, q);

// const arr2 = [23, 45];
// let [x, y] = arr2;
// console.log(x, y);
// [x, y] = [y, x];
// console.log(x, y);

// const obj = {
//   name: "xyz",
//   age: 45,
//   married: true,
// };

// const { name: N, age, bro = {} } = obj;
// console.log(N, age, bro);

// let a = 111;
// let b = 112;
// const obj1 = {
//   a: 10,
//   b: 11,
// };
// ({ a, b } = obj1);
// console.log(a);

//looping over objects
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// const entries = Object.entries(obj);
// console.log(entries);

// for (const [key, val] of Object.entries(obj)) {
//   console.log(key, val);
// }

// // const arr = [1, 2, 4, 6];
// // for (const [i, e] of arr.entries()) {
// //   console.log(i, e);
// // }
// // };
// const keys = Object.keys(obj);
// console.log(keys);

// const values = Object.values(obj);
// console.log(values);

//sets

// const orderSet = new Set(["a", "a", "a", "b", "b", "b", "c", "d", "d"]);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has("a"));
// console.log(orderSet.add("e"));
// console.log(orderSet.delete("e"));

//maps
// const rest = new Map();
// console.log(rest);
// console.log(rest.set(0, "hello").set(1, "bye"));
// console.log(rest.get(0));
// console.log(rest.has(0));
// console.log(rest.delete(0));
// console.log(rest.size);

// const question = new Map([
//   [0, true],
//   [1, false],
// ]);
// console.log(...question);
// Creating Dates

// Create a date

// const now = new Date();
// console.log(now);

// console.log(new Date("Aug 02 2020 18:05:41"));
// console.log(new Date("December 24, 2015"));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// // // Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142256980000));

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

// // ///////////////////////////////////////
// // // Operations With Dates
// const future1 = new Date(2037, 10, 19, 15, 23);
// console.log(+future1);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days1);

// // ///////////////////////////////////////
// // // Internationalizing Numbers (Intl)
// const num = 3884764.23;

// const options = {
//   style: "currency",
//   unit: "celsius",
//   currency: "EUR",
//   // useGrouping: false,
// };

// console.log("US:      ", new Intl.NumberFormat("en-US", options).format(num));
// console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
// console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );

// // ///////////////////////////////////////
// // // Timers

// // // setTimeout
// // const ingredients = ['olives', 'spinach'];
// // const pizzaTimer = setTimeout(
// //   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
// //   3000,
// //   ...ingredients
// // );
// // console.log('Waiting...');

// // if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// // // setInterval
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

//prototypal inheritence in javascript

//constructor

// const Person = function (firstName, birthYear) {
//   // console.log(this);
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // console.log(this);
// };
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };
// Person.prototype.species = "Homo";
// const me = new Person("teesha", 2002);
// const me2 = new Person("vanshika", 2002);
// console.log(me instanceof Person);
// me.calcAge();
// console.log(me.__proto__);
// console.log(Person.prototype);
// console.log(me.__proto__ == Person.prototype);
// console.log(Person.prototype.isPrototypeOf(me));
// console.log(me.species);
// console.log(me.hasOwnProperty("species"));
// console.log(me.hasOwnProperty("firstName"));
// console.log(me.__proto__.__proto__);
// console.log(Object.prototype);
// console.log(Person.prototype.constructor);

// //ES6

// class Person {
//   fatherName;
//   static hey() {
//     console.log("hello");
//   }

//   constructor(firstName, lastName, birthYear) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     return 2024 - this.birthYear;
//   }
//   get fatherName() {
//     return this.fatherName;
//   }
//   set fatherName(name) {
//     this.fatherName = name;
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, birthYear, course) {
//     super(firstName, lastName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(
//       `${this.firstName} ${this.lastName} is ${super.calcAge()} doing ${
//         this.course
//       }`
//     );
//   }
// }
// const me = new Person("teesha", "saxena", 2002);
// console.log(Person.prototype.constructor);
// console.log(me.hasOwnProperty("firstName"));
// console.log(me.hasOwnProperty("fatherName"));
// console.log(Person.prototype);
// me.calcAge();
// // console.log(me.fatherName);
// me.fatherName = "rajeev";
// console.log(me.fatherName);
// Person.hey();
// const mine = new Student("vanshika", "saxena", 2002, "datascience");
// mine.introduce();
// //object.create()

//AJAX

// const request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
// request.send();
// request.addEventListener("load", () => {
//   console.log(request.responseText);
//   const data = JSON.parse(request.responseText);
//   console.log(data);
// });
// const request1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(request1);
async function getDoc() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data1 = await data.json();
  console.log(data1);
}

getDoc();
