import { APICrud } from "@/api/crud";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Spinner from "@/components/ui/spinner";
import { useAppDispatch } from "@/redux/hooks";
import {
  productsSlice__updateOpenedProduct,
  productsSlice__updateProduct,
} from "@/redux/slices/products";
import type { Product, ProductSale } from "@/types/product";
import { CaretDownIcon } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

export default function ProductDetails__Sales({
  product,
  changed,
}: {
  product: Product;
  changed: (s: boolean) => void;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="overflow-y-auto w-full border last:border-b rounded-md px-4"
    >
      {product.sales.map((sale) => {
        return (
          <AccordionItem value={sale.id} key={sale.id}>
            <AccordionTrigger>{`#${sale.id}`}</AccordionTrigger>
            <AccordionContent className="w-full flex items-start flex-wrap gap-6">
              <SaleId id={sale.id} />
              <SaleSeller seller={sale.seller} />
              {sale.buyer ? <SaleBuyer buyer={sale.buyer} /> : null}
              <SaleQt sale={sale} changed={changed} product={product} />
              <SaleCreatedAt sale={sale} changed={changed} product={product} />
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

function SaleId({ id }: { id: string }) {
  return (
    <Card className="p-3">
      <div className="flex items-end gap-3">
        <div className="grid items-start gap-3 min-w-sm">
          <Label htmlFor={`${id}-details-id`}>Id (Can't change)</Label>
          <Input
            id={`${id}-details-id`}
            type="text"
            readOnly
            defaultValue={id}
          />
        </div>
      </div>
    </Card>
  );
}

function SaleBuyer({ buyer }: { buyer: string }) {
  return (
    <Card className="p-3">
      <div className="flex items-end gap-3">
        <div className="grid items-start gap-3 min-w-sm">
          <Label htmlFor={`${buyer}-details-buyer`}>
            Seller (Can't change)
          </Label>
          <Input
            id={`${buyer}-details-buyer`}
            type="text"
            readOnly
            defaultValue={buyer}
          />
        </div>
      </div>
    </Card>
  );
}

function SaleSeller({ seller }: { seller: string }) {
  return (
    <Card className="p-3">
      <div className="flex items-end gap-3">
        <div className="grid items-start gap-3 min-w-sm">
          <Label htmlFor={`${seller}-details-seller`}>
            Buyer (Can't change)
          </Label>
          <Input
            id={`${seller}-details-seller`}
            type="text"
            readOnly
            defaultValue={seller}
          />
        </div>
      </div>
    </Card>
  );
}

function SaleQt({
  product,
  sale,
  changed,
}: {
  product: Product;
  sale: ProductSale;
  changed: (s: boolean) => void;
}) {
  const dispatch = useAppDispatch();
  const [oldValue, setOldValue] = useState(sale.qt);
  const [onUpdateProcess, setOnUpdateProcess] = useState(false);

  const updateSaleCreatedAt = (qt: number) => {
    changed(true);
    dispatch(
      productsSlice__updateOpenedProduct({
        ...product,
        sales: product.sales.map((s) => {
          if (s.id == sale.id) {
            return {
              ...sale,
              qt,
            };
          }
          return s;
        }),
      })
    );
  };

  const dispatchUpdatedProduct = async () => {
    const apiCrud = new APICrud();
    setOnUpdateProcess(true);
    const updated = await apiCrud.updateProduct({ product });
    if (updated) {
      toast.success("Sale quantity updated successfully");
      changed(false);
      dispatch(productsSlice__updateProduct(product));
      setOldValue(sale.qt);
    } else {
      toast.success("Failed to update sale quantity!");
    }
    setOnUpdateProcess(false);
  };

  const noChangesDetected = useMemo(() => {
    return oldValue == sale.qt;
  }, [product, oldValue]);

  return (
    <Card className="p-3">
      <div className="flex items-end gap-3">
        <div className="grid items-start gap-3">
          <Label htmlFor={`${sale.id}-details-qt`}>Quantity</Label>
          <Input
            id={`${sale.id}-details-qt`}
            type="number"
            defaultValue={sale.qt}
            onChange={(e) => {
              const newOffer = parseInt(e.target.value || "0", 10);
              if (!isNaN(newOffer)) {
                updateSaleCreatedAt(newOffer);
              }
            }}
          />
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

function SaleCreatedAt({
  product,
  sale,
  changed,
}: {
  product: Product;
  sale: ProductSale;
  changed: (s: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>(new Date(sale.createdAt));

  const dispatch = useAppDispatch();
  const [oldValue, setOldValue] = useState(sale.createdAt);
  const [onUpdateProcess, setOnUpdateProcess] = useState(false);

  const updateSaleCreatedAt = (createdAt: string) => {
    changed(true);
    dispatch(
      productsSlice__updateOpenedProduct({
        ...product,
        sales: product.sales.map((s) => {
          if (s.id == sale.id) {
            return {
              ...sale,
              createdAt,
            };
          }
          return s;
        }),
      })
    );
  };

  const dispatchUpdatedProduct = async () => {
    const apiCrud = new APICrud();
    setOnUpdateProcess(true);
    const updated = await apiCrud.updateProduct({ product });
    if (updated) {
      toast.success("Sale date updated successfully");
      changed(false);
      dispatch(productsSlice__updateProduct(product));
      setOldValue(sale.createdAt);
    } else {
      toast.success("Failed to update sale date!");
    }
    setOnUpdateProcess(false);
  };

  const noChangesDetected = useMemo(() => {
    return oldValue == sale.createdAt;
  }, [product, oldValue]);

  return (
    <Card className="p-3">
      <div className="flex items-end gap-3">
        <div className="flex flex-col gap-3">
          <Label htmlFor={`${sale.id}-details-created-at`} className="px-1">
            Created at
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id={`${sale.id}-details-created-at`}
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
                onSelect={(date) => {
                  if (date) {
                    setDate(date);
                    setOpen(false);
                    updateSaleCreatedAt(date.toISOString());
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
