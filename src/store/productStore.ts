import { create } from 'zustand';

export type product = {
  id: string;
  name: string;
  img: string;
  price: number;
  status: 'active' | 'draft' | 'archived';
  createdAt: string;
  services: number;
};

type productStore = {
  products: product[];
  addProduct: (p: product) => void;
};

export const useProductStore = create<productStore>((set) => ({
  products: [],
  addProduct: (p) => set((state) => ({ products: [...state.products, p] })),
}));
