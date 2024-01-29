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
        `flex border border-neutral-40 rounded-[0.25rem] w-[10.3125rem] h-10 p-[0.625rem] `,
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <SelectIcon className="ml-auto">
        <img src="arrow/dropdown.svg" alt="선택 화살표" />
      </SelectIcon>
    </SelectPrimitive.Trigger>
  );
});

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithRef<typeof SelectPrimitive.Content>
>(({ className, position = "item-aligned", children, ...props }, ref) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position={position}
        ref={ref}
        {...props}
        className={cn(
          `flex border border-neutral-40 rounded-[0.25rem] w-[10.3125rem] h-10 p-[0.625rem] `,
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
>(({ className, children, value, ...props }, ref) => {
  return (
    <SelectPrimitive.Item
      value={value}
      className={cn(`hover:text-primary-100`, className)}
      ref={ref}
      {...props}
    >
      {children}
    </SelectPrimitive.Item>
  );
});

export { SelectTrigger, SelectItem, SelectContent };
