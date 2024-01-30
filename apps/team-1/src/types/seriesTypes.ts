import { RecordModel } from "pocketbase";

export interface seriesTypes extends RecordModel {
  userId: string;
  seriesTitle: string;
}

export interface seriesDataTypes {
  userId: string;
  seriesTitle: string;
}
