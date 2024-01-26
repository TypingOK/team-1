import { joinUserTypes } from "@/types";
import { pb } from ".";

export const handleSignup = (data: joinUserTypes) =>
  pb.collection("users").create(data);

export const handleLogin = (email: string, password: string) =>
  pb.collection("users").authWithPassword(email, password);

export const handleGetToken = () => pb.authStore.token;

export const handleSignout = async (id: string) =>
  await pb.collection("users").delete(id);

export const handleUserList = async (id: string) =>
  await pb.collection("users").getFullList({ filter: `id!='${id}'` });
