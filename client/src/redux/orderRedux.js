import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState:{
        product: [],
        quantity: 0,
        total: 0
    },
    reducers:{
        addOrder: (state, action) => {
            state.quantity += 1;
            state.product.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
        }
    }
})

export  const { addOrder } = orderSlice.actions
export default orderSlice.reducer