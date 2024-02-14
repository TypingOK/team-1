import { likeLogTypes, ExpandLikesLogTypes } from "@/types";
import { pb } from ".";
import { ListOptions, ListResult } from "pocketbase";

export const handleLikesLogGetByLogId = async (
  logId: string,
  options?: ListOptions,
): Promise<likeLogTypes[]> =>
  await pb.collection("likesLog").getFullList({
    ...options,
    filter: `logId.id='${logId}'`,
  });

export const handleLikesLogGetByUserId = async (
  userId: string,
  options?: ListOptions,
): Promise<ExpandLikesLogTypes[]> =>
  await pb.collection("likesLog").getFullList({
    ...options,
    filter: `userId.id='${userId}'`,
    expand: "logId",
  });

export const handleLikeLogGetList = async (
  offset: number = 0,
  limit: number = 30,
  options?: ListOptions,
): Promise<ListResult<ExpandLikesLogTypes>> => {
  return await pb.collection("likesLog").getList(offset, 1 * limit, options);
};

export const handleLikesLogCreate = async (
  likeLog: likeLogTypes,
): Promise<likeLogTypes> => await pb.collection("likesLog").create(likeLog);

export const handleLikesLogUpdate = async (
  id: string,
  data: { logId: string[] },
): Promise<likeLogTypes> => await pb.collection("likesLog").update(id, data);

export const handleLikesLogDelete = async (id: string) =>
  await pb.collection("likesLog").delete(id);
