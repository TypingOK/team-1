import { likeLogTypes, ExpandLikesLogTypes } from "@/types";
import { pb } from ".";
import { ListOptions } from "pocketbase";

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

export const handleLikesLogCreate = async (
  likeLog: likeLogTypes,
): Promise<likeLogTypes> => await pb.collection("likesLog").create(likeLog);

export const handleLikesLogUpdate = async (
  id: string,
  data: { logId: string[] },
): Promise<likeLogTypes> => await pb.collection("likeLog").update(id, data);

export const handleLikesLogDelete = async (id: string) =>
  await pb.collection("likeLog").delete(id);
