import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    doctors: [],  // Assuming an array of doctors
  },
  reducers: {
    setDocDataFromHome: (state, action) => {
      state.doctors = action.payload;  // Payload is an array of doctors with locations
    },
  },
});

export const { setDocDataFromHome } = homeSlice.actions;

export default homeSlice.reducer;
