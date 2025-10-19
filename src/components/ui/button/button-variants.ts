import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  ' rounded-lg px-9 py-3.5 cursor-pointer flex  hover:bg-accent-hover  items-center justify-center gap-2.5  ',
  {
    variants: {
      variant: {
        default: '',
        primary: 'bg-accent-primary text-background disabled:bg-text-disabled  ',
        secondary:
          'border border-accent-primary text-accent-primary hover:text-background hover:border-0 disabled:text-text-disabled disabled:border-text-disabled ',
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
