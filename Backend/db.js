const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');


let mongoServer;

const startDatabase = async () => {
  
  mongoServer = new MongoMemoryServer();
  await mongoServer.start();
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri);
};

const stopDatabase = async () => {
  
  await mongoose.connection.close();
  await mongoServer.stop();
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
}


module.exports = { startDatabase, stopDatabase, isConnected };