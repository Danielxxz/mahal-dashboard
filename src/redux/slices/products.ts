import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductsSlice } from "@/types/redux";
import type { Product } from "@/types/product";

/**
 * We set an array of `Product`as statics here, you can either retrieve them from the database,
 * or re-fill those Placeholder products, and keep them static here.
 */
const products: Product[] = [
  {
    id: "dbb44b61-e690-4c56-8109-8e6d35edfef3",
    name: "Nike Dunk Low",
    price: 70,
    category: "Little Kids' Shoes",
    colors: [
      {
        id: "a157775d-f544-4f04-be22-8cec03abb4c8",
        hex: "#e0a6b3",
      },
      {
        id: "7add2fd2-cc84-4f2d-a435-a76f5579ae59",
        hex: "#f45882",
      },
    ],
    image: "/Products/dbb44b61-e690-4c56-8109-8e6d35edfef3.jpeg",
    sales: [
      {
        id: "b71d8721-8e78-4f99-a0d4-8ffcfaf903dd",
        qt: 1,
        createdAt: "2025-09-14T19:00:12.653Z",
        seller: "57b0bc64-4903-4b15-9229-d16d2e4925e4",
        buyer: "89da0c5b-edb8-4528-97ad-c0ddffb4753f",
      },
    ],
    createdAt: "2025-09-14T19:00:12.653Z",
    updatedAt: "2025-09-14T19:00:12.653Z",
  },
  {
    id: "8cbf97e5-c19d-4299-ba0d-298874e8d8d9",
    name: "Nike Air Max Torch 4",
    price: 85,
    category: "Men's Shoes",
    colors: [
      {
        id: "d029c835-1d5a-46db-88a3-cedf6c9fc70e",
        hex: "#080609",
      },
    ],
    image: "/Products/8cbf97e5-c19d-4299-ba0d-298874e8d8d9.jpeg",
    sales: [
      {
        id: "6504aefc-6260-4347-9df5-550bf9c29d63",
        qt: 2,
        createdAt: "2025-09-14T19:00:12.653Z",
        seller: "57b0bc64-4903-4b15-9229-d16d2e4925e4",
        buyer: "89da0c5b-edb8-4528-97ad-c0ddffb4753f",
      },
    ],
    createdAt: "2025-09-14T19:00:12.653Z",
    updatedAt: "2025-09-14T19:00:12.653Z",
  },
  {
    id: "b474eaa2-442c-431a-ab1c-fff6f1af02ed",
    name: "Air Jordan 1 Mid SE",
    price: 84.97,
    offer: 120,
    category: "Big Kids' Shoes",
    colors: [
      {
        id: "1c204dae-61cc-4c11-87da-a8d91023d7e2",
        hex: "#e8e3d8",
      },
      {
        id: "0a682035-3701-4abf-a5f1-fbb02664793b",
        hex: "#bb9674",
      },
      {
        id: "c7867e6d-2755-4db7-8369-e2ef4ba2c44b",
        hex: "#df505f",
      },
    ],
    image: "/Products/b474eaa2-442c-431a-ab1c-fff6f1af02ed.jpeg",
    sales: [
      {
        id: "28d340a6-e9e5-4371-aafd-cb461a11f014",
        qt: 1,
        createdAt: "2025-09-14T19:00:12.653Z",
        seller: "57b0bc64-4903-4b15-9229-d16d2e4925e4",
        buyer: "89da0c5b-edb8-4528-97ad-c0ddffb4753f",
      },
    ],
    createdAt: "2025-09-14T19:00:12.653Z",
    updatedAt: "2025-09-14T19:00:12.653Z",
  },
  {
    id: "f37ee10e-fb8e-4260-99ec-5a9071a48863",
    name: "Jordan 1 Mid SE",
    price: 65,
    category: "Big Kids' Shoes",
    colors: [
      {
        id: "04182e99-001f-4139-9215-02de0a020ecb",
        hex: "#e3e0e5",
      },
      {
        id: "076c859f-0f79-49b3-bb8c-00afb7299876",
        hex: "#ffffff",
      },
      {
        id: "076c859f-0f79-49b3-bb8c-00afb7299876",
        hex: "#204a7d",
      },
    ],
    image: "/Products/f37ee10e-fb8e-4260-99ec-5a9071a48863.jpeg",
    sales: [
      {
        id: "1fc7ca07-421e-4085-a8ff-93009eede3e2",
        qt: 1,
        createdAt: "2025-09-14T19:00:12.653Z",
        seller: "57b0bc64-4903-4b15-9229-d16d2e4925e4",
        buyer: "89da0c5b-edb8-4528-97ad-c0ddffb4753f",
      },
    ],
    createdAt: "2025-09-14T19:00:12.653Z",
    updatedAt: "2025-09-14T19:00:12.653Z",
  },
  {
    id: "8881f572-640b-4baa-9639-c01b8f3fdfe5",
    name: "Nike Air Max INTRLK Lite",
    price: 59.97,
    offer: 85,
    category: "Big Kids' Shoes",
    colors: [
      {
        id: "a451bb9a-96af-4ca6-bd21-9e80beccb0c4",
        hex: "#ffffff",
      },
    ],
    image: "/Products/8881f572-640b-4baa-9639-c01b8f3fdfe5.jpeg",
    sales: [
      {
        id: "505d0ed8-4f8c-453f-a727-9e6f515a365c",
        qt: 2,
        createdAt: "2025-09-14T19:00:12.653Z",
        seller: "57b0bc64-4903-4b15-9229-d16d2e4925e4",
        buyer: "89da0c5b-edb8-4528-97ad-c0ddffb4753f",
      },
    ],
    createdAt: "2025-09-14T19:00:12.653Z",
    updatedAt: "2025-09-14T19:00:12.653Z",
  },
  {
    id: "7a87c31d-57f8-4901-ae93-5c760d910b5d",
    name: "Air Jordan 1 Retro High OG (Shattered Backboard)",
    price: 185,
    category: "Men's Shoes",
    colors: [
      {
        id: "fa471853-792e-4a5e-9e7f-f951db912de6",
        hex: "#f66616",
      },
      {
        id: "0712f970-50c9-48a3-b931-db18bb62b82d",
        hex: "#000000",
      },
    ],
    image: "/Products/7a87c31d-57f8-4901-ae93-5c760d910b5d.jpeg",
    sales: [
      {
        id: "a62f7bf3-265f-48fb-84ed-58c2f80ce4d7",
        qt: 1,
        createdAt: "2025-09-14T19:00:12.653Z",
        seller: "57b0bc64-4903-4b15-9229-d16d2e4925e4",
        buyer: "89da0c5b-edb8-4528-97ad-c0ddffb4753f",
      },
    ],
    createdAt: "2025-09-14T19:00:12.653Z",
    updatedAt: "2025-09-14T19:00:12.653Z",
  },
  {
    id: "0e4c9fab-c095-4826-9c76-68d235ba6daf",
    name: "Jordan 1 Low Alt SE",
    price: 68.97,
    offer: 80,
    category: "Little Kids' Shoes",
    colors: [
      {
        id: "e0b88db7-4244-401a-bc40-0f3495a0c555",
        hex: "#cbaa86",
      },
      {
        id: "309d040b-f744-43ae-b301-c08f764309f5",
        hex: "#000000",
      },
    ],
    image: "/Products/0e4c9fab-c095-4826-9c76-68d235ba6daf.jpeg",
    sales: [
      {
        id: "9c5d5080-9f3c-4c63-b7c3-6fcc0692cc73",
        qt: 1,
        createdAt: "2025-09-14T19:00:12.653Z",
        seller: "57b0bc64-4903-4b15-9229-d16d2e4925e4",
        buyer: "89da0c5b-edb8-4528-97ad-c0ddffb4753f",
      },
      {
        id: "810133d8-c6d2-4d40-a483-4e7ee965c71a",
        qt: 1,
        createdAt: "2025-09-14T19:00:12.653Z",
        seller: "57b0bc64-4903-4b15-9229-d16d2e4925e4",
        buyer: "89da0c5b-edb8-4528-97ad-c0ddffb4753f",
      },
    ],
    createdAt: "2025-09-14T19:00:12.653Z",
    updatedAt: "2025-09-14T19:00:12.653Z",
  },
  {
    id: "d89c006b-c9b3-485e-956e-628196338e32",
    name: "Jordan Spizike Low SE",
    price: 125,
    category: "Big Kids' Shoes",
    colors: [
      {
        id: "8e29009a-f5e1-4cc5-b5a8-2fdae73a011a",
        hex: "#242428",
      },
      {
        id: "c20fc44e-8c95-432e-a6e0-730a442dfacd",
        hex: "#2d8ab9",
      },
      {
        id: "ce0d7e12-9e3b-4fb1-8384-2126b4e604b4",
        hex: "#ebcd09",
      },
      {
        id: "727794a0-cdee-437c-87a4-1968e9990581",
        hex: "#eb2045",
      },
      {
        id: "26ec0d4b-780c-4639-a24a-c543f12c2e0f",
        hex: "#e5dfdf",
      },
    ],
    image: "/Products/d89c006b-c9b3-485e-956e-628196338e32.jpeg",
    sales: [
      {
        id: "1e3e1d87-293a-48fb-85f7-65eb8e79e492",
        qt: 2,
        createdAt: "2025-09-14T19:00:12.653Z",
        seller: "57b0bc64-4903-4b15-9229-d16d2e4925e4",
        buyer: "89da0c5b-edb8-4528-97ad-c0ddffb4753f",
      },
      {
        id: "a3f7c246-593c-45ba-8993-df94f76576d2",
        qt: 1,
        createdAt: "2025-09-14T19:00:12.653Z",
        seller: "57b0bc64-4903-4b15-9229-d16d2e4925e4",
        buyer: "89da0c5b-edb8-4528-97ad-c0ddffb4753f",
      },
    ],
    createdAt: "2025-09-14T19:00:12.653Z",
    updatedAt: "2025-09-14T19:00:12.653Z",
  },
];

const initialState: ProductsSlice = {
  products,
  openProduct: {
    open: false,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsSlice__setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    productsSlice__addProduct: (state, action: PayloadAction<Product>) => {
      const exists = state.products.find((p) => p.id === action.payload.id);
      if (!exists) {
        state.products = [...state.products, action.payload];
      }
    },

    productsSlice__removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },

    productsSlice__updateProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.map((p) =>
        p.id === action.payload.id ? action.payload : p
      );
      state.openProduct = {
        ...state.openProduct,
        product: action.payload,
      };
    },

    productsSlice__setOpenProduct: (
      state,
      action: PayloadAction<ProductsSlice["openProduct"]>
    ) => {
      const { open, product } = action.payload;
      if (open) {
        state.openProduct = { open: true, product };
      } else {
        // just close immediately
        state.openProduct = { open: false, product: undefined };
      }
    },
    productsSlice__updateOpenedProduct: (
      state,
      action: PayloadAction<ProductsSlice["openProduct"]["product"]>
    ) => {
      state.openProduct = { ...state.openProduct, product: action.payload };
    },
  },
});

export const {
  productsSlice__setProducts,
  productsSlice__addProduct,
  productsSlice__removeProduct,
  productsSlice__setOpenProduct,
  productsSlice__updateProduct,
  productsSlice__updateOpenedProduct,
} = productsSlice.actions;
export default productsSlice.reducer;
