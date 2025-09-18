export const toThousandsSeparators = ({
  price,
  options,
}: {
  price: number;
  options?: { minimumFractionDigits?: number; maximumFractionDigits?: number };
}): string => {
  return price.toLocaleString("en-US", {
    minimumFractionDigits: options?.minimumFractionDigits ?? 2,
    maximumFractionDigits: options?.maximumFractionDigits ?? 2,
  });
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};
