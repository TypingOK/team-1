// reference https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/carousel.tsx
import {
  useState,
  useEffect,
  useContext,
  createContext,
  forwardRef,
  useCallback,
} from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";

import { cn } from "@/utils";
import { Button } from "../button/Button";
import Indicator from "../indicator/Indicator";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  previousHandler: () => void;
  nextHandler: () => void;
  canScrollPrev: boolean;
  scrollTo: (index: number) => void;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

const Carousel = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel({ ...opts }, plugins);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScollNext] = useState(false);

  const isPossible = useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }
    setCanScrollPrev(api.canScrollPrev());
    setCanScollNext(api.canScrollNext());
  }, []);

  const previousHandler = useCallback(() => {
    if (api) {
      api.scrollPrev();
    }
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api],
  );

  const nextHandler = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) {
      return;
    }

    isPossible(api);
    api.on("reInit", isPossible);
    api.on("select", isPossible);

    return () => {
      if (api) {
        api.off("select", isPossible);
      }
    };
  }, [api, isPossible]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        previousHandler,
        nextHandler,
        scrollTo,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div ref={ref} className={cn(`relative`, className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
});

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error(
      "useCarousel을 사용하기 위해서는 <Carousel />이 필요합니다.",
    );
  }

  return context;
}

const CarouselContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div ref={ref} {...props} className={cn(`flex -ml-4`, className)}></div>
    </div>
  );
});

const CarouselItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
      {...props}
    />
  );
});

const CarouselPrevButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { canScrollPrev, previousHandler } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={`nomal`}
      className={cn(
        `absolute -left-12 -translate-y-1/2 top-1/2 rounded-full w-[50px] h-[50px] p-0`,
        className,
      )}
      disabled={!canScrollPrev}
      onClick={previousHandler}
      {...props}
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

const CarouselDotButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & { index: number; blue?: boolean }
>(({ className, children, blue = false, index, ...rest }, ref) => {
  const { scrollTo } = useCarousel();
  return (
    <button
      className={cn(``, className)}
      ref={ref}
      onClick={() => {
        scrollTo(index);
      }}
      {...rest}
    >
      {/* {children} */}
      <Indicator blue={blue} />
    </button>
  );
});

const CarouselNextButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { canScrollNext, nextHandler } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={`nomal`}
      className={cn(
        `absolute rounded-full -right-12 -translate-y-1/2 top-1/2  w-[50px] h-[50px] p-0`,
        className,
      )}
      disabled={!canScrollNext}
      onClick={nextHandler}
      {...props}
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

export {
  type CarouselApi,
  Carousel,
  CarouselContainer,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselDotButton,
};
