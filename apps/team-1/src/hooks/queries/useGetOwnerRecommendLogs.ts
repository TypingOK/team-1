import { ExpandLogTypes } from "@/types";
import { handleLogGetByUserId } from "@/utils/api";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ClientResponseError } from "pocketbase";

const useGetOwnerRecommendLogs = (
  queryKeyId: string,
  options?: UseQueryOptions<
    Promise<ExpandLogTypes[]>,
    ClientResponseError,
    ExpandLogTypes[],
    QueryKey
  >,
) => {
  const queryKey = ["ownerRecommend", queryKeyId];
  const queryConfig = {
    refetchOnWindowFocus: false,
    ...options,
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: () => handleLogGetByUserId(queryKeyId),
  });

  return { data, isLoading, error };
};

export { useGetOwnerRecommendLogs };
