import { cn, formatDate } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

interface CardWrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof wrapperVariants> {}

const wrapperVariants = cva(
  `w-[21.5rem] rounded-[0.6rem] h-80 relative px-5 py-[1.19rem]`,
  {
    variants: {
      border: {
        stroke: `border border-stroke-10`,
        none: `border-none`,
      },
    },
    defaultVariants: {
      border: `none`,
    },
  },
);

interface CardImageWrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardImageWrapperVariants> {}

const cardImageWrapperVariants = cva(
  `rounded-[0.625rem] relative flex justify-center items-center`,
  {
    variants: {
      size: {
        small: `w-44 h-[5.75rem]`,
        big: `w-[18.825rem] h-[9.875rem]`,
      },
    },
    defaultVariants: {
      size: `big`,
    },
  },
);

const MyCardWrapper = React.forwardRef<HTMLDivElement, CardWrapperProps>(
  ({ className, border, children, ...props }, ref) => {
    return (
      <div
        className={cn(wrapperVariants({ border, className }))}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

const MyCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h1
      className={cn(
        `text-xl font-semibold my-[5px] text-neutral-90 w-full`,
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
    </h1>
  );
});

const MyCardNickname = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn(`text-neutral-30 w-full text-base`, className)}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});

const MyCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div className={cn(``, className)} {...props} ref={ref}>
      {children}
    </div>
  );
});

const MyCardSeries = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn(`text-sm font-semibold text-neutral-50 w-full`, className)}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});

const MyCardImageWrapper = React.forwardRef<
  HTMLDivElement,
  CardImageWrapperProps
>(({ className, size, children, ...props }, ref) => {
  return (
    <div
      className={cn(cardImageWrapperVariants({ size, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

const MyCardDate = ({
  date,
  hit = false,
  hitCount = 0,
  like = false,
  likeCount = 0,
  document = false,
  documentCount = 0,
  className,
}: {
  date: string | number;
  hit?: boolean;
  hitCount?: number;
  like?: boolean;
  likeCount?: number;
  document?: boolean;
  documentCount?: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(`flex text-sm mt-[5px] text-neutral-50 w-full`, className)}
    >
      <div className={`mr-[7px]`}>{formatDate(date)}</div>
      {like && (
        <div className="flex h-full items-center">
          <div className={`mr-[7px] text-stroke-10`}>|</div>
          <svg
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 0.981229L5.4285 0.915148C4.81978 0.332171 4.00314 0.00395795 3.1515 0C2.31662 0 1.51586 0.324244 0.924995 0.901552C0.334133 1.47886 0.00145619 2.26206 0 3.0792C0 4.73722 0.6215 5.52855 3.399 7.67646L4.85765 8.78463C5.23563 9.07179 5.76437 9.07179 6.14235 8.78463L7.601 7.67646C10.3785 5.52855 11 4.73722 11 3.0792C10.9985 2.26206 10.6659 1.47886 10.075 0.901552C9.48415 0.324244 8.68335 0 7.8485 0C6.99684 0.00395795 6.18022 0.332171 5.5715 0.915148L5.5 0.981229Z"
              fill="#4D4D4D"
            />
          </svg>

          <div className="mx-[7px]">{likeCount}</div>
        </div>
      )}
      {hit && (
        <div className="flex h-full items-center">
          <div className={`mr-[7px] text-stroke-10`}>|</div>
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.8695 5.48631C13.1539 6.74288 10.9208 10 7 10C3.07917 10 0.846097 6.74288 0.130502 5.48631C-0.0435005 5.18081 -0.0435005 4.81919 0.130502 4.51369C0.846097 3.25713 3.07917 0 7 0C10.9208 0 13.1539 3.25714 13.8695 4.51369C14.0435 4.81919 14.0435 5.18081 13.8695 5.48631ZM9.267 5C9.267 6.20813 8.25203 7.1875 7 7.1875C5.74797 7.1875 4.733 6.20813 4.733 5C4.733 3.79188 5.74797 2.8125 7 2.8125C8.25203 2.8125 9.267 3.79188 9.267 5Z"
              fill="#4D4D4D"
            />
          </svg>

          <div className="mx-[7px]">{hitCount}</div>
        </div>
      )}
      {document && (
        <div className="flex h-full items-center">
          <div className={`mr-[7px] text-stroke-10`}>|</div>
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 3.49705C10 3.17879 9.86831 2.87357 9.63387 2.64852L7.24113 0.351474C7.00669 0.126426 6.68875 0 6.35725 0H1.25C0.559644 0 0 0.537257 0 1.2V10.8C0 11.4627 0.559644 12 1.25 12H8.75C9.44038 12 10 11.4627 10 10.8V3.49705ZM7.1875 5.40001C7.53269 5.40001 7.8125 5.13139 7.8125 4.79999C7.8125 4.46863 7.53269 4.19999 7.1875 4.19999H2.8125C2.46732 4.19999 2.1875 4.46863 2.1875 4.79999C2.1875 5.13139 2.46732 5.40001 2.8125 5.40001H7.1875ZM2.8125 8.10001C2.46732 8.10001 2.1875 7.83139 2.1875 7.50001C2.1875 7.16863 2.46732 6.90001 2.8125 6.90001H5.9375C6.28269 6.90001 6.5625 7.16863 6.5625 7.50001C6.5625 7.83139 6.28269 8.10001 5.9375 8.10001H2.8125Z"
              fill="#4D4D4D"
            />
          </svg>

          <div className="mx-[7px]">{documentCount}</div>
        </div>
      )}
    </div>
  );
};

export {
  MyCardWrapper,
  MyCardSeries,
  MyCardContent,
  MyCardTitle,
  MyCardNickname,
  MyCardDate,
  MyCardImageWrapper,
};
