import { commentsDataTypes } from "@/types";
import { handleCommentCreate } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateComment = (commentData: commentsDataTypes) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => handleCommentCreate(commentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return { mutateAsync, isPending };
};

export default useCreateComment;
