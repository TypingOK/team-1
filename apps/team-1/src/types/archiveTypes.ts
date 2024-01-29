import { RecordModel } from "pocketbase";
import { ExpandLogTypes } from ".";

export interface archiveTypes extends RecordModel {
  userId: string;
  logId: string[];
}

export interface ExpandArchiveTypes extends archiveTypes {
  expand?: { logId: ExpandLogTypes[] };
}

export interface archiveDataTypes {
  userId: string;
  logId: string[];
}
