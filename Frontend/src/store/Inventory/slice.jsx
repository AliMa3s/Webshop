import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
  name: "inventory",
  initialState: [],
  reducers: {
    addToInventory: (state, action) => {
      state.push(action.payload);
    },
    removeFromInventory: (state, action) => {
      state.pop();
    },
    removeItemFromInventory: (state, action) =>
      state.filter((item) => item.id !== action.payload),
  },
});

export const { actions, reducer } = inventorySlice;
export const { addToInventory, removeFromInventory, removeItemFromInventory } =
  actions;