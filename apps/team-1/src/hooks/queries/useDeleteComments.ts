import { handleCommentDelete } from "@/utils/api";
import {
  useMutation,
  useQueryClient,
  UseMutationOptions,
} from "@tanstack/react-query";

const useDeleteComments = (commentIds: string[]) => {
  const queryClient = useQueryClient();

  const deleteComments = async (commentIds: string[]): Promise<boolean[]> =>
    await Promise.all(commentIds.map(id => handleCommentDelete(id)));

  const mutation = useMutation({
    mutationFn: () => deleteComments(commentIds),
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  return mutation;
};

export default useDeleteComments;
