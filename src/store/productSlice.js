import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk to fetch products from an API
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API URL
  const data = await response.json();
  return data;
});

// Initial state
const initialState = {
  products: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

// Create product slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}, // No regular reducers needed for now
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"; // Set loading state
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set success state
        state.products = action.payload; // Store fetched products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"; // Set failed state
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
