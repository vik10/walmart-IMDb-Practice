import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "headerSlice",
  initialState: { active: false },
  reducers: {
    handleCart: (state, action) => {
      state.active = !state.active;
    },
  },
});

export default headerSlice.reducer;

export const { handleCart } = headerSlice.actions;
