"use client";

import {
  handleSignup,
  handleLogin,
  handleGetToken,
  handleSignout,
  handleUploadImage,
  handleGetTargetLogs,
  handleGetAllTags,
} from "@/utils/api";
import { Test } from "./test";
import { ChangeEvent, useState } from "react";
import { filteredLogsTypes, userTypes } from "@/types";

export default function Home() {
  const [tags, setTags] = useState<string[]>([]);
  const [logs, setLogs] = useState<filteredLogsTypes[]>();
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

  const handleUploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();

    if (event.target.files !== null) {
      formData.append("images", event.target.files[0]);
    }

    await handleUploadImage(formData);
  };

  const getTags = async () => {
    const tags = new Set();
    const res = await handleGetAllTags();

    res.forEach(item => tags.add(item.tagTitle));

    setTags(Array.from(tags) as string[]);
  };

  const getLogs = async (tag: string) => {
    const res: filteredLogsTypes[] = await handleGetTargetLogs(tag);

    setLogs(res);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello world
      <button onClick={async () => console.log(await handleSignup(data))}>
        회원가입
      </button>
      <button
        onClick={async () =>
          console.log(await handleLogin("test@example.com", "12345678"))
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
      <input type="file" onChange={handleUploadFile} />
      <button onClick={getTags}>태그 불러오기</button>
      {tags.map(tag => (
        <div key={tag} onClick={async () => getLogs(tag)}>
          {tag}
        </div>
      ))}
      {logs &&
        logs.map(item => (
          <div key={item.id}>
            <p>{item.expand.logId.title}</p>
            <p>{item.expand.logId.created}</p>
          </div>
        ))}
      <Test />
    </main>
  );
}
