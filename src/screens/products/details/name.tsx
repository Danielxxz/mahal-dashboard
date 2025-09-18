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
import { useMemo, useState } from "react";
import { toast } from "sonner";

export default function ProductDetails__Name({
  product,
  changed,
}: {
  product: Product;
  changed: (s: boolean) => void;
}) {
  const dispatch = useAppDispatch();

  const [oldValue, setOldValue] = useState(product.name);

  const [onUpdateProcess, setOnUpdateProcess] = useState(false);

  const updateProductName = (name: string) => {
    changed(true);
    dispatch(
      productsSlice__updateOpenedProduct({
        ...product,
        name,
      })
    );
  };

  const dispatchUpdatedProduct = async () => {
    const apiCrud = new APICrud();
    setOnUpdateProcess(true);
    const updated = await apiCrud.updateProduct({ product });
    if (updated) {
      toast.success("Name updated successfully");
      changed(false);
      dispatch(productsSlice__updateProduct(product));
      setOldValue(product.name);
    } else {
      toast.success("Failed to update name!");
    }
    setOnUpdateProcess(false);
  };

  const noChangesDetected = useMemo(() => {
    return oldValue == product.name;
  }, [product, oldValue]);

  return (
    <Card className="p-3">
      <div className="flex items-end gap-3">
        <div className="grid items-start gap-3 min-w-sm">
          <Label htmlFor="product-details-product-name">Name</Label>
          <Input
            id="product-details-product-name"
            type="text"
            value={product.name}
            disabled={onUpdateProcess}
            onChange={(e) => updateProductName(e.target.value)}
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
