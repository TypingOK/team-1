"use client";

import { useGetTargetMyFollowing } from "@/hooks/queries/useGetMyFollowing";
import { userTypes } from "@/types";
import { pb } from "@/utils/api";
import { useSearchParams } from "next/navigation";
import FollowSearching from "./FollowSearching";
import { Button } from "design-kit";
import useDeleteMyFollowing from "@/hooks/queries/useDeleteMyFollowing";
import { useState } from "react";

const MyFollowing = () => {
  const userData = pb.authStore.model as userTypes;
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data } = useGetTargetMyFollowing(page, userData?.id, page, 30);

  const [select, setSelect] = useState<string>("");

  const deleteMyFollowing = useDeleteMyFollowing();

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
                        {item.expand?.followingId.username}
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
                    팔로잉
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

export default MyFollowing;
