const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');
const mongoose = require('mongoose')

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
router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { name, wateringInterval } = req.body;

  // Validate ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Plant ID" });
  }

  try {
      // Update the plant
      const updatedPlant = await Plant.findByIdAndUpdate(
          id,
          { name, wateringInterval },
          { new: true }
      );

      if (!updatedPlant) {
          return res.status(404).json({ message: "Plant not found" });
      }

      res.status(200).json(updatedPlant);
  } catch (error) {
      res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;
