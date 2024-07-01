//primitives

//number
let age: number; //not Number, no error but it points to Number object
age = 12;

// age='12'//error

//string
let userName: string;
userName = "Masc";

//boolean
let isInstructor: boolean;
isInstructor = true;

//null
let hobbies: null;
// hobbies='play'//error

//arrays
let hobby: string[];
hobby = ["a", "b", "v"];
// hobby=[3,45] error

//objects
let person: any; //default type -any
person = {
  name: "Max",
  age: 32,
};

let person1: {
  name: string;
  age: number;
};
person1 = {
  name: "yash",
  age: 34,
};
// person1={
//   isemploy:true; not defined therefore error
// }

let people: {
  name: string;
  age: number;
}[];

//type inference
let course = "react";
// course=1234//error - typescript use type inference ,no need to explicitly state type

//type union

let course1: string | number;
course1 = "hello";
course1 = 1234;

//type alias

type Animal = {
  name: string;
};

let animal: Animal;
animal = {
  name: "cat",
};

//function and types
function add(a: number, b: number): number {
  return a + b;
}

function print(value: any) {
  console.log(value); //does not return anything-return void
}
//generics

function insertAtBeginning<t>(arrays: t[], value: t) {
  const newArray = [value, ...arrays];
  return newArray;
}
const demoArray = [1, 2, 3];
const updateArray = insertAtBeginning(demoArray, 7); //because any as a type,not any good typescript support
//runtime error

//class

class Student {
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];
  constructor(
    public first: string,
    public last: string,
    public age: number,
    public courses: string[]
  ) {
    // this.firstName = first;
    // this.lastName = last;
    // this.age = age;
    // this.courses = courses;
  }
  enroll(courseName: string) {
    this.courses.push(courseName);
  }
  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Max", "scgef", 32, ["angular"]);
student.enroll("React");
//by default all the properties are public
student.listCourses(); // no error

interface Human {
  firstName: string;
  age: number;
  greet: () => void;
}
let max: Human;
max = {
  firstName: "Max",
  age: 32,
  greet() {
    console.log("hello");
  },
};
class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log("hello");
  }
}
