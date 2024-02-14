"use client";

import { TabRoot, TabList, TabTrigger, TabContent } from "design-kit";
import DeleteAccount from "./DeleteAccount";
import Logout from "./Logout";

const AccountTap = () => {
  return (
    <div className="flex flex-col gap-[20px] p-[50px]">
      <p className="body-3-bold">계정</p>
      <TabRoot defaultValue="tab1">
        <TabList className="w-[250px] flex justify-around">
          <TabTrigger value="tab1" className="text-sm text-neutral-90">
            로그아웃
          </TabTrigger>
          <TabTrigger value="tab2" className="text-sm text-neutral-90">
            회원탈퇴
          </TabTrigger>
        </TabList>
        <TabContent value="tab1" className="w-full h-full pt-[80px]">
          <Logout />
        </TabContent>
        <TabContent value="tab2" className="w-full h-full pt-[80px]">
          <DeleteAccount />
        </TabContent>
      </TabRoot>
    </div>
  );
};

export default AccountTap;
