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
        <div className="flex">
          <div className={`mr-[7px] text-stroke-10`}>|</div>
          <img src="/CD/card_icon/Like.svg"></img>
          <div className="mx-[7px]">{likeCount}</div>
        </div>
      )}
      {hit && (
        <div className="flex">
          <div className={`mr-[7px] text-stroke-10`}>|</div>
          <img src="/CD/card_icon/Seen.svg"></img>
          <div className="mx-[7px]">{hitCount}</div>
        </div>
      )}
      {document && (
        <div className="flex">
          <div className={`mr-[7px] text-stroke-10`}>|</div>
          <img src="/CD/card_icon/Vector.svg"></img>
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
