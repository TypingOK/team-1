import { logDataTypes, logsTypes } from "@/types";
import { pb } from ".";

export const handleLogCreate = async (data: logDataTypes): Promise<logsTypes> =>
  await pb.collection("logs").create(data);

export const handleLogsGetAllList = async (): Promise<logsTypes[]> =>
  await pb.collection("logs").getFullList();
