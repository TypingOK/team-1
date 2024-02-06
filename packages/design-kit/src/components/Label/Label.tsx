import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";

const Label = React.forwardRef<
  HTMLLabelElement,
  React.HTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  return <LabelPrimitive.Root ref={ref} {...props}></LabelPrimitive.Root>;
});

export default Label;
