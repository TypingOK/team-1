import { ExpandCommentsTypes } from "@/types";
import { handleCommentGetList, handleReplyCommentsGet } from "@/utils/api";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ClientResponseError, ListResult } from "pocketbase";

const useGetTargetComments = (
  queryKeyId: number | string,
  userId: string,
  offset?: number,
  limit: number = 30,
  options?: UseQueryOptions<
    ListResult<ListResult<ExpandCommentsTypes>>,
    ClientResponseError,
    ListResult<ExpandCommentsTypes>,
    QueryKey
  >,
) => {
  const queryKey = ["comments", queryKeyId];
  const queryConfig = {
    refetchOnWindowFocus: false,
    ...options,
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: async () => {
      const commentsList = await handleCommentGetList(offset, 1 * limit, {
        filter: `${userId !== "" ? `userId="${userId}"` : ""}`,
        expand: "logId",
      });

      // 각 메인 댓글에 대한 답글을 가져옵니다.
      const commentsWithReplies = await Promise.all(
        commentsList.items.map(async comment => {
          const replyComments = await handleReplyCommentsGet(comment.id);
          return {
            ...comment,
            replies: replyComments,
          };
        }),
      );
      return { items: commentsWithReplies };
    },
  });

  return { data, isLoading, error };
};

export { useGetTargetComments };
