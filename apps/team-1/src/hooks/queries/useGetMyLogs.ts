import { ExpandLogTypes } from "@/types";
import { handleLogGetList } from "@/utils/api";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ClientResponseError, ListResult } from "pocketbase";

const useGetTargetLogs = (
  queryKeyId: number | string,
  userId?: string,
  offset?: number,
  limit: number = 30,
  options?: UseQueryOptions<
    Promise<ListResult<ExpandLogTypes>>,
    ClientResponseError,
    ListResult<ExpandLogTypes>,
    QueryKey
  >,
) => {
  const queryKey = ["myLogs", queryKeyId];
  const queryConfig = {
    refetchOnWindowFocus: false,
    ...options,
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: () =>
      handleLogGetList(offset, 1 * limit, {
        filter: `${userId !== "" ? `userId="${userId}"` : ""}`,
      }),
  });

  return { data, isLoading, error };
};

export { useGetTargetLogs };
