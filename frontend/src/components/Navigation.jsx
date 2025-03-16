import { Link } from 'react-router-dom';
import DeletePlant from './DeletePlant';
import EditPlant from './EditPlant';

function Navigation() {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🌱 GreenThumb</h1>
        <div className="space-x-4"> 
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/add-plant" className="hover:underline" element={<addPlant/>}>
            Add Plant
          </Link>
          <Link to="/delete-plant" className="hover:underline" element={<DeletePlant/>}>
            Delete Plant
          </Link>
          <Link to="/plants" className="hover:underline ">View Plants</Link>
          <Link to="/edit-plants" className='hover:underline' element={<EditPlant/>}>Edit Plant</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
