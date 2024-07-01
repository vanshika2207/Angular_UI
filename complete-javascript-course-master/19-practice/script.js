//functions

//function declaration

function print(value) {
  console.log(value);
}
print("hello");

function addSum(a, b) {
  return a + b;
}

const ans = addSum(1, 2);
console.log(ans);

//function expression=anonymous function
const minus = function (a, b) {
  return a - b;
};

console.log(minus(45, 55));

//arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 6));
//function with default values

const greet = (value = "user") => console.log(`good morning ${value}`);
greet();
greet("vanshika");
