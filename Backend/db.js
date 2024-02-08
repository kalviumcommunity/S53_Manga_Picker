const mongoose = require("mongoose");

let mongoConnection;
console.log({"u": process.env.MongoUri})


async function ConnectToDB() {
 

  const mongoUri = process.env.MongoUri;

  mongoConnection = await mongoose.connect(mongoUri);

  console.log('Connected to MongoDB database.');
}

async function stopDatabase() {
  if (!mongoConnection) return;

  await mongoConnection.close();
  mongoConnection = null;

  console.log('Disconnected from local MongoDB database.');
}

function isConnected() {
  return mongoConnection.readyState === 1;
}
module.exports = { ConnectToDB, stopDatabase, isConnected };
