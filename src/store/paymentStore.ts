import { create } from 'zustand';
import type { PaymentFormType } from '../validation/paymentSchema';

interface PaymentStore {
  payments: PaymentFormType[];
  addPayment: (payment: PaymentFormType) => void;
  clearPayments: () => void;
}

export const usePaymentStore = create<PaymentStore>((set) => ({
  payments: [],
  addPayment: (payment) => set((state) => ({ payments: [...state.payments, payment] })),
  clearPayments: () => set({ payments: [] }),
}));
