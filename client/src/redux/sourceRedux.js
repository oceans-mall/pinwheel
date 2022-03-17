import { createSlice } from "@reduxjs/toolkit";

const sourceSlice = createSlice({
    name:'source',
    initialState:{
        sources:[],
        isFetching: false,
        error: false
    },
    reducers:{
        getSource:(state, action) => {
            state.isFetching = true,
            state.error = false
        },
        getSourceSuccess: (state, action) => {
            state.isFetching = false,
            state.sources = action.payload
        },
        getSourceFailure:(state, action) => {
            state.error = true
        }
    }
})
export const{
    getSource,
    getSourceFailure,
    getSourceSuccess
} = sourceSlice.actions

export default sourceSlice.reducer