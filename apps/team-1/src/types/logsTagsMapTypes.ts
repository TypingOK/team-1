import { RecordModel } from "pocketbase";

export interface logsTagsMapTypes extends RecordModel {
  logId: string;
  tagId: string;
}

export interface logsTagsMapDataTypes {
  logId: string;
  tagId: string;
}
