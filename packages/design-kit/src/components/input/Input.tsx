import { cn } from "@/utils";
import React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(`border-b border-b-neutral-20 py-[10px]`, className)}
      {...props}
      ref={ref}
    />
  );
});

export { Input };
