"use client";

import "@uiw/react-markdown-preview/markdown.css";
import TocContainer from "./(components)/Toc/TocContainer";
import CustomViewer from "./(components)/CustomViewer";
import FloatingMenu from "./(components)/FloatingMenu/FloatingMenu";
import LogHeader from "./(components)/LogHeader";
import LogCenterInfo from "./(components)/LogCenterInfo";
import CommentContainer from "./(components)/Comments/CommentContainer";
import { useGetLogDetail } from "@/hooks/queries/useGetLogDetail";
import { useGetComments } from "@/hooks/queries/useGetComments";
import { useParams } from "next/navigation";
import { API_SERVER } from "@/constants";
import RecommendContainer from "./(components)/Recommend/RecommendContainer";

const LogsDeatail = () => {
  const params = useParams<{ logId: string }>();
  const logData = useGetLogDetail(params.logId);
  const commentsData = useGetComments(params.logId);

  if (logData.isLoading || commentsData.isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        loading...
      </div>
    );

  return (
    logData.data && (
      <>
        <div className="max-w-[1200px] m-auto">
          <LogHeader
            title={logData.data.title}
            userName={logData.data.expand.userId.username}
            profileImg={`${API_SERVER}/api/files/_pb_users_auth_/${logData.data.expand.userId.id}/${logData.data.expand.userId.profileImage}`}
            createdAt={logData.data.created}
            like={logData.data.likes}
            view={logData.data.views}
          />
          <div className="pt-[100px] min-h-[700px] text-center">
            <FloatingMenu />
            <CustomViewer content={logData.data.content} />
            <TocContainer />
          </div>
        </div>
        <LogCenterInfo
          title={logData.data.title}
          like={logData.data.likes}
          view={logData.data.views}
        />
        <div className="max-w-[800px] m-auto">
          {commentsData.data && (
            <CommentContainer
              commentData={commentsData.data}
              owner={logData.data.expand.userId.id}
            />
          )}
        </div>
        <RecommendContainer
          userId={logData.data.expand.userId.id}
          username={logData.data.expand.userId.username}
          profileImage={logData.data.expand.userId.profileImage}
          tagTitles={logData.data.tags}
        />
      </>
    )
  );
};

export default LogsDeatail;
