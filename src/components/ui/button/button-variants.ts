import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  ' rounded-lg px-9 py-3.5 cursor-pointer flex items-center justify-center gap-2.5  ',
  {
    variants: {
      variant: {
        default: '',
        primary: 'bg-accent-primary text-background',
        secondary: 'border border-accent-primary text-accent-primary',
      },
      size: {
        default: '',
        sm: 'w-button-sm',
        md: 'w-button-md ',
        lg: 'w-button-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);
