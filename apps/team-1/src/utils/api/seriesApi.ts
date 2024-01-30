import { seriesDataTypes, seriesTypes } from "@/types";
import { pb } from ".";
import { ListOptions } from "pocketbase";

export const handleSeriesCreate = async (
  data: seriesDataTypes,
): Promise<seriesTypes> => await pb.collection("archive").create(data);

export const handleSeriesGetByUserId = async (
  id: string,
  options?: ListOptions,
): Promise<seriesTypes[]> =>
  await pb.collection("series").getFullList({
    ...options,
    filter: `userId="${id}"`,
  });

export const handleSeriesUpdate = async (
  id: string,
  seriesTitle: string,
): Promise<seriesTypes> =>
  await pb.collection("series").update(id, { seriesTitle });

export const handleSeriesDelete = async (id: string): Promise<boolean> =>
  await pb.collection("series").delete(id);
