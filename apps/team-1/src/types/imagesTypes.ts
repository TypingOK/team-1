import { RecordModel } from "pocketbase";

export interface imagesTypes extends RecordModel {
  images: string;
  title: string;
}
