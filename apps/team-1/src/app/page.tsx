"use client";

import {
  handleSignup,
  handleLogin,
  userTypes,
  handleGetToken,
  handleSignout,
} from "@/utils/api";
import { Test } from "./test";

export default function Home() {
  const data: userTypes = {
    username: "test_username",
    email: "test@example.com",
    emailVisibility: true,
    password: "12345678",
    passwordConfirm: "12345678",
    disable: true,
    description: "test",
    sfaclogUrl: "test",
    category: ["android", "backend"],
    sns: {
      github: "https://github.com/0SCAR0421",
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello world
      <button onClick={async () => console.log(await handleSignup(data))}>
        회원가입
      </button>
      <button
        onClick={async () =>
          console.log(await handleLogin("test1@team1.com", "Team123!"))
        }
      >
        로그인
      </button>
      <button onClick={() => console.log(handleGetToken())}>토큰 확인</button>
      <button
        onClick={async () =>
          console.log(await handleSignout("oruxjqogzy827dl"))
        }
      >
        회원탈퇴
      </button>
      <Test />
    </main>
  );
}
