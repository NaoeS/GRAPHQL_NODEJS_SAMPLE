const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");
const data = require("./data");

let database = null;
let mongo = null;

async function startDatabase() {
  if (!mongo) {
    mongo = await MongoMemoryServer.create();
  }

  const connection = await MongoClient.connect(mongo.getUri(), {
    useNewUrlParser: true,
  });

  //Seed Database
  if (!database) {
    database = connection.db();
    await database.collection("users").insertMany(data.Users);
    await database.collection("posts").insertMany(data.Posts);
  }

  return database;
}

async function stopDatabase() {
  await mongo.stop();
}

module.exports = {
  startDatabase,
  stopDatabase,
};
