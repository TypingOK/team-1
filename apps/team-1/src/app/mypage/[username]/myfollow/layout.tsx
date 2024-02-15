import { handleUserGetByUserName } from "@/utils/api";
import { getUserData } from "@/utils/common/getUserData";
import { notFound } from "next/navigation";

export const fetchCache = "default-no-store";

const FollowLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) => {
  const { username } = params;
  const currentUserData = await handleUserGetByUserName(username);
  const loginedUserData = getUserData("pb_auth");

  if (!currentUserData) return notFound();
  return (
    <div>
      {loginedUserData &&
      loginedUserData.username === currentUserData.username ? (
        <div>
          <div>{children}</div>
        </div>
      ) : (
        <div className="flex flex-col item-center justify-center pt-[232px] gap-[18px]">
          <img src="/icons/mypage/waring.svg" className="h-[24px]" />
          <p className="text-center body-5-bold">접근 권한이 없습니다.</p>
        </div>
      )}
    </div>
  );
};
export default FollowLayout;
