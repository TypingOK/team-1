import { ExpandLogTypes, logDataTypes, logsTypes } from "@/types";
import { pb } from ".";
import { ListOptions, ListResult } from "pocketbase";

export const handleLogCreate = async (data: logDataTypes): Promise<logsTypes> =>
  await pb.collection("logs").create(data);

export const handleLogGetAllList = async (): Promise<ExpandLogTypes[]> =>
  await pb.collection("logs").getFullList();

export const handleLogGetList = async (
  offset: number = 0,
  limit: number = 30,
  options?: ListOptions,
): Promise<ListResult<ExpandLogTypes>> => {
  console.log(options);
  return await pb.collection("logs").getList(offset, 1 * limit, options);
};

export const handleLogGetById = async (id: string): Promise<ExpandLogTypes> =>
  await pb.collection("logs").getOne(id, {
    expand: "userId",
  });

export const handleLogGetBySeriesId = async (
  id: string,
  options?: ListOptions,
): Promise<ExpandLogTypes[]> =>
  await pb.collection("logs").getFullList({
    ...options,
    filter: `seriesId='${id}'`,
    expand: "userId",
  });

export const handleLogUpdate = async (
  id: string,
  data: logDataTypes,
): Promise<logsTypes> => await pb.collection("logs").update(id, data);

export const handleLogDelete = async (id: string): Promise<boolean> =>
  await pb.collection("logs").delete(id);
