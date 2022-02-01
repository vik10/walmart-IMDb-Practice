import { createSlice } from "@reduxjs/toolkit";
const headerSlice = createSlice({
  name: "headerSlice",
  initialState: { user: {}, active: false },
  reducers: {
    handleUserAcess: (state, action) => {
      action.payload.length
        ? (state.user = action.payload[0])
        : (state.user = state.user);
    },
    handleUserLogout: (state, action) => {
      state.user = {};
    },
    handleRegisterpage: (state, action) => {
      state.active = !state.active;
    },
  },
});

export const { handleUserAcess, handleUserLogout, handleRegisterpage } =
  headerSlice.actions;

export default headerSlice.reducer;
