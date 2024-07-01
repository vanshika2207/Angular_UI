//primitives
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//number
var age; //not Number, no error but it points to Number object
age = 12;
// age='12'//error
//string
var userName;
userName = "Masc";
//boolean
var isInstructor;
isInstructor = true;
//null
var hobbies;
// hobbies='play'//error
//arrays
var hobby;
hobby = ["a", "b", "v"];
// hobby=[3,45] error
//objects
var person; //default type -any
person = {
    name: "Max",
    age: 32,
};
var person1;
person1 = {
    name: "yash",
    age: 34,
};
// person1={
//   isemploy:true; not defined therefore error
// }
var people;
//type inference
var course = "react";
// course=1234//error - typescript use type inference ,no need to explicitly state type
//type union
var course1;
course1 = "hello";
course1 = 1234;
var animal;
animal = {
    name: "cat",
};
//function and types
function add(a, b) {
    return a + b;
}
function print(value) {
    console.log(value); //does not return anything-return void
}
//generics
function insertAtBeginning(arrays, value) {
    var newArray = __spreadArray([value], arrays, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updateArray = insertAtBeginning(demoArray, 7); //because any as a type,not any good typescript support
//runtime error
//class
var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];
    function Student(first, last, age, courses) {
        this.first = first;
        this.last = last;
        this.age = age;
        this.courses = courses;
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.courses = courses;
    }
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student("Max", "scgef", 32, ["angular"]);
student.enroll("React");
//by default all the properties are public
student.listCourses(); // no error
var max;
max = {
    firstName: "Max",
    age: 32,
    greet: function () {
        console.log("hello");
    },
};
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function () {
        console.log("hello");
    };
    return Instructor;
}());
