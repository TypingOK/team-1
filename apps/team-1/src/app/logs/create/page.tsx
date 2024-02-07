"use client";

import { ModalRoot } from "design-kit";
import dynamic from "next/dynamic";

const CustomEditor = dynamic(
  () => import("@/app/logs/create/(components)/CustomEditor"),
  { ssr: false, loading: () => <p>Loading...</p> },
);

const LogsCreate = () => {
  return (
    <div className="max-w-[1200px] m-auto pb-[125px]">
      <h1 className="page-title py-[60px]">새 로그 작성하기</h1>
      <ModalRoot>
        <CustomEditor />
      </ModalRoot>
    </div>
  );
};

export default LogsCreate;
