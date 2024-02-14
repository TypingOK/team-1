"use client";

import { joinUserState } from "@/recoil/joinUserState";
import { joinUserTypes } from "@/types";
import { handleEmailVerification, handleSignup } from "@/utils/api";
import { Button, Input } from "design-kit";
import Image from "next/image";
import { ChangeEvent, useState, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import RoundCheckbox from "./roundCheckbox";

// SignUpSecond 컴포넌트에 props 타입 정의
interface SignUpProps {
  goToPreviousPage: () => void;
  goToNextPage: () => void;
}

export default function SingUpSecond({
  goToPreviousPage,
  goToNextPage,
}: SignUpProps) {
  const [joinUserData, setJoinUserData] = useRecoilState(joinUserState);

  const {
    control,
    register,
    handleSubmit,
    setError,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<joinUserTypes>({
    defaultValues: {
      ...joinUserData,
      category: [], // Default categories to an empty array
      suggestion: [], // Default suggestions to an empty array
    },
  });

  const onSubmit: SubmitHandler<joinUserTypes> = async data => {
    const categories = data.category || [];
    const suggestions = data.suggestion || [];

    let errorFlag = 0;

    console.log(data);

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
    if (errorFlag === 0) {
      const res = handleEmailVerification(signUpData.email);
      console.log(res);
      goToNextPage();
    }

    return joinUserData;
  };

  const categoryOptions = [
    "frontend",
    "backend",
    "data",
    "server",
    "dba",
    "ios",
    "android",
  ];

  const categoryLabel = [
    "프론트엔드",
    "백엔드",
    "데이터분석",
    "서버 개발",
    "DBA",
    "ios 개발",
    "안드로이드 개발",
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    // Whenever selectedCategories changes, update the form state accordingly
    setValue("category", selectedCategories as any);
  }, [selectedCategories, setValue]);

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

  const suggestionOptions = ["recruit", "opinion", "project"];

  const suggestionLabel = ["채용 제안", "의견 제안", "프로젝트 제안"];

  // 선택된 제안을 추적하기 위한 상태
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);

  useEffect(() => {
    // Whenever selectedCategories changes, update the form state accordingly
    setValue("suggestion", selectedSuggestions as any);
  }, [selectedSuggestions, setValue]);

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
        <div className="flex flex-col justify-center items-center mb-3">
          <Image
            width={260}
            height={42}
            src="/logo.svg"
            alt="logo"
            className="mt-16"
          />
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
            <p className="font-semibold mb-5">관심분야</p>
            <div>
              {categoryOptions.map((category, index) => (
                <div className="flex mb-4" key={`categoryDiv${index}`}>
                  <Controller
                    key={category}
                    name="category"
                    control={control}
                    render={() => (
                      <RoundCheckbox
                        name={category}
                        value={category}
                        checked={selectedCategories.includes(category)}
                        onChange={handleCategoryChange}
                      />
                    )}
                  />
                  <div className="text-sm">{categoryLabel[index]}</div>
                </div>
              ))}
            </div>
            <div>
              <hr className="border-neutral-20 my-7" />
              <p className="font-semibold mb-5">제안 허용</p>
              <div>
                {suggestionOptions.map((suggestion, index) => (
                  <div className="flex  mb-4" key={`suggestionDiv${index}`}>
                    <Controller
                      key={suggestion}
                      name="suggestion"
                      control={control}
                      render={() => (
                        <RoundCheckbox
                          name={suggestion}
                          value={suggestion}
                          checked={selectedSuggestions.includes(suggestion)}
                          onChange={handleSuggestionChange}
                        />
                      )}
                    />
                    <div className="text-sm">{suggestionLabel[index]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
