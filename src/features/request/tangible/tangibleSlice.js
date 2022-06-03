import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  public: [],
  followed: [],
  self: [],
};

const tangibleSlice = createSlice({
  name: "tangible",
  initialState,
  reducers: {
    getTangible(state, action) {
      const { scope, request } = action.payload;
      state[scope] = request;
    },
    nextTangible(state, action) {
      const { scope, request } = action.payload;
      state[scope].push(...request);
    },
  },
});

export const { getTangible, nextTangible } = tangibleSlice.actions;

export default tangibleSlice.reducer;
