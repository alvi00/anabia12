import { setDocDataFromHome } from './homeSlice';

const locations = ["City A", "City B", "City C", "City D"]; // Predefined locations

export const fetchDoctors = () => async (dispatch) => {
  try {
    const response = await fetch('api/doctorData'); // Fetching doctor data
    const data = await response.json();

    // Assign a random location from the array to each doctor
    const updatedData = data.map(doctor => ({
      ...doctor,
      location: locations[Math.floor(Math.random() * locations.length)]
    }));

    dispatch(setDocDataFromHome(updatedData));
  } catch (error) {
    console.error('Failed to fetch doctors:', error);
  }
};

