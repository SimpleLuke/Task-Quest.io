import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentHp: 100,
  maxHp: 100,
  hpFill: 100,
};

const healthSlice = createSlice({
  name: "health",
  initialState,
  reducers: {
    renderFills: (state) => {
      state.hpFill = (state.currentHp / state.maxHp) * 100;
    },
    increaseHp: (state, { payload }) => {
      state.currentHp = state.currentHp + payload;
      state.currentHp =
        state.currentHp > state.maxHp ? state.maxHp : state.currentHp;
      state.currentHp = state.currentHp < 0 ? 0 : state.currentHp;
    },
    decreaseHp: (state, { payload }) => {
      state.currentHp = state.currentHp - payload;
      state.currentHp =
        state.currentHp > state.maxHp ? state.maxHp : state.currentHp;
      state.currentHp = state.currentHp < 0 ? 0 : state.currentHp;
    },
    initializeHp: (state) => {
      state.currentHp = 100;
    },
  },
});

// console.log(healthSlice);

export default healthSlice.reducer;
export const { renderFills, increaseHp, decreaseHp, initializeHp } =
  healthSlice.actions;
