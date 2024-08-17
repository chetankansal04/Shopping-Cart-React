import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: " items ",
  initialState: [],
  reducers: {
    addInititalItem(state, action) {
      return action.payload;
    },
  },
});

export const itemsActions = itemSlice.actions;
export default itemSlice;
