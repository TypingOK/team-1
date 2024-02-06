import {
  handleFollowerGetByUserId,
  handleFollowingGetByUserId,
} from "@/utils/api";
import { useRouter } from 'next/navigation';

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

const reduceCareers = () => { };

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
  console.log(parsedCareers);



  return (
    <div>
      <div className="w-[334px] min-h-[1107px] bg-background-blue rounded-[10px] mx-auto grid place-items-center">
        <div className="grid place-items-center">
          <img
            src={`https://nf01uyzvha.execute-api.ap-northeast-2.amazonaws.com/api/files/_pb_users_auth_/${userId}/${userImage}`}
            alt="이미지를 설정"
            className="w-[80px] h-[80px] rounded-full"
          />
          <p className="text-neutral-100 text-[20px] font-semibold">{userName}</p>
          <p className="text-neutral-70 text-[14px] font-regular">{description || "자기 소개를 입력해 주세요."}</p>
          <p className="text-neutral-30 text-[12px] font-medium">{email}</p>
        </div>

        <button className="w-[304px] h-[40px] text-neutral-0 text-[14px] font-semibold bg-primary-80 rounded-[10px]">프로필 편집</button>
        <div className="w-[304px] min-h-[90px] bg-neutral-0 rounded-[10px]">
          <p className="text-primary-100 text-[20px] font-semibold">
            {followingData.length}
            <span className="text-neutral-40 text-[16px] font-semibold">팔로우</span>
          </p>
          <p className="text-primary-100 text-[20px] font-semibold">
            {followerData.length}
            <span className="text-neutral-40 text-[16px] font-semibold">팔로워</span>
          </p>
        </div>
        <div className="w-[304px] min-h-[332px] bg-neutral-0 rounded-[10px]">
          <div>
            <p className="text-neutral-90 text-[16px] font-semibold">경력</p>
            <p className="text-primary-100 text-[24px] font-semibold">
              {parsedCareers.length}
              <span className="text-neutral-70 text-[14px] font-regular">경력 연차</span>
            </p>
            <p className="text-primary-100 text-[24px] font-semibold">
              {parsedContest.length}
              <span className="text-neutral-70 text-[14px] font-regular">공모전 입상</span>
            </p>
            <p className="text-primary-100 text-[24px] font-semibold">
              {parsedSkills.length}
              <span className="text-neutral-70 text-[14px] font-regular">기술 보유</span>
            </p>
            <div className="flex gap-2">
              {parsedSkills.map(item => (
                <span
                  className="h-[21px] text-primary-100 text-[12px] font-medium border-primary-100 rounded-[100px]"
                  key={item[0]}
                >{item[1]}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-neutral-90 text-[16px] font-semibold">SNS 연동</p>
            <div></div>
          </div>
        </div>
        <div className="w-[304px] min-h-[197px] bg-neutral-0 rounded-[10px]">
          <p className="text-neutral-90 text-[16px] font-semibold">나의 활동</p>
          <div>
            <span className="text-neutral-70 text-[14px] font-regular">관심 로그</span>
            <button>ㄱ</button>
          </div>
          <div>
            <span className="text-neutral-70 text-[14px] font-regular">최근 본 로그</span>
            <button>ㄱ</button>
          </div>
          <div>
            <span className="text-neutral-70 text-[14px] font-regular">내가 쓴 댓글</span>
            <button >ㄱ</button>
          </div>
        </div>
        <div className="w-[304px] min-h-[152px] bg-neutral-0 rounded-[10px]">
          <p className="text-neutral-90 text-[16px] font-semibold">계정</p>
          <div>
            <span className="text-neutral-70 text-[14px] font-regular">로그아웃</span>
            <button></button>
          </div>
          <div>
            <span className="text-neutral-70 text-[14px] font-regular">회원탈퇴</span>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseProfile;
