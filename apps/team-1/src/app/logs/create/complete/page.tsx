"use client";

import { Button } from "design-kit";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Complete = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="w-[350px] h-[350px] relative">
          <Image
            src="/icons/create/bigIcon.png"
            alt="completeImage"
            fill={true}
          />
        </div>
        <div className="flex justify-center flex-col items-center gap-[60px]">
          <p className="body-3-bold">로그를 업로드하였습니다.</p>
          <Button
            variant={"primary"}
            className="w-[108px] h-[40px] text-base font-semibold"
            onClick={() => router.replace("/")}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Complete;
