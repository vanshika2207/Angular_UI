//global module

// console.log("hello world");

//node built in modules
//os

// let os = require("os");
// console.log("platform", os.platform());
// console.log("version", os.version());
// console.log("hostname", os.hostname());
// console.log("machine", os.machine());
// console.log("release", os.release());
// console.log("uptime", os.uptime());
// console.log("type", os.type());
// console.log("userinfo", os.userInfo());
// console.log("homedir", os.homedir());

//fs -file system module
//write
let fs = require("fs");
//write file syncronously
// fs.writeFileSync("demo.txt", "Hello");

//write file asynchronously
// fs.writeFile("demo1.txt", "How are you", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//read

//read file synchronously
// const data = fs.readFileSync("demo.txt", "utf8");
// console.log(data);

//read file asynchronously
// const data = fs.readFile("demo1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("error", err);
//     return;
//   }
//   console.log(data);
// });

//update
// fs.appendFileSync("demo.txt", "i am good");
// fs.appendFileSync("demo1.txt", "i am good", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//delete
// fs.unlinkSync("demo1.txt");
// fs.unlink("demo2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//rename
// fs.renameSync("demo.txt", "new.txt");

// fs.rename("demo1.txt", "new2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.stat();
// const info = fs.statSync("demo1.txt");
// console.log(info);

// fs.stat("demo1.txt", (err, stats) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(stats);
// });

//copy file
// fs.copyFileSync("demo1.txt", "demo2.txt");

//to check if a file exist
// const isFile = fs.existsSync("demmo1.txt");
// console.log(isFile);

//to see users having permission
// const a = fs.access("demo1.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });
// console.log(a);

// fs.mkdirSync("teesha");
// fs.mkdir("yash", (err, path) => {
//   console.log(path);
// });

// fs.rmdirSync("teesha");
// fs.rmdirSync("yash");

//reverse the content of the file

readStream = fs.createReadStream("file1.txt", "utf8");
writeStream = fs.createWriteStream("file2.txt");

readStream.on("data", (data) => {
  const newdata = data.split("").reverse().join("");
  writeStream.write(newdata);
});
