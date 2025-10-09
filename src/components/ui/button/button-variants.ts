import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-button-bg  text-button-text cursor-pointer text-medium rounded-[72px]',

        outline: ' text-text-main border border-text-main',
        primary:
          'bg-primary-main text-background-100 hover:bg-primary-100 hover:text-text-main disabled:bg-primary-50 disabled:text-text-200',
        secondary:
          'bg-secondary-normal text-background-100 hover:bg-secondary-light-hover hover:text-text-main disabled:bg-secondary-light disabled:text-text-200',
        ghost:
          'bg-button-bg-sec text-medium  text-[16px] border-1 border-black/10 text-button-text-sec rounded-[72px]',
        link: 'text-primary underline-offset-4 hover:underline',
        pagLinkActive: 'bg-button-bg/10  text-button-bg',
        pagLinkInActive: 'text-button-bg/50  ',
      },
      size: {
        default: 'h-9  px-4 py-2 has-[>svg]:px-3',
        sm: 'w-button-sm  px-3xl py-md',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        apply: 'px-[54px] py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
