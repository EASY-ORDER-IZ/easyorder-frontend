import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  ' rounded-lg w-full px-9 py-3.5 cursor-pointer  flex  hover:bg-accent-hover  items-center justify-center gap-2.5  ',
  {
    variants: {
      variant: {
        default: '',
        primary:
          'bg-accent-primary text-background disabled:text-text-secondary  disabled:bg-text-disabled  ',
        secondary:
          ' bg-accent-primary/15 text-accent-primary hover:text-background hover:border-0 disabled:text-text-disabled disabled:border-text-disabled ',
      },
      size: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);
