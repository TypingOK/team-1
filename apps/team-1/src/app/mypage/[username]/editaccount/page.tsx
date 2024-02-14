"use client";

import { Button, Input } from "design-kit";

const EditAccount = () => {
  return (
    <div className="px-[50px] py-[20px]">
      <div className="p-[40px] flex flex-col gap-[30px]">
        <p className="body-3-bold text-neutral-90 py-[4px]">프로필 사진</p>
        <div className="border-t border-stroke-10" />
        <div className="flex justify-between">
          <img className="h-[80px] w-[80px] rounded-full" />
          <div className="flex gap-[9px] item-center">
            <Button className="w-[182px] h-[40px] font-semibold text-[16px] p-[9px] text-neutral-40 border-neutral-20">
              프로필 사진 삭제
            </Button>
            <Button
              variant={"primary"}
              className="w-[152px] h-[40px] font-semibold text-[16px] p-[9px]"
            >
              사진 업로드
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] p-[40px]">
        <div>
          <p className="body-3-bold text-neutral-90 py-[4px]">기본정보</p>
          <div className="border-t border-stroke-10" />
        </div>
        <div className="flex flex-col gap-[7px]">
          <p className="body-7-bold text-neutral-90">이름</p>
          <Input
            border={`full`}
            placeholder="본명을 입력해 주세요."
            className="caption-3 text-neutral-40 w-[576px] h-[46px] justify-between px-[15px] py-[14.5px]"
          />
        </div>
        <div className="flex flex-col gap-[7px]">
          <p className="body-7-bold text-neutral-90">닉네임</p>
          <Input
            border={`full`}
            placeholder="본명을 입력해 주세요."
            className="caption-3 text-neutral-40 w-[576px] h-[46px] justify-between px-[15px] py-[14.5px]"
          />
        </div>
        <div className="flex flex-col gap-[7px]">
          <p className="body-7-bold text-neutral-90">자기소개</p>
          <Input
            border={`full`}
            placeholder="본명을 입력해 주세요."
            className="caption-3 text-neutral-40 w-[576px] h-[46px] justify-between px-[15px] py-[14.5px]"
          />
        </div>
        <div className="flex flex-col gap-[7px]">
          <p className="body-7-bold text-neutral-90">스팩로그 URL</p>
          <Input
            border={`full`}
            placeholder="본명을 입력해 주세요."
            className="caption-3 text-neutral-40 w-[576px] h-[46px] justify-between px-[15px] py-[14.5px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[30px] p-[40px]">
        <p className="body-3-bold text-neutral-90 py-[4px]">관심분야</p>
        <div className="border-t border-stroke-10" />
      </div>
      <div className="flex flex-col gap-[30px] p-[40px]">
        <p className="body-3-bold text-neutral-90 py-[4px]">제안허용</p>
        <div className="border-t border-stroke-10" />
      </div>
      <div className="flex flex-col gap-[30px] p-[40px]">
        <p className="body-3-bold text-neutral-90 py-[4px]">SNS 연동</p>
        <div className="border-t border-stroke-10" />
      </div>
      <div className="flex flex-col gap-[30px] p-[40px]">
        <p className="body-3-bold text-neutral-90 py-[4px]">경력</p>
        <div className="border-t border-stroke-10" />
      </div>
      <div className="flex flex-col gap-[30px] p-[40px]">
        <p className="body-3-bold text-neutral-90 py-[4px]">공모전</p>
        <div className="border-t border-stroke-10" />
      </div>
      <div className="flex flex-col gap-[30px] p-[40px]">
        <p className="body-3-bold text-neutral-90 py-[4px]">기술보유</p>
        <div className="border-t border-stroke-10" />
      </div>
      <div className="flex flex-col gap-[15px] p-[40px]">
        <Button
          variant={"primary"}
          className="w-[567px] h-[46px] text-[16px] font-semibold"
        >
          저장하기
        </Button>
        <Button className="w-[567px] h-[46px] text-[16px] font-semibold text-neutral-40 border-neutral-20">
          취소하기
        </Button>
      </div>
    </div>
  );
};

export default EditAccount;
