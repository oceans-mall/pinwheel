import { createSlice } from "@reduxjs/toolkit";


const registerSlice = createSlice({
    name:'register',
    initialState:{
        newUser : null,
        isRegistering: false,
        error: false,
        success: false
    },
    reducers:{
        registerUser: (state, action) => {
            state.isRegistering = true
        },
        registerSuccess: (state, action) => {
            state.isRegistering = false;
            state.newUser = action.payload;
            state.success = true
        },
        registerFailure: (state, action) => {
            state.isRegistering = false;
            state.error = true
        }
    }
})

export const { registerUser, registerSuccess, registerFailure } = registerSlice.actions;
export default registerSlice.reducer