console.log(__dirname); //till directory
console.log(__filename); //till file

//path module

const path = require("path");

console.log(path.join());
const joinedPath = path.join("fol1", "practice", "..", "", "file1.txt");
console.log(joinedPath);

const path1 = path.join(__dirname);
console.log(path1);
