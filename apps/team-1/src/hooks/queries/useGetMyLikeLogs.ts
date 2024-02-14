import { ExpandLikesLogTypes } from "@/types";
import { handleLikeLogGetList } from "@/utils/api";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ClientResponseError, ListResult } from "pocketbase";

const useGetTargetLikeLogs = (
  queryKeyId: number | string,
  userId?: string,
  offset?: number,
  limit: number = 30,
  options?: UseQueryOptions<
    Promise<ListResult<ExpandLikesLogTypes>>,
    ClientResponseError,
    ListResult<ExpandLikesLogTypes>,
    QueryKey
  >,
) => {
  const queryKey = ["myLikeLogs", queryKeyId];
  const queryConfig = {
    refetchOnWindowFocus: false,
    ...options,
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: () =>
      handleLikeLogGetList(offset, 1 * limit, {
        filter: `${userId !== "" ? `userId="${userId}"` : ""}`,
        expand: "logId, logId.userId"
      }),
  });

  return { data, isLoading, error };
};

export { useGetTargetLikeLogs };
