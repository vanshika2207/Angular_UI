"use strict";
// let message: string = "Hello world!";
// message += "again";
// console.log(message);
// //primitive types
// let isPresent: boolean = false;
// let magic: number = 56.5;
// let hello: string = "world";
// let undefined1: undefined = undefined;
// let notPresent: null = null;
// //regular expression
// let regex: RegExp = new RegExp("ab+c");
// //arrays
// let array: Array<number> = [12, 34, 56];
// //shorthand
// let array2: number[] = [1, 2, 3];
// array2 = [5, 6, 78, 6];
// //tuple -fixed array
// let tuple: [number, string, number, boolean] = [5, "a", 7, true];
// //objects
// let center: { x: number; y: number } = {
//   x: 0,
//   y: 0,
// };
// //with type alias
// type Point = { x: number; y: number };
// let unit: Point = {
//   x: 0,
//   y: 0,
// };
// //with const
// const point: Point = { x: 23, y: 56 };
// // point = { x: 24, y: 56 }; cannot do
// //functions
// type Add = (a: number, b: number) => number;
// let add: Add;
// add = function (a: number, b: number): number {
//   return a + b;
// };
// function log(message: string): void {
//   console.log(message);
// }
// function sum1(...values: number[]) {
//   return values;
// }
// //structural typing
// type Point2d = { x: number; y: number };
// type Point3d = { x: number; y: number; z: number };
// let point2D: Point2d = { x: 0, y: 10 };
// let point3D: Point3d = { x: 0, y: 10, z: 20 };
// //extra info
// point2D = point3D;
// function takesPoint2D(point: Point2d) {}
// takesPoint2D(point3D);
// // //ERRor missing info
// // point3D = point2D;
// // function takesPoint3D(point: Point3d) {}
// // takesPoint3D(point2D);
// //classes
// class Animal {
//   protected name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   public move(distanceInMeters: number): void {
//     console.log(`${this.name} moved ${distanceInMeters}m`);
//   }
// }
// let cat = new Animal("cat");
// cat.move(10);
// // cat.name = "dog";
// //inheritence
// class Bird extends Animal {
//   fly(distanceInMeters: number) {
//     console.log(`${this.name} flew ${distanceInMeters}m`);
//   }
// }
// //generic class
// class Queue<T> {
//   private data: T[] = [];
//   push(item: T): void {
//     this.data.push(item);
//   }
//   pop(): T | undefined {
//     return this.data.shift();
//   }
// }
// const queue = new Queue<number>();
// queue.push(345);
// // queue.push('dg')
// //special type- any and unknown
// let exampleAny: any;
// let exampleUnknown: unknown;
// //any
// exampleAny = 123;
// exampleAny = "Hello";
// //unknown
// exampleUnknown = 123;
// exampleUnknown = "World";
// //any
// exampleAny.allows.anything.you.can.imagine();
// let anySetBool: boolean = exampleAny;
// //unknown
// if (typeof exampleUnknown == "string") {
//   exampleUnknown.trim();
// }
// if (typeof exampleUnknown == "boolean") {
//   let unknownSetBool: boolean = exampleUnknown;
// }
//async await
var main = function () {
    setTimeout(function () {
        console.log("1sec");
        setTimeout(function () {
            console.log("2sec");
            setTimeout(function () {
                console.log("3 sec");
            }, 1000);
        }, 1000);
    }, 1000);
};
