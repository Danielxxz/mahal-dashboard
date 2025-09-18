import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ProductDrawer from "./details/product-drawer";
import { productsSlice__setOpenProduct } from "@/redux/slices/products";
import { cn } from "@/lib/utils";

export default function ProductsScreen() {
  const products = useAppSelector((s) => s.productsSlice).products;
  const dispatch = useAppDispatch();

  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 gap-3">
      <ProductDrawer />
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            className="w-full p-1.5 hover:scale-102 transition-all duration-300 cursor-pointer group"
            onClick={() =>
              dispatch(productsSlice__setOpenProduct({ open: true, product }))
            }
          >
            <CardContent className="p-3">
              <img
                src={product.image}
                className="w-full h-full rounded-md group-hover:scale-107 transition-all duration-700"
              />
            </CardContent>

            <CardFooter className="p-2 flex flex-col items-start px-3">
              <div className="w-full flex items-center justify-between gap-2">
                <h1 className="text-sm">{product.name}</h1>

                <div className="flex items-center gap-1.5">
                  <h1
                    className={cn("text-lg font-semibold", {
                      "line-through text-sm": product.offer,
                    })}
                  >{`$${product.price}`}</h1>
                  {product.offer ? (
                    <h1 className="text-lg font-semibold text-primary">{`$${product.offer}`}</h1>
                  ) : null}
                </div>
              </div>
              <h1 className="text-xs text-neutral-500">{product.category}</h1>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-sm">Colors:</span>
                <Card className="flex flex-row p-1.5 rounded-sm gap-1">
                  {product.colors.map((c) => (
                    <div
                      key={c.id}
                      className="w-3 h-3 rounded-3xl"
                      style={{
                        backgroundColor: c.hex,
                      }}
                    />
                  ))}
                </Card>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
