"use client";

import { handleLogin, handleSignup } from "@/utils/api";

const Mypage = () => {
  const tryLogin = async () => {
    const res = await handleLogin("test4@team1.com", "Team123!");
  };
  const trySignUp = async () => {
    const res = await handleSignup({
      email: "test44@team1.com",
      password: "12345678",
      passwordConfirm: "12345678",
      username: "i_am_happy",
    });
  };

  return (
    <div>
      <p>mypage</p>
      <button onClick={tryLogin}>로그인</button>
      <button onClick={trySignUp}>회원가입</button>
    </div>
  );
};

export default Mypage;
