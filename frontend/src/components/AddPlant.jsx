import { useState } from 'react';
import { addPlant } from '../api';

function AddPlant() {
  const [plantName, setPlantName] = useState('');
  const [wateringInterval, setWateringInterval] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlant = {
      name: plantName,
      wateringInterval: parseInt(wateringInterval),
    };

    try {
      await addPlant(newPlant);
      alert('Plant added successfully!');
      setPlantName('');
      setWateringInterval('');
    } catch (error) {
      alert('Failed to add plant');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Add Plant 🌱</h2>
        <input
          type="text"
          placeholder="Plant Name"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="number"
          placeholder="Watering Interval (days)"
          value={wateringInterval}
          onChange={(e) => setWateringInterval(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button className="bg-green-500 text-white p-2 w-full rounded">
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default AddPlant;