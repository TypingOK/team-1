import {
  ExpandRecentViewLogTypes,
  recentViewLogDataTypes,
  recentViewLogTypes,
} from "@/types";
import { pb } from ".";
import { ListOptions, ListResult } from "pocketbase";

export const handleRecentViewsLogCreate = async (
  data: recentViewLogDataTypes,
): Promise<recentViewLogTypes> =>
  await pb.collection("recentViewsLog").create(data);

export const handleRecentViewsLogGetByUserId = async (
  id: string,
  options?: ListOptions,
): Promise<ExpandRecentViewLogTypes> =>
  await pb.collection("recentViewsLog").getFirstListItem(`userId="${id}"`, {
    ...options,
    expand: "logId,logId.userId",
  });

export const handleViewLogGetList = async (
  offset: number = 0,
  limit: number = 30,
  options?: ListOptions,
): Promise<ListResult<ExpandRecentViewLogTypes>> => {
  return await pb.collection("recentViewsLog").getList(offset, 1 * limit, options);
};

export const handleRecentViewsLogUpdate = async (
  id: string,
  data: { logId: string[] },
): Promise<recentViewLogTypes> =>
  await pb.collection("recentViewsLog").update(id, data);

export const handleRecentViewsLogDelete = async (id: string) =>
  await pb.collection("recentViewsLog").delete(id);
