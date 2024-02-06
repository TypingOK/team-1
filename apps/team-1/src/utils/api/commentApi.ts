import { ExpandCommentsTypes, commentsDataTypes, commentsTypes } from "@/types";
import { pb } from ".";
import { ListOptions, ListResult } from "pocketbase";

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

export const handleCommentDelete = async (id: string): Promise<boolean> =>
  await pb.collection("comments").delete(id);

export const handleCommentUpdate = async (
  id: string,
  updateComment: { content: string },
): Promise<commentsTypes> =>
  await pb.collection("comments").update(id, updateComment);

export const handleCommentGetList = async (
  offset: number = 0,
  limit: number = 30,
  options?: ListOptions,
): Promise<ListResult<ExpandCommentsTypes>> => {
  return await pb.collection("comments").getList(offset, 1 * limit, options);
};
