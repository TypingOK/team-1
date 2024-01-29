import { RecordModel } from "pocketbase";

export interface seriesTypes extends RecordModel {
  userId: string;
  seriesTitle: string;
}

export interface seriesDataTypes extends seriesTypes {
  userId: string;
  seriesTitle: string;
}
