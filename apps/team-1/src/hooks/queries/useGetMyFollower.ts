import { ExpandFollowTypes } from "@/types";
import { handleFollowGetList } from "@/utils/api";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ClientResponseError, ListResult } from "pocketbase";

const useGetTargetMyFollower = (
  queryKeyId: number | string,
  userId?: string,
  offset?: number,
  limit: number = 30,
  options?: UseQueryOptions<
    Promise<ListResult<ExpandFollowTypes>>,
    ClientResponseError,
    ListResult<ExpandFollowTypes>,
    QueryKey
  >,
) => {
  const queryKey = ["myFollower", queryKeyId];
  const queryConfig = {
    refetchOnWindowFocus: false,
    ...options,
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: () =>
      handleFollowGetList(offset, 1 * limit, {
        filter: `${userId !== "" ? `followingId="${userId}"` : ""}`,
        expand: "followingId, followerId",
      }),
  });

  return { data, isLoading, error };
};

export { useGetTargetMyFollower };
