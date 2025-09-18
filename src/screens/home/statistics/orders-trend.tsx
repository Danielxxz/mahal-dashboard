import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";
import { ArrowDownLeftIcon } from "@phosphor-icons/react";

export default function OrdersStatisticsOrdersTrend() {
  const statistics = useAppSelector((s) => s.statistics_Slice);
  const displayMonths = useAppSelector((s) => s.uiSlice).charts.displayMonths;

  return (
    <Card className="w-full">
      <CardHeader className="w-full flex justify-between">
        <div className="flex flex-col gap-1.5">
          <span>Orders Trend</span>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">
              {statistics.monthlyOrders * displayMonths} Orders
            </span>
            <span className="text-sm text-neutral-400">
              {statistics.monthlyOrders * statistics.monthlyReturns} Return
            </span>
          </div>
        </div>
        <Badge variant="outline">
          <ArrowDownLeftIcon />
          -1%
        </Badge>
      </CardHeader>
      <CardContent className="text-neutral-400 text-sm">
        The orders calculated tend in the last {displayMonths} months.
      </CardContent>
    </Card>
  );
}
