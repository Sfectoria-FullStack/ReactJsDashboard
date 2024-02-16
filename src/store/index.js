import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './product'

export const store = configureStore({
  reducer: {
    product:productSlice
  },
})