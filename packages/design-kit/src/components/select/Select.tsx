import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/utils";

// React.ForwardRefExoticComponent<
//   SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>
// >;

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;
export const SelectGroup = SelectPrimitive.Group;
export const SelectIcon = SelectPrimitive.Icon;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        `flex border border-neutral-40 rounded-[0.25rem] w-[10.3125rem] h-10 p-[0.625rem] data-[state=open]:border-b-0 data-[state=open]:rounded-b-none`,
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      
    </SelectPrimitive.Trigger>
  );
});

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithRef<typeof SelectPrimitive.Content>
>(({ className, position = "popper", children, ...props }, ref) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position={position}
        alignOffset={0}
        ref={ref}
        {...props}
        className={cn(
          `border border-neutral-40 flex data-[state=open]:border-t-0 data-[state=open]:rounded-t-none rounded-[0.25rem] w-[10.3125rem] min-h-10 p-[0.625rem] `,
          className,
        )}
      >
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <SelectPrimitive.Item
      className={cn(`hover:text-primary-100`, className)}
      ref={ref}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});

export { SelectTrigger, SelectItem, SelectContent };
