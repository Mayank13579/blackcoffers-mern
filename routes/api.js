// routes/api.js
const express = require('express');
const router = express.Router();
const DataModel= require('../model/DataModel')

// Get all data
router.get('/data', async (req, res) => {
  try {
    const data = await DataModel.find();
    console.log(data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;