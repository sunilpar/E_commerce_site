import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authslice"
import orderSlice from "./orderSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    order: orderSlice
  },
});

export default store;
