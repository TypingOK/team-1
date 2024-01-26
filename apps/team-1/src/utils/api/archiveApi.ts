import { ExpandarchiveTypes, archiveDataTypes, archiveTypes } from "@/types";
import { pb } from ".";

export const handleArchiveCreate = async (
  data: archiveDataTypes,
): Promise<archiveTypes> => await pb.collection("archive").create(data);

export const handleArchiveGetByUserId = async (
  id: string,
): Promise<ExpandarchiveTypes[]> =>
  await pb.collection("archive").getFullList({
    filter: `userId="${id}"`,
    expand: "logId,logId.userId",
  });
