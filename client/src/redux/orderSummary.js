import { createSlice } from "@reduxjs/toolkit";

const orderSummarySlice = createSlice({
    name: 'ordersummary',
    initialState: {
        orders:[],
        orderHistory:[]
    },
    reducers:{
        addToSummary: (state, action) => {
            state.orders = action.payload,
            state.orderHistory.push(action.payload)
        },
    }
})
export const { addToSummary } = orderSummarySlice.actions;
export default orderSummarySlice.reducer;
