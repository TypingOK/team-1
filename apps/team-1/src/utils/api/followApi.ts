import { followDataTypes, followTypes, ExpandFollowTypes } from "@/types";
import { pb } from ".";
import { ListOptions, ListResult } from "pocketbase";

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

export const handleFollowGetList = async (
  offset: number = 0,
  limit: number = 30,
  options?: ListOptions,
): Promise<ListResult<ExpandFollowTypes>> => {
  return await pb.collection("follow").getList(offset, 1 * limit, options);
};
