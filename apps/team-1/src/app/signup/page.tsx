"use client";

import React, { useState } from "react";
import SignUpFirst from "@/components/signUpFirst";
import SignUpSecond from "@/components/signUpSecond";
import SignUpComplete from "@/components/signUpComplete";

export default function Signup() {
  const [pageNum, setPageNum] = useState(1);

  const goToNextPage = () => setPageNum(pageNum + 1);
  const goToPreviousPage = () => setPageNum(1); // 이전 페이지로 돌아가는 함수

  return (
    <div>
      {pageNum === 1 ? (
        <SignUpFirst goToNextPage={goToNextPage} />
      ) : pageNum === 2 ? (
        <SignUpSecond
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      ) : (
        <SignUpComplete />
      )}
    </div>
  );
}
