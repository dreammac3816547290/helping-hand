import { createSlice } from "@reduxjs/toolkit";

const initialState = { userId: null, userPhotoURL: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserProfile } = userSlice.actions;

export default userSlice.reducer;
