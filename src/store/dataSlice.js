import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetching/data", async () => {
  const response = await axios.get("http://localhost:3000/data.json");
  return response.data;
});

export const search = createAsyncThunk("search/products", async (querry) => {
  const res = await axios.get("http://localhost:3000/data.json");
  const res_data = res.data.filter(e =>
    e.productName.toLowerCase().includes(querry.toLowerCase())
  );
  return res_data;
});

export const fetchOne = createAsyncThunk("fetchOne/products", async (id) => {
    const resp = await axios.get("http://localhost:3000/data.json");
    const resp_data = resp.data.find(e =>
      e.id === +id
    );
    return resp_data;
  });


export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    prodcut : {}
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(search.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchOne.fulfilled, (state, action) => {
      state.prodcut = action.payload;
    });
  }
});

export default productsSlice.reducer;
