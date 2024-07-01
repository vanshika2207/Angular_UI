//javascript object
const book = {
  title: "Ego is Enemy",
  author: "Ryan Holiday",
};
console.log(book);
console.log(book.title);
console.log(book["author"]);

//convert javascript object to JSON
const bookJSON = JSON.stringify(book);
//write to the json file
const fs = require("fs");
// fs.writeFileSync("data.json", bookJSON);

//read the file
const dataBuffer = fs.readFileSync("data.json");
console.log(dataBuffer);

//two solution
//add option command
const dataUtf8 = fs.readFileSync("data.json", { encoding: "utf8" });
console.log("data encoded", dataUtf8);

//use toString()
const dataString = fs.readFileSync("data.json").toString();
console.log("data encoded by toString() ", dataString);

console.log(bookJSON);
console.log(bookJSON.title);
console.log(bookJSON["author"]);

//parse back to javascript object
const bookObject = JSON.parse(bookJSON);
console.log(bookObject);
console.log(bookObject.title);
console.log(bookObject["author"]);
