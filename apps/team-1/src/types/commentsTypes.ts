import { RecordModel } from "pocketbase";
import { logsTypes, replyCommentsTypes, userTypes } from ".";

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

export interface ExpandCommentsTypes extends commentsTypes {
  expand: {
    userId: userTypes;
    logId: logsTypes;
  };
}
