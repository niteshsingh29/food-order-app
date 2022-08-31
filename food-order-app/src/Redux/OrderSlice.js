import { createSlice } from "@reduxjs/toolkit";
import { OrderList } from "../RestaurantList";

export const OrderSlice = createSlice({
  name: "restaurant",
  initialState: {
    value: OrderList,
  },
  reducers: {
    placeOrder: (state, action) => {
      console.log(action);
      if (action.payload) {
        state.value.push(action.payload);
      }
    },
  },
});
export const { placeOrder } = OrderSlice.actions;
export default OrderSlice.reducer;
