const mongoose = require("mongoose");
require("dotenv").config()

let mongoConnection;



async function ConnectToDB() {
 

  const mongoUri = process.env.MONGOURI;

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
