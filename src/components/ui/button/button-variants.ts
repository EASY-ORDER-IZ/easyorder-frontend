import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  ' rounded-lg  cursor-pointer  flex  hover:bg-accent-hover  items-center justify-center gap-2.5  ',
  {
    variants: {
      variant: {
        default: '',
        primary:
          'bg-accent-primary w-full px-9 py-3.5 text-background disabled:text-text-secondary  disabled:bg-text-disabled  ',
        secondary:
          ' bg-backgrount w-full px-9 py-3.5 text-text-primary border border-text-secondary hover:text-background hover:border-0 disabled:text-text-disabled disabled:border-text-disabled ',
        acc: 'w-6 h-6 bg-background-50  hover:bg-accent-hover ',
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
