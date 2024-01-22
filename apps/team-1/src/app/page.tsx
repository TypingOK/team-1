"use client";

import { record, userTypes } from "@/utils/api";
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
      <button onClick={async () => console.log(await record(data))}>
        회원가입
      </button>
      <Test />
    </main>
  );
}
