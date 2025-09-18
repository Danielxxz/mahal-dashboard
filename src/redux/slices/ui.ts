import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DisplayMonths, UISlice } from "@/types/redux";

const initialState: UISlice = {
  sidebar: {
    active: 0,
  },
  charts: {
    displayMonths: 12,
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    sidebar__setIndex: (state, action: PayloadAction<number>) => {
      state.sidebar.active = action.payload;
    },
    charts__setDisplayMonths: (state, action: PayloadAction<DisplayMonths>) => {
      state.charts.displayMonths = action.payload;
    },
  },
});

export const { sidebar__setIndex, charts__setDisplayMonths } = uiSlice.actions;
export default uiSlice.reducer;
