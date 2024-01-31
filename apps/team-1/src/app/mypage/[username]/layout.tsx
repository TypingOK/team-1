import { userTypes } from "@/types";
import { handleUserGetByUserName } from "@/utils/api";
import { getUserData } from "@/utils/common/getUserData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BaseProfile from "./(components)/BaseProfile";
import AdditionalProfile from "./(components)/AdditionalProfile";

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
    <div className="grid grid-cols-[1fr_2fr]">
      <div>
        <BaseProfile
          userId={currentUserData.id}
          userName={currentUserData.username}
          description={currentUserData.description}
          email={currentUserData.email}
          sns={currentUserData.sns}
          careers={currentUserData.careers}
          contest={currentUserData.contest}
          skills={currentUserData.skills}
        />
        {loginedUserData &&
        loginedUserData.username === currentUserData.username ? (
          <AdditionalProfile />
        ) : (
          <></>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
