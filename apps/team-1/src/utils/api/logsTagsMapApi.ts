import {
  filteredLogsTypes,
  logsTagsMapDataTypes,
  logsTagsMapTypes,
} from "@/types";
import { pb } from ".";
import { handleTagGetByTitle } from "./tagsApi";

export const handleLogsTagsMapCreate = async (
  data: logsTagsMapDataTypes,
): Promise<logsTagsMapTypes> =>
  await pb.collection("logs_tags_map").create(data, { requestKey: null });

export const handleLogsTagsMapGetByLogId = async (
  target: string,
): Promise<filteredLogsTypes[]> =>
  await pb.collection("logs_tags_map").getFullList({
    filter: `logId='${target}'`,
    expand: "logId",
  });

export const handleLogsTagsMapGetByTagId = async (
  target: string,
): Promise<filteredLogsTypes[]> =>
  await pb.collection("logs_tags_map").getFullList({
    filter: `tagId='${target}'`,
    expand: "logId",
  });

export const handleLogsTagsMapGetByTagTitle = async (
  target: string,
): Promise<filteredLogsTypes[]> => {
  const { id } = await handleTagGetByTitle(target);

  return await handleLogsTagsMapGetByTagId(id);
};
