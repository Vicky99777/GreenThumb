import { useState, useEffect } from "react";
import { getPlants } from '../api';
 function DeletePlant(){
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
      const handleDelete = (id) => {
        if (window.confirm("Do you want to delete?")) {
            fetch(`http://localhost:3696/api/plants/delete/${id}`, { method: "DELETE" })
            .then(() => {
              alert("Plant deleted successfully!");
              setPlants(plants.filter((p) => p._id !== id));
            })
            .catch((err) => console.log(err));
        }
      };
      
    return(
        <div className="min-h-screen flex flex-col items-center bg-green-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Plant List 🌿</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <div key={plant._id} className="bg-white p-6 rounded-lg shadow-md border border-green-300">
              <h3 className="text-xl font-semibold text-green-800">{plant.name}</h3>
              <p className="text-gray-600 mb-2">Watering Interval: {plant.wateringInterval} day(s) </p>
              <button class="bg-red-500 hover:bg-red-700 text-white text-sm font-medium py-1 px-2 rounded" onClick={()=>handleDelete(plant._id)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-700 text-center">No plants added yet.</p>
        )}
      </div>
      
    </div>
    );
}
export default DeletePlant;