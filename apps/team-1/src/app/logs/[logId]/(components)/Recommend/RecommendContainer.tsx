import { Badge } from "design-kit";
import OwnerRecommendContainer from "./OwnerRecommendContainer";
import RecommendProfile from "./RecommendProfile";
import TagRecommendContainer from "./TagRecommendContainer";

interface recommendContainerProps {
  username: string;
  userId: string;
  profileImage: string;
  tagTitles: string;
}

const RecommendContainer = ({
  username,
  userId,
  profileImage,
  tagTitles,
}: recommendContainerProps) => {
  const splitTags = tagTitles.split(",");

  return (
    <div className="max-w-[800px] m-auto pt-[80px] pb-[170px]">
      <div className="mb-[75px]">
        <p className="body-3-bold">{username} 님의 로그 추천</p>
        <RecommendProfile
          userId={userId}
          profileImage={profileImage}
          userName={username}
        />

        <OwnerRecommendContainer userId={userId} />
      </div>
      <div>
        <p className="body-3-bold">태그와 비슷한 로그 추천</p>
        <div className="flex gap-[10px] my-[20px]">
          {splitTags.map(item => (
            <Badge key={item} variant={"outlinePrimary"}>
              {item}
            </Badge>
          ))}
        </div>
        <TagRecommendContainer tagTitles={tagTitles} />
      </div>
    </div>
  );
};

export default RecommendContainer;
