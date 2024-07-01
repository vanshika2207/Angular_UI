const arr = [1, 2, 3, 4];

arr.forEach((val) => {
  console.log(val);
});

const arr1 = arr.filter((val) => val % 2 == 0);
console.log(arr1);

const arr2 = arr.find((val) => val % 2 == 0);
console.log(arr2);

//ES6 features

//default function

const greet = function (nameUser = "user") {
  console.log("hello", nameUser);
};
greet();
greet("vanshika");

//object shorthand

const user = "Vanshika";
const userAge = 21;
obj = {
  user,
  age: userAge,
};
console.log(obj);

//object destructuring
const user1 = {
  name: "TIA",
  age: 21,
  occupation: "teacher",
  isMarried: true,
};

const { name: Name, age, salary = [] } = user1;
console.log(Name);
console.log(age);
console.log(salary);

const detail = function ({ name, age, isMarried }) {
  console.log(name);
  console.log(age);
  console.log(isMarried);
};
detail(user1);
