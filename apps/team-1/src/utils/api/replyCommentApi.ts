import { replyCommentsTypes } from "@/types";
import { pb } from ".";

export const handleReplyCommentsGet = async (
  commentId: string,
): Promise<replyCommentsTypes[]> =>
  await pb.collection("replyComments").getFullList({
    filter: `commentsId.id='${commentId}'`,
    sort: "created",
  });

export const handleReplyCommentCreate = async (
  replyComment: replyCommentsTypes,
): Promise<replyCommentsTypes[]> =>
  await pb.collection("replyComments").create(replyComment);

export const handleReplyCommentDelete = async (recordID: string) =>
  await pb.collection("replyComments").delete(recordID);
