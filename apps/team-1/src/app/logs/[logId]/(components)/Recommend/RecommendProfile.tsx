import { Button } from "design-kit";
import Image from "next/image";

interface recommendProfileProps {
  userId: string;
  profileImage: string;
  userName: string;
}

const RecommendProfile = ({
  userId,
  profileImage,
  userName,
}: recommendProfileProps) => {
  return (
    <div className="flex items-center gap-[20px] my-[30px]">
      <div className="relative min-w-[80px] max-w-[80px] h-[80px] rounded-full">
        <Image
          className="rounded-full"
          src={`https://nf01uyzvha.execute-api.ap-northeast-2.amazonaws.com/api/files/_pb_users_auth_/${userId}/${profileImage}`}
          alt="profileImage"
          fill
        />
      </div>
      <span className="body-4-bold text-neutral-100 w-full">{userName}</span>
      <div className="flex gap-[5px]">
        <Button className="w-[95px] h-[40px] font-semibold text-base p-0 text-neutral-40">
          문의하기
        </Button>
        <Button
          className="w-[95px] h-[40px] font-semibold text-base p-0"
          variant={"primary"}
        >
          팔로우
        </Button>
      </div>
    </div>
  );
};

export default RecommendProfile;
