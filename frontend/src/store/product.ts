import { create } from "zustand";

import type { Product } from "../types/product.type";

interface ProductCreateResponse {
  success: boolean;
  data: Product;
}

interface ProductGetAllResponse {
  success: boolean;
  data: Product[];
}

interface ProductCreateResult {
  success: boolean;
  message?: string;
}

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  createProduct: (newProduct: Product) => Promise<ProductCreateResult>;
}
export const useProductStore = create<ProductStore>((set) => ({
  products: [] as Product[],
  setProducts: (products: Product[]) => set({ products }),
  createProduct: async (newProduct: Product): Promise<ProductCreateResult> => {
    // Validation
    if (
      newProduct.name.trim() === "" ||
      newProduct.price <= 0 ||
      !newProduct.image
    ) {
      return { success: false, message: "Invalid product data" };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        return { success: false, message: "Failed to create product" };
      }

      const data: ProductCreateResponse = await res.json();

      if (data.success) {
        set((state) => ({
          products: [...state.products, data.data],
        }));
        return { success: true, message: "New product added" };
      } else {
        return { success: false, message: "Server error" };
      }
    } catch (error: Error | any) {
      return { success: false, message: "Network error: " + error.message };
    }
  },
  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");

      if (!res.ok) {
        return { success: false, message: "Failed to fetch all products" };
      }

      const data: ProductGetAllResponse = await res.json();
      if (data.success) {
        set({ products: data.data });
        return { success: true, message: "Fetched all products" };
      } else {
        return { success: false, message: "Server error" };
      }
    } catch (error: Error | any) {
      return { success: false, message: "Network error: " + error.message };
    }
  },
}));
