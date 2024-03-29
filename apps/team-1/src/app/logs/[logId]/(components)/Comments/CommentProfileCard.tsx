import { Badge } from "design-kit";
import { useRouter } from "next/navigation";

interface commentAvatarProps {
  userId: string;
  profileImage: string;
  username: string;
  createdAt: string;
  owner: string;
}

const CommentProfileCard = ({
  userId,
  profileImage,
  username,
  createdAt,
  owner,
}: commentAvatarProps) => {
  const router = useRouter();

  return (
    <div className="flex gap-[10px] mb-[25px]">
      <div
        className="w-[50px] h-[50px] cursor-pointer"
        onClick={() => router.push(`/mypage/${username}`)}
      >
        <img
          className="rounded-full"
          src={`https://nf01uyzvha.execute-api.ap-northeast-2.amazonaws.com/api/files/_pb_users_auth_/${userId}/${profileImage}`}
        />
      </div>
      <div>
        <div className="flex items-center gap-[10px]">
          <p
            className="body-4-bold cursor-pointer"
            onClick={() => router.push(`/mypage/${username}`)}
          >
            {username}
          </p>
          {userId === owner && (
            <Badge variant={"outlinePrimary"} className="w-[50px] h-[20px]">
              작성자
            </Badge>
          )}
        </div>
        <p className="body-7 text-neutral-40">{createdAt}</p>
      </div>
    </div>
  );
};

export default CommentProfileCard;
