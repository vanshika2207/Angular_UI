const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "mydb";

async function connectToDatabase() {
  let client;
  try {
    client = await MongoClient.connect(connectionURL);
    console.log("Database connection established");
    const db = client.db(databaseName);
    //insert

    // const insertOneResult = await db.collection("student").insertOne({
    //   name: "Vanshika",
    //   age: 21,
    // });
    // console.log(insertOneResult);---acknowledged

    // const insertManyResult = await db.collection("student").insertMany([
    //   { name: "Astha", age: 21 },
    //   { name: "Basanti", age: 20 },
    //   { name: "catherine", age: 22 },
    //   { name: "Dicky", age: 23 },
    // ]);
    // console.log(insertManyResult.insertedCount);---4

    // const insertMore = await db.collection("student").insertMany([
    //   { name: "Ellijah", age: 24 },
    //   { name: "Finn", age: 26 },
    //   { name: "Gilbert", age: 24 },
    //   { name: "Henrick", age: 17 },
    //   { name: "Harry", age: 21 },
    //   { name: "Inzo", age: 27 },
    // ]);
    // console.log(insertMore.acknowledged);//true
    // console.log(insertMore.insertedIds);//onject ids

    //find
    const findResult = await db.collection("student").find({}).toArray();
    console.log(findResult);
    const find1 = await db.collection("student").countDocuments({ age: 21 });
    console.log(find1);
    const find2 = await db
      .collection("student")
      .find({
        $or: [{ age: { $eq: 24 } }, { age: { $lt: 24 } }],
      })
      .toArray();
    console.log(find2);
    const find3 = await db.collection("student").findOne({ age: 24 });
    console.log(find3);
    const find4 = await db
      .collection("student")
      .find({
        name: {
          $nin: ["Vanshika"],
        },
      })
      .toArray();
    console.log("projection", find4);

    //update
    // const update1 = await db
    //   .collection("student")
    //   .updateMany({ age: 22 }, { $set: { age: 25 } });

    // console.log(update1);

    // const update2 = await db
    //   .collection("student")
    //   .updateOne({ name: "Vanshika" }, { $inc: { age: 1 } });
    // console.log(update2);

    //const delete
    // const delete1 = await db.collection("student").deleteOne({ age: 25 });
    // console.log(delete1);

    const delete2 = await db
      .collection("student")
      .findOneAndDelete({ name: "Vanshika" });
    console.log(delete2);
  } catch (error) {
    console.error(
      "Error connecting to database or performing the operation",
      error
    );
  } finally {
    if (client) {
      await client.close();
      console.log("database connection closed");
    }
  }
}

connectToDatabase();
// const id = new ObjectId();
// console.log(id);
