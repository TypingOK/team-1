import React from "react";
import * as TabPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/utils";

export const TabRoot = TabPrimitive.Root;
export const TabList = TabPrimitive.List;
// export const TabTrigger = TabPrimitive.Trigger;
export const TabContent = TabPrimitive.Content;

const TabTrigger = React.forwardRef<
  React.ElementRef<typeof TabPrimitive.Trigger>,
  React.ComponentPropsWithRef<typeof TabPrimitive.Trigger>
>(({ children, value, className, ...props }, ref) => {
  return (
    <TabPrimitive.Trigger
      value={value}
      className={cn(
        `w-[7.5rem] h-10 text-lg font-semibold data-[state=inactive]:text-neutral-40 data-[state=active]:text-neutral-90 data-[state=active]:border-b-2 data-[state=active]:border-b-neutral-90`,
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
    </TabPrimitive.Trigger>
  );
});

export { TabTrigger };
