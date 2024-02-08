"use client";

import { ExpandLogTypes } from "@/types";
import {
  type CarouselApi,
  Carousel,
  CarouselContainer,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselDotButton,
  CardImage,
  HeroImageBadge,
  HeroImageTitle,
  HeroImageWrapper,
} from "design-kit";
import { ListResult } from "pocketbase";
import { useEffect, useState } from "react";

const Swiper = ({ data }: { data: ListResult<ExpandLogTypes> }) => {
  const [api, setApi] = useState<CarouselApi>();
  // 현재 몇번째 항목이 중앙에 있는지 알고 싶다면 current 값을 state로 관리 하면 됩니다.
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
  console.log(current);
  return (
    <>
      <Carousel
        className="w-full h-96 mt-10"
        setApi={setApi}
        opts={{ align: `center`, loop: true, inViewThreshold: 0.6 }}
      >
        <CarouselContainer className="-ml-4 h-96 ">
          {data.items.map((e, index: number) => (
            <CarouselItem
              className={`flex basis-[60%] h-full justify-center relative`}
              key={e.id}
            >
              <HeroImageWrapper
                className={`absolute top-1/2 -translate-y-1/2 ${api && current == index + 1 ? `duration-300 ease-in-out transform-gpu delay-75 transition scale-125` : `transition scale-100 transform-gpu duration-300 ease-in-out`}`}
              >
                <CardImage
                  className=""
                  src={e.thumbnail}
                  alt="배너 이미지"
                  banner={true}
                />
                <HeroImageTitle
                  className={`mt-auto  ${api && current == index + 1 && `mb-14`}`}
                >
                  {e.title}
                </HeroImageTitle>
                <HeroImageBadge
                  className={`${api && current == index + 1 && `mt-16`}`}
                >
                  이번 주 가장 많이 읽은 로그
                </HeroImageBadge>
              </HeroImageWrapper>
            </CarouselItem>
          ))}
        </CarouselContainer>
        <div className="w-full flex justify-center mb-10 mt-8">
          <div className="w-16 flex justify-between">
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
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Swiper;
