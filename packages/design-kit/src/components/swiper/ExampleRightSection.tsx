import {
  Carousel,
  CarouselContainer,
  CarouselItem,
  CarouselNextButton,
  type CarouselApi,
} from "@/components/swiper/Carousel";
import { Button } from "@/components/button/Button";
import { useEffect, useState } from "react";

// 사용법은 기존의 example과 동일
const CarouselExampleRightSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
        // align을 start로 해두면 시작점을 기준으로 한칸씩 움직임
        opts={{ align: `start` }}
        className="w-full max-w-[30%]"
      >
        <CarouselContainer className="-ml-4 h-96">
          <CarouselItem
            className={`flex basis-1/3 h-full justify-center relative`}
          >
            <Button
              variant={"primary"}
              className={`w-32 absolute top-1/2  -translate-y-1/2`}
            >
              버튼
            </Button>
          </CarouselItem>
          <CarouselItem className={`flex basis-1/3 justify-center `}>
            <Button
              variant={"primary"}
              className={`w-32 absolute top-1/2 -translate-y-1/2`}
            >
              버튼
            </Button>
          </CarouselItem>
          <CarouselItem className={`flex basis-1/3 justify-center`}>
            <Button
              variant={"primary"}
              className={`w-32 absolute top-1/2 -translate-y-1/2`}
            >
              버튼
            </Button>
          </CarouselItem>
          <CarouselItem className={`flex basis-1/3 justify-center`}>
            <Button
              variant={"primary"}
              className={`w-32 absolute top-1/2 -translate-y-1/2`}
            >
              버튼
            </Button>
          </CarouselItem>
          <CarouselItem className={`flex basis-1/3 justify-center `}>
            <Button
              variant={"primary"}
              className={`w-32 absolute top-1/2 -translate-y-1/2`}
            >
              버튼
            </Button>
          </CarouselItem>
          <CarouselItem className={`flex basis-1/3 justify-center`}>
            <Button
              variant={"primary"}
              className={`w-32 absolute top-1/2 -translate-y-1/2`}
            >
              버튼
            </Button>
          </CarouselItem>
        </CarouselContainer>
        <CarouselNextButton />
      </Carousel>
      <div>
        <div>{current}</div>
      </div>
    </>
  );
};

export default CarouselExampleRightSection;
