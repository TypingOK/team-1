import { joinUserTypes, userTypes, userUpdateTypes } from "@/types";
import { pb } from ".";
import { ListOptions } from "pocketbase";

export const handleSignup = (data: joinUserTypes) =>
  pb.collection("users").create({ ...data, emailVisibility: true });

export const handleLogin = async (email: string, password: string) => {
  const userData = await pb
    .collection("users")
    .authWithPassword(email, password);
  document.cookie = pb.authStore.exportToCookie({ httpOnly: false });

  return userData;
};

export const handleGetToken = () => pb.authStore.token;

export const handleSignout = async (id: string) =>
  await pb.collection("users").delete(id);

export const handleUserList = async (id: string, options?: ListOptions) =>
  await pb
    .collection("users")
    .getFullList({ ...options, filter: `id!='${id}'` });

export const handleUserGetByUserName = async (username: string) => {
  try {
    return await pb
      .collection("users")
      .getFirstListItem(`username="${username}"`);
  } catch (error) {
    return false;
  }
};

export const handleUserUpdate = async (id: string, data: userUpdateTypes) =>
  await pb.collection("users").update(id, data);
