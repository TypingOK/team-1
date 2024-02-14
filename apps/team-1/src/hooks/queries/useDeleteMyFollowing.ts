import { handleFollowDelete } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteMyFollowing = () => {
  const queryClient = useQueryClient();

  const deleteMyLFollowing = async (followingId: string) => {
    await handleFollowDelete(followingId);
    return true;
  };

  const mutation = useMutation({
    mutationFn: (followingId: string) => deleteMyLFollowing(followingId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myFollowing"] });
    },
  });

  return mutation;
};

export default useDeleteMyFollowing;
