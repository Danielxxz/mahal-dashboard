import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { useAppSelector } from "@/redux/hooks";
import { useMemo } from "react";
import { clamp } from "@/lib/price";

export default function OrdersPerformanceChart() {
  const performance = useAppSelector((s) => s.performance_Slice);
  const displayMonths = useAppSelector((s) => s.uiSlice).charts.displayMonths;

  const filteredChartData = useMemo(
    () => performance.data.slice(0, clamp(displayMonths, 0, 12)),
    [displayMonths]
  );

  return (
    <ChartContainer
      config={performance.configs}
      className="min-h-[180px] max-h-[420px] w-full"
    >
      <BarChart accessibilityLayer data={filteredChartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="bar-1" fill="var(--color-bar-1)" radius={4} />
        <Bar dataKey="bar-2" fill="var(--color-bar-2)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
