import { cookies } from "next/headers";
import { handleUserGetByUserName, handleUserList, pb } from "../api";
import { encodeNextPBCookie } from "../cookies/encodeCookies";
import { userTypes } from "@/types";

export const pbAuthCookie = (target: string) => cookies().get(target);

export const parsedCookie = (target: string) =>
  encodeNextPBCookie(pbAuthCookie(target));

export const getUserData = (cookieName: string) => {
  pb.authStore.loadFromCookie(parsedCookie(cookieName));

  if (pb.authStore.isValid) return pb.authStore.model as userTypes;
};
