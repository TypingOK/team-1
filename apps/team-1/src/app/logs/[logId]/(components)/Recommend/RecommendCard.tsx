import {
  CardImage,
  MyCardDate,
  MyCardImageWrapper,
  MyCardSeries,
  MyCardTitle,
  MyCardWrapper,
} from "design-kit";
import { useRouter } from "next/navigation";

interface recommendCardProps {
  logId: string;
  thumbnail: string;
  series: string;
  title: string;
  createdAt: string;
  like: number;
  hit: number;
}

const RecommendCard = ({
  logId,
  thumbnail,
  series,
  title,
  like,
  hit,
}: recommendCardProps) => {
  const router = useRouter();
  const handleLogClick = () => router.push(`/logs/${logId}`);

  return (
    <MyCardWrapper
      className="p-0 w-auto h-auto cursor-pointer"
      border={`none`}
      onClick={handleLogClick}
    >
      <MyCardImageWrapper>
        <CardImage src={thumbnail} />
      </MyCardImageWrapper>
      <div className="mt-[20px]">
        <MyCardSeries>{series || "선택안함"}</MyCardSeries>
        <MyCardTitle>{title}</MyCardTitle>
        <MyCardDate
          className="w-full text-xs"
          date={"2024.01.31"}
          like
          likeCount={like}
          hit={true}
          hitCount={hit}
        />
      </div>
    </MyCardWrapper>
  );
};

export default RecommendCard;
