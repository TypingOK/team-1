import { RecordModel } from "pocketbase";

export interface messagesTypes extends RecordModel {
  sender: string;
  receiver: string;
  contents: string;
}

export interface filteredmessagesTypes extends messagesTypes {
  expand: {
    logId: messagesTypes;
  };
}
