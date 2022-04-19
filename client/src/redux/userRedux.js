import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState:{
       currentUser: null,
       isFetching: false,
       error: false,
       success: false
    },
    reducers:{
        loginStart: (state, action) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.success = true;
            state.error = false;
        },
        loginFailure: (state, action) => {
            state.isFetching = false
            state.error = true
        },
        logoutUser: (state, action) => {
            state.currentUser = null,
            state.isFetching = false,
            state.error = false
        }
    }
})


export const { loginStart, loginSuccess, loginFailure, logoutUser } = userSlice.actions

export default  userSlice.reducer