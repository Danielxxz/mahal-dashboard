import OrdersStatisticsMonthlyRevenue from "./monthly-revenue";
import OrdersStatisticsMonthlyOrdersTrend from "./monthyl-orders-trend";
import OrdersStatisticsOrdersTrend from "./orders-trend";
import OrdersStatisticsTotalRevenue from "./total-revenue";

export default function OrdersStatistics() {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-3">
      <OrdersStatisticsTotalRevenue />
      <OrdersStatisticsMonthlyRevenue />
      <OrdersStatisticsOrdersTrend />
      <OrdersStatisticsMonthlyOrdersTrend />
    </div>
  );
}
