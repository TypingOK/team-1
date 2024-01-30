import { commentsDataTypes, commentsTypes } from "@/types";
import { pb } from ".";
import { ListOptions } from "pocketbase";

export const handleCommentGetByLogId = async (
  logId: string,
  options?: ListOptions,
): Promise<commentsTypes[]> =>
  await pb.collection("comments").getFullList({
    ...options,
    filter: `logId.id='${logId}'`,
  });

export const handleCommentGetByUserId = async (
  userId: string,
  options?: ListOptions,
): Promise<commentsTypes[]> =>
  await pb.collection("comments").getFullList({
    ...options,
    filter: `userId.id='${userId}'`,
  });

export const handleCommentCreate = async (
  comment: commentsDataTypes,
): Promise<commentsTypes> => await pb.collection("comments").create(comment);

export const handleCommentDelete = async (id: string) =>
  await pb.collection("comments").delete(id);

export const handleCommentUpdate = async (
  id: string,
  updateComment: { content: string },
): Promise<commentsTypes> =>
  await pb.collection("comments").update(id, updateComment);
