"use client";

import { handleLogin, handleSignup } from "@/utils/api";
import { TabContent, TabList, TabRoot, TabTrigger } from "design-kit";
import MyComments from '../../(components)/MyComments';
import MyLikeLogs from "@/app/(components)/MyLikeLogs";
import MyViewLogs from "@/app/(components)/MyViewLogs";

const Mypage = () => {
  // const tryLogin = async () => {
  //   const res = await handleLogin("test4@team1.com", "Team123!");
  // };
  // const trySignUp = async () => {
  //   const res = await handleSignup({
  //     email: "test44@team1.com",
  //     password: "12345678",
  //     passwordConfirm: "12345678",
  //     username: "i_am_happy",
  //   });
  // };

  return (
    <div>
      <img src="/icons/mypage/Mypage_banner.svg"></img>
      <div className="flex flex-col gap-[20px] p-[50px]">
        {/* <img src="/icons/mypage/Mypage_banner.svg"/> */}
        {/* <p>mypage</p>
      <button onClick={tryLogin}>로그인</button>
      <button onClick={trySignUp}>회원가입</button> */}
        <p className="body-3-bold">나의 활동</p>
        <TabRoot defaultValue="tab1">
          <TabList className="w-96 flex justify-around">
            <TabTrigger value="tab1" className="text-sm text-neutral-90">관심 로그</TabTrigger>
            <TabTrigger value="tab2" className="text-sm text-neutral-90">최근 본 로그</TabTrigger>
            <TabTrigger value="tab3" className="text-sm text-neutral-90">내가 쓴 댓글</TabTrigger>
          </TabList>
          <TabContent value="tab1" className="w-full h-full pt-[25px]">
            <MyLikeLogs />
          </TabContent>
          <TabContent value="tab2" className="w-full h-full pt-[25px]">
            <MyViewLogs />
          </TabContent>
          <TabContent value="tab3" className="w-full h-full pt-[25px]">
            <MyComments />
          </TabContent>
        </TabRoot>
      </div>
    </div>
  );
};

export default Mypage;
