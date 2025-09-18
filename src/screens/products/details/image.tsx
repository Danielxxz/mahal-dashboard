import { APICrud } from "@/api/crud";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Spinner from "@/components/ui/spinner";
import { useAppDispatch } from "@/redux/hooks";
import {
  productsSlice__updateOpenedProduct,
  productsSlice__updateProduct,
} from "@/redux/slices/products";
import type { Product } from "@/types/product";
import { useState, useMemo } from "react";
import { toast } from "sonner";

export default function ProductDetails__Image({
  product,
  changed,
}: {
  product: Product;
  changed: (s: boolean) => void;
}) {
  const dispatch = useAppDispatch();

  const [oldValue, setOldValue] = useState(product.image);

  const [onUpdateProcess, setOnUpdateProcess] = useState(false);

  const updateProductImage = (image: string) => {
    changed(true);
    dispatch(
      productsSlice__updateOpenedProduct({
        ...product,
        image,
      })
    );
  };

  const dispatchUpdatedProduct = async () => {
    const apiCrud = new APICrud();
    setOnUpdateProcess(true);
    const updated = await apiCrud.updateProduct({ product });
    if (updated) {
      toast.success("Image updated successfully");
      changed(false);
      dispatch(productsSlice__updateProduct(product));
      setOldValue(product.image);
    } else {
      toast.success("Failed to update image!");
    }
    setOnUpdateProcess(false);
  };

  const noChangesDetected = useMemo(() => {
    return oldValue == product.image;
  }, [product, oldValue]);

  return (
    <Card className="p-3">
      <div className="flex items-end gap-3">
        <div className="grid items-start gap-3 min-w-sm">
          <Input
            id="product-details-product-image"
            type="text"
            value={product.image}
            disabled={onUpdateProcess}
            onChange={(e) => updateProductImage(e.target.value)}
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
