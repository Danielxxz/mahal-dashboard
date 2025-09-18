import { cn } from "@/lib/utils";

export default function Spinner({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-5 h-5 border-[3px] border-secondary border-t-primary rounded-full animate-spin",
        className
      )}
      {...props}
    />
  );
}
