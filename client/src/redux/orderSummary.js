import { createSlice } from "@reduxjs/toolkit";

const orderSummarySlice = createSlice({
    name: 'ordersummary',
    initialState: {
        orders:[],
    },
    reducers:{
        addToSummary: (state, action) => {
            state.orders = action.payload
        }
    }
})
export const { addToSummary } = orderSummarySlice.actions;
export default orderSummarySlice.reducer;
