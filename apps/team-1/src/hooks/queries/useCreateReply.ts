import { replyCommentsDataTypes } from "@/types";
import { handleReplyCommentCreate } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateReply = (commentData: replyCommentsDataTypes) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => handleReplyCommentCreate(commentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return { mutateAsync, isPending };
};

export default useCreateReply;
