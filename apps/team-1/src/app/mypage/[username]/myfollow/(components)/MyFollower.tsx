"use client";

import { useSearchParams } from "next/navigation";
import FollowSearching from "./FollowSearching";
import { userTypes } from "@/types";
import { Button } from "design-kit";
import { pb } from "@/utils/api";
import { useGetTargetMyFollower } from "@/hooks/queries/useGetMyFollower";
import useDeleteMyFollower from "@/hooks/queries/useDeleteMyFollower";
import { useState } from "react";

const MyFollower = () => {
  const userData = pb.authStore.model as userTypes;
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data } = useGetTargetMyFollower(page, userData?.id, page, 30);

  const [select, setSelect] = useState<string>("");

  const deleteMyFollowing = useDeleteMyFollower();

  const handleDelete = async (id: string) => {
    setSelect(id);
    await deleteMyFollowing.mutate(id);
    setSelect("");
  };

  return (
    <div>
      {data && data?.items.length !== 0 ? (
        <div className="flex flex-col gap-[59px]">
          <FollowSearching />
          <div className="flex flex-col gap-[80px]">
            {data &&
              data.items.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex gap-[15px]">
                    <img
                      src={`https://nf01uyzvha.execute-api.ap-northeast-2.amazonaws.com/api/files/_pb_users_auth_/${item.expand?.followingId.id}/${item.expand?.followingId.profileImage}`}
                      className="h-[50px] w-[50px] rounded-full"
                    />
                    <div>
                      <p className="body-4-bold">
                        {item.expand?.followerId.username}
                      </p>
                      <p className="flex gap-[5px] text-[14px] font-semibold text-neutral-50">
                        로그 전체보기
                        <img src="/icons/mypage/arrow_btn2.svg" />
                      </p>
                    </div>
                  </div>
                  <Button
                    className="w-[108px] h-[40px] text-[16px] font-semibold text-neutral-70 p-[9px] border-stroke-10"
                    onClick={() => handleDelete(item.id)}
                  >
                    삭제
                  </Button>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col item-center justify-center pt-[232px] gap-[18px]">
          <img src="/icons/mypage/waring.svg" className="h-[24px]" />
          <p className="text-center body-5-bold">
            내가 팔로잉하는 사용자가 없습니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyFollower;
