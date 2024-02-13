"use client";
import { TabRoot, TabList, TabContent, TabTrigger } from "design-kit";
import LogList from "./LogList";

const LogTabs = () => {
  return (
    <div className="w-full ">
      <TabRoot
        className="w-full flex flex-col items-center"
        defaultValue="popular"
      >
        <div className="w-full max-w-[1050px]">
          <TabList className="w-96 flex justify-around">
            <TabTrigger value="popular">인기로그</TabTrigger>
            <TabTrigger value="latest">최신로그</TabTrigger>
            <TabTrigger value="follow">팔로잉로그</TabTrigger>
          </TabList>
        </div>
        <TabContent className="w-full max-w-[1050px]" value="popular">
          <LogList category={"popular"} />
        </TabContent>
        <TabContent className="w-full max-w-[1050px]" value="latest">
          <LogList category={"latest"} />
        </TabContent>
        <TabContent className="w-full max-w-[1050px]" value="follow">
          <LogList category={"follow"} />
        </TabContent>
      </TabRoot>
    </div>
  );
};

export default LogTabs;
