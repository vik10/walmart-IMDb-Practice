import { createSlice } from "@reduxjs/toolkit";
import { isRepeat } from "../utilit";

const fetchDataSlice = createSlice({
  name: "fetchDataSlice",
  initialState: {
    productsArr: [],
    product: {},
    productDetails: [],
    searchText: "",
    categoryTag: "title",
    searchTag: "title",
    category: "",
    sortValue: "id",
    watchListArr: [],
  },
  reducers: {
    fetchingData: (state, action) => {
      state.productsArr = action.payload;
    },
    selectedProduct: (state, action) => {
      state.product = state.productsArr.filter(
        (item) => item.id === action.payload
      )[0];
    },
    handleSearch: (state, action) => {
      state.searchText = action.payload;
    },
    handleCategory: (state, action) => {
      state.category = action.payload.value;
      state.categoryTag = action.payload.tag;
    },
    handleSerchType: (state, action) => {
      state.searchTag = action.payload;
    },
    handleSort: (state, action) => {
      state.sortValue = action.payload;
    },
    addTolist: (state, action) => {
      const { watchListArr, productsArr } = state;
      state.watchListArr = isRepeat(watchListArr, action.payload)
        ? watchListArr
        : watchListArr.concat(
            productsArr.filter((item) => item.id === action.payload)
          );
    },
    handleProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});

export const {
  fetchingData,
  selectedProduct,
  handleSearch,
  handleCategory,
  handleSerchType,
  handleSort,
  addTolist,
  handleProductDetails,
} = fetchDataSlice.actions;
export default fetchDataSlice.reducer;
