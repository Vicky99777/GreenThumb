import React, { useEffect, useState } from "react";
import { getPlants } from "../api";

function EditPlant() {
  const [plants, setPlants] = useState([]);
  const [editingPlant, setEditingPlant] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const data = await getPlants();
        setPlants(data);
      } catch (err) {
        console.error("Failed to fetch plants: " + err.message);
      }
    };
    fetchPlants();
  }, []);

  const handleEdit = async (id, updatedName, updatedInterval) => {
    try {
      const response = await fetch(
        `http://localhost:3696/api/plants/edit/${id}`, // ✅ Correct API URL
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: updatedName, wateringInterval: updatedInterval }),
        }
      );

      if (response.ok) {
        const updatedPlant = await response.json(); // ✅ Get updated data from backend
        setPlants(plants.map((plant) => (plant._id === id ? updatedPlant : plant)));
        alert("✅ Plant updated successfully!");
        setEditingPlant(null); // Close the modal
      } else {
        const errorData = await response.json();
        alert("❌ Failed to update plant: " + errorData.message);
      }
    } catch (err) {
      console.error("Failed to update plant: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-green-200 to-green-500 p-6">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Plant List 🌿</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <div
              key={plant._id}
              className="bg-white p-6 rounded-lg shadow-lg border border-green-300"
            >
              <h3 className="text-xl font-semibold text-green-800">{plant.name}</h3>
              <p className="text-gray-600">
                Watering Interval: {plant.wateringInterval} day(s)
              </p>
              <button
                className="bg-green-500 hover:bg-green-800 text-white font-medium py-1 px-2 rounded"
                onClick={() => setEditingPlant(plant)}
              >
                Edit
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-700 text-center">No plants added yet.</p>
        )}
      </div>

      {editingPlant && (
        <>
          {/* Modal */}
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-2xl z-50"
          >
            <h3 className="text-xl font-bold mb-4">Edit Plant</h3>
            <input
              type="text"
              className="rounded-lg mb-2 h-8 text-center w-full border border-gray-300"
              value={editingPlant.name}
              onChange={(e) =>
                setEditingPlant({ ...editingPlant, name: e.target.value })
              }
            />
            <input
              type="number"
              className="rounded-lg mb-2 h-8 text-center w-full border border-gray-300"
              value={editingPlant.wateringInterval}
              onChange={(e) =>
                setEditingPlant({
                  ...editingPlant,
                  wateringInterval: parseInt(e.target.value, 10),
                })
              }
            />
            <div className="flex justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
                onClick={() =>
                  handleEdit(
                    editingPlant._id,
                    editingPlant.name,
                    editingPlant.wateringInterval
                  )
                }
              >
                Update
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-4 rounded"
                onClick={() => setEditingPlant(null)}
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Modal Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 blur-md z-40"
            onClick={() => setEditingPlant(null)}
          ></div>
        </>
      )}
    </div>
  );
}

export default EditPlant;
