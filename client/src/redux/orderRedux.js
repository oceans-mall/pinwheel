import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userId: "",
  fishermanId: "",
  product: [],
  quantity: 0,
  total: 0,
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.quantity += 1;
      state.product.push(action.payload.products);
      state.total += action.payload.price * action.payload.weight;
      state.userId = action.payload.agent;
      state.fishermanId = action.payload.fisherID;
    },
    deleteOrder: (state, action) => {
      state.product.splice(
        state.product.findIndex((item) => item.id === action.payload.id),
        1
      );
      (state.quantity -= 1),
        (state.total -= action.payload.cost),
        (state.userId = ""),
        (state.fishermanId = "");
    },
    clearOrder: () => initialState,
  },
});
export const { addOrder, deleteOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
