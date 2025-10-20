import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva('w-full rounded-sm h-12 p-2 bg-background border flex   ', {
  variants: {
    variant: {
      default:
        ' placeholder:button-text button-text placeholder:text-text-secondary disabled:border-0 disabled:bg-text-disabled aria-[invalid=true]:border-status-danger focus:border-status-action focus:outline-none border-text-secondary  aria-[invalid=true]:focus:border-status-danger border ',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

function Input({ className, type, variant, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Input };
