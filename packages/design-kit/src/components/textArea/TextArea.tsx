import { cn } from "@/utils";
import React from "react";

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        `border w-80 h-80 border-neutral-10 p-[1.125rem] resize-none rounded-[10px]`,
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});

export { TextArea };
