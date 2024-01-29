"use client";

import { loginUserTypes } from "@/types";
import { handleLogin } from "@/utils/api";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<loginUserTypes>();
  const onSubmit: SubmitHandler<loginUserTypes> = async data => {
    try {
      const res = await handleLogin(data.email, data.password);
      console.log(res);
    } catch (e: any) {
      console.log(e.message);
      setError("email", {
        message: " ",
      });
      setError("password", {
        message: "잘못된 이메일 혹은 비밀번호입니다. 다시 입력해주세요.",
      });
    }
  };

  console.log("이메일 에러", !!errors?.email?.message);
  console.log("비밀번호 에러", !!errors?.password?.message);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>email</label>
          <input
            className={`${!!errors?.email?.message ? "border-system-warning" : ""} border`}
            {...register("email", { required: "이메일주소를 입력해주세요." })}
          />
          {errors?.email?.message && (
            <p className="text-system-warning">{errors?.email?.message}</p>
          )}
        </div>
        <div>
          <label>password</label>
          <input
            className={`${!!errors?.password?.message ? "border-system-warning" : ""} border`}
            {...register("password", { required: "비밀번호를 입력해주세요." })}
          />
          {errors?.password?.message && (
            <p className="text-system-warning">{errors?.password?.message}</p>
          )}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
