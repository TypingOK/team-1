"use client";

import { use, useState } from "react";
import { handleGetfollower, handleGetfollowing } from "@/utils/api/followApi";
import { handleGetMessages, handleGetReceiverMessages, handleGetSandMessages, handleMessagesCreate } from "@/utils/api/massageApi";
import { handleUserList } from "@/utils/api";

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  const [sandMessages, setSandMessages] = useState<string[]>([]);
  const [receiverMessages, setReceiverMessages] = useState<string[]>([]);
  const [follower, setFollower] = useState<string[]>([]);
  const [following, setFollowing] = useState<string[]>([]);
  const [userList, setUserList] = useState<string[]>([]);
  const [userFollowState, setUserFollowState] = useState<Record<string, boolean>>({});

  const getMessages = async () => {
    const messages = new Set();
    const res = await handleGetMessages();

    res.forEach(item => messages.add(item.contents));

    setMessages(Array.from(messages) as string[]);
  };
  const getSandMessages = async () => {
    const sandMessages = new Set();
    const res = await handleGetSandMessages("kwvngje3cdabra1");

    res.forEach(item => sandMessages.add(item.contents));

    setSandMessages(Array.from(sandMessages) as string[]);
  };
  const getReceiverMessages = async () => {
    const receiverMessages = new Set();
    const res = await handleGetReceiverMessages("kwvngje3cdabra1");

    res.forEach(item => receiverMessages.add(item.contents));

    setReceiverMessages(Array.from(receiverMessages) as string[]);
  };
  const messagesCreate = async () => {
    interface messagesData {
      sender: string;
      receiver: string;
      contents: string;
    }
    const receiverInputValue = document.getElementById('receiverInput')!.value;
    const messageInputValue = document.getElementById('messageInput')!.value;
    const data: messagesData = {
      sender: "kwvngje3cdabra1",
      receiver: receiverInputValue,
      contents: messageInputValue,
    };
    const res = await handleMessagesCreate(data);
  };
  const getUserList = async () => {
    const userList = new Set();
    const res = await handleUserList("kwvngje3cdabra1");

    res.forEach(item => userList.add(item.username));

    setUserList(Array.from(userList) as string[]);
  };
  const isFollowHandler = async (user: string) => {
    setUserFollowState((prev) => ({
      ...prev,
      [user]: !prev[user],
    }));
  }
  const getFollower = async () => {
    const follower = new Set();
    const res = await handleGetfollower("kwvngje3cdabra1");

    res.forEach(item => follower.add(item.expand!.followerId.username));

    setFollower(Array.from(follower) as string[]);
  };
  const getFollowing = async () => {
    const following = new Set();
    const res = await handleGetfollowing("kwvngje3cdabra1"); 

    res.forEach(item => following.add(item.expand!.followingId.username));

    setFollowing(Array.from(following) as string[]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
      <button onClick={getMessages}>메세지 전체 불러오기</button>
      {messages.map(message => (
        <div key={message}>{message}</div>
      ))
      }
      <button onClick={getSandMessages}>보낸 메세지 불러오기</button>
      {sandMessages.map(sandMessage => (
        <div key={sandMessage}>{sandMessage}</div>
      ))
      }
      <button onClick={getReceiverMessages}>받은 메세지 불러오기</button>
      {receiverMessages.map(receiverMessage => (
        <div key={receiverMessage}>{receiverMessage}</div>
      ))
      }
      <form>
        <input id="receiverInput" type="text" placeholder="메세지를 받을 사용자(id)" required />
        <textarea id="messageInput" placeholder="메세지를 입력하세요" cols={30} rows={3} required></textarea>
        <button onClick={messagesCreate}>메세지 보내기</button>
      </form>
      <button onClick={getUserList}>유저 리스트</button>
      {userList.map(user => (
        <div key={user}>
          {user}
          <button onClick={() => isFollowHandler(user)}>{userFollowState[user] ? "팔로잉" : "팔로우"}</button>
          </div>
      ))
      }
      <button onClick={getFollower}>팔로잉 목록</button>
      {follower.map(follower => (
        <div key={follower}>{follower}</div>
      ))
      }
      <button onClick={getFollowing}>팔로우 목록</button>
      {following.map(following => (
        <div key={following}>{following}</div>
      ))
      }
      <button onClick={getReceiverMessages}>팔로우하기</button>
      {}
    </main>
  );
}
