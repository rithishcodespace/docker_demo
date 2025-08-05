const { MongoClient } = require("mongodb");

const uri = "mongodb://admin:password@localhost:27017";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB connected");
    return client.db("user-account"); // your DB name
  } catch (err) {
    console.error("MongoDB connection failed", err);
    process.exit(1);
  }
}

module.exports = connectDB;
