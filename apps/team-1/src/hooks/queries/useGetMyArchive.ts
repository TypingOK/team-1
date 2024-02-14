import { ExpandArchiveTypes } from "@/types";
import { handleArchiveGetList, pb } from "@/utils/api";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ClientResponseError, ListResult } from "pocketbase";

const useGetTargetArchive = (
  queryKeyId: number | string,
  username?: string | string[],
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

  const handleGetArchive = async () => {
    const userData = await pb
      .collection("users")
      .getFirstListItem(`username="${username}"`);

    const targetData = await handleArchiveGetList(offset, 1 * limit, {
      filter: `${username !== "" ? `userId="${userData.id}"` : ""}`,
    });

    return targetData;
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: handleGetArchive,
  });

  return { data, isLoading, error };
};

export { useGetTargetArchive };
