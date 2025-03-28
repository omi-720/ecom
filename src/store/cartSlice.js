import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      return [...state, action.payload]; // Creates a new array
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload); // Remove item by ID
    },
  },
});

export const { add,remove } = cartSlice.actions;
export default cartSlice.reducer;
