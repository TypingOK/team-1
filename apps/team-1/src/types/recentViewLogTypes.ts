import { RecordModel } from "pocketbase";

export interface recentViewLogTypes extends RecordModel {
  userId: string;
  logId: string[];
}
