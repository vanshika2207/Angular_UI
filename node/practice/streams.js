// const fs = require("fs");
// const zlib = require("zlib");
// const readableStream = fs.createReadStream("./file1.txt", {
//   encoding: "utf8",
//   highWaterMark: 2,
// });
// const writableStream = fs.createWriteStream("./file2.txt");

// // readableStream.on("data", (chunk) => {
// //   console.log(chunk);
// //   writableStream.write(chunk);
// // });

// // readableStream.pipe(writableStream);

// // const gzip = zlib.createGzip();
// // readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
// readableStream.on("data", (chunk) => {
//   new_chunk = chunk.split("").reverse().join("");
//   writableStream.write(new_chunk);
// });
///////-------------------------------------------------------------------------------------------------

// const fs = require("fs");

// const readableStream = fs.createReadStream("file1.txt", {
//   encoding: "utf8",
// });
// const writableStream = fs.createWriteStream("file2.txt");
// readableStream.pipe(writableStream);

//reabable stream emits-data,error,close,end---pipe(),pause(),resume(),read()
//writable stream-drain,error,finish,close---write(),end(),destroy()

// readableStream.on("data", (chunk) => {
//   // console.log("Received chunk ", chunk);
//   // const data = chunk.toString();
//   const formatted = chunk.toUpperCase();
//   console.log("Data in string format ", formatted);
//   writableStream.write(formatted);
//   writableStream.on("finish", () => {
//     console.log("write operatiom has been completed");
//   });
// });

// writableStream.on("finish", () => {
//   console.log("write operatiom has been completed");
// });

//
