import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import cartUiSlice from "./CartUi";

const Store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default Store;