import { combineReducers, configureStore } from "@reduxjs/toolkit";
import btnThemeSlice from "./btnThemeSlice";

const rootReducer = combineReducers({
  btnThemeSlice: btnThemeSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
