import { RecordModel } from "pocketbase";
import { ExpandLogTypes } from ".";

export interface archiveTypes extends RecordModel {
  userId: string;
  logId: string[];
}

export interface ExpandarchiveTypes extends archiveTypes {
  expand?: { logId: ExpandLogTypes[] };
}

export interface archiveDataTypes extends RecordModel {
  userId: string;
  logId: string[];
}
