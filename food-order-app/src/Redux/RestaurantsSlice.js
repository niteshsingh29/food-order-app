import { createSlice } from "@reduxjs/toolkit";
import { RestaurantList } from "../RestaurantList";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    value: RestaurantList,
  },
  reducers: {
    addRestaurant: (state, action) => {
      console.log(action);
      state.value.push(action.payload);
    },
  },
});
export const { addRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
