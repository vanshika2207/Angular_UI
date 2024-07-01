const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "vanshika-manager";

async function connectToDatabase() {
  let client;

  try {
    client = await MongoClient.connect(connectionURL);

    console.log("Database connection established");

    const db = client.db(databaseName);

    // Insert one document

    // const insertOneResult = await db.collection("information").insertOne({
    //   name: "Vanshika",
    //   age: 21,
    // });
    // console.log("Inserted document:", insertOneResult.ops);

    // Insert many documents

    // const insertManyResult = await db.collection("information").insertMany([
    //   { name: "Vardaan", age: 17 },
    //   { name: "Deepti", age: 47 },
    //   { name: "Rajeev", age: 53 },
    // ]);
    // console.log("Inserted documents:", insertManyResult.ops);

    //retrieve the values
    // const findResult = await db
    //   .collection("information")
    //   .find({ name: "Vanshika" })
    //   .toArray();
    // const findResult = await db
    //   .collection("information")
    //   .countDocuments({ name: "Vanshika" });
    // console.log(findResult);

    // const updateResult = await db
    //   .collection("information")
    //   .updateOne({ name: "Vanshika" }, { $set: { name: "Teesha" } });
    // const updateResult = await db
    //   .collection("information")
    //   .findOneAndUpdate({ name: "Teesha" }, { $set: { name: "Vanshika" } });
    // console.log(updateResult);
    const deleteResult = await db
      .collection("information")
      .findOneAndDelete({ name: "Vardaan" });
    console.log(deleteResult);
  } catch (error) {
    console.error(
      "Error connecting to the database or performing operations",
      error
    );
  } finally {
    if (client) {
      await client.close();
      console.log("Database connection closed");
    }
  }
}
// const id = new ObjectId();
// console.log(id);

connectToDatabase();
