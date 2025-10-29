import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { FieldLabel } from './field';
import { useSearchParams } from 'react-router-dom';

const inputVariants = cva('  ', {
  variants: {
    variant: {
      default:
        'flex w-full outline-none  items-center text-text-primary text-input leading-5  placeholder:button-text button-text placeholder:text-text-disabled  ',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  required?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  linklabel?: string;
  target?: 'sign-in' | 'sign-up' | 'forget-password' | 'email-verfiy';
  error?: string | null;
}

function Input({
  className,
  prefixIcon,
  suffixIcon,
  label,
  error,
  target,
  linklabel,
  required,
  type,
  variant,
  ...props
}: InputProps) {
  const [, setSearchParams] = useSearchParams();

  const switchDialog = (target: 'sign-in' | 'sign-up' | 'forget-password' | 'email-verfiy') => {
    setSearchParams({ auth: target });
  };
  return (
    <div className="flex w-full flex-col gap-1.5">
      <FieldLabel htmlFor="form-rhf-demo-email">
        <span className={`button-text text-text-primary`}>{label}</span>{' '}
        {required && <span className="text-status-danger">*</span>}
      </FieldLabel>
      <div className="bg-background focus-within:border-status-action border-text-secondary aria-[invalid=true]:focus:border-status-danger disabled:bg-text-disabled aria-[invalid=true]:border-status-danger focus:border-status-action flex w-full justify-between gap-1 rounded-sm border p-2 focus:outline-none disabled:border-0">
        <div className="flex w-full items-center justify-center gap-2 py-1.5">
          {prefixIcon && <span className="text-text-disabled">{prefixIcon}</span>}
          <input
            type={type}
            data-slot="input"
            className={cn(inputVariants({ variant }), className)}
            {...props}
          />
        </div>
        <div className="flex items-center">
          {suffixIcon && <span className="text-text-disabled">{suffixIcon}</span>}
        </div>
      </div>
      <div className={`flex ${error ? 'justify-between' : 'justify-end'} items-center`}>
        <div>{error && <p className="text-status-danger text-sm">{error}</p>}</div>
        <div className="flex justify-end">
          <span
            onClick={() => (target ? switchDialog(target) : undefined)}
            className="link-text cursor-pointer"
          >
            {linklabel}
          </span>
        </div>
      </div>
    </div>
  );
}

export { Input };
