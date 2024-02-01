"use client";

import "@uiw/react-markdown-preview/markdown.css";
import TocContainer from "./(components)/Toc/TocContainer";
import CustomViewer from "./(components)/CustomViewer";
import FloatingMenu from "./(components)/FloatingMenu/FloatingMenu";
import LogHeader from "./(components)/LogHeader";
import { Button } from "design-kit";
import LogCenterInfo from "./(components)/LogCenterInfo";

const LogsDeatail = () => {
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <LogHeader
          title="Spring JDBC 성능 문제, 네트워크 분석으로 파악하기 Spring JDBC 성능 문제, 네트워크 분석으로 파악하기 Spring JDBC 성능 문제, 네트워크 분석으로 파악하기"
          userName="화났어요"
          profileImg="http://54.180.1.20:8090/api/files/_pb_users_auth_/kwvngje3cdabra1/2024_01_24_17_03_31_hbJImrj1FZ.png?token="
          createdAt="2024.01.23"
          like="127"
          view="524"
        />
        <div className="pt-[100px] min-h-[700px] text-center">
          <FloatingMenu />
          <CustomViewer content="# ss" />
          <TocContainer />
        </div>
      </div>
      <LogCenterInfo
        title="Spring JDBC 성능 문제, 네트워크 분석으로 파악하기 Spring JDBC 성능 문제, 네트워크 분석으로 파악하기 Spring JDBC 성능 문제, 네트워크 분석으로 파악하기 Spring JDBC 성능 문제, 네트워크 분석으로 파악하기 Spring JDBC 성능 문제, 네트워크 분석으로 파악하기 Spring JDBC 성능 문제, 네트워크 분석으로 파악하기 Spring JDBC 성능 문제, 네트워크 분석으로 파악하기 Spring JDBC 성능 문제, 네트워크 분석으로 파악하기"
        like="127"
        view="524"
      />
      <div className="max-w-[800px] m-auto">댓글</div>
    </>
  );
};

export default LogsDeatail;
