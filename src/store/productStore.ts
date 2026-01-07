import { create } from 'zustand';

export type Product = {
  id: string;
  name: string;
  img: string | undefined;
  price: number;
  status: 'active' | 'draft' | 'archived' | string;
  createdAt?: string;
  services: number;
  category?: string;
};

type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  addProduct: (p: Product) => void;
  updateProduct: (id: string, p: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],

  setProducts: (products) => set({ products }),

  addProduct: (p) =>
    set((state) => ({
      products: [...state.products, p],
    })),

  updateProduct: (id, updatedData) =>
    set((state) => ({
      products: state.products.map((p) => (p.id === id ? { ...p, ...updatedData } : p)),
    })),

  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
}));
