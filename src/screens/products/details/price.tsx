import { APICrud } from "@/api/crud";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/ui/spinner";
import { useAppDispatch } from "@/redux/hooks";
import {
  productsSlice__updateOpenedProduct,
  productsSlice__updateProduct,
} from "@/redux/slices/products";
import type { Product } from "@/types/product";
import { useState, useMemo } from "react";
import { toast } from "sonner";

export default function ProductDetails__Price({
  product,
  changed,
}: {
  product: Product;
  changed: (s: boolean) => void;
}) {
  const dispatch = useAppDispatch();

  const [oldValue, setOldValue] = useState(product.price);

  const [onUpdateProcess, setOnUpdateProcess] = useState(false);

  const updateProductPrice = (price: number) => {
    changed(true);
    dispatch(
      productsSlice__updateOpenedProduct({
        ...product,
        price,
      })
    );
  };

  const dispatchUpdatedProduct = async () => {
    const apiCrud = new APICrud();
    setOnUpdateProcess(true);
    const updated = await apiCrud.updateProduct({ product });
    if (updated) {
      toast.success("Price updated successfully");
      changed(false);
      dispatch(productsSlice__updateProduct(product));
      setOldValue(product.price);
    } else {
      toast.success("Failed to update price!");
    }
    setOnUpdateProcess(false);
  };

  const noChangesDetected = useMemo(() => {
    return oldValue == product.price;
  }, [product, oldValue]);

  return (
    <Card className="p-3">
      <div className="flex items-end gap-3">
        <div className="grid items-start gap-3">
          <Label htmlFor="product-details-product-price">Price</Label>
          <Input
            id="product-details-product-price"
            type="number"
            value={product.price}
            onChange={(e) => {
              const newOffer = parseInt(e.target.value || "0", 10);
              if (!isNaN(newOffer)) {
                updateProductPrice(newOffer);
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
