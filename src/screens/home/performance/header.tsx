import { CardTitle } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { charts__setDisplayMonths } from "@/redux/slices/ui";

export default function OrdersPerformanceHeader() {
  const displayMonths = useAppSelector((s) => s.uiSlice).charts.displayMonths;
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex flex-col">
        <CardTitle className="text-xl">Orders Perfomance</CardTitle>
        <CardTitle className="text-neutral-500 text-sm font-normal">
          For the last {displayMonths} months
        </CardTitle>
      </div>
      <div>
        <Toggle
          aria-label="Toggle 3 months"
          className="rounded-none rounded-tl-md rounded-bl-md border-r-0 aria-pressed:!bg-primary/20 px-4"
          variant="outline"
          size="lg"
          pressed={displayMonths == 3}
          onPressedChange={(s) => {
            if (s) {
              dispatch(charts__setDisplayMonths(3));
            }
          }}
        >
          <span>3 Months</span>
        </Toggle>
        <Toggle
          aria-label="Toggle 6 months"
          className="rounded-none border-r-0 aria-pressed:!bg-primary/20 px-4"
          size="lg"
          variant="outline"
          pressed={displayMonths == 6}
          onPressedChange={(s) => {
            if (s) {
              dispatch(charts__setDisplayMonths(6));
            }
          }}
        >
          <span>6 Months</span>
        </Toggle>
        <Toggle
          aria-label="Toggle 12 months"
          className="rounded-none rounded-tr-md rounded-br-md border-l-none aria-pressed:!bg-primary/20 px-4"
          size="lg"
          variant="outline"
          pressed={displayMonths == 12}
          onPressedChange={(s) => {
            if (s) {
              dispatch(charts__setDisplayMonths(12));
            }
          }}
        >
          <span>12 Months</span>
        </Toggle>
      </div>
    </>
  );
}
