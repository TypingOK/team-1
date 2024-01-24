import { RecordModel } from "pocketbase";

export interface tagTypes extends RecordModel {
  tagTitle: string;
  logId: string;
}
