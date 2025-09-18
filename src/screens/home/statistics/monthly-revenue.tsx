import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toThousandsSeparators } from "@/lib/price";
import { useAppSelector } from "@/redux/hooks";
import { ArrowDownLeftIcon } from "@phosphor-icons/react";

export default function OrdersStatisticsMonthlyRevenue() {
  const statistics = useAppSelector((s) => s.statistics_Slice);

  return (
    <Card className="w-full">
      <CardHeader className="w-full flex justify-between">
        <div className="flex flex-col gap-2">
          <span>Monthly Revenue</span>
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-bold">
              ${toThousandsSeparators({ price: statistics.monthlyRevenue })}
            </span>
            <span className="text-xs text-neutral-400">1 - 31 Aug, 2025</span>
          </div>
        </div>
        <Badge variant="outline">
          <ArrowDownLeftIcon />
          -8%
        </Badge>
      </CardHeader>
      <CardContent className="text-neutral-400 text-sm">
        Total net incomes in the last month, after calculated Taxs
      </CardContent>
    </Card>
  );
}
