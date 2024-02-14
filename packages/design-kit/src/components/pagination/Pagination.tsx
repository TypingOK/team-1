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
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 11.5L16.5 16.5L21 21"
          stroke="#666666"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11 11L11 21" stroke="#666666" strokeLinecap="round" />
      </svg>
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
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292894 7.70711C-0.0976309 7.31658 -0.0976308 6.68342 0.292894 6.29289L6.29289 0.292893C6.68342 -0.0976316 7.31658 -0.0976315 7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071Z"
          fill="#B3B4B7"
        />
      </svg>
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
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
          fill="#B3B4B7"
        />
      </svg>
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
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 11.5L15.5 16.5L11 21"
          stroke="#666666"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M21 11L21 21" stroke="#666666" strokeLinecap="round" />
      </svg>
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
