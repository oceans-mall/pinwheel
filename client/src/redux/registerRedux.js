import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    newUser: null,
    isRegistering: false,
    error: false,
    success: false,
  },
  reducers: {
    registerUser: (state, action) => {
      state.isRegistering = true;
    },
    registerSuccess: (state, action) => {
      state.isRegistering = false;
      state.newUser = action.payload;
      state.success = true;
      state.error = false;
    },
    registerFailure: (state, action) => {
      state.isRegistering = false;
      state.error = true;
      state.success = false;
    },
  },
});

export const { registerUser, registerSuccess, registerFailure } =
  registerSlice.actions;
export default registerSlice.reducer;
