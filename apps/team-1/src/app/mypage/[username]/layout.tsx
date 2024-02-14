import { userTypes } from "@/types";
import { handleUserGetByUserName } from "@/utils/api";
import { getUserData } from "@/utils/common/getUserData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BaseProfile from "./(components)/BaseProfile";
import AdditionalProfile from "./(components)/AdditionalProfile";
import MypageBanner from "./(components)/MypageBanner";

export const fetchCache = "default-no-store";

interface generateMetadataProps {
  params: { username: string };
}

export const generateMetadata = async ({
  params,
}: generateMetadataProps): Promise<Metadata> => {
  const { username } = params;
  const currentUserData = (await handleUserGetByUserName(
    username,
  )) as userTypes;

  return {
    title: `${currentUserData.username}의 스팩로그`,
    description: `${currentUserData.description}`,
  };
};

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) => {
  const { username } = params;
  const currentUserData = await handleUserGetByUserName(username);
  const loginedUserData = getUserData("pb_auth");

  if (!currentUserData) return notFound();

  return (
    <div className="relative">
      <MypageBanner />
      <div className="flex justify-center">
        <div className="grid z-10 mt-[120px] mb-[20px]">
          <div>
            {loginedUserData &&
            loginedUserData.username === currentUserData.username ? (
              <AdditionalProfile
                userId={currentUserData.id}
                userName={currentUserData.username}
                userImage={currentUserData.profileImage}
                description={currentUserData.description}
                email={currentUserData.email}
                sns={currentUserData.sns}
                careers={currentUserData.careers}
                contest={currentUserData.contest}
                skills={currentUserData.skills}
              />
            ) : (
              <BaseProfile
                userId={currentUserData.id}
                userName={currentUserData.username}
                userImage={currentUserData.profileImage}
                description={currentUserData.description}
                email={currentUserData.email}
                sns={currentUserData.sns}
                careers={currentUserData.careers}
                contest={currentUserData.contest}
                skills={currentUserData.skills}
              />
            )}
          </div>
        </div>
        <div className="z-10 mt-[220px] w-[756px]">
          {currentUserData.username ? <div>{children}</div> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Layout;
