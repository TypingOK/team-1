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
      <img src="Arrow/previous.svg" alt="이전" />
    </Button>
  );
});

const CarouselDotButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & { index: number; blue?: boolean }
>(({ className, children, blue = false, index, ...rest }) => {
  const { scrollTo } = useCarousel();
  return (
    <button
      className={cn(``, className)}
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
      <img src="Arrow/next.svg" alt="이전" />
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
