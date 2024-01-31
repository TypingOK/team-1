import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

interface CardWrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof wrapperVariants> {}

const wrapperVariants = cva(
  `w-[18.9rem] rounded-[0.6rem] h-[16.3rem] relative px-5 py-[1.19rem]`,
  {
    variants: {
      border: {
        stroke: `border border-stroke-10`,
        none: `border-none`,
      },
    },
    defaultVariants: {
      border: `none`,
    },
  },
);

const MyCardWrapper = React.forwardRef<HTMLDivElement, CardWrapperProps>(
  ({ className, border, children, ...props }, ref) => {
    return (
      <div
        className={cn(wrapperVariants({ border, className }))}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

const MyCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(() => {
  return <div></div>;
});

const MyCardSeries = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return <div></div>;
});

export { MyCardWrapper, MyCardSeries, MyCardContent };
