import { createSlice } from "@reduxjs/toolkit";
import fakeData from "../fakeData";

const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
  },
  reducers: {
    setMembers: (state, action) => ({ ...state, members: action.payload }),
  },
});

export const { setMembers } = membersSlice.actions;

export default membersSlice.reducer;
