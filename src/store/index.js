import { combineReducers, configureStore } from "@reduxjs/toolkit";
import btnThemeSlice from "./btnThemeSlice";
import membersSlice from "./membersSlice";

const rootReducer = combineReducers({
  btnThemeSlice: btnThemeSlice,
  membersSlice: membersSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
