import { RecordModel } from "pocketbase";

export interface replyCommentsTypes extends RecordModel {
  content: string;
  commentsId: string;
  userId: string;
  logId: string;
}
