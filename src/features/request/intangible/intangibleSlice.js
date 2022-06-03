import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  public: [],
  followed: [],
  self: [],
};

const intangibleSlice = createSlice({
  name: "intangible",
  initialState,
  reducers: {
    getIntangible(state, action) {
      const { scope, request } = action.payload;
      state[scope] = request;
    },
    nextIntangible(state, action) {
      const { scope, request } = action.payload;
      state[scope].push(...request);
    },
  },
});

export const { getIntangible, nextIntangible } = intangibleSlice.actions;

export default intangibleSlice.reducer;
