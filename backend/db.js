const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "Ghoury_db";

let db;

async function connectToDatabase() {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to MongoDB");
  db = client.db(dbName);
}

function getDatabase() {
  if (!db) {
    throw new Error("Database not connected");
  }
  return db;
}

module.exports = { connectToDatabase, getDatabase };
