import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const filterProduct = createAsyncThunk("filterProducts", async(str) => {
    try {
        const res = await axios.get("http://localhost:3000/data.json");
        console.log(res.data);
        return res.data.filter((elem,i)=>elem.productName.toUpperCase().includes(str.toUpperCase()))
      } catch (error) {
        console.log(error);
      }


});
export const getProducts = createAsyncThunk("getProducts", async () => {
  try {
    const res = await axios.get("http://localhost:3000/data.json");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(filterProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
export default productSlice.reducer;
