"use client";
import { useState } from "react";
import ChangePassword from "@/components/changePassword/changePassword";
import ChangePasswordComplete from "@/components/changePassword/changePasswordComplete";

export default function ChangePasswordPage() {
  const [pageNum, setPageNum] = useState(0);
  const goToNextPage = () => setPageNum(pageNum + 1);

  return (
    <div>
      {pageNum == 0 ? (
        <ChangePassword goToNextPage={goToNextPage} />
      ) : (
        <ChangePasswordComplete />
      )}
    </div>
  );
}
