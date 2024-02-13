"use client";
import { loginUserTypes } from "@/types";
import { handleLogin } from "@/utils/api";
import { Button, Input } from "design-kit";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import RoundCheckbox from "@/components/signup/roundCheckbox";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [maintainLogin, setMaintainLogin] = useState<boolean>(false);

  const handleCheck = () => {
    setMaintainLogin(!maintainLogin);
  };

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm<loginUserTypes>();
  const onSubmit: SubmitHandler<loginUserTypes> = async data => {
    let errorFlag = 0;
    try {
      const res = await handleLogin(data.email, data.password);
      console.log(res);
    } catch (e: any) {
      errorFlag = 1;
      console.log(e.message);
      setError("email", {
        message: " ",
      });
      setError("password", {
        message: "잘못된 이메일 혹은 비밀번호입니다. 다시 입력해주세요.",
      });
    }
    if (errorFlag === 0) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="flex justify-center">
      <div className="mx-[200px]">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 mt-24 gap-24">
              <div>
                <label className="text-4xl font-bold">LOGIN</label>
                <div className="text-xl font-semibold mt-12 mb-8">아이디</div>
                <Input
                  variant={`large`}
                  border={`bottom`}
                  placeholder="아이디를 입력해주세요."
                  className={`${!!errors?.email?.message ? "border-system-warning" : ""} `}
                  {...register("email")}
                />
                {errors?.email?.message && (
                  <p className="text-system-warning">
                    {errors?.email?.message}
                  </p>
                )}
                <div className="text-xl font-semibold  my-8">비밀번호</div>
                <Input
                  type={"password"}
                  variant={`large`}
                  border={`bottom`}
                  placeholder="비밀번호를 입력해주세요."
                  className={`${!!errors?.password?.message ? "border-system-warning" : ""}`}
                  {...register("password")}
                />
                {errors?.password?.message && (
                  <p className="text-system-warning">
                    {errors?.password?.message}
                  </p>
                )}
                <div className="mt-5 flex">
                  <RoundCheckbox
                    value="maintainLogin"
                    name="maintainLogin"
                    onChange={handleCheck}
                    checked={maintainLogin}
                  />
                  <label className="mr-2 text-sm">로그인 유지하기</label>
                  <span className="text-sm text-neutral-50">
                    <button>아이디 찾기 | 비밀번호 찾기</button>
                  </span>
                </div>
              </div>
              <div>
                <label className="text-4xl font-bold">SIGNUP</label>
                <div className="text-sm mt-10">
                  <p>아직 회원이 아니신가요?</p>
                  <p>
                    회원가입을 하시면 다양한 서비스를 편리하게 이용하실 수
                    있습니다.
                  </p>
                </div>
                <div className="w-52 h-52 relative">
                  <Image
                    fill
                    src="/Signup_image.svg"
                    alt="Signup image"
                    className="mt-10"
                    priority
                  />
                </div>
              </div>
            </div>
            <span className="grid grid-cols-2 gap-24 mt-12">
              <Button
                type="submit"
                variant={"primary"}
                className="w-48 h-10 text-base"
              >
                로그인
              </Button>
              <Button
                type="button"
                onClick={() => router.push("/signup")}
                variant={"primary"}
                className="w-48 h-10 text-base"
              >
                회원가입
              </Button>
            </span>
          </form>
          <div className="mt-12">
            <hr className="border-neutral-20" />
            <label className="flex justify-center mt-8 mb-6 text-lg font-semibold">
              간편로그인/회원가입
            </label>
            <div className="flex flex-row justify-center mb-12">
              <span className="grid grid-cols-5 w-80">
                <img src="Kakaotalk.svg" alt="kakaotalk" />
                <img src="Naver.svg" alt="naver" />
                <img src="Google.svg" alt="google" />
                <img src="Apple.svg" alt="apple" />
                <img src="Facebook.svg" alt="facebook" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
