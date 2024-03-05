
import { configureStore } from "@reduxjs/toolkit";
import productsSlice  from "./dataSlice";




export const store = configureStore({
    reducer: {
        products : productsSlice,
    }
})