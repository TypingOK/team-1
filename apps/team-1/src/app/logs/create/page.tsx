"use client";

import {
  Button,
  ModalClose,
  ModalContent,
  ModalRoot,
  ModalTrigger,
} from "design-kit";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const CustomEditor = dynamic(
  () => import("@/app/logs/create/(components)/CustomEditor"),
  { ssr: false, loading: () => <p>Loading...</p> },
);

const LogsCreate = () => {
  const router = useRouter();

  return (
    <div className="max-w-[1200px] m-auto pb-[125px]">
      <h1 className="page-title py-[60px]">새 로그 작성하기</h1>
      <ModalRoot>
        <CustomEditor />
      </ModalRoot>
      <ModalRoot>
        <div className="flex justify-end mt-[18px]">
          <ModalTrigger asChild>
            <div className="flex gap-[6px] cursor-pointer">
              <img src="/icons/create/cancleWrite.svg" />
              <p className="body-7-bold text-primary-100">작성 취소하기</p>
            </div>
          </ModalTrigger>
        </div>
        <ModalContent className="p-0 rounded-[10px]">
          <div className="w-[332px] h-[122px] flex flex-col justify-center items-center">
            <p className="body-6-bold font-semibold mb-[8px]">취소하기</p>
            <div className="body-7">
              <p>작성을 정말 취소하시겠습니까?</p>
              <p>작성하신 로그가 사라집니다.</p>
            </div>
          </div>
          <div className="flex">
            <ModalClose asChild>
              <Button
                variant={"outlinePrimary"}
                className="rounded-r-none rounded-tl-none rounded-bl-[10px] w-[166px] h-[45px] text-base"
              >
                취소
              </Button>
            </ModalClose>
            <ModalClose asChild>
              <Button
                variant={"primary"}
                className="rounded-l-none rounded-tr-none rounded-br-[10px] w-[166px] h-[45px] text-base"
                onClick={() => {
                  router.back();
                }}
              >
                확인
              </Button>
            </ModalClose>
          </div>
        </ModalContent>
      </ModalRoot>
    </div>
  );
};

export default LogsCreate;
