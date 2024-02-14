import { handleArchiveDelete } from "@/utils/api";
import {
  useMutation,
  useQueryClient,
  UseMutationOptions,
} from "@tanstack/react-query";

const useDeleteMyAchive = (archiveIds: string[]) => {
  const queryClient = useQueryClient();

  const deleteMyArchive = async (archiveIds: string[]): Promise<boolean[]> =>
    await Promise.all(archiveIds.map(id => handleArchiveDelete(id)));

  const mutation = useMutation({
    mutationFn: () => deleteMyArchive(archiveIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myArchive"] });
    },
  });

  return mutation;
};

export default useDeleteMyAchive;
