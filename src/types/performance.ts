import type { ChartConfig } from "@/components/ui/chart";

export interface ChartDataConfig extends ChartConfig {}

export interface ChartBarData {
  [key: string]: string | number;
}
