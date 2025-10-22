import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full leading-md border px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
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
};

interface BadgeProps extends React.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  showIcon?: boolean;
}

function Badge({ className, variant, asChild = false, showIcon = true, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : 'span';

  const safeVariant: NonNullable<typeof variant> = variant ?? 'default';

  return (
    <div className={cn('flex items-center rounded-full px-2 py-1', badgeBackgrounds[safeVariant])}>
      {showIcon && (
        <CircleCheck
          className={`h-4 w-4 ${variant === 'default' ? 'text-text-secondary' : 'text-background'} `}
        />
      )}
      <Comp
        data-slot="badge"
        className={cn(badgeVariants({ variant: safeVariant }), className)}
        {...props}
      />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants };
