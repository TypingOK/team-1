import { handleFollowDelete } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteMyFollower = () => {
  const queryClient = useQueryClient();

  const deleteMyLFollower = async (followerId: string) => {
    await handleFollowDelete(followerId);
    return true;
  };

  const mutation = useMutation({
    mutationFn: (followerId: string) => deleteMyLFollower(followerId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myFollower"] });
    },
  });

  return mutation;
};

export default useDeleteMyFollower;
