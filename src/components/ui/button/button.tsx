import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { buttonVariants } from './button-variants';

function Button({
  className,
  variant,
  size,
  title,
  prefixIcon,
  suffixIcon,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    title?: string;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(
        'flex items-center justify-center gap-2',
        buttonVariants({ variant, size }),
        className,
      )}
      {...props}
    >
      {prefixIcon && <span>{prefixIcon}</span>}
      {title}
      {suffixIcon && <span className="text-text-secondary">{suffixIcon}</span>}
    </Comp>
  );
}

export { Button };
