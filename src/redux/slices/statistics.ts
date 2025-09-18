import type { StatisticsSlice } from "@/types/redux";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/**
 * We set the `Statistics` data as static here, you can either retrieve them from the database,
 * or re-fill those Placeholder statistics data, and keep them static here.
 */
const initialState: StatisticsSlice = {
  monthlyRevenue: 1735,
  monthlyOrders: 539,
  monthlyReturns: 43,
};

export const statistics_Slice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    statistics__setMonthlyRevenue: (state, action: PayloadAction<number>) => {
      state.monthlyRevenue = action.payload;
    },
    statistics__setMonthlyOrders: (state, action: PayloadAction<number>) => {
      state.monthlyOrders = action.payload;
    },
    statistics__setMonthlyReturns: (state, action: PayloadAction<number>) => {
      state.monthlyReturns = action.payload;
    },
  },
});

export const {
  statistics__setMonthlyRevenue,
  statistics__setMonthlyOrders,
  statistics__setMonthlyReturns,
} = statistics_Slice.actions;
export default statistics_Slice.reducer;
