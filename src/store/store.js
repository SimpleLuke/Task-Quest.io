import { configureStore } from "@reduxjs/toolkit";
import healthReducer from "./features/health/healthSlice";
import typewriterReducer from "./features/typewriter/typewriterSlice";
import sceneReducer from "./features/scene/sceneSlice";
import taskReducer from "./features/task/taskSlice";

export const store = configureStore({
  reducer: {
    health: healthReducer,
    typewriter: typewriterReducer,
    scene: sceneReducer,
    task: taskReducer,
  },
});
