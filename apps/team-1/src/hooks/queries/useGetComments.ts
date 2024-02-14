import { commentsExpandTypes } from "@/types";
import { getComments } from "@/utils/logs/getComments";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ClientResponseError } from "pocketbase";

const useGetComments = (
  queryKeyId: string,
  options?: UseQueryOptions<
    Promise<commentsExpandTypes[]>,
    ClientResponseError,
    commentsExpandTypes[],
    QueryKey
  >,
) => {
  const queryKey = ["comments", queryKeyId];
  const queryConfig = {
    refetchOnWindowFocus: false,
    ...options,
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: () => getComments(queryKeyId),
  });

  return { data, isLoading, error };
};

export { useGetComments };
