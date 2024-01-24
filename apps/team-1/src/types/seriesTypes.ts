import { RecordModel } from "pocketbase";

export interface SeriesTypes extends RecordModel {
  userId: string;
  seriesTitle: string;
}
