import { useGetOwnerRecommendLogs } from "@/hooks/queries/useGetOwnerRecommendLogs";
import {
  Carousel,
  CarouselApi,
  CarouselContainer,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
} from "design-kit";
import { useEffect, useState } from "react";
import RecommendCard from "./RecommendCard";

interface ownerRecommendProps {
  userId: string;
}

const OwnerRecommendContainer = ({ userId }: ownerRecommendProps) => {
  const [api, setApi] = useState<CarouselApi>();

  const ownerRecommendData = useGetOwnerRecommendLogs(userId);

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  return (
    ownerRecommendData.data && (
      <Carousel setApi={setApi} opts={{ align: `start`, inViewThreshold: 0.6 }}>
        <CarouselPrevButton className="-left-[24px] z-[10]" />
        <CarouselContainer className="gap-[20px]">
          {ownerRecommendData.data.map(item => (
            <CarouselItem key={item.id} className="basis-auto">
              <RecommendCard
                logId={item.id}
                thumbnail={item.thumbnail}
                series={item.series}
                title={item.title}
                createdAt={item.created}
                like={item.likes}
                hit={item.views}
              />
            </CarouselItem>
          ))}
        </CarouselContainer>
        <CarouselNextButton className="-right-[24px]" />
      </Carousel>
    )
  );
};
export default OwnerRecommendContainer;
