"use client";

import { TabRoot, TabList, TabTrigger, TabContent } from "design-kit";
import MyLikesLogPage from "./MyLikesLog";
import MyViewsLogPage from "./MyViewsLog";
import MyCommentsPage from "./MyComments";

const MyactiveTap = () => {
  return (
    <div className="flex flex-col gap-[20px] p-[50px]">
      <p className="body-3-bold">나의 활동</p>
      <TabRoot defaultValue="tab1">
        <TabList className="w-[380px] flex justify-around">
          <TabTrigger value="tab1" className="text-sm text-neutral-90">
            관심 로그
          </TabTrigger>
          <TabTrigger value="tab2" className="text-sm text-neutral-90">
            최근 본 로그
          </TabTrigger>
          <TabTrigger value="tab3" className="text-sm text-neutral-90">
            내가 쓴 댓글
          </TabTrigger>
        </TabList>
        <TabContent value="tab1" className="w-full h-full pt-[25px]">
          <MyLikesLogPage />
        </TabContent>
        <TabContent value="tab2" className="w-full h-full pt-[25px]">
          <MyViewsLogPage />
        </TabContent>
        <TabContent value="tab3" className="w-full h-full pt-[25px]">
          <MyCommentsPage />
        </TabContent>
      </TabRoot>
    </div>
  );
};

export default MyactiveTap;
