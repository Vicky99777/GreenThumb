import { useState, useEffect } from 'react';
import { getPlants } from '../api';

function Homepage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const data = await getPlants();
      setPlants(data);
    } catch (error) {
      console.error('Failed to fetch plants:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to GreenThumb 🌿</h1>

      <h2 className="text-2xl font-semibold text-green-700 mb-4">Plant List</h2>
      <ul className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <li key={plant._id} className="p-2 border-b border-gray-300">
              🌱 {plant.name} - Water every {plant.wateringInterval} day(s)
            </li>
          ))
        ) : (
          <p className="text-gray-500">No plants added yet.</p>
        )}
      </ul>
    </div>
  );
}

export {Homepage};
