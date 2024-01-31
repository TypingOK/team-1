import {
  handleFollowerGetByUserId,
  handleFollowingGetByUserId,
} from "@/utils/api";

interface baseProfileProps {
  userId: string;
  userName: string;
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
      <p>{userId}</p>
      <p>{userName}</p>
      <p>{description || "자기 소개 없음."}</p>
      <p>{email}</p>
      <p>팔로워{followerData.length}</p>
      <p>팔로잉{followingData.length}</p>
      <div>
        <p>경력</p>
        <p>경력 연차 {parsedCareers.length}</p>
        <p>공모전 입상 {parsedContest.length}</p>
        <p>기술 보유 {parsedSkills.length}</p>
        <div className="flex gap-2">
          {parsedSkills.map(item => (
            <span key={item[0]}>{item[1]}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseProfile;
