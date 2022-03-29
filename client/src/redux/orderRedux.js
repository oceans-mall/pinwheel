import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    product: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addOrder: (state, action) => {
      state.quantity += 1;
      state.product.push(action.payload.products);
      state.total += action.payload.price * action.payload.weight;
    },
    deleteOrder: (state, action) => {
      state.product.splice(
        state.product.findIndex((item) => item.id === action.payload.id),
        1
      );
      (state.quantity -= 1), (state.total -= action.payload.cost);
    },
  },
});

export const { addOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
