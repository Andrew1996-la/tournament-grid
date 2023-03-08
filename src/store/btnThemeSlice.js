import { createSlice } from "@reduxjs/toolkit";

const btnThemeSlice = createSlice({
  name: "btnThemeSlice",
  initialState: {
    theme: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      switch (state.theme) {
        case "dark":
          state.theme = "light";
          break;
        case "light":
          state.theme = "dark";
          break;
        default:
          return state;
      }
    },
  },
});

export const { toggleTheme } = btnThemeSlice.actions;

export default btnThemeSlice.reducer;
