import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavbarOpen: false,
};

const navbarSlicer = createSlice({
  name: "navbar",
  initialState: initialState,
  reducers: {
    TOGGLE_NAVBAR: (state) => {
      if (state.isNavbarOpen) {
        state.isNavbarOpen = false;
      } else {
        state.isNavbarOpen = true;
      }
    },
  },
});

export default navbarSlicer.reducer;
export const { TOGGLE_NAVBAR } = navbarSlicer.actions;
