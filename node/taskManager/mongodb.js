const { MongoClient, ObjectId } = require("mongodb"); //destructing objects

const connectionURL = "mongodb://localhost:27017";
const dataBaseName = "task-manager";

MongoClient.connect(connectionURL)
  .then(
    (client) => {
      console.log("Connection started");
      const db = client.db(dataBaseName);
      return db
        .collection("users")
        .findOne({ _id: new ObjectId("6656e948c86bfd9a73db7577") })
        .then((result) => {
          console.log(result);
          return db
            .collection("users")
            .countDocuments({ age: 22 })
            .then(
              (result) => {
                console.log(result);
                return client;
              },

              (error) => {
                console.log(error);
                return client;
              }
            );
        });
    },
    (error) => {
      console.log("Error finding the document");
      return client;
    }
  )

  .then((client) => {
    return client.close().then(() => {
      console.log("Data base connection successfully terminated");
    });
  })

  .catch((error) => {
    console.log("Error connecting to the database", error);
  });
