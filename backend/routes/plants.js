const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// POST Plant
router.post('/', async (req, res) => {
  try {
    const plant = await Plant.create(req.body);
    res.status(201).json(plant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// GET All Plants
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Delete plants
router.delete('/delete/:id', async (req, res) => {
  try {
    const plant = await Plant.deleteOne({ _id: req.params.id });
    if (plant.deletedCount === 0) {
      return res.status(404).json({ message: "Plant not found" });
    }
    res.status(200).json({ message: "Plant deleted successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete plant" });
  }
});
router.put('/edit-plant/:id', async (req, res) => { //Because :id helps to know which plant is getting updated.

  try {
    const plant = await Plant.findByIdAndUpdate( // it accepting 2 arguements here one for id and one for data 
      req.params.id, // Plant ID from URL
      req.body,      // Data to Update
      { new: true }  // Return the updated plant
    );
    if (!plant) {
      return res.status(404).json({ message: "Plant not found" });
    }
    res.status(200).json(plant);
    console.log("Details updated successfully..");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
