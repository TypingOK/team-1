import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const inputVariants = cva(
  `rounded-[10px] py-[10px] h-[2.875rem] px-[1.125rem]`,
  {
    variants: {
      variant: {
        large: `w-[22.188rem] `,
        small: `w-[10.313rem]`,
      },
      border: {
        full: `border border-neutral-20`,
        bottom: `border-b border-b-neutral-20 rounded-none`,
      },
    },
    defaultVariants: {
      variant: `large`,
      border: `full`,
    },
  },
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, border, className, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant, border, className }))}
        {...props}
        ref={ref}
      />
    );
  },
);

export { Input };
