"use client";
import { Button, Input } from "design-kit";
import Image from "next/image";
import Link from "next/link";

const HeaderRight = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-[222px] h-10 rounded-[20px] border justify-center items-center border-neutral-20">
        <Image
          src="/header/search.svg"
          alt="검색아이콘"
          width={20}
          height={20}
        ></Image>
        <Input
          className="w-44 border-none h-7"
          placeholder="검색어를 입력하세요."
        />
      </div>
      <div className="h-full flex items-center">
        <Image
          src="/header/darkmode.svg"
          alt="다크모드"
          width={20}
          height={20}
        ></Image>
      </div>
      <div className="h-full flex items-center">
        <Image
          src="/header/alert.svg"
          alt="알림"
          width={20}
          height={20}
        ></Image>
      </div>
      <div className="h-full flex items-center">
        <Image
          src="/header/chatting.svg"
          alt="메세지"
          width={20}
          height={20}
        ></Image>
      </div>
      <div className="h-full flex items-center">
        <Image
          src="/header/user-profile.svg"
          alt="유저프로필"
          width={20}
          height={20}
        ></Image>
      </div>
      <div className="h-full flex items-center">
        <Link
          href="/create"
          className="w-28 flex justify-center items-center text-primary-100 h-10 text-base font-semibold p-0 border border-stroke-blue rounded-[5rem]"
        >
          새 로그 작성
        </Link>
      </div>
    </div>
  );
};

export default HeaderRight;
