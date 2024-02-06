import { commentsExpandTypes } from "@/types";
import { handleCommentGetByLogId, handleReplyCommentsGet } from "../api";

export const getComments = async () => {
  const comments = await handleCommentGetByLogId("oadcbxc7od15zuj");
  const replyComments = await Promise.all(
    comments.map(comment => handleReplyCommentsGet(comment.id)),
  );
  let tempId = "";

  const result = comments.reduce<commentsExpandTypes[]>((acc, cur) => {
    replyComments.forEach(item => {
      if (cur.id === item[0]?.commentsId) {
        tempId = cur.id;
        acc.push({ ...cur, replyComments: item });
      }
    });

    if (tempId !== cur.id) acc.push({ ...cur, replyComments: [] });

    return acc;
  }, []);

  return result;
};
