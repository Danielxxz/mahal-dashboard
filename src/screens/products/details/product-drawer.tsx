import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { productsSlice__setOpenProduct } from "@/redux/slices/products";
import ProductDetails__Name from "./name";
import ProductDetails__Id from "./id";
import ProductDetails__Price from "./price";
import ProductDetails__Catgeory from "./category";
import ProductDetails__Image from "./image";
import {
  ProductDetails__CreatedAt,
  ProductDetails__UpdatedAt,
} from "./created-at";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NotePencilIcon } from "@phosphor-icons/react";
import ProductDetails__Offer from "./offer";
import ProductDetails__Colors from "./colors";
import ProductDetails__Sales from "./sales";
import { useEffect, useState } from "react";
import SaveChangesAlert from "../save-changes-alert";

export default function ProductDrawer() {
  const productsSlice = useAppSelector((s) => s.productsSlice);
  const openProduct = productsSlice.openProduct;
  const dispatch = useAppDispatch();

  const [preventClose, setPreventClose] = useState(false);
  const [showSaveChangesDialog, setShowSaveChangesDialog] = useState(false);

  const onCloseDrawer = () => {
    if (!preventClose) {
      dispatch(
        productsSlice__setOpenProduct({ open: false, product: undefined })
      );
    } else {
      setShowSaveChangesDialog(true);
    }
  };

  useEffect(() => {
    return () => {
      setPreventClose(false);
    };
  }, []);

  return (
    <Drawer
      open={openProduct.open}
      onOpenChange={(open) => {
        if (!open) {
          onCloseDrawer();
        }
      }}
    >
      <DrawerContent className="w-full flex flex-col justify-start p-6">
        {openProduct.product ? (
          <>
            <DrawerHeader className="p-0 my-6">
              <DrawerTitle className="w-full flex justify-start gap-3 text-primary text-xl">
                <NotePencilIcon size={28} weight="duotone" />
                Update Product Details
              </DrawerTitle>
            </DrawerHeader>

            <Accordion
              type="single"
              collapsible
              className="overflow-y-auto border last:border-b rounded-md px-4"
            >
              <AccordionItem value="id-name-category">
                <AccordionTrigger>Id - Name - Category</AccordionTrigger>
                <AccordionContent className="w-full flex items-start flex-wrap gap-6">
                  <ProductDetails__Id id={openProduct.product.id} />
                  <ProductDetails__Name
                    product={openProduct.product}
                    changed={setPreventClose}
                  />
                  <ProductDetails__Catgeory
                    product={openProduct.product}
                    changed={setPreventClose}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="price-offer">
                <AccordionTrigger>Price & Offer</AccordionTrigger>
                <AccordionContent className="w-full flex items-start flex-wrap gap-6">
                  <ProductDetails__Price
                    product={openProduct.product}
                    changed={setPreventClose}
                  />
                  <ProductDetails__Offer
                    product={openProduct.product}
                    changed={setPreventClose}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="image">
                <AccordionTrigger>Image</AccordionTrigger>
                <AccordionContent className="w-full flex items-center flex-wrap gap-4">
                  <ProductDetails__Image
                    product={openProduct.product}
                    changed={setPreventClose}
                  />
                  <img
                    src={openProduct.product.image}
                    className="object-fit max-w-[60px] rounded-md"
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="date">
                <AccordionTrigger>Date</AccordionTrigger>
                <AccordionContent className="w-full flex items-start flex-wrap gap-6">
                  <ProductDetails__CreatedAt
                    product={openProduct.product}
                    changed={setPreventClose}
                  />
                  <ProductDetails__UpdatedAt
                    product={openProduct.product}
                    changed={setPreventClose}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="colors">
                <AccordionTrigger>Colors</AccordionTrigger>
                <AccordionContent className="w-full flex items-start flex-wrap gap-6">
                  <ProductDetails__Colors
                    product={openProduct.product}
                    changed={setPreventClose}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sales">
                <AccordionTrigger>Sales</AccordionTrigger>
                <AccordionContent className="w-full flex items-start flex-wrap gap-6">
                  <ProductDetails__Sales
                    product={openProduct.product}
                    changed={setPreventClose}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        ) : null}
        <DrawerFooter>
          <DrawerClose className="w-full flex justify-end">
            <Button
              onClick={() => {
                onCloseDrawer();
              }}
              variant="outline"
            >
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
      <SaveChangesAlert
        open={showSaveChangesDialog}
        onClose={() => setShowSaveChangesDialog(false)}
        onSkipChanges={() => {
          setShowSaveChangesDialog(false);
          dispatch(
            productsSlice__setOpenProduct({ open: false, product: undefined })
          );
        }}
      />
    </Drawer>
  );
}
