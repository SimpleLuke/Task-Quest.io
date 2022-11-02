import { configureStore } from "@reduxjs/toolkit";
import healthReducer from "./features/health/healthSlice";

export const store = configureStore({
  reducer: {
    health: healthReducer,
  },
});
