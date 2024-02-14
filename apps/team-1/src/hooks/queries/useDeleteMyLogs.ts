import { handleLogDelete } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteMyLogs = (logIds: string[]) => {
  const queryClient = useQueryClient();

  const deleteMyLogs = async (logIds: string[]): Promise<boolean[]> =>
    await Promise.all(logIds.map(id => handleLogDelete(id)));

  const mutation = useMutation({
    mutationFn: () => deleteMyLogs(logIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myLogs"] });
    },
  });

  return mutation;
};

export default useDeleteMyLogs;
