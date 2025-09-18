import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

export default function OrdersStatisticsMonthlyOrdersTrend() {
  const statistics = useAppSelector((s) => s.statistics_Slice);

  return (
    <Card className="w-full">
      <CardHeader className="w-full flex justify-between">
        <div className="flex flex-col gap-1.5">
          <span>Monthly Orders Trend</span>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">
              {statistics.monthlyOrders} Orders
            </span>
            <span className="text-sm text-neutral-400">
              {statistics.monthlyReturns} Return
            </span>
          </div>
        </div>
        <Badge variant="outline">
          <ArrowUpRightIcon />
          +4%
        </Badge>
      </CardHeader>
      <CardContent className="text-neutral-400 text-sm">
        The monthly orders trend calculated when an order delivered or returned.
      </CardContent>
    </Card>
  );
}
