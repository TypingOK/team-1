import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropDownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content className="" {...props} ref={ref}>
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
});

const DropDownMenuLabel = DropdownMenuPrimitive.Label;
const DropdownMenuItem = DropdownMenuPrimitive.Item;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export {
  DropDownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropDownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
};
