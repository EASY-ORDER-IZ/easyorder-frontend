import type { CartItem } from '@/types/Carttypes';

export type Totals = {
  subtotal: number;
  discount: number;
  delivery: number;
  total: number;
};

const cartSummary = (items: CartItem[], promo: string): Totals => {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discount = promo.trim().toUpperCase() === 'SAVE10' ? subtotal * 0.1 : 0;
  const delivery = subtotal > 0 ? 15 : 0;
  const total = Math.max(0, subtotal - discount + delivery);
  return { subtotal, discount, delivery, total };
};
export default cartSummary;
