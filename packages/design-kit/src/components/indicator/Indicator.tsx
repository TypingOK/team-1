import { cn } from "@/utils";
import React from "react";

const Indicator = ({
  blue = false,
  className,
  ...props
}: React.ComponentProps<`img`> & { blue?: boolean }) => {
  if (blue) {
    return (
      <img
        className={cn(`rounded-full `, className)}
        {...props}
        src="indicator-blue.svg"
        alt="indicator"
      />
    );
  } else {
    return (
      <img
        className={cn(`rounded-full`, className)}
        {...props}
        src="indicator-gary.svg"
        alt="indicator"
      />
    );
  }
};

export default Indicator;
