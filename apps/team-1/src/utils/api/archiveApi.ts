import { ExpandArchiveTypes, archiveDataTypes, archiveTypes } from "@/types";
import { pb } from ".";
import { ListOptions } from "pocketbase";

export const handleArchiveCreate = async (
  data: archiveDataTypes,
): Promise<archiveTypes> => await pb.collection("archive").create(data);

export const handleArchiveGetByUserId = async (
  id: string,
  options?: ListOptions,
): Promise<ExpandArchiveTypes[]> =>
  await pb.collection("archive").getFullList({
    ...options,
    filter: `userId="${id}"`,
    expand: "logId,logId.userId",
  });

export const handleArchiveGetOneByUserId = async (
  id: string,
): Promise<ExpandArchiveTypes> => await pb.collection("archive").getOne(id);

export const handleArchiveUpdate = async (
  id: string,
  data: { logId: string[] },
): Promise<archiveTypes> => await pb.collection("archive").update(id, data);

export const handleArchiveDelete = async (id: string): Promise<boolean> =>
  await pb.collection("archive").delete(id);
