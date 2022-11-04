import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentScene: "prologue",
};

const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setScene: (state, { payload }) => {
      state.currentScene = payload;
    },
  },
});

// console.log(healthSlice);

export default sceneSlice.reducer;
export const { setScene } = sceneSlice.actions;
