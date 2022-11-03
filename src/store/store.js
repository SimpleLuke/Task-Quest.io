import { configureStore } from "@reduxjs/toolkit";
import healthReducer from "./features/health/healthSlice";
import typewriterRudecer from "./features/typewriter/typewriterSlice";

export const store = configureStore({
  reducer: {
    health: healthReducer,
    typewriter: typewriterRudecer,
  },
});
