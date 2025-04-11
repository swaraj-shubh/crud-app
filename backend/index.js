const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

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




// 👇 ADD THIS 👇
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
