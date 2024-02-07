"use client";

import {
  type CarouselApi,
  Carousel,
  CarouselContainer,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselDotButton,
} from "design-kit";
import { useEffect, useState } from "react";

const Swiper = () => {
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
  return (
    <>
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{ align: `center`, loop: true, inViewThreshold: 0.6 }}
      ></Carousel>
    </>
  );
};

export default Swiper;
