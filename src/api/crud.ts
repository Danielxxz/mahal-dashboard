import type { Product } from "@/types/product";
import delay from "delay";

export class APICrud {
  /**
   * You can update the product on the database from this method.
   * After each update, click save button to run this method.
   *
   * @param: Product interface with the new changes
   * @returns: Promise `boolean`, you can return anything.
   */
  async updateProduct({ product }: { product: Product }): Promise<boolean> {
    console.log(product);
    await delay(1000);
    return true;
  }
}
