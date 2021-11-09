const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");
const data = require("./data");

const mongoServer = new MongoMemoryServer();

let client = null;
let database = null;

async function startDatabase() {
  if (!client) {
    await mongoServer.start();

    client = new MongoClient(mongoServer.getUri());
  }

  await client.connect();

  //Seed Database
  if (!database) {
    database = client.db();
    await database.collection("users").insertMany(data.Users);
    await database.collection("posts").insertMany(data.Posts);
  }

  return database;
}

async function stopDatabase() {
  await client.close();
  await mongoServer.stop();
}

module.exports = {
  startDatabase,
  stopDatabase,
};
