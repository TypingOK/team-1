import { cn } from "@/utils/index";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";
// import { Slot } from "@radix-ui/react-slot";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva(
  `rounded-[10px] flex justify-center items-center text-base font-semibold px-10 py-[12px]`,
  {
    variants: {
      variant: {
        nomal: `bg-neutral-0 border border-neutral-20 text-neutral-70 active:bg-neutral-90 disabled:text-neutral-20 hover:bg-neutral-5`,
        primary: `bg-primary-100 text-neutral-0 active:bg-neutral-90  disabled:bg-primary-30 hover:bg-primary-80`,
        ghost: `bg-none border-none text-neutral-70 active:bg-neutral-90 disabled:text-neutral-20 hover:bg-neutral-5`,
        outline: "text-neutral-100 bg-none",
        outlinePrimary:
          "border-primary-100 text-primary-100 hover:border-primary-80",
        outlineWhite: "bg-neutral-0 text-primary-100 border-none",
      },
      popupSize: {
        small: `w-[10.35938rem] h-[2.8125rem] p-[0.46875rem]`,
        big: `w-[16.81413rem] h-[4.54969rem] text-2xl font-semibold`,
      },
    },
    defaultVariants: {
      variant: `nomal`,
      popupSize: `big`,
    },
  },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, popupSize, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, popupSize, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export { Button, buttonVariants };
