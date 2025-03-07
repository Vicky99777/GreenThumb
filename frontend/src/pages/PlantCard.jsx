import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import image from '.greenThumb/src/images/image.png';
const PlantCard = ({ name, description, image }) => {
  const [watered, setWatered] = useState(false);
  
  const handleWater = ()=>{
    setWatered(true);
  };
    
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 m-6 max-w-sm text-center transition hover:scale-105 duration-300">

    <Link to="/add-plant">
     <button className="bg-green-600 mb-5 text-white px-4 py-2 rounded-lg">
       + Add New Plant
     </button>  
      </Link>
      <img
        src={image}
        alt={name}
        className="rounded-lg mb-4 h-48 w-full object-cover"
      />
      <h2 className="text-xl font-bold mb-3 text-green-700">{name}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex justify-between gap-4">
        <button
          onClick={handleWater} //  Button Click Event
          className={`px-5 py-2 rounded-lg transition ${watered ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}
          disabled={watered} // Disable Button After Clicking
        >
          {watered ? 'Watered 💦' : 'Water Me 💧'}
        </button>
        <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
          Delete 🌿
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
