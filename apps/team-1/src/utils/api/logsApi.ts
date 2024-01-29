import { ExpandLogTypes, logDataTypes, logsTypes } from "@/types";
import { pb } from ".";
import { ListResult } from "pocketbase";

export const handleLogCreate = async (data: logDataTypes): Promise<logsTypes> =>
  await pb.collection("logs").create(data);

export const handleLogGetAllList = async (): Promise<ExpandLogTypes[]> =>
  await pb.collection("logs").getFullList();

export const handleLogGetList = async (
  offset: number = 0,
  limit: number = 30,
): Promise<ListResult<ExpandLogTypes>> =>
  await pb.collection("logs").getList(0 * offset, 1 * limit);

export const handleLogGetById = async (id: string): Promise<ExpandLogTypes> =>
  await pb.collection("logs").getOne(id, {
    expand: "userId",
  });

export const handleLogGetBySeriesId = async (
  id: string,
): Promise<ExpandLogTypes[]> =>
  await pb.collection("logs").getFullList({
    filter: `seriesId='${id}'`,
    expand: "userId",
  });
