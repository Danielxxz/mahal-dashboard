import type { ChartBarData, ChartDataConfig } from "@/types/performance";
import type { PerformanceSlice } from "@/types/redux";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/**
 * We set the `Performance` data as statics here, you can either retrieve them from the database,
 * or re-fill those Placeholder performance data, and keep them static here.
 */
const initialState: PerformanceSlice = {
  configs: {
    "bar-1": {
      label: "Orders",
      color: "#00cff1",
    },
    "bar-2": {
      label: "Return",
      color: "#016271",
    },
  },
  data: [
    { month: "January", "bar-1": 186, "bar-2": 80 },
    { month: "February", "bar-1": 305, "bar-2": 200 },
    { month: "March", "bar-1": 237, "bar-2": 120 },
    { month: "April", "bar-1": 73, "bar-2": 190 },
    { month: "May", "bar-1": 209, "bar-2": 130 },
    { month: "June", "bar-1": 214, "bar-2": 140 },
    { month: "July", "bar-1": 300, "bar-2": 75 },
    { month: "August", "bar-1": 320, "bar-2": 85 },
    { month: "September", "bar-1": 270, "bar-2": 120 },
    { month: "October", "bar-1": 340, "bar-2": 40 },
    { month: "Nevember", "bar-1": 190, "bar-2": 140 },
    { month: "December", "bar-1": 280, "bar-2": 90 },
  ],
};

export const performance_Slice = createSlice({
  name: "performance",
  initialState,
  reducers: {
    performanceSlice__setConfig: (
      state,
      action: PayloadAction<ChartDataConfig>
    ) => {
      state.configs = action.payload;
    },
    performanceSlice__setData: (
      state,
      action: PayloadAction<ChartBarData[]>
    ) => {
      state.data = action.payload;
    },
  },
});

export const { performanceSlice__setConfig, performanceSlice__setData } =
  performance_Slice.actions;
export default performance_Slice.reducer;
