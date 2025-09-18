import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/ui";
import productsSlice from "./slices/products";
import statistics_Slice from "./slices/statistics";
import performance_Slice from "./slices/performance";

export const store = configureStore({
  reducer: {
    uiSlice,
    productsSlice,
    statistics_Slice,
    performance_Slice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
