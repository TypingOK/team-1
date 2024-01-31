import { cn } from "@/utils";
import React from "react";

const HeroImageWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { size?: `big` | `small` }
>(({ size = "small", className, children, ...props }, ref) => {
  return (
    <div
      className={cn(
        `rounded-[0.625rem] ${size === "big" ? `w-[44.0625rem] h-[23.75rem]` : `w-[38.125rem] h-[19.375rem]`} relative flex justify-center items-center`,
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

const HeroImage = React.forwardRef<
  HTMLImageElement,
  React.HTMLAttributes<HTMLImageElement> & { src: string; alt?: string }
>(({ className, src, alt, ...props }, ref) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        `object-cover brightness-50 rounded-[0.625rem] w-full h-full bg-neutral-100`,
        className,
      )}
      {...props}
      ref={ref}
    ></img>
  );
});

const HeroImageTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn(
        `absolute flex text-neutral-0 text-[1.625rem] font-semibold w-full h-full`,
      )}
    >
      <div
        className={cn(`px-10 mt-auto mb-20`, className)}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
});

const HeroImageBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div className={cn(`absolute flex w-full p-10 h-full`, className)}>
      <div
        className={cn(
          `rounded-full bg-background-5 text-sm font-semibold mb-[5.88rem] mt-auto w-fit px-[0.94rem] py-[0.44rem] text-neutral-70`,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
});

export { HeroImage, HeroImageBadge, HeroImageTitle, HeroImageWrapper };
