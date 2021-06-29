import { createSlice } from "@reduxjs/toolkit";
import { iHomePageState } from "./types";

const initialState: iHomePageState = {
  animePage: null,
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setAnimePage(state, action) {
      state.animePage = action.payload;
    },
  },
});

export const { setAnimePage } = HomePageSlice.actions;
export default HomePageSlice.reducer;
