import { create } from 'zustand';

type DialogType = 'sign-in' | 'sign-up' | 'forgot-password' | 'email-verfiy' | null;

interface AuthDialogState {
  activeDialog: DialogType;
  openDialog: (dialog: DialogType) => void;
  closeDialog: () => void;
}

export const useAuthDialogStore = create<AuthDialogState>((set) => ({
  activeDialog: null,
  openDialog: (dialog) => set({ activeDialog: dialog }),
  closeDialog: () => set({ activeDialog: null }),
}));
