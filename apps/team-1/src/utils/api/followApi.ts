import { followDataTypes, followTypes } from "@/types";
import { pb } from ".";
import { ListOptions } from "pocketbase";

export const handleFollowerGetByUserId = async (
  id: string,
  options?: ListOptions,
): Promise<followTypes[]> => {
  return await pb.collection("follow").getFullList({
    ...options,
    filter: `followingId='${id}'`,
    expand: "followerId",
  });
};

export const handleFollowingGetByUserId = async (
  id: string,
  options?: ListOptions,
): Promise<followTypes[]> => {
  return await pb.collection("follow").getFullList({
    ...options,
    filter: `followerId='${id}'`,
    expand: "followingId",
  });
};

export const handleFollowCreate = async (
  data: followDataTypes,
): Promise<followTypes> => await pb.collection("follow").create(data);

export const handleFollowDelete = async (id: string): Promise<boolean> =>
  await pb.collection("follow").delete(id);
