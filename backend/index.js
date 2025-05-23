const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { connectMongo, updateMongoURI } = require('./config/mongoConfig');


const userRoutes = require('./routes/userRoutes');

const app = express();
//const PORT = process.env.PORT || 3000;

// access
const cors = require('cors');
app.use(cors({
  //origin: '/^http:\/\/localhost:\d+$/',
  //origin: 'http://localhost:5174',
  credentials: true,
}));


app.use(express.json());
app.use('/users', userRoutes);


// URI ka update
app.post('/update-mongo-uri', (req, res) => {
  const { newUri } = req.body;
  if (!newUri) {
    return res.status(400).json({ error: 'New URI is required' });
  }
  updateMongoURI(newUri);
  res.status(200).json({ message: 'Mongo URI updated. Restart the server to apply changes.' });
});




app.get('/', (req, res) => {
    res.send('🚀 Hello from your CRUD API!');
  });

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(process.env.PORT, () => {
      console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.log('❌ MongoDB connection error:', err));
