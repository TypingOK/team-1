import { cn } from "@/utils/index";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

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
        default: `bg-neutral-0 border border-neutral-20 text-neutral-70`,
        primary: `bg-primary-100 text-neutral-0`,
      },
    },
    defaultVariants: {
      variant: `default`,
    },
  },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export { Button, buttonVariants };
