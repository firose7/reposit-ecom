import { createSlice } from "@reduxjs/toolkit";
import { testProducts } from "../dataSet/products";

const productsReducer = createSlice({
  name: "products",
  initialState: {
    products: [...testProducts],
  },
  reducers: {
    newProduct: (state) => {},
  },
});

export const { newProduct } = productsReducer.actions;

export default productsReducer.reducer;
