import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-trasnparent bg-neutral-0 text-neutral-100",
        primary: "border-transparent bg-primary-100 text-neutral-0",
        outline: "text-neutral-100 bg-none",
        outlinePrimary: "border-primary-100 text-primary-100",
        outlineWhite: "bg-neutral-0 text-primary-100 border-none",
        black: "bg-neutral-100 text-neutral-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
