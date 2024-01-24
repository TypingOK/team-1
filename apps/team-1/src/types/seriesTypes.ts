import { RecordModel } from "pocketbase";

export interface logsTypes extends RecordModel {
  userId: string;
  seriesTitle: string;
}