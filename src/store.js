import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

export const store = new configureStore({
    reducer:{
        cart: cartSliceReducer
    }
});