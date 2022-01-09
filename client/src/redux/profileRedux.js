import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name:"profile",
    initialState:{
        newProfile: [],
        isProfiling: false,
        error: false
    },
    reducers:{
        profileUser: (state, action) => {
            state.isProfiling = true
        },
        profileSuccess: (state, action) => {
            state.isProfiling = false,
            state.newProfile = action.payload
        },
        profileFailure: (state, action) => {
            state.isProfiling = false
            state.error = true
        }
    }
})

export const { profileUser, profileSuccess, profileFailure } = profileSlice.actions
export default profileSlice.reducer