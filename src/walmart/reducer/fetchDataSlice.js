import { createSlice } from "@reduxjs/toolkit";
import { isRepeat } from "../utilit";

const fetchDataSlice = createSlice({
  name: "fetchDataSlice",
  initialState: { ProductArr: [], cartArr: [], count: 0 },
  reducers: {
    fetchingData: (state, action) => {
      state.ProductArr = action.payload;
    },
    addToCart: (state, action) => {
      console.log(action.payload);
      if (isRepeat(state.cartArr, action.payload)) {
        return;
      } else {
        state.count += 1;
        state.cartArr = state.cartArr.concat(
          state.ProductArr.filter((item) => item.id === action.payload)
        );
      }
    },
    handleDelete: (state, action) => {
      state.count -= 1;
      state.cartArr = state.cartArr.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { fetchingData, addToCart, handleDelete } = fetchDataSlice.actions;

export default fetchDataSlice.reducer;
