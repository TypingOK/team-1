import { handleLikesLogGetByUserId, handleLikesLogDelete } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteLikesLogs = (userId: string, logIds: string[]) => {
  const queryClient = useQueryClient();

  const deleteLikesLogs = async () => {
    // Get likeLogs by userId
    const likeLogs = await handleLikesLogGetByUserId(userId);

    // Extract ids from likeLogs
    const likeLogIds = likeLogs.map(likeLog => likeLog.id);
    console.log(likeLogIds);

    // Delete likeLogs using handleLikesLogDelete
    await Promise.all(likeLogIds.map(id => handleLikesLogDelete(id)));
  };

  const mutation = useMutation({
    mutationFn: deleteLikesLogs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return mutation;
};

export default useDeleteLikesLogs;
