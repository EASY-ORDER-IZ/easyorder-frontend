import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'w-full rounded-[0.313rem] border-text-main border p-4 focus:outline-none', // base styles
  {
    variants: {
      variant: {
        default: 'border-text-main focus:border-blue-500',
        error: 'border-red-500 focus:border-red-600',
        footer:
          'bg-input-bg h-10 w-77 rounded-[62px] px-[16px] py-[12px] pl-12 text-black lg:h-12 lg:w-78',
        search: 'border-gray-300 bg-gray-50 focus:border-gray-400',
        form: 'w-full rounded-[0.313rem] font-pop  p-3  ',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

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
