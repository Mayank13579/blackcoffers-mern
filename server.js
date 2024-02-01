const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const path = require('path');
const cors=require('cors')
const DataModel=require('./model/DataModel');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

mongoose.connect('mongodb://127.0.0.1:27017/blackcoffers')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
