import { ExpandRecentViewLogTypes } from "@/types";
import { handleViewLogGetList } from "@/utils/api";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ClientResponseError, ListResult } from "pocketbase";

const useGetTargetViewLogs = (
  queryKeyId: number | string,
  userId?: string,
  offset?: number,
  limit: number = 30,
  options?: UseQueryOptions<
    Promise<ListResult<ExpandRecentViewLogTypes>>,
    ClientResponseError,
    ListResult<ExpandRecentViewLogTypes>,
    QueryKey
  >,
) => {
  const queryKey = ["myViewLogs", queryKeyId];
  const queryConfig = {
    refetchOnWindowFocus: false,
    ...options,
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: () =>
      handleViewLogGetList(offset, 1 * limit, {
        filter: `${userId !== "" ? `userId="${userId}"` : ""}`,
        expand: "logId, logId.userId",
      }),
  });

  return { data, isLoading, error };
};

export { useGetTargetViewLogs };
