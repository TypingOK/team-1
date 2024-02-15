"use client";

import { TabRoot, TabList, TabTrigger, TabContent } from "design-kit";
import MyLikesLogPage from "./MyLikesLog";
import MyViewsLogPage from "./MyViewsLog";
import MyCommentsPage from "./MyComments";
import { mypageProps } from "../../page";
import Link from "next/link";

const MyactiveTap = ({ params, searchParams }: mypageProps) => {
  return (
    <div className="flex flex-col gap-[20px] p-[50px]">
      <p className="body-3-bold">나의 활동</p>
      <TabRoot value={searchParams ? searchParams.target : "interest"}>
        <TabList className="w-[380px] flex justify-around">
          <Link href={"/mypage/i_am_angry/myactive?target=interest"}>
            <TabTrigger value="interest" className="text-sm text-neutral-90">
              관심 로그
            </TabTrigger>
          </Link>
          <Link href={"/mypage/i_am_angry/myactive?target=recent"}>
            <TabTrigger value="recent" className="text-sm text-neutral-90">
              최근 본 로그
            </TabTrigger>
          </Link>
          <Link href={"/mypage/i_am_angry/myactive?target=comment"}>
            <TabTrigger value="comment" className="text-sm text-neutral-90">
              내가 쓴 댓글
            </TabTrigger>
          </Link>
        </TabList>
        <TabContent value="interest" className="w-full h-full pt-[25px]">
          <MyLikesLogPage />
        </TabContent>
        <TabContent value="recent" className="w-full h-full pt-[25px]">
          <MyViewsLogPage />
        </TabContent>
        <TabContent value="comment" className="w-full h-full pt-[25px]">
          <MyCommentsPage />
        </TabContent>
      </TabRoot>
    </div>
  );
};

export default MyactiveTap;
