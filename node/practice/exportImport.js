// console.log(process.argv);
// function multiply(a, b) {
//   return a * b;
// }

// function add(a, b) {
//   return a + a;
// }
// module.exports = { multiply, add };

const { multiply, add } = require("./process");

const mul = multiply(78, 89);
console.log(mul);

const sum = add(34, 56);
console.log(sum);
