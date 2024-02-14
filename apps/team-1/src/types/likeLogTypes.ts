import { RecordModel } from "pocketbase";
import { ExpandLogTypes } from ".";

export interface likeLogTypes extends RecordModel {
  userId: string;
  logId: string[];
}

export interface ExpandLikesLogTypes extends likeLogTypes {
  expand?: { logId: ExpandLogTypes[] };
}
