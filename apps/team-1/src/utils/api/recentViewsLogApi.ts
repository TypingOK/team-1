import {
  ExpandRecentViewLogTypes,
  recentViewLogDataTypes,
  recentViewLogTypes,
} from "@/types";
import { pb } from ".";

export const handlerecentViewsLogCreate = async (
  data: recentViewLogDataTypes,
): Promise<recentViewLogTypes> =>
  await pb.collection("recentViewsLog").create(data);

export const handlerecentViewsLogGetByUserId = async (
  id: string,
): Promise<ExpandRecentViewLogTypes> =>
  await pb.collection("recentViewsLog").getFirstListItem(`userId="${id}"`, {
    expand: "logId,logId.userId",
  });
