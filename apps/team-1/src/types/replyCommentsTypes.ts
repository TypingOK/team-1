import { RecordModel } from "pocketbase";
import { userTypes } from ".";

export interface replyCommentsTypes extends RecordModel {
  content: string;
  commentsId: string;
  userId: string;
  logId: string;
  expand: { userId: userTypes };
}
