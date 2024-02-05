import {
  Carousel,
  CarouselContainer,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  type CarouselApi,
  CarouselDotButton,
} from "@/components/swiper/Carousel";
import { Button } from "@/components/button/Button";
import { useEffect, useState } from "react";

// 그 외 다양한 기능에 대해서는 다음 주소 참조 https://www.embla-carousel.com/get-started/react/

const CarouselExample = () => {
  // 기본적으로 해당 라이브러리들의 기능들은 useState를 통해 받아와서 사용 할 수 있습니다.
  // useState를 사용하여 상태 값으로 관리하고 Carousel 컴포넌트에 setApi를 props로 넘겨주어 설정하도록 합니다
  const [api, setApi] = useState<CarouselApi>();
  // 현재 몇번째 항목이 중앙에 있는지 알고 싶다면 current 값을 state로 관리 하면 됩니다.
  const [current, setCurrent] = useState(0);
  // useState로 api가 셋팅이 되었다면 on 이벤트나 직접적으로 메소드를 사용하여 특정 이벤트가 발생한 경우 실행할 함수를 설정할 수 있습니다.
  // 해당 주소에서 다양한 메소드에 대해 알 수 있습니다. https://www.embla-carousel.com/api/methods/
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
        // options를 직접적으로 props로 줄 수 있습니다. 다양한 옵션에 대해서는 링크 참조 https://www.embla-carousel.com/api/options/
        opts={{ align: `center`, loop: true, inViewThreshold: 0.6 }}
        className="w-full max-w-[30%]"
      >
        {/* 아이템들을 감쌀 컨테이너 입니다. 해당 컨테이너 안에 모든 아이템들이 존재해야 합니다. */}
        <CarouselContainer className="-ml-4 h-96">
          {/* 각각의 들어갈 아이템들을 정하면 됩니다. 여러 아이템이 한 화면에 나와야 하는 경우 basis 속성을 통해 해당 영역을 나눠서 들어갈 수 있도록 조정할 수 있습니다. */}
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
        <div className="w-full flex justify-center mb-10">
          {/* Dot 버튼을 통해 이동하고 싶다면 DotButton을 넣으면 됩니다. */}
          <CarouselDotButton
            index={0}
            blue={current - 1 === 0}
          ></CarouselDotButton>
          <CarouselDotButton
            index={1}
            blue={current - 1 === 1}
          ></CarouselDotButton>
          <CarouselDotButton
            index={2}
            blue={current - 1 === 2}
          ></CarouselDotButton>
          <CarouselDotButton
            index={3}
            blue={current - 1 === 3}
          ></CarouselDotButton>
        </div>
        {/* 이전, 다음 버튼 */}
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
