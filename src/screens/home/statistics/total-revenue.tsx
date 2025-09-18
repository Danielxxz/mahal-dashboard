import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toThousandsSeparators } from "@/lib/price";
import { useAppSelector } from "@/redux/hooks";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

export default function OrdersStatisticsTotalRevenue() {
  const statistics = useAppSelector((s) => s.statistics_Slice);
  const displayMonths = useAppSelector((s) => s.uiSlice).charts.displayMonths;

  return (
    <Card className="w-full">
      <CardHeader className="w-full flex justify-between">
        <div className="flex flex-col gap-2">
          <span>Total Revenue</span>
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-bold">
              $
              {toThousandsSeparators({
                price: statistics.monthlyRevenue * displayMonths,
              })}
            </span>
            <span className="text-xs text-neutral-400">
              ${toThousandsSeparators({ price: statistics.monthlyRevenue })}/mo
            </span>
          </div>
        </div>
        <Badge variant="outline">
          <ArrowUpRightIcon />
          +50%
        </Badge>
      </CardHeader>
      <CardContent className="text-neutral-400 text-sm">
        Total net incomes in the last {displayMonths} months, after calculated
        Taxs
      </CardContent>
    </Card>
  );
}
