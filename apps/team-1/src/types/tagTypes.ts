import { RecordModel } from "pocketbase";

export interface tagTypes extends RecordModel {
  tagTitle: string;
}

export interface tagDataTypes {
  tagTitle: string;
}
