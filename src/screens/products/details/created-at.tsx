import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { Product } from "@/types/product";
import { useMemo, useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";
import { APICrud } from "@/api/crud";
import { useAppDispatch } from "@/redux/hooks";
import {
  productsSlice__updateOpenedProduct,
  productsSlice__updateProduct,
} from "@/redux/slices/products";
import { toast } from "sonner";
import Spinner from "@/components/ui/spinner";

export function ProductDetails__CreatedAt({
  product,
  changed,
}: {
  product: Product;
  changed: (s: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>(new Date(product.createdAt));

  const dispatch = useAppDispatch();

  const [oldValue, setOldValue] = useState(product.createdAt);

  const [onUpdateProcess, setOnUpdateProcess] = useState(false);

  const updateProductUpdatedAt = (date: Date) => {
    changed(true);
    dispatch(
      productsSlice__updateOpenedProduct({
        ...product,
        createdAt: date.toISOString(),
      })
    );
  };

  const dispatchUpdatedProduct = async () => {
    const apiCrud = new APICrud();
    setOnUpdateProcess(true);
    const updated = await apiCrud.updateProduct({ product });
    if (updated) {
      toast.success("Created at date updated successfully");
      changed(false);
      dispatch(productsSlice__updateProduct(product));
      setOldValue(product.createdAt);
    } else {
      toast.success("Failed to update created at date!");
    }
    setOnUpdateProcess(false);
  };

  const noChangesDetected = useMemo(() => {
    return oldValue === product.createdAt;
  }, [product.createdAt, oldValue]);

  return (
    <Card className="p-3">
      <div className="flex items-end gap-3">
        <div className="flex flex-col gap-3">
          <Label
            htmlFor="product-details-product-created-at-date"
            className="px-1"
          >
            Created at
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="product-details-product-created-at-date"
                className="w-48 justify-between font-normal"
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <CaretDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                disabled={onUpdateProcess}
                onSelect={(date) => {
                  if (date) {
                    setDate(date);
                    updateProductUpdatedAt(date);
                    setOpen(false);
                  }
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <Button
          onClick={dispatchUpdatedProduct}
          disabled={onUpdateProcess || noChangesDetected}
        >
          {onUpdateProcess ? <Spinner /> : "Save"}
        </Button>
      </div>
    </Card>
  );
}

export function ProductDetails__UpdatedAt({
  product,
  changed,
}: {
  product: Product;
  changed: (s: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>(new Date(product.updatedAt));

  const dispatch = useAppDispatch();

  const [oldValue, setOldValue] = useState(product.updatedAt);

  const [onUpdateProcess, setOnUpdateProcess] = useState(false);

  const updateProductUpdatedAt = (date: Date) => {
    changed(true);
    dispatch(
      productsSlice__updateOpenedProduct({
        ...product,
        updatedAt: date.toISOString(),
      })
    );
  };

  const dispatchUpdatedProduct = async () => {
    const apiCrud = new APICrud();
    setOnUpdateProcess(true);
    const updated = await apiCrud.updateProduct({ product });
    if (updated) {
      toast.success("Updated at date updated successfully");
      changed(false);
      dispatch(productsSlice__updateProduct(product));
      setOldValue(product.updatedAt);
    } else {
      toast.success("Failed to update updated at date!");
    }
    setOnUpdateProcess(false);
  };

  const noChangesDetected = useMemo(() => {
    return oldValue === product.updatedAt;
  }, [product.updatedAt, oldValue]);

  return (
    <Card className="p-3">
      <div className="flex items-end gap-3">
        <div className="flex flex-col gap-3">
          <Label
            htmlFor="product-details-product-created-at-date"
            className="px-1"
          >
            Updated at
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="product-details-product-created-at-date"
                className="w-48 justify-between font-normal"
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <CaretDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                disabled={onUpdateProcess}
                onSelect={(date) => {
                  if (date) {
                    setDate(date);
                    updateProductUpdatedAt(date);
                    setOpen(false);
                  }
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <Button
          onClick={dispatchUpdatedProduct}
          disabled={onUpdateProcess || noChangesDetected}
        >
          {onUpdateProcess ? <Spinner /> : "Save"}
        </Button>
      </div>
    </Card>
  );
}
