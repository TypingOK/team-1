import { RecordModel } from "pocketbase";
import { userTypes } from ".";

export interface messagesTypes extends RecordModel {
  sender: string;
  receiver: string;
  contents: string;
}

export interface ExpandMessageTypes extends messagesTypes {
  expand: {
    receiver: userTypes;
  };
}
