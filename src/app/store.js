import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../Redux/Cart/cartSlice";
import productReducer from "../Redux/Products/ProductSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart : cartSlice.reducer 
  },
});
