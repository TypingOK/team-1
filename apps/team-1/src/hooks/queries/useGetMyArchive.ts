import { ExpandArchiveTypes } from "@/types";
import { handleArchiveGetList } from "@/utils/api";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ClientResponseError, ListResult } from "pocketbase";

const useGetTargetArchive = (
  queryKeyId: number | string,
  userId?: string,
  offset?: number,
  limit: number = 30,
  options?: UseQueryOptions<
    Promise<ListResult<ExpandArchiveTypes>>,
    ClientResponseError,
    ListResult<ExpandArchiveTypes>,
    QueryKey
  >,
) => {
  const queryKey = ["myArchive", queryKeyId];
  const queryConfig = {
    refetchOnWindowFocus: false,
    ...options,
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: () =>
    handleArchiveGetList(offset, 1 * limit, {
        filter: `${userId !== "" ? `userId="${userId}"` : ""}`,
      }),
  });

  return { data, isLoading, error };
};

export { useGetTargetArchive };
