import { createSlice } from "@reduxjs/toolkit";
import fakeData from "../fakeData";

const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: fakeData,
  },
  reducers: {
    addMember: (state) => state,
  },
});

export const { addMember } = membersSlice.actions;

export default membersSlice.reducer;
