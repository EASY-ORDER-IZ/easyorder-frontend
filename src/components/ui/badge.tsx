import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full leading-md border  text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default: 'border-transparent border-0  text-text-secondary [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent  border-0   text-background-tertiary [a&]:hover:bg-secondary/90',
        destructive: 'border-transparent border-0  text-background-tertiary',
        outline: 'text-accent-primary ',
        verfied: ' text-background-tertiary border-0 ',
        discount: 'text-accent-primary border-0   ',
        success: 'text-background border-0 ',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const badgeBackgrounds: Record<string, string> = {
  default: 'bg-background-tertiary',
  secondary: 'bg-text-secondary',
  destructive: 'bg-accent-primary',
  outline: 'bg-transparent border-accent-primary',
  verfied: 'bg-status-action',
  discount: 'bg-accent-primary/15',
  success: 'bg-status-success',
};

interface BadgeProps extends React.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  prefixIcon?: boolean;
  suffixIcon?: boolean;
}

function Badge({
  className,
  variant,
  asChild = false,
  prefixIcon = false,
  suffixIcon = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span';

  const safeVariant: NonNullable<typeof variant> = variant ?? 'default';

  return (
    <div className={cn('flex items-center rounded-full p-0.5', badgeBackgrounds[safeVariant])}>
      {prefixIcon && (
        <CircleCheck
          className={`h-4 w-4 ${variant === 'default' ? 'text-text-secondary' : 'text-background'} `}
        />
      )}
      <Comp
        data-slot="badge"
        className={cn(badgeVariants({ variant: safeVariant }), className)}
        {...props}
      />
      {suffixIcon && (
        <CircleCheck
          className={`h-4 w-4 ${variant === 'default' ? 'text-text-secondary' : 'text-background'} `}
        />
      )}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants };
