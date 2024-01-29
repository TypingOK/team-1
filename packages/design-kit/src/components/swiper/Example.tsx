import {
  Carousel,
  CarouselContainer,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  type CarouselApi,
} from "@/components/swiper/Carousel";
import { Button } from "@/components/button/Button";
import { useEffect, useState } from "react";

const CarouselExample = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  console.log(current);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{ align: `center`, loop: true, inViewThreshold: 0.6 }}
        className="w-full max-w-[30%]"
      >
        <CarouselContainer className="-ml-4 h-96">
          <CarouselItem
            className={`flex basis-[60%] h-full justify-center relative`}
          >
            <Button
              variant={"primary"}
              className={`w-64 absolute top-1/2 -translate-y-1/2 ${api && current == 1 ? `duration-300 ease-in-out transform-gpu delay-75 transition scale-150` : `transition scale-100 transform-gpu duration-300 ease-in-out`} `}
            >
              버튼
            </Button>
          </CarouselItem>
          <CarouselItem className={`flex basis-[60%] justify-center `}>
            <Button
              variant={"primary"}
              className={`w-64 absolute top-1/2 -translate-y-1/2 ${api && current == 2 ? `duration-300 ease-in-out transform-gpu delay-75 transition scale-150` : `transition scale-100 transform-gpu duration-300 ease-in-out`} `}
            >
              버튼
            </Button>
          </CarouselItem>
          <CarouselItem className={`flex basis-[60%] justify-center`}>
            <Button
              variant={"primary"}
              className={`w-64 absolute top-1/2 -translate-y-1/2 ${api && current == 3 ? `duration-300 ease-in-out transform-gpu delay-75 transition scale-150` : `transition scale-100 transform-gpu duration-300 ease-in-out`} `}
            >
              버튼
            </Button>
          </CarouselItem>
          <CarouselItem className={`flex basis-[60%] justify-center`}>
            <Button
              variant={"primary"}
              className={`w-64 absolute top-1/2 -translate-y-1/2 ${api && current == 4 ? `duration-300 ease-in-out transform-gpu delay-75 transition scale-150` : `transition scale-100 transform-gpu duration-300 ease-in-out`} `}
            >
              버튼
            </Button>
          </CarouselItem>
          <CarouselItem className={`flex basis-[60%] justify-center `}>
            <Button
              variant={"primary"}
              className={`w-64 absolute top-1/2 -translate-y-1/2 ${api && current == 5 ? `duration-300 ease-in-out transform-gpu delay-75 transition scale-150` : `transition scale-100 transform-gpu duration-300 ease-in-out`} `}
            >
              버튼
            </Button>
          </CarouselItem>
          <CarouselItem className={`flex basis-[60%] justify-center`}>
            <Button
              variant={"primary"}
              className={`w-64 absolute top-1/2 -translate-y-1/2 ${api && current == 6 ? `duration-300 ease-in-out transform-gpu delay-75 transition scale-150` : `transition scale-100 transform-gpu duration-300 ease-in-out`} `}
            >
              버튼
            </Button>
          </CarouselItem>
        </CarouselContainer>
        <CarouselPrevButton />
        <CarouselNextButton />
      </Carousel>
      <div>
        <div>{current}</div>
      </div>
    </>
  );
};

export default CarouselExample;
