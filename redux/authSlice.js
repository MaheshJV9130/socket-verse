import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  username: null,
  profilePic: null,
  
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { email, username, profilePic } = action.payload;
      state.email = email;
      state.username = username;
      state.profilePic = profilePic;
    },
    clearUser: (state) => {
      state.email = null;
      state.username = null;
      state.profilePic = null;
      state.token = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
