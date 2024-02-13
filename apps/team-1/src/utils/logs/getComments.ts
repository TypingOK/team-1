import { commentsExpandTypes } from "@/types";
import { handleCommentGetByLogId, handleReplyCommentsGet } from "../api";

export const getComments = async (targetId: string) => {
  const comments = await handleCommentGetByLogId(targetId);
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

  const resultSort = result.sort(
    (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
  );

  return resultSort;
};
