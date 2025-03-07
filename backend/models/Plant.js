const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  wateringInterval: { type: Number, required: true },
});

module.exports = mongoose.model('Plant', plantSchema);


/*
What is happening here? 
mongoose.Schema – defines the blueprint for how data will be stored.
name, species, wateringSchedule – Important plant details.
dateAdded – Automatically saves the current date.
module.exports – Makes this model reusable in other files.
*/