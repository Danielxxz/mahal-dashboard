import { Card, CardContent, CardHeader } from "@/components/ui/card";
import OrdersPerformanceHeader from "./header";
import OrdersPerformanceChart from "./chart";

export default function OrdersPerformance() {
  return (
    <Card className="w-full">
      <CardHeader className="w-full flex items-start justify-start gap-6 flex-col lg:gap-2 lg:flex-row lg:justify-between">
        <OrdersPerformanceHeader />
      </CardHeader>

      <CardContent>
        <OrdersPerformanceChart />
      </CardContent>
    </Card>
  );
}
