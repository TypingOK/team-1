"use client";

import { TabRoot, TabList, TabTrigger, TabContent } from "design-kit";
import MyFollowing from "./MyFollowing";
import MyFollower from "./MyFollower";
import Link from "next/link";
import { mypageProps } from "../../page";

const MypageTap = ({ params, searchParams }: mypageProps) => {
  return (
    <div className="flex flex-col gap-[20px] p-[50px]">
      <p className="body-3-bold">마이페이지</p>
      <TabRoot value={searchParams ? searchParams.target : "following"}>
        <TabList className="w-[250px] flex justify-around">
          <Link href={"/mypage/i_am_angry/myfollow?target=following"}>
            <TabTrigger value="following" className="text-sm text-neutral-90">
              팔로잉
            </TabTrigger>
          </Link>
          <Link href={"/mypage/i_am_angry/myfollow?target=follower"}>
            <TabTrigger value="follower" className="text-sm text-neutral-90">
              팔로워
            </TabTrigger>
          </Link>
        </TabList>
        <TabContent value="following" className="w-full h-full pt-[30px]">
          <MyFollowing />
        </TabContent>
        <TabContent value="follower" className="w-full h-full pt-[30px]">
          <MyFollower />
        </TabContent>
      </TabRoot>
    </div>
  );
};

export default MypageTap;
