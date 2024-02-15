"use client";

import { TabRoot, TabList, TabTrigger, TabContent } from "design-kit";
import DeleteAccount from "./DeleteAccount";
import Logout from "./Logout";
import { mypageProps } from "../../page";
import Link from "next/link";

const AccountTap = ({ params, searchParams }: mypageProps) => {
  return (
    <div className="flex flex-col gap-[20px] p-[50px]">
      <p className="body-3-bold">계정</p>
      <TabRoot value={searchParams?.target ? searchParams.target : "logout"}>
        <TabList className="w-[250px] flex justify-around">
          <Link href={`/mypage/${params.username}/account?target=logout`}>
            <TabTrigger value="logout" className="text-sm text-neutral-90">
              로그아웃
            </TabTrigger>
          </Link>
          <Link href={`/mypage/${params.username}/account?target=signout`}>
            <TabTrigger value="signout" className="text-sm text-neutral-90">
              회원탈퇴
            </TabTrigger>
          </Link>
        </TabList>
        <TabContent value="logout" className="w-full h-full pt-[80px]">
          <Logout />
        </TabContent>
        <TabContent value="signout" className="w-full h-full pt-[80px]">
          <DeleteAccount />
        </TabContent>
      </TabRoot>
    </div>
  );
};

export default AccountTap;
