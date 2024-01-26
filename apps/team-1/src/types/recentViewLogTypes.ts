import { RecordModel } from "pocketbase";
import { logsTypes, userTypes } from ".";

export interface recentViewLogTypes extends RecordModel {
  userId: string;
  logId: string[];
}

interface ExpandLogTypes extends logsTypes {
  expand?: { userId: userTypes };
}

export interface ExpandRecentViewLogTypes extends recentViewLogTypes {
  expand?: { logId: ExpandLogTypes[] };
}

export interface recentViewLogDataTypes {
  userId: string;
  logId: string[];
}
