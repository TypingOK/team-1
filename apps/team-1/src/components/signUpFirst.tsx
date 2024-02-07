"use client";
import { joinUserState } from "@/recoil/joinUserState";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { Button, Input } from "design-kit";

interface signUpUserTypes {
  name: string;
  email: string;
  domain: string;
  password: string;
  passwordConfirm: string;
  term1: boolean;
}

interface SignUpFirstProps {
  goToNextPage: () => void;
}

export default function SingUpFirst({ goToNextPage }: SignUpFirstProps) {
  const [checkList, setCheckList] = useState<string[]>([]);
  const [pwMatch, setPwMatch] = useState<boolean>(false);
  const [joinUserData, setJoinUserData] = useRecoilState(joinUserState);

  const checkAll = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked
      ? setCheckList(["term1", "term2", "term3", "term4", "term5"])
      : setCheckList([]);
  };

  const check = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked
      ? setCheckList(prev => [...prev, event.target.name])
      : setCheckList(prev =>
          prev.filter(choice => choice !== event.target.name),
        );
  };

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpUserTypes>({
    defaultValues: {
      name: joinUserData.name,
      email: joinUserData.email.split("@")[0],
      domain: joinUserData.email.split("@")[1],
      password: joinUserData.password,
      passwordConfirm: joinUserData.passwordConfirm,
    },
  });

  const onSubmit: SubmitHandler<signUpUserTypes> = async data => {
    const emailWithDomain = `${data.email}@${getValues("domain")}`;
    const signInData = { ...data, email: emailWithDomain };
    setJoinUserData(oldState => ({
      ...oldState,
      name: signInData.name,
      email: signInData.email,
      password: signInData.password,
      passwordConfirm: signInData.passwordConfirm,
    }));

    goToNextPage();
    return signInData;
  };

  // 유효성 검사를 위한 함수
  function validatePassword(password: string): boolean {
    const lengthRegex = /^.{10,16}$/; // 10자에서 16자 사이
    const upperCaseRegex = /[A-Z]/; // 대문자 포함
    const lowerCaseRegex = /[a-z]/; // 소문자 포함
    const numberRegex = /[0-9]/; // 숫자 포함
    const specialCharRegex = /[^A-Za-z0-9]/; // 특수문자 포함

    const checks = [
      upperCaseRegex.test(password),
      lowerCaseRegex.test(password),
      numberRegex.test(password),
      specialCharRegex.test(password),
    ];

    // 2가지 이상 조건 충족 및 길이 검사
    return checks.filter(Boolean).length >= 2 && lengthRegex.test(password);
  }

  return (
    <div className="flex justify-center">
      <div>
        <div className="flex flex-col justify-center items-center">
          <img className="mt-16" src="sfaclog.svg" alt="sfaclog" />
          <div className="text-2xl font-semibold my-10">회원가입</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center">
            <div>
              <p className="font-semibold mb-1">이름</p>
              <Input
                className={`rounded ${!!errors?.name?.message ? "border-system-warning" : ""} border`}
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
                  className={`rounded ${!!errors?.email?.message ? "border-system-warning" : ""} border`}
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
              {errors?.domain?.message && (
                <span className="text-xs text-system-warning">
                  {errors?.domain?.message}
                </span>
              )}
            </div>

            <div>
              <p className="font-semibold mt-10 mb-1">비밀번호</p>
              <Input
                className={`rounded ${!!errors?.password?.message ? "border-system-warning" : ""} border`}
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                  validate: {
                    customRule: value =>
                      validatePassword(value) ||
                      "잘못된 비밀번호입니다. 다시 입력해주세요.",
                  },
                })}
              />
              <div className="text-xs">
                {errors?.password?.message ? (
                  <p className="text-system-warning">
                    {errors?.password?.message}
                  </p>
                ) : (
                  <p className="text-neutral-40">
                    (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
                  </p>
                )}
              </div>
            </div>
            <div>
              <p className="font-semibold mt-10 mb-1">비밀번호 확인</p>
              <Input
                className={`rounded ${!!errors?.passwordConfirm?.message ? (pwMatch ? "" : "border-system-warning") : ""} border`}
                {...register("passwordConfirm", {
                  required: "비밀번호 확인을 입력해주세요.",
                  validate: value => {
                    if (getValues("password") === value) {
                      setPwMatch(true);
                      return true;
                    } else {
                      setPwMatch(false);
                      return "비밀번호가 일치하지 않습니다.";
                    }
                  },
                })}
              />
              {errors?.passwordConfirm?.message ? (
                <p className="text-xs text-system-warning">
                  {errors?.passwordConfirm?.message}
                </p>
              ) : (
                pwMatch && (
                  <p className="text-xs text-system-success">
                    비밀번호가 일치합니다.
                  </p>
                )
              )}

              <hr className="border-neutral-20 mt-10 mb-7" />
              <p className="font-semibold mb-5">이용약관 동의</p>
              <div className="flex mb-3">
                <input
                  className="mr-1"
                  type="checkbox"
                  name="all"
                  onChange={checkAll}
                  checked={checkList.length === 5 ? true : false}
                />
                <div className="font-semibold">전체동의</div>
              </div>
              <div className="flex mb-2">
                <input
                  type="checkbox"
                  className="mr-1"
                  {...register("term1", {
                    required: "본인인증 약관에 동의해주세요.",
                  })}
                  onChange={check}
                  checked={checkList.includes("term1") ? true : false}
                />
                <div className="text-sm">본인인증 약관 전체동의 (필수)</div>
              </div>
              <div className="flex mb-2">
                <input
                  className="mr-1"
                  type="checkbox"
                  name="term2"
                  onChange={check}
                  checked={checkList.includes("term2") ? true : false}
                />
                <div className="text-sm">개인정보 수집 이용 동의</div>
              </div>
              <div className="flex mb-2">
                <input
                  className="mr-1"
                  type="checkbox"
                  name="term3"
                  onChange={check}
                  checked={checkList.includes("term3") ? true : false}
                />
                <div className="text-sm">고유식별 정보처리 동의</div>
              </div>
              <div className="flex mb-2">
                <input
                  className="mr-1"
                  type="checkbox"
                  name="term4"
                  onChange={check}
                  checked={checkList.includes("term4") ? true : false}
                />
                <div className="text-sm">통신사 이용약관 동의</div>
              </div>
              <div className="flex mb-2">
                <input
                  className="mr-1"
                  type="checkbox"
                  name="term5"
                  onChange={check}
                  checked={checkList.includes("term5") ? true : false}
                />
                <div className="text-sm">서비스 이용약관 동의</div>
              </div>
              {errors.term1 && (
                <p className="text-xs text-system-warning">
                  {errors.term1.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              variant={"primary"}
              className="w-80 h-10 text-base mt-12 mb-12"
            >
              다음
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
