import { APICrud } from "@/api/crud";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { v4 as uuid4 } from "uuid";
import Spinner from "@/components/ui/spinner";
import { useAppDispatch } from "@/redux/hooks";
import {
  productsSlice__updateOpenedProduct,
  productsSlice__updateProduct,
} from "@/redux/slices/products";
import type { Product, ProductColor } from "@/types/product";
import { PlusIcon } from "@phosphor-icons/react";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { XIcon } from "@phosphor-icons/react/dist/ssr";
import { Sketch } from "@uiw/react-color";

export default function ProductDetails__Colors({
  product,
  changed,
}: {
  product: Product;
  changed: (s: boolean) => void;
}) {
  const dispatch = useAppDispatch();

  const [oldValue, setOldValue] = useState(product.colors);

  const [onUpdateProcess, setOnUpdateProcess] = useState(false);

  const updateProductColors = (colors: ProductColor[]) => {
    changed(true);
    dispatch(
      productsSlice__updateOpenedProduct({
        ...product,
        colors,
      })
    );
  };

  const dispatchUpdatedProduct = async () => {
    const apiCrud = new APICrud();
    setOnUpdateProcess(true);
    const updated = await apiCrud.updateProduct({ product });
    if (updated) {
      toast.success("Colors updated successfully");
      changed(false);
      dispatch(productsSlice__updateProduct(product));
      setOldValue(product.colors);
    } else {
      toast.success("Failed to update colors!");
    }
    setOnUpdateProcess(false);
  };

  const noChangesDetected = useMemo(() => {
    return oldValue === product.colors;
  }, [product.colors, oldValue]);

  return (
    <Card className="p-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center flex-wrap min-w-sm">
          {product.colors.map((color) => {
            return (
              <div
                className="relative cursor-pointer group p-1.5"
                key={color.id}
              >
                <Popover>
                  <PopoverTrigger>
                    <div
                      className="w-11.5 h-11.5 rounded-md active:scale-95"
                      style={{
                        backgroundColor: color.hex,
                      }}
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <Sketch
                      style={{ marginLeft: 20 }}
                      disableAlpha
                      color={color.hex}
                      onChange={(newColor) => {
                        updateProductColors(
                          product.colors.map((c) => {
                            if (c.id == color.id) {
                              return {
                                id: c.id,
                                hex: newColor.hex,
                              };
                            }
                            return c;
                          })
                        );
                      }}
                    />
                  </PopoverContent>
                </Popover>

                <div className="absolute top-0 right-0 group-hover:scale-100 scale-0 transition-all duration-200 p-0.5 bg-destructive rounded-full">
                  <XIcon
                    onClick={() =>
                      updateProductColors(
                        product.colors.filter((c) => c.id !== color.id)
                      )
                    }
                    size={14}
                    weight="bold"
                  />
                </div>
              </div>
            );
          })}

          <Button
            size="icon"
            variant="outline"
            className="w-12 h-12 ml-1.5 mb-1.5 cursor-pointer"
            onClick={() =>
              updateProductColors([
                ...product.colors,
                {
                  hex: "#ffffff",
                  id: uuid4(),
                },
              ])
            }
          >
            <PlusIcon />
          </Button>
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
