export interface Product {
  id: string;
  name: string;
  price: number;
  offer?: number;
  category: string;
  colors: { id: string; hex: string }[];
  image: string;
  sales: ProductSale[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductSale {
  id: string;
  qt: number;
  createdAt: string;
  seller: string;
  buyer?: string;
}

export interface ProductColor {
  id: string;
  hex: string;
}
