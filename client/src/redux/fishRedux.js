import { createSlice } from "@reduxjs/toolkit";

const fishSlice = createSlice({
    name:'fish',
    initialState:{
        fish:[],
        fetchingData: false,
        error: false
    },
    reducers:{
        fetchdata:(state, action) =>{
            state.fetchingData = true,
            state.error = false
        },
        fetchdataSuccess:(state, action) =>{
            state.fish = action.payload,
            state.fetchingData = false
        },
        fetchdataFailure:(state, action) =>{
            state.error = true
        },
    }
})
export const {
    fetchdata,
    fetchdataSuccess,
    fetchdataFailure
} = fishSlice.actions
export default fishSlice.reducer