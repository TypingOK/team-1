// states/signUpState.ts
import { atom } from "recoil";
import { joinUserTypes } from "@/types";

export const joinUserState = atom<joinUserTypes>({
  key: "joinUserState", // 고유한 key
  default: {
    username: "",
    email: "",
    emailVisibility: true,
    password: "",
    passwordConfirm: "",
    disable: false,
    description: "",
    sfaclogUrl: "",
    category: [],
    sns: {},
    suggestion: [],
    name: "",
  }, // 초기 상태
});
