import { RecordModel } from "pocketbase";

export interface archiveTypes extends RecordModel {
  userId: string;
  logId: string[];
}
