import { RecordModel } from "pocketbase";

export interface commentsTypes extends RecordModel {
  userId: string;
  logId: string;
  content: string;
}

export interface commentsDataTypes {
  userId: string;
  logId: string;
  content: string;
}
