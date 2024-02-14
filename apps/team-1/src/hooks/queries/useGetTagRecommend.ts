import { filteredLogsTypes } from "@/types";
import { handleLogsTagsMapGetByTagTitle } from "@/utils/api";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ClientResponseError } from "pocketbase";

const useGetTagRecommend = (
  queryKeyId: string[],
  options?: UseQueryOptions<
    Promise<filteredLogsTypes[][]>,
    ClientResponseError,
    filteredLogsTypes[][],
    QueryKey
  >,
) => {
  const queryKey = ["tagRecommend", queryKeyId];
  const queryConfig = {
    refetchOnWindowFocus: false,
    ...options,
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: () =>
      Promise.all(queryKeyId.map(item => handleLogsTagsMapGetByTagTitle(item))),
  });

  const result = data?.reduce<filteredLogsTypes[]>((acc, cur) => {
    cur.map(item => {
      if (
        acc.findIndex(tempItem => {
          return tempItem.expand.logId.id === item.expand.logId.id;
        }) === -1
      ) {
        acc.push(item);
      }
    });

    return acc;
  }, []);

  return { data: result, isLoading, error };
};

export { useGetTagRecommend };
