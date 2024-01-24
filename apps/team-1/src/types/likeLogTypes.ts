import { RecordModel } from "pocketbase";

export interface likeLogTypes extends RecordModel {
  userId: string;
  logId: string[];
}
