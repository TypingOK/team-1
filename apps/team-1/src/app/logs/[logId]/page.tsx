"use client";

import "@uiw/react-markdown-preview/markdown.css";
import TocContainer from "./(components)/Toc/TocContainer";
import CustomViewer from "./(components)/CustomViewer";
import FloatingMenu from "./(components)/FloatingMenu/FloatingMenu";
import LogHeader from "./(components)/LogHeader";
import LogCenterInfo from "./(components)/LogCenterInfo";
import CommentContainer from "./(components)/Comments/CommentContainer";
import { detailMockData, commentMockData } from "./mockData";

const LogsDeatail = () => {
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <LogHeader
          title="Spring JDBC 성능 문제, 네트워크 분석으로 파악하기"
          userName="화났어요"
          profileImg="https://nf01uyzvha.execute-api.ap-northeast-2.amazonaws.com/api/files/_pb_users_auth_/kwvngje3cdabra1/2024_01_24_17_03_31_hbJImrj1FZ.png?token="
          createdAt="2024.01.23"
          like="127"
          view="524"
        />
        <div className="pt-[100px] min-h-[700px] text-center">
          <FloatingMenu />
          <CustomViewer content={detailMockData} />
          <TocContainer />
        </div>
      </div>
      <LogCenterInfo
        title="Spring JDBC 성능 문제, 네트워크 분석으로 파악하기"
        like="127"
        view="524"
      />
      <CommentContainer commentData={commentMockData} />
    </>
  );
};

export default LogsDeatail;
