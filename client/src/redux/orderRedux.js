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
            state.product.push({name:action.payload.selectedFish,price:action.payload.price, weight:action.payload.weight})
            state.total += action.payload.price * action.payload.weight
        }
    }
})

export  const { addOrder } = orderSlice.actions
export default orderSlice.reducer