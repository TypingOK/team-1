"use client";

import SignUpComplete from "@/components/signup/signUpComplete";
import SignUpEmailVerify from "@/components/signup/signUpEmailVerify";
import SignUpFirst from "@/components/signup/signUpFirst";
import SignUpSecond from "@/components/signup/signUpSecond";
import SignUpStart from "@/components/signup/signUpStart";
import { useState } from "react";

export default function Signup() {
  const [pageNum, setPageNum] = useState(0);

  const goToNextPage = () => setPageNum(pageNum + 1);
  const goToPreviousPage = () => setPageNum(pageNum - 1); // 이전 페이지로 돌아가는 함수

  return (
    <div>
      {pageNum === 0 ? (
        <SignUpStart goToNextPage={goToNextPage} />
      ) : pageNum === 1 ? (
        <SignUpFirst goToNextPage={goToNextPage} />
      ) : pageNum === 2 ? (
        <SignUpSecond
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      ) : pageNum === 3 ? (
        <SignUpEmailVerify goToNextPage={goToNextPage} />
      ) : (
        <SignUpComplete />
      )}
    </div>
  );
}
