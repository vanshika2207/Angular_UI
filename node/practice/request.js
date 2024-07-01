const request = require("postman-request");

url = "https://reqres.in/api/users?page=2";
request({ url: url, json: true }, (error, response) => {
  // console.log(response.body);//need to parse to kavaScript object
  // const data = JSON.parse(response.body);
  // console.log(data); have a built in option also
  if (error) {
    console.log("There is a error");
    return;
  }
  console.log(response.statusCode);
  console.log(response.body.data[0]);
});
//-----------callback functions-------------------
// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       lat: 0,
//       log: 0,
//     };
//     callback(data);
//   }, 2000);
// };
// console.log(
//   geocode("bhopal", (bhopalD) => {
//     console.log(bhopalD);
//   })
// );

// const add = (num1, num2, callback) => {
//   setTimeout(() => {
//     const sum = num1 + num2;
//     callback(sum);
//   });
// };
// console.log(
//   add(23, 45, (data) => {
//     console.log(data);
//   })
// );

//--------callback abstraction------------
// const add = (num1, num2, callback) => {
//   setTimeout(() => {
//     const sum = num1 + num2;
//     callback(sum);
//   }, 2000);
// };
// console.log(
//   //here add abstracts away internal sum operation
//   add(23, 45, (data) => {
//     console.log(data);
//   })
// );

//callback hell
// setTimeout(() => {
//   console.log("first");
//   setTimeout(() => {
//     console.log("second");
//   }, 2000);
// }, 2000);

//use promises
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// delay(2000)
//   .then(() => {
//     console.log("first");
//     return delay(2000);
//   })
//   .then(() => {
//     console.log("second");
//   });
