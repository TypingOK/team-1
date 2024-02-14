import { handleLogGetList } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useGetLogLists = ({
  page,
  category,
  itemsPerPage,
}: {
  page: number | undefined | null;
  category: string;
  itemsPerPage: number;
}) => {
  return useQuery({
    queryKey: ["getLogLists", category, page],
    queryFn: async () => {
      if (page) {
        if (category === "latest") {
          const LogList = await handleLogGetList(page, itemsPerPage, {
            sort: "-created",
            expand: "userId",
          });
          return LogList;
        } else if (category === "popular") {
          const LogList = await handleLogGetList(page, itemsPerPage, {
            sort: "-likes",
            expand: "userId",
          });
          return LogList;
        } else if (category === "follow") {
          const LogList = await handleLogGetList(page, itemsPerPage);
          return LogList;
        }
      } else {
        if (category === "latest") {
          const LogList = await handleLogGetList(0, 6, {
            sort: "-created",
          });
          return LogList;
        } else if (category === "popular") {
          const LogList = await handleLogGetList(0, 6, {
            sort: "likes",
          });
          return LogList;
        } else if (category === "follow") {
          const LogList = await handleLogGetList(0, 6);
          return LogList;
        }
      }
    },
  });
};
