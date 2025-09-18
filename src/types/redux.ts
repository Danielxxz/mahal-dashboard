import type { ChartBarData, ChartDataConfig } from "./performance";
import type { Product } from "./product";
import type { StaticsData } from "./statics";

export type DisplayMonths = 3 | 6 | 12;

export interface UISlice {
  sidebar: {
    active: number;
  };
  charts: {
    displayMonths: DisplayMonths;
  };
}

export interface ProductsSlice {
  products: Product[];
  openProduct: {
    open: boolean;
    product?: Product;
  };
}

export interface StatisticsSlice extends StaticsData {}

export interface PerformanceSlice {
  configs: ChartDataConfig;
  data: ChartBarData[];
}
