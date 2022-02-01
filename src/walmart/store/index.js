import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import headerSlice from "../reducer/headerSlice";
import fetchSlice from "../reducer/fetchDataSlice";

const rootreducer = combineReducers({
  headerSlice,
  fetchSlice,
});

export const store = configureStore({
  reducer: {
    reducer: rootreducer,
  },
});

console.log(store.getState());
