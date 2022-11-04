import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: {
    name: "",
    items: [],
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
      state.task.items.push(payload);
    },
    removeStep: (state, { payload }) => {
      state.task.items.splice(payload, 1);
    },
  },
});

export default taskSlice.reducer;
export const { setTaskName, setTaskSteps, removeStep } = taskSlice.actions;
