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
import { useGetTagRecommend } from "@/hooks/queries/useGetTagRecommend";

interface tagRecommendContainerProps {
  tagTitles: string;
}

const TagRecommendContainer = ({ tagTitles }: tagRecommendContainerProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const splitTags = tagTitles.split(",");
  const tagRecommendData = useGetTagRecommend(splitTags);

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  return (
    tagRecommendData.data && (
      <Carousel setApi={setApi} opts={{ align: `start`, inViewThreshold: 0.6 }}>
        <CarouselPrevButton className="-left-[24px] z-[10]" />
        <CarouselContainer className="gap-[20px]">
          {tagRecommendData.data.map(item => (
            <CarouselItem key={item.expand.logId.id} className="basis-auto">
              <RecommendCard
                logId={item.expand.logId.id}
                thumbnail={item.expand.logId.thumbnail}
                series={item.expand.logId.series}
                title={item.expand.logId.title}
                createdAt={item.expand.logId.created}
                like={item.expand.logId.likes}
                hit={item.expand.logId.views}
              />
            </CarouselItem>
          ))}
        </CarouselContainer>
        <CarouselNextButton className="-right-[24px]" />
      </Carousel>
    )
  );
};

export default TagRecommendContainer;
