import { create } from 'zustand';

interface User {
  name: string;
  email: string;
}

export const useAuthStore = create((set) => ({
  user: null,
  login: (user: User) => set({ user }),
  logout: () => set({ user: null }),
}));
