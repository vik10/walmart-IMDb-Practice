import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../reducer/headerSlice";
import fetchSlice from "../reducer/fetchDataSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  headerSlice,
  fetchSlice,
});

const store = configureStore({
  reducer: { rootReducer },
});

export default store;
