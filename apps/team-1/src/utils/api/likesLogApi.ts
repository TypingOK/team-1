import { likeLogTypes, ExpandLikesLogTypes } from "@/types";
import { pb } from ".";

export const handleLikesLogGetByLogId = async (
  logId: string,
): Promise<likeLogTypes[]> =>
  await pb.collection("likesLog").getFullList({
    filter: `logId.id='${logId}'`,
    sort: "-created",
  });

export const handleLikesLogGetByUserId = async (
  userId: string,
): Promise<ExpandLikesLogTypes[]> =>
  await pb.collection("likesLog").getFullList({
    filter: `userId.id='${userId}'`,
    sort: "-created",
    expand: "logId",
  });

export const handleLikesLogCreate = async (
  likeLog: likeLogTypes,
): Promise<likeLogTypes[]> => await pb.collection("likesLog").create(likeLog);

export const handleLikesLogDelete = async (recordID: string) =>
  await pb.collection("likeLog").delete(recordID);
