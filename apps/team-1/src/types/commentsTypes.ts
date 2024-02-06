import { RecordModel } from "pocketbase";
import { replyCommentsTypes, userTypes } from ".";

export interface commentsTypes extends RecordModel {
  userId: string;
  logId: string;
  content: string;
  expand: {
    userId: userTypes;
  };
}

export interface commentsExpandTypes extends commentsTypes {
  replyComments: replyCommentsTypes[];
}

export interface commentsDataTypes {
  userId: string;
  logId: string;
  content: string;
}
