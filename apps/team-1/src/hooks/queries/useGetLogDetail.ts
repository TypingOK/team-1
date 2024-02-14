import { ExpandLogTypes } from "@/types";
import { handleLogGetById } from "@/utils/api";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ClientResponseError } from "pocketbase";

const useGetLogDetail = (
  queryKeyId: string,
  options?: UseQueryOptions<
    Promise<ExpandLogTypes>,
    ClientResponseError,
    ExpandLogTypes,
    QueryKey
  >,
) => {
  const queryKey = ["log", queryKeyId];
  const queryConfig = {
    refetchOnWindowFocus: false,
    ...options,
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: () => handleLogGetById(queryKeyId),
  });

  return { data, isLoading, error };
};

export { useGetLogDetail };
