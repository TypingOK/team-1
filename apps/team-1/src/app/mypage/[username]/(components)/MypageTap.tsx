"use client";

import { TabRoot, TabList, TabTrigger, TabContent } from "design-kit";
import MyLogs from "./MyLogs";
import MyArchive from "./MyArchive";
import { mypageProps } from "../page";
import Link from "next/link";

const MypageTap = ({ params, searchParams }: mypageProps) => {
  return (
    <div className="flex flex-col gap-[20px] p-[50px]">
      <p className="body-3-bold">마이페이지</p>
      <TabRoot value={searchParams ? searchParams.target : "log"}>
        <TabList className="w-[250px] flex justify-around">
          <Link href={"/mypage/i_am_angry?target=log"}>
            <TabTrigger value="log" className="text-sm text-neutral-90">
              로그
            </TabTrigger>
          </Link>
          <Link href={"/mypage/i_am_angry?target=archive"}>
            <TabTrigger value="archive" className="text-sm text-neutral-90">
              아카이브
            </TabTrigger>
          </Link>
        </TabList>
        <TabContent value="log" className="w-full h-full pt-[25px]">
          <MyLogs />
        </TabContent>
        <TabContent value="archive" className="w-full h-full pt-[25px]">
          <MyArchive />
        </TabContent>
      </TabRoot>
    </div>
  );
};

export default MypageTap;
