import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-button-bg  text-button-text cursor-pointer text-medium rounded-[72px]',

        outline: ' text-text-main border border-text-main',
        primary:
          'bg-primary-main text-[1rem] text-background-100 hover:bg-primary-100 hover:text-text-main disabled:bg-primary-50 disabled:text-text-200',
        secondary:
          'bg-secondary-normal text-background-100 hover:bg-secondary-light-hover hover:text-text-main disabled:bg-secondary-light disabled:text-text-200',
        ghost:
          'bg-button-bg-sec text-medium  text-[16px] border-1 border-black/10 text-button-text-sec rounded-[72px]',
        link: 'text-primary underline-offset-4 hover:underline',
        acc: 'rounded-full bg-white border border-[#00000033]',
        orderbutton: 'rounded-[62px] bg-button-bg text-button-text',
        pagLinkActive: 'bg-button-bg/10  text-button-bg',
        pagLinkInActive: 'text-button-bg/50  ',
        newslatter: 'bg-background-100 text-text-900 rounded-9 ',
        toggle:
          'bg-primary-main  transition-all duration-200 ease-in-out disabled:bg-primary-50 cursor-pointer',
      },
      size: {
        toggle: 'w-[70px] h-[36px] rounded-full p-0.5',
        default: 'h-9  px-4 py-2 has-[>svg]:px-3',
        sm: 'w-button-sm  px-15 py-4 rounded-[3.75rem] ',
        md: 'w-button-md  px-15 py-4 rounded-[3.75rem] ',
        lg: 'w-button-lg  px-15 py-4 rounded-[3.75rem]',
        icon: 'size-[28px]',
        icon1: 'size-9',
        apply: 'px-[54px] py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
