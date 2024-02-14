import { ExpandLogTypes } from "@/types";
import { handleLogGetList, pb } from "@/utils/api";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ClientResponseError, ListResult } from "pocketbase";

const useGetTargetLogs = (
  queryKeyId: number | string,
  username?: string | string[],
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

  const handleGetLogs = async () => {
    const userData = await pb
      .collection("users")
      .getFirstListItem(`username="${username}"`);

    const targetData = await handleLogGetList(offset, 1 * limit, {
      filter: `${username !== "" ? `userId="${userData.id}"` : ""}`,
    });

    return targetData;
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: handleGetLogs,
  });

  return { data, isLoading, error };
};

export { useGetTargetLogs };
