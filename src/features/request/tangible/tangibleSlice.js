import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  public: [
    {
      id: 0,
      requesterId: 0,
      title: "My First Tangible",
      description: "Description",
    },
    {
      id: 1,
      requesterId: 0,
      title: "My Second Tangible",
      description: "Description",
    },
    {
      id: 2,
      requesterId: 1,
      title: "First Tangible Request",
      description: "Description",
    },
    {
      id: 3,
      requesterId: 1,
      title: "Second Tangible Request",
      description: "Description",
    },
  ],
  self: [],
};

const tangibleSlice = createSlice({
  name: "tangible",
  initialState,
  reducers: {
    addTangible(state, action) {
      state.public.push({ id: 0, requesterId: 0, ...action.payload });
    },
  },
});

export const { addTangible } = tangibleSlice.actions;

export default tangibleSlice.reducer;
