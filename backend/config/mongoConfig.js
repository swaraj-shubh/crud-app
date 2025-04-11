const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

const updateMongoURI = (newUri) => {
  const envPath = '.env';
  let envConfig = fs.readFileSync(envPath, 'utf8');
  envConfig = envConfig.replace(/MONGO_URI=.*/g, `MONGO_URI=${newUri}`);
  fs.writeFileSync(envPath, envConfig);
  console.log('Mongo URI updated in .env file. Please restart the server.');
};

module.exports = { connectMongo, updateMongoURI };