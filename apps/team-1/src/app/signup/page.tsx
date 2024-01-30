"use client";

import { joinUserTypes } from "@/types";
import { handleSignup } from '@/utils/api';
import { useForm, SubmitHandler } from "react-hook-form"
import React from "react";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<joinUserTypes>();
  const onSubmit: SubmitHandler<joinUserTypes> = async data => {
    const res = await handleSignup(data);
    console.log(data);
    return res;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>이름</label>
        <input className={`border`} {...register("username", { required: true })} />
      </div>
      <div>
        <label>이메일 인증</label>
        <input className={`border`} {...register("email", { required: true })} />
        <button>인증번호 요청</button>
        <input />
      </div>
      <div>
        <label>비밀번호</label>
        <input className={`${!!errors?.password?.message ? "border-system-warning" : ""}border`} {...register("password", {
          required: true,
          minLength: {
            value: 8,
            message: '8글자 이상 입력해주세요.',
          },
        })} />
        {errors?.password?.message ? 
          <p className="test-system-warning">{errors?.password?.message}</p>
        : <p>영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자</p>}
      </div>
      <div>
        <label>비밀번호 확인</label>
        <input className={`${!!errors?.passwordConfirm?.message ? "border-system-warning" : ""}border`} {...register("passwordConfirm", { required: true })} />
      </div>
      {/* <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select> */}
      <input type="submit" />
    </form>
  )
}

export default page;