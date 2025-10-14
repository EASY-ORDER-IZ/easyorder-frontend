import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  id: number;
  name?: string;
  email: string;
  password: string;
} | null;

type Auth = {
  user: User;
  login: (user: User) => void;

  logout: () => void;
};

export const useAuthStore = create<Auth>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
    },
  ),
);
