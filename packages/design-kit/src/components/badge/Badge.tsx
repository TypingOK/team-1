import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";
import { EditModeSVG } from "./EditModeSVG";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-[0.13rem] text-xs font-semibold transition-colors focus:outline-none focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-trasnparent bg-neutral-0 text-neutral-100",
        primary: "border-transparent bg-primary-100 text-neutral-0",
        outline: "text-neutral-100 bg-none",
        outlinePrimary: "border-primary-100 text-primary-100",
        outlineWhite: "bg-neutral-0 text-primary-100 border-none",
        black: "bg-neutral-100 text-neutral-0",
        outlineBrand: `border-none bg-[#F9F5FF] text-[#6941C6]`,
        outlineBlue: `border-none bg-[#F5F8FF] text-primary-90`,
        outlineGreen: `border-none bg-[#F2FDF2] text-[#2DB45D]`,
        outlinePink: `border-none bg-[#FDF2FA] text-[#C11574]`,
        outlineBlueLight: `border-none bg-[#F0F9FF] text-[#026AA2]`,
        outlineOrange: `text-[#C4320A] border-none bg-[#FFF6ED]`,
        outlineGray: `text-[#344054] border-none bg-[#F2F4F7]`,
        outlineRed: `text-[#B42318] border-none bg-[#FEF3F2]`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLButtonElement>,
    VariantProps<typeof badgeVariants> {
  editMode?: boolean;
}

function Badge({
  children,
  className,
  editMode = false,
  variant,
  ...props
}: BadgeProps) {
  if (editMode) {
    return (
      <button
        className={cn(
          badgeVariants({ variant: `outlinePrimary` }),
          `relative`,
          className,
        )}
        {...props}
      >
        {children}
        <div className="absolute -right-1 top-0 bg-neutral-0 rounded-full">
          <EditModeSVG></EditModeSVG>
        </div>
      </button>
    );
  } else {
    return (
      <div className={cn(badgeVariants({ variant }), className)} {...props}>
        {children}
      </div>
    );
  }
}

export { Badge, badgeVariants };
