"use client";
import { handlePasswordChange } from "@/utils/api/usersApi";
import { Button, Input } from "design-kit";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface userData {
  name: string;
  email: string;
  domain: string;
}

interface SignUpProps {
  goToNextPage: () => void;
}

export default function ChangePassword({ goToNextPage }: SignUpProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<userData>();

  const onSubmit: SubmitHandler<userData> = async data => {
    console.log(data);
    const userEmail = `${data.email}@${data.domain}`;
    console.log(userEmail);

    let errorFlag = 0;
    try {
      const res = await handlePasswordChange(userEmail);
      console.log(res);
    } catch (e: any) {
      errorFlag = 1;
      console.log(e.message);
      setError("email", {
        message: "존재하지 않는 이메일입니다.",
      });
    }

    if (errorFlag === 0) {
      goToNextPage();
    }
    return data;
  };

  const router = useRouter();

  function goLogin() {
    router.push("/login");
  }

  return (
    <div className="flex justify-center">
      <div>
        <div className="flex flex-col justify-center items-center mb-3">
          <Image
            width={353}
            height={57}
            src="/logo.svg"
            alt="logo"
            className="mt-20"
          />
          <div className="text-2xl font-semibold my-10">비밀번호 찾기</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center mt-5">
            <div>
              <p className="font-semibold mb-1">이름</p>
              <Input
                className={`rounded ${errors?.name?.message ? "border-system-warning" : ""} border`}
                {...register("name", { required: "이름을 입력해주세요." })}
              />
              {errors?.name?.message && (
                <p className="text-xs text-system-warning">
                  {errors?.name?.message}
                </p>
              )}
            </div>
            <div>
              <p className="font-semibold mt-10 mb-1">이메일</p>
              <div className="flex items-center">
                <Input
                  variant={`small`}
                  border={`full`}
                  placeholder="이메일 주소"
                  className={`rounded ${errors?.email?.message ? "border-system-warning" : ""} border`}
                  {...register("email", { required: "이메일을 입력해주세요." })}
                />
                <span className="mx-2">@</span>
                <Input
                  className="rounded"
                  type="text"
                  list="domainList"
                  placeholder="직접 입력"
                  variant={`small`}
                  border={`full`}
                  {...register("domain", {
                    required: "도메인을 입력해주세요.",
                  })}
                />
                <datalist id="domainList">
                  <option value="gmail.com">gmail.com</option>
                  <option value="naver.com">naver.com</option>
                </datalist>
              </div>
              {(errors?.email?.message || errors?.domain?.message) && (
                <span className=" text-xs text-system-warning">
                  {errors?.email?.message}
                </span>
              )}
              <div className="text-sm mt-2.5">
                <div className="inline text-neutral-60 ">
                  비밀번호가 생각나셨나요?
                </div>
                <button
                  className="underline underline-offset-4 hover:text-primary-80 ml-2.5"
                  onClick={goLogin}
                >
                  로그인하기
                </button>
              </div>
            </div>

            <Button
              type="submit"
              variant={"primary"}
              className="w-[355px] h-10 text-base mt-12 mb-36"
            >
              비밀번호 변경 이메일 보내기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
