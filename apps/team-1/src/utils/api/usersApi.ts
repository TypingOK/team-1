import { joinUserTypes, userUpdateTypes } from "@/types";
import { pb } from ".";
import { ListOptions } from "pocketbase";

export const handleSignup = (data: joinUserTypes) =>
  pb.collection("users").create(data);

export const handleLogin = (email: string, password: string) =>
  pb.collection("users").authWithPassword(email, password);

export const handleGetToken = () => pb.authStore.token;

export const handleSignout = async (id: string) =>
  await pb.collection("users").delete(id);

export const handleUserList = async (id: string, options?: ListOptions) =>
  await pb
    .collection("users")
    .getFullList({ ...options, filter: `id!='${id}'` });

export const handleUserUpdate = async (id: string, data: userUpdateTypes) =>
  await pb.collection("users").update(id, data);

export const handleEmailVerification = async (email: string) =>
  await pb.collection("users").requestVerification(email);
