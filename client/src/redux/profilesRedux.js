import { createSlice } from "@reduxjs/toolkit";

const profilesSlice = createSlice({
  name: "profile",
  initialState: {
    folks: [],
    isLoading: false,
    isProfiling: false,
    error: false,
  },
  reducers: {
    //create profile
    addProfile: (state, action) => {
      state.isProfiling = true;
    },
    addProfileSuccess: (state, action) => {
      state.isProfiling = false, 
       state.folks.push(action.payload);
    },
    addProfileFailure: (state, action) => {
      state.isProfiling = false;
      state.error = true;
    },
    //retrieve profile
    getProfileStart: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    getProfileSuccess: (state, action) => {
      state.isLoading = false;
      state.folks = action.payload;
    },
    getProfileFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    //update profile
    updateProfile: (state) => {
      state.isProfiling = true;
      state.error = false;
    },
    updateProfileSuccess: (state, action) => {
      state.isProfiling = false;
      state.folks[
        state.folks.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.folk;
      state.error = false
    },
    updateProfileFailure: (state) => {
      state.isProfiling = false;
      state.error = true;
    },
    //delete profile
    deleteProfile: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    deleteProfileSuccess: (state, action) => {
      state.isLoading = false;
      state.folks.splice(
        state.folks.findIndex(item => item._id === action.payload.id),1
      )
    },
    deleteProfileFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  addProfile,
  addProfileSuccess,
  addProfileFailure,
  getProfileStart,
  getProfileSuccess,
  getProfileFailure,
  updateProfile,
  updateProfileSuccess,
  updateProfileFailure,
  deleteProfile,
  deleteProfileSuccess,
  deleteProfileFailure,
} = profilesSlice.actions;
export default profilesSlice.reducer;
