import { cn } from "@/utils";
import React from "react";
import { Button } from "../button/Button";

const Pagination = ({
  className,
  children,
  ...props
}: React.ComponentProps<"nav">) => {
  return (
    <nav className={cn(`flex justify-center mx-auto items-center`)} {...props}>
      {children}
    </nav>
  );
};

const PaginationNumber = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    isActive?: boolean;
  }
>(({ className, isActive = false, children, ...props }, ref) => {
  return (
    <Button
      variant={isActive ? `primary` : `ghost`}
      className={cn(
        `w-8 h-8 rounded-full p-0 mr-[0.31rem] ${isActive ? `bg-primary-60` : `text-neutral-40`}`,
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
    </Button>
  );
});

const PaginationRewindButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <Button
      variant={`ghost`}
      className={cn(`w-8 h-8 rounded-full p-0 mr-[0.31rem]`, className)}
      {...props}
      ref={ref}
    >
      <img src="Arrow/rewind.svg" />
    </Button>
  );
});

const PaginationPreviousButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <Button
      variant={`ghost`}
      className={cn(`w-8 h-8 rounded-full p-0 mr-[0.31rem]`, className)}
      {...props}
      ref={ref}
    >
      <img src="Arrow/previous.svg" />
    </Button>
  );
});

const PaginationNextButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <Button
      variant={`ghost`}
      className={cn(`w-8 h-8 rounded-full p-0 `, className)}
      {...props}
      ref={ref}
    >
      <img src={`Arrow/next.svg`}></img>
    </Button>
  );
});

const PaginationFastForwardButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <Button
      variant={`ghost`}
      className={cn(`w-8 h-8 rounded-full p-0 text-neutral-60`, className)}
      {...props}
      ref={ref}
    >
      <img src={`Arrow/fastForward.svg`}></img>
    </Button>
  );
});

const PaginationDot = ({
  className,
  ...props
}: React.ComponentProps<`div`>) => {
  return (
    <div
      className={cn(`w-8 h-8 mr-[0.31] text-center text-neutral-40`, className)}
      {...props}
    >
      ...
    </div>
  );
};

export {
  Pagination,
  PaginationRewindButton,
  PaginationNumber,
  PaginationPreviousButton,
  PaginationNextButton,
  PaginationFastForwardButton,
  PaginationDot,
};
