import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  public: [
    // {
    //   id: 0,
    //   requesterId: 0,
    //   title: "My First Intangible",
    //   description: "Description",
    // },
    // {
    //   id: 1,
    //   requesterId: 0,
    //   title: "My Second Intangible",
    //   description: "Description",
    // },
    // {
    //   id: 2,
    //   requesterId: 1,
    //   title: "First Intangible Request",
    //   description: "Description",
    // },
    // {
    //   id: 3,
    //   requesterId: 1,
    //   title: "Second Intangible Request",
    //   description: "Description",
    // },
  ],
  self: [],
};

const intangibleSlice = createSlice({
  name: "intangible",
  initialState,
  reducers: {
    getIntangible(state, action) {
      state.public = action.payload;
    },
    // addIntangible(state, action) {
    //   state.public.push({ id: 0, requesterId: 0, ...action.payload });
    // },
  },
});

export const { getIntangible /* , addIntangible */ } = intangibleSlice.actions;

export default intangibleSlice.reducer;
