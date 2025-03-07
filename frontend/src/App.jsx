import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPlant from './components/AddPlant';
import Navigation from './components/Navigation';
import { Homepage } from './components/Homepage';
import PlantList from './components/PlantList';
import DeletePlant from './components/DeletePlant'

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
