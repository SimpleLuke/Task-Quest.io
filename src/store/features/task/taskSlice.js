import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: {
    name: "",
    steps: [],
  },
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskName: (state, { payload }) => {
      state.task.name = payload;
    },
    setTaskSteps: (state, { payload }) => {
      state.task.steps.push(payload);
    },
    removeStep: (state, { payload }) => {
      state.task.steps.splice(payload, 1);
    },
  },
});

export default taskSlice.reducer;
export const { setTaskName, setTaskSteps, removeStep } = taskSlice.actions;
