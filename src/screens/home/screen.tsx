import OrdersPerformance from "./performance/showcase";
import OrdersStatistics from "./statistics/shawcase";

export default function HomeScreen() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start p-3 gap-3">
      <OrdersStatistics />
      <OrdersPerformance />
    </div>
  );
}
