console.log("hello world");

//primitive types

//this is boolean type
let isPresent: boolean = false;

//number type
let fact: number = 123;

//string type
let myName: string = "vanshika";

//undefined
let unknown: undefined = undefined;

//null
let nothing: null = null;

//array
let arr1: Array<number> = [1, 2, 3];
//array shorthand
let arr2: number[] = [23, 45, 67];
//can be of any length , but type should be number
//array of fixed length=tuple
let tuple: [number, number] = [0, 0];
tuple = [1, 34]; //no error
// tuple=[2,5,6] //an error

//generic type

class queue<T> {
  private data: Array<T> = [];
}

//objects
let intro: {
  name: string;
  age: number;
} = {
  name: "Vanshika",
  age: 21,
};

//type alias for reusable type also
type person = { name: string; age: number; isJob: boolean };
let vanshika: person = {
  name: "vanshika",
  age: 21,
  isJob: true,
};

//const declaration
const vardaan: person = {
  name: "vardaan",
  age: 17,
  isJob: true,
};
// vardaan = {
//   name: "vardaan",
//   age: 17,
//   isJob: false,
// };
vardaan.isJob = false;

//functions

function addNum(a: number, b: number): number {
  return a + b;
}

function printMessage(): void {
  console.log("hello");
}

function show(...value: any[]) {
  for (let x of value) {
    console.log(x);
  }
}

//type alias with functions

type subNum = (num1: number, num2: number) => number;

let sub: subNum;

sub = (num1, num2) => num1 - num2;
/**let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    let line=data.split("\n");
    const searchAuthor=line[1]
     const dataJSON=JSON.parse(line[0])
    let  isavailable=false
     type book={title:string,authorName:string,publishedDate:string,subDescription:string,likes:number}
     for (let data of dataJSON){
         if(data.authorName===searchAuthor){
             isavailable=true;
             let  final:book={
                 title:data.title,
                 authorName:data.authorName,
                 publishedDate:data.publishedDate,
                 subDescription:data.subDescription,
                 likes:data.likes
             }
             console.log(JSON.stringify(final))
         }
     
     }
    //Fill your code here
    if(isavailable===false){
    console.log(`No books available for the authorname : ${searchAuthor}.`)
}
    let require: any;
let fs = require("fs");

fs.readFile("input.txt", "utf-8", function (err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Abstract class definition
    abstract class TaxCalculator {
        tax: number;
        
        constructor(tax: number) {
            this.tax = tax;
        }

        abstract calculateTax(): void;
    }

    // Product class definition
    class Product extends TaxCalculator {
        name: string;
        brand: string;
        price: number;

        constructor(name: string, brand: string, price: number, tax: number) {
            super(tax);
            this.name = name;
            this.brand = brand;
            this.price = price;
        }

        calculateTax(): number {
            return this.price + (this.price * this.tax) / 100;
        }
    }

    // Parsing the input data
    const [nameStr, brandStr, priceStr, taxStr] = data.split(',');

    const name = nameStr.trim();
    const brand = brandStr.trim();
    const price = parseFloat(priceStr.trim());
    const tax = parseFloat(taxStr.trim());

    // Creating an instance of Product and calculating the total price
    const product = new Product(name, brand, price, tax);
    const totalPrice = product.calculateTax();

    console.log(`Total price of ${name} ${brand} is ${totalPrice}`);
});


})
 */
//structural typing
type user = { id: string };
type product = { id: string };
let User: user = { id: "abc" };
let Product: product = { id: "edb" };
User = Product;
Product = User;

type Point2d = { x: number; y: number };
type Point3d = { x: number; y: number; z: number };
let point2d: Point2d = { x: 0, y: 0 };
let point3d: Point3d = { x: 0, y: 0, z: 0 };

point2d = point3d;
// point3d=point2d missing info

//classes
class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  public move(distance: number): void {
    console.log(`${this.name} move ${distance} m`);
  }
}
class Bird extends Animal {
  constructor(name: string) {
    super(name);
  }
  fly(distance: number): void {
    console.log(`${this.name} flys ${distance}`);
  }
}
//any
let exampleAny: any;
exampleAny = 123;
exampleAny = "hello";
exampleAny.allows.anythin.you.can.imagine();

//unknown
let exampleunknown: unknown;
exampleAny = 123;
exampleAny = "hello";
// exampleunknown.allows.anythin.you.can.imagine();

//readonly
type p = {
  readonly x: number;
};
const you: p = { x: 0 };
//  you.x=5

//type union
let anything: string | number;
//literal string
let something: "vanshika" | "saxena";
