const { MongoClient } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "vanshika-manager";

// MongoClient.connect(connectionURL, (error, client) => {
//   if (error) {
//     console.log("Error");
//     return;
//   }
//   const db = db.client(databaseName);
//   db.collection("hospital").insertOne({}, (error, result) => {
//     if (error) {
//       console.log("error");
//     }
//     console.log(result.ops);
//   });
// });

//promise chaining

// MongoClient.connect(connectionURL)
//   .then(
//     (client) => {
//       console.log("connected to db");
//       const db = db.client(databaseName);
//       return db
//         .collection("users")
//         .insertOne({})
//         .then((result) => client);
//     },
//     (error) => {
//       console.log("error connecting to db");
//     }
//   )
//   .catch((error) => {
//     console.log("error");
//   });

//promises

const doWorkCallback = (callback) => {
  setTimeout(() => {
    callback("this is error", undefined);
    callback("undefined", "success");
  }, 2000);
};
doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});

const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("good");
    reject("bad");
  }, 2000);
});

doWorkPromise
  .then(
    (result) => {
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  )
  .catch((error) => {
    console.log(error);
  });
