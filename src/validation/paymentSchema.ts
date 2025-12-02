import { z } from 'zod';

export const PaymentSchema = z.object({
  nameOnCard: z.string().trim().min(1, { message: 'Name on card is required' }),

  cardNumber: z
    .string()
    .trim()
    .refine((v) => /^\d{16}$/.test(v.replace(/\s+/g, '')), {
      message: 'Card number must contain 16 digits',
    }),

  month: z
    .string()
    .trim()
    .refine(
      (v) => {
        const n = Number(v);
        return !isNaN(n) && n >= 1 && n <= 12;
      },
      { message: 'Enter a valid month (1–12)' },
    ),

  year: z
    .string()
    .trim()
    .refine((v) => /^\d{2,4}$/.test(v) && Number(v) >= 0, { message: 'Enter a valid year' }),

  cvv: z
    .string()
    .trim()
    .refine((v) => /^\d{3}$/.test(v), {
      message: 'Enter a valid 3-digit CVV',
    }),

  sameAddress: z.boolean().optional(),
});

export type PaymentFormType = z.infer<typeof PaymentSchema>;
