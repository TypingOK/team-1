"use client";

import {
  handleFollowerGetByUserId,
  handleFollowingGetByUserId,
} from "@/utils/api";
import { Button } from "design-kit";

interface baseProfileProps {
  userId: string;
  userName: string;
  userImage: string;
  description: string;
  email: string;
  sns: {
    instagram?: string;
    github?: string;
    sfacfolio?: string;
    rocketpunch?: string;
    youtube?: string;
  };
  careers: {
    [index: string]: {
      companyName: string;
      period: string;
      position: string;
    };
  };
  contest: {
    [index: string]: {
      companyName: string;
      period: string;
      description: string;
    };
  };
  skills: {
    [index: string]: string;
  };
}

const parseData = (data: { [index: string]: string }) => {
  return Object.entries(data);
};

const parseArrayData = (data: {
  [index: string]: { [index: string]: string };
}) => {
  return Object.entries(data);
};

const reduceCareers = () => {};

const BaseProfile = async ({
  userId,
  userName,
  description,
  userImage,
  email,
  sns,
  careers,
  contest,
  skills,
}: baseProfileProps) => {
  const followerData = await handleFollowerGetByUserId(userId);
  const followingData = await handleFollowingGetByUserId(userId);
  const parsedSns = sns ? parseData(sns) : [];
  const parsedCareers = careers ? parseArrayData(careers) : [];
  const parsedContest = contest ? parseArrayData(contest) : [];
  const parsedSkills = skills ? parseData(skills) : [];
  return (
    <div>
      <div className="w-[334px] bg-background-blue rounded-[10px] mx-auto flex flex-col gap-[15px] py-[30px] items-center">
        <div className="place-items-center flex flex-col gap-[3px]">
          <img
            src={`https://nf01uyzvha.execute-api.ap-northeast-2.amazonaws.com/api/files/_pb_users_auth_/${userId}/${userImage}`}
            alt="이미지를 설정"
            className="w-[80px] h-[80px] rounded-full"
          />
          <p className="text-neutral-100 body-4-bold mb-[2px]">{userName}</p>
          <p className="text-neutral-70 body-7">
            {description || "자기 소개를 입력해 주세요."}
          </p>
          <p className="text-neutral-30 caption-4 flex gap-[2px]">
            <img src="/icons/mypage/link.svg" />
            {email}
          </p>
        </div>
        <Button
          variant={"primary"}
          className="w-[304px] h-[40px] text-neutral-0 text-[14px] text-xs bg-primary-80"
        >
          팔로우하기
        </Button>
        <div className="flex gap-[6px]">
          <Button
            variant={"outlinePrimary"}
            className="w-[149px] h-[40px] text-[14px] text-xs bg-primary-0 border border-stroke-blue"
          >
            메세지 보내기
          </Button>
          <Button
            variant={"outlinePrimary"}
            className="w-[149px] h-[40px] text-[14px] text-xs bg-primary-0 border border-stroke-blue"
          >
            작업 제안하기
          </Button>
        </div>
        <div className="w-[304px] min-h-[90px] bg-neutral-0 rounded-[10px] flex gap-[55px] place-items-center justify-center">
          <div className="grid place-items-center">
            <p className="text-primary-100 body-4-bold">
              {followingData.length}
            </p>
            <p className="text-neutral-40 body-6-bold">팔로우</p>
          </div>
          <div className="w-[1px] h-[60px] bg-stroke-10" />
          <div className="grid place-items-center">
            <p className="text-primary-100 body-4-bold">
              {followerData.length}
            </p>
            <p className="text-neutral-40 body-6-bold">팔로워</p>
          </div>
        </div>

        <div className="w-[304px] bg-neutral-0 rounded-[10px] gap-[25px] p-[20px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[10px]">
              <p className="text-neutral-90 body-6-bold">경력</p>
              <div className="flex flex-col gap-[25px]">
                <div className="flex gap-[15px] place-items-center justify-center">
                  <div className="grid place-items-center">
                    <p className="text-primary-100 body-3-bold">
                      {parsedCareers.length}
                    </p>
                    <p className="text-neutral-70 body-7">경력 연차</p>
                  </div>
                  <div className="w-[1px] h-[60px] bg-stroke-10" />
                  <div className="grid place-items-center">
                    <p className="text-primary-100 body-3-bold">
                      {parsedContest.length}
                    </p>
                    <p className="text-neutral-70 body-7">공모전 입상</p>
                  </div>
                  <div className="w-[1px] h-[60px] bg-stroke-10" />
                  <div className="grid place-items-center">
                    <p className="text-primary-100 body-3-bold">
                      {parsedSkills.length}
                    </p>
                    <p className="text-neutral-70 body-7">기술 보유</p>
                  </div>
                </div>
                <div className="flex gap-[5px] flex-wrap">
                  {parsedSkills.map(item => (
                    <span
                      className="h-[21px] text-primary-100 caption-4 border-primary-100 border rounded-[100px] py-[2px] px-[10px]"
                      key={item[0]}
                    >
                      {item[1]}
                    </span>
                  ))}
                </div>
                <div className="border-t border-stroke-10" />
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <p className="text-neutral-90 body-6-bold">SNS 연동</p>
              <div className="flex gap-[28.5px]">
                {parsedSns.map(
                  (item, index) =>
                    item[1].trim() !== "" && (
                      <div key={index}>
                        <img
                          src={`/icons/mypage/sns${index + 1}.svg`}
                          alt={item[0]}
                        />
                      </div>
                    ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseProfile;
