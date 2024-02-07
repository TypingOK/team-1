"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "design-kit";

const HeaderRightAuth = () => {
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
      <Link
        href="/login"
        className="flex h-full items-center font-semibold text-neutral-50"
      >
        로그인
      </Link>
    </div>
  );
};

export default HeaderRightAuth;
