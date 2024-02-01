"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { joinUserState } from "@/recoil/joinUserState";
import { useSetRecoilState } from "recoil";

interface signUpUserTypes {
  username: string;
  email: string;
  domain: string;
  password: string;
  passwordConfirm: string;
  term1: boolean;
}

export default function Singup() {
  const [checkList, setCheckList] = useState<string[]>([]);
  const setUserData = useSetRecoilState(joinUserState);
  const [pwMatch, setPwMatch] = useState<boolean>(false);

  // 체크리스트 전체 동의에 필요한 변수
  const checkAll = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked
      ? setCheckList(["term1", "term2", "term3", "term4", "term5"])
      : setCheckList([]);
  };

  const check = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked
      ? setCheckList([...checkList, event.target.name])
      : setCheckList(checkList.filter(choice => choice !== event.target.name));
  };

  const router = useRouter();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpUserTypes>();

  const onSubmit: SubmitHandler<signUpUserTypes> = async data => {
    const emailWithDomain = `${data.email}@${getValues("domain")}`;
    const signInData = { ...data, email: emailWithDomain };
    setUserData(oldState => ({
      ...oldState,
      username: signInData.username,
      email: signInData.email,
      password: signInData.password,
      passwordConfirm: signInData.passwordConfirm,
    }));
    router.push("/signup2");
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>회원가입</div>
        <label>이름</label>
        <input
          className={`${!!errors?.username?.message ? "border-system-warning" : ""} border`}
          {...register("username", { required: "이름을 입력해주세요." })}
        />
        {errors?.username?.message && (
          <p className="text-system-warning">{errors?.username?.message}</p>
        )}
      </div>
      <div>
        <label>이메일 인증</label>
        <div style={{ display: "flex" }}>
          <input
            placeholder="이메일 주소를 입력해주세요."
            className={`${!!errors?.email?.message ? "border-system-warning" : ""} border`}
            {...register("email", { required: "이메일을 입력해주세요." })}
          />
          <span>@</span>
          {/* <select
            {...register("domain", { required: "도메인을 선택해주세요." })}
          >
            <option value="">이메일 선택</option>
            <option value="gmail.com">gmail.com</option>
            <option value="naver.com">naver.com</option>
          </select> */}
          <input
            // type="text"
            list="domainList"
            placeholder="직접 입력"
            {...register("domain", { required: "도메인을 입력해주세요." })}
          />
          <datalist id="domainList">
            <option value="gmail.com">gmail.com</option>
            <option value="naver.com">naver.com</option>
          </datalist>
          {errors?.email?.message && (
            <p className="text-system-warning">{errors?.email?.message}</p>
          )}
          {errors?.domain?.message && (
            <p className="text-system-warning">{errors?.domain?.message}</p>
          )}
        </div>
      </div>
      <div>
        <label>비밀번호</label>
        <input
          className={`${!!errors?.password?.message ? "border-system-warning" : ""} border`}
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            validate: {
              customRule: value =>
                validatePassword(value) ||
                "잘못된 비밀번호입니다. 다시 입력해주세요.",
            },
          })}
        />
        {errors?.password?.message ? (
          <p className="text-system-warning">{errors?.password?.message}</p>
        ) : (
          <p>(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)</p>
        )}
      </div>
      <div>
        <label>비밀번호 확인</label>
        <input
          className={`${!!errors?.passwordConfirm?.message ? (pwMatch ? "" : "border-system-warning") : ""} border`}
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
          <p className="text-system-warning">
            {errors?.passwordConfirm?.message}
          </p>
        ) : (
          pwMatch && <p> 비밀번호가 일치합니다. </p>
        )}
      </div>
      <div>
        {/* 약관 동의 부분 */}
        <div>
          <label>약관 동의</label>
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              name="all"
              onChange={checkAll}
              checked={checkList.length === 5 ? true : false}
            />
            <div>전체동의</div>
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              {...register("term1", {
                required: "본인인증 약관에 동의해주세요.",
              })}
              onChange={check}
              checked={checkList.includes("term1") ? true : false}
            />
            <div>
              본인인증 약관 전체동의 <span>(필수)</span>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              name="term2"
              onChange={check}
              checked={checkList.includes("term2") ? true : false}
            />
            <div>개인정보 수집 이용 동의</div>
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              name="term3"
              onChange={check}
              checked={checkList.includes("term3") ? true : false}
            />
            <div>고유식별 정보처리 동의</div>
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              name="term4"
              onChange={check}
              checked={checkList.includes("term4") ? true : false}
            />
            <div>통신사 이용약관 동의</div>
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              name="term5"
              onChange={check}
              checked={checkList.includes("term5") ? true : false}
            />
            <div>서비스 이용약관 동의</div>
          </div>
          {errors.term1 && (
            <p className="text-system-warning">{errors.term1.message}</p>
          )}
        </div>
      </div>
      <input type="submit" value="다음으로 이동" />
    </form>
  );
}
