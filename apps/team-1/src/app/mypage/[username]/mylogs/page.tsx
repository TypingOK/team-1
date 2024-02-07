"use client";

import { useGetTargetLogs } from "@/hooks/queries/useGetMyLogs";
import { useSearchParams } from "next/navigation";
import { pb } from "@/utils/api";
import { userTypes } from "@/types";

const myLogs = () => {
  const userData = pb.authStore.model as userTypes;
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data } = useGetTargetLogs(page, userData?.id, page, 30);

  return (
    <div>
      {data && data.items.map(item => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};

export default myLogs;
