import { RecordModel } from "pocketbase";
import { ExpandLogTypes, logsTypes, userTypes } from ".";

export interface recentViewLogTypes extends RecordModel {
  userId: string;
  logId: string[];
}

export interface ExpandRecentViewLogTypes extends recentViewLogTypes {
  expand?: { logId: ExpandLogTypes[] };
}

export interface recentViewLogDataTypes {
  userId: string;
  logId: string[];
}
