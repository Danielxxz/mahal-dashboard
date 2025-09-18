import { APICrud } from "@/api/crud";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { useAppDispatch } from "@/redux/hooks";
import {
  productsSlice__updateOpenedProduct,
  productsSlice__updateProduct,
} from "@/redux/slices/products";
import type { Product } from "@/types/product";
import { CheckCircleIcon, ProhibitIcon } from "@phosphor-icons/react";
import { cx } from "class-variance-authority";
import { useMemo, useState } from "react";
import { toast } from "sonner";

export default function ProductDetails__Offer({
  product,
  changed,
}: {
  product: Product;
  changed: (s: boolean) => void;
}) {
  const dispatch = useAppDispatch();

  const [oldValue, setOldValue] = useState(product.offer);

  const [onUpdateProcess, setOnUpdateProcess] = useState(false);

  const updateProductOffer = (offer?: number) => {
    changed(true);
    dispatch(
      productsSlice__updateOpenedProduct({
        ...product,
        offer,
      })
    );
  };

  const dispatchUpdatedProduct = async () => {
    if (product.offer && product.offer >= product.price) {
      toast.warning("Offer price should be less than the normal price.", {
        richColors: true,
      });
      return;
    }

    if (product.offer === 0) {
      toast.warning("Offer price should not be $0", { richColors: true });
      return;
    }

    const apiCrud = new APICrud();
    setOnUpdateProcess(true);
    const updated = await apiCrud.updateProduct({ product });
    if (updated) {
      toast.success("Offer updated successfully");
      changed(false);
      dispatch(productsSlice__updateProduct(product));
      setOldValue(product.offer);
    } else {
      toast.success("Failed to update offer!");
    }
    setOnUpdateProcess(false);
  };

  const noChangesDetected = useMemo(() => {
    return oldValue == product.offer;
  }, [product, oldValue]);

  const showOffer = useMemo(() => {
    return product.offer !== undefined;
  }, [product.offer]);

  return (
    <Card className="p-3">
      <div className="flex items-end gap-3">
        <div className="grid items-start gap-3">
          <Label
            htmlFor="product-details-product-offer"
            className={cx({
              "text-primary": showOffer,
            })}
          >
            Offer {showOffer ? <CheckCircleIcon /> : <ProhibitIcon />}{" "}
            <span className="text-[0.74rem]">
              {showOffer
                ? `(${Math.round(
                    ((product.offer ?? 45) * 100) / product.price
                  )}% OFF)`
                : ""}
            </span>
          </Label>
          <div className="flex items-center gap-3">
            <Switch
              checked={showOffer}
              onCheckedChange={(active) => {
                updateProductOffer(active ? product.price : undefined);
              }}
              id="product-details-product-offer-switch"
            />
            <Input
              id="product-details-product-offer-switch"
              type="number"
              disabled={!showOffer}
              value={product.offer ?? product.price}
              onChange={(e) => {
                const newOffer = parseInt(e.target.value || "0", 10);
                if (!isNaN(newOffer)) {
                  updateProductOffer(newOffer);
                }
              }}
            />
          </div>
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
