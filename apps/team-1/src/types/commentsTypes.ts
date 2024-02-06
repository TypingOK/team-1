import { RecordModel } from "pocketbase";
import { logsTypes, userTypes } from ".";

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

export interface ExpandCommentsTypes extends commentsTypes {
  expand?: { logId: logsTypes };
}
