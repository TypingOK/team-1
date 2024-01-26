import { seriesDataTypes, seriesTypes } from "@/types";
import { pb } from ".";

export const handleSeriesCreate = async (
  data: seriesTypes,
): Promise<seriesDataTypes> => await pb.collection("archive").create(data);

export const handleSeriesGetByUserId = async (
  id: string,
): Promise<seriesTypes[]> =>
  await pb.collection("series").getFullList({
    filter: `userId="${id}"`,
  });
