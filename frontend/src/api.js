import axios from 'axios';

const API_URL = 'http://localhost:3696/api/plants';

export const getPlants = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching plants:', error);
    throw error;
  }
};

export const addPlant = async (plantData) => {
  try {
    const response = await axios.post(API_URL, plantData);
    return response.data; // Return added plant data
  } catch (error) {
    console.error('Error adding plant:', error);
    throw error;
  }
};
