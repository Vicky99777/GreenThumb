import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPlant from './components/AddPlant';
import Navigation from './components/Navigation';
import { Homepage } from './components/Homepage';
import PlantList from './components/PlantList';
import DeletePlant from './components/DeletePlant'
import EditPlant from './components/EditPlant';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add-plant" element={<AddPlant />} />
        <Route path="/delete-plant" element={<DeletePlant />} />
        <Route path="/plants" element={<PlantList />} />
        <Route path="/delete-plants" element={<DeletePlant/>} />
        <Route path="/edit-plants" element={<EditPlant/>} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
