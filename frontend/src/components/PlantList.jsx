import { useEffect, useState } from 'react';
import { getPlants } from '../api';

function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const data = await getPlants();
        setPlants(data); // Store plants in state
      } catch (error) {
        console.error('Failed to fetch plants');
      }
    };

    fetchPlants();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-green-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Plant List 🌿</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <div key={plant._id} className="bg-white p-6 rounded-lg shadow-md border border-green-300">
              <h3 className="text-xl font-semibold text-green-800">{plant.name}</h3>
              <p className="text-gray-600">Watering Interval: {plant.wateringInterval} day(s)</p>
            </div>
          ))
        ) : (
          <p className="text-gray-700 text-center">No plants added yet.</p>
        )}
      </div>
    </div>
  );
}

export default PlantList;
