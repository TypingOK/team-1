"use client";

import { joinUserState } from "@/recoil/joinUserState";
import { joinUserTypes } from "@/types";
import { handleEmailVerification, handleSignup } from "@/utils/api";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { Button, Input } from "design-kit";

// SignUpSecond 컴포넌트에 props 타입 정의
interface SignUpSecondProps {
  goToPreviousPage: () => void;
  goToNextPage: () => void;
}

export default function SingUpSecond({
  goToPreviousPage,
  goToNextPage,
}: SignUpSecondProps) {
  const [joinUserData, setJoinUserData] = useRecoilState(joinUserState);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<joinUserTypes>();

  const onSubmit: SubmitHandler<joinUserTypes> = async data => {
    const categories = data.category || [];
    const suggestions = data.suggestion || [];

    let errorFlag = 0;

    const signUpData: joinUserTypes = {
      ...joinUserData,
      username: data.username,
      category: categories,
      suggestion: suggestions,
    };

    try {
      const res = await handleSignup(signUpData);
      console.log(res);
    } catch (e: any) {
      console.log(e.message);
      errorFlag = 1;
      setError("username", {
        message: "중복된 이메일 혹은 닉네임입니다. 다시 입력해주세요.",
      });
    }
    if (errorFlag === 1) {
    } else {
      const res = handleEmailVerification(signUpData.email);
      console.log(res);
      goToNextPage();
    }

    return joinUserData;
  };

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      if (selectedCategories.length < 3) {
        setSelectedCategories([...selectedCategories, value]);
      } else {
        // 3개를 이미 선택한 경우, 추가 선택 방지
        event.preventDefault();
      }
    } else {
      setSelectedCategories(
        selectedCategories.filter(category => category !== value),
      );
    }
  };

  // 선택된 제안을 추적하기 위한 상태
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);

  const handleSuggestionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      // 제안 추가
      setSelectedSuggestions([...selectedSuggestions, value]);
    } else {
      // 제안 제거
      setSelectedSuggestions(
        selectedSuggestions.filter(suggestion => suggestion !== value),
      );
    }
  };

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
              <p className="font-semibold mb-1">닉네임</p>
              <Input
                className={`rounded ${!!errors?.username?.message ? "border-system-warning" : ""} border`}
                {...register("username", {
                  required: "닉네임을 입력해주세요.",
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: "닉네임은 영어와 숫자로만 구성해주세요.",
                  },
                })}
              />
              {errors?.username?.message ? (
                <p className="text-xs text-system-warning">
                  {errors?.username?.message}
                </p>
              ) : (
                <p className="text-xs">
                  (닉네임은 영어와 숫자로 구성해주세요.)
                </p>
              )}
            </div>
          </div>

          <div className="mt-10">
            <p className="font-semibold mb-1">관심분야</p>
            <div>
              <div className="flex">
                <input
                  {...register("category")}
                  type="checkbox"
                  value="frontend"
                  onChange={handleCategoryChange}
                  checked={selectedCategories.includes("frontend")}
                />
                <span>프론트엔드</span>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  {...register("category")}
                  type="checkbox"
                  value="backend"
                  onChange={handleCategoryChange}
                  checked={selectedCategories.includes("backend")}
                />
                <span>백엔드</span>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  {...register("category")}
                  type="checkbox"
                  value="data"
                  onChange={handleCategoryChange}
                  checked={selectedCategories.includes("data")}
                />
                <span>데이터 분석</span>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  {...register("category")}
                  type="checkbox"
                  value="server"
                  onChange={handleCategoryChange}
                  checked={selectedCategories.includes("server")}
                />
                <span>서버 개발</span>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  {...register("category")}
                  type="checkbox"
                  value="dba"
                  onChange={handleCategoryChange}
                  checked={selectedCategories.includes("dba")}
                />
                <span>DBA</span>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  {...register("category")}
                  type="checkbox"
                  value="ios"
                  onChange={handleCategoryChange}
                  checked={selectedCategories.includes("ios")}
                />
                <span>ios 개발</span>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  {...register("category")}
                  type="checkbox"
                  value="android"
                  onChange={handleCategoryChange}
                  checked={selectedCategories.includes("android")}
                />
                <span>안드로이드 개발</span>
              </div>
              <hr className="border-neutral-20 mt-10 mb-7" />
              <p className="font-semibold mb-1">제안 허용</p>
              <div style={{ display: "flex" }}>
                <input
                  {...register("suggestion")}
                  type="checkbox"
                  value="recruit"
                  onChange={handleSuggestionChange}
                  checked={selectedSuggestions.includes("recruit")}
                />

                <div>채용 제안</div>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  {...register("suggestion")}
                  type="checkbox"
                  value="opinion"
                  onChange={handleSuggestionChange}
                  checked={selectedSuggestions.includes("opinion")}
                />
                <div>의견 제안</div>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  {...register("suggestion")}
                  type="checkbox"
                  value="project"
                  onChange={handleSuggestionChange}
                  checked={selectedSuggestions.includes("project")}
                />
                <div>프로젝트 제안</div>
              </div>
            </div>
          </div>
          <button onClick={goToPreviousPage}>이전으로</button>
          {/* <input type="submit" value="회원가입 완료" /> */}
          <Button
            type="submit"
            variant={"primary"}
            className="w-80 h-10 text-base mt-12 mb-12"
          >
            회원가입 완료
          </Button>
        </form>
      </div>
    </div>
  );
}
