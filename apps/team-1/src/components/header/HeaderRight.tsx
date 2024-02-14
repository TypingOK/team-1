"use client";
import { useMutation } from "@tanstack/react-query";
import {
  Button,
  Input,
  DropDownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "design-kit";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeaderRight = ({ cookies }: { cookies: string }) => {
  const decodedData = decodeURIComponent(cookies);
  const jsonData = decodedData.split("=")[1];
  const jsonDataSlice = jsonData.slice(0, jsonData.length - 1);
  // JSON 파싱 전에 JSON 문자열에서 불필요한 공백 제거
  const trimmedJsonData = jsonDataSlice.trim();

  // JSON 파싱
  const parsedData = JSON.parse(trimmedJsonData);

  // username 값을 추출
  const username = parsedData.model.username;

  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: async (numbers: number) => {
      const result = await fetch(`/api`, { method: `DELETE` });
      return result;
    },
  });
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-[222px] h-10 rounded-[20px] border justify-center items-center border-neutral-20">
        <Image
          src="/header/search.svg"
          alt="검색아이콘"
          width={20}
          height={20}
        ></Image>
        <Input
          className="w-44 border-none h-7"
          placeholder="검색어를 입력하세요."
        />
      </div>
      <div className="h-full flex items-center">
        <Image
          src="/header/darkmode.svg"
          alt="다크모드"
          width={20}
          height={20}
        ></Image>
      </div>
      <div className="h-full flex items-center">
        <Image
          src="/header/alert.svg"
          alt="알림"
          width={20}
          height={20}
        ></Image>
      </div>
      <div className="h-full flex items-center">
        <Image
          src="/header/chatting.svg"
          alt="메세지"
          width={20}
          height={20}
        ></Image>
      </div>
      <div className="h-full flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/header/user-profile.svg"
              alt="유저프로필"
              width={20}
              height={20}
            ></Image>
          </DropdownMenuTrigger>
          <DropDownMenuContent className="z-[10001] h-24 w-32 border justify-center border-neutral-10 bg-neutral-0 rounded-[10px] flex flex-col items-center p-2">
            <DropdownMenuItem>
              <Button
                className="w-24 h-10 text-base p-0 border-none"
                onClick={() => {
                  mutate(1, {
                    onSuccess: () => {
                      const localPbAuth =
                        localStorage.getItem("pocketbase_auth");
                      if (localPbAuth) {
                        localStorage.removeItem("pocketbase_auth");
                      }
                      router.refresh();
                    },
                  });
                }}
              >
                로그아웃
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={`/mypage/${username}`}
                className="w-24 h-10 text-base p-0 border-none font-medium text-neutral-80"
              >
                마이페이지
              </Link>
            </DropdownMenuItem>
          </DropDownMenuContent>
        </DropdownMenu>
      </div>
      <div className="h-full flex items-center">
        <Link
          href="/logs/create"
          className="w-28 flex justify-center items-center text-primary-100 h-10 text-base font-semibold p-0 border border-stroke-blue rounded-[5rem]"
        >
          새 로그 작성
        </Link>
      </div>
    </div>
  );
};

export default HeaderRight;
