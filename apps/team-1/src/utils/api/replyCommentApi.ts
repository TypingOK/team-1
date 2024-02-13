import { replyCommentsDataTypes, replyCommentsTypes } from "@/types";
import { pb } from ".";
import { ListOptions } from "pocketbase";

export const handleReplyCommentsGet = async (
  commentId: string,
  options?: ListOptions,
): Promise<replyCommentsTypes[]> =>
  await pb.collection("replyComments").getFullList({
    ...options,
    filter: `commentsId.id='${commentId}'`,
    expand: "userId",
  });

export const handleReplyCommentCreate = async (
  replyComment: replyCommentsDataTypes,
): Promise<replyCommentsTypes> =>
  await pb.collection("replyComments").create(replyComment);

export const handleReplyCommentUpdate = async (
  id: string,
  updateComment: { content: string },
): Promise<replyCommentsTypes> =>
  await pb.collection("comments").update(id, updateComment);

export const handleReplyCommentDelete = async (id: string): Promise<boolean> =>
  await pb.collection("replyComments").delete(id);
