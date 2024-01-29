import {
  filteredLogsTypes,
  logsTagsMapDataTypes,
  logsTagsMapTypes,
} from "@/types";
import { pb } from ".";
import { handleTagGetByTitle } from "./tagsApi";
import { ListOptions } from "pocketbase";

export const handleLogsTagsMapCreate = async (
  data: logsTagsMapDataTypes,
): Promise<logsTagsMapTypes> =>
  await pb.collection("logs_tags_map").create(data, { requestKey: null });

export const handleLogsTagsMapGetByLogId = async (
  target: string,
  options?: ListOptions,
): Promise<filteredLogsTypes[]> =>
  await pb.collection("logs_tags_map").getFullList({
    ...options,
    filter: `logId='${target}'`,
    expand: "logId",
  });

export const handleLogsTagsMapGetByTagId = async (
  target: string,
  options?: ListOptions,
): Promise<filteredLogsTypes[]> =>
  await pb.collection("logs_tags_map").getFullList({
    ...options,
    filter: `tagId='${target}'`,
    expand: "logId",
  });

export const handleLogsTagsMapGetByLogIdTagId = async (
  logId: string,
  tagId: string,
): Promise<filteredLogsTypes> =>
  await pb
    .collection("logs_tags_map")
    .getFirstListItem(`logId="${logId}"&&tagId="${tagId}"`);

export const handleLogsTagsMapGetByTagTitle = async (
  target: string,
): Promise<filteredLogsTypes[]> => {
  const { id } = await handleTagGetByTitle(target);

  return await handleLogsTagsMapGetByTagId(id);
};

export const handleLogsTagsMapDelete = async (id: string): Promise<boolean> =>
  await pb.collection("logs_tags_map").delete(id);

export const handleLogsTagsMapDeleteByLogId = async (
  logId: string,
  tagTitle: string,
): Promise<boolean> => {
  const tagId = await handleTagGetByTitle(tagTitle);
  const LogsTagsMapId = await handleLogsTagsMapGetByLogIdTagId(logId, tagId.id);

  return await handleLogsTagsMapDelete(LogsTagsMapId.id);
};
