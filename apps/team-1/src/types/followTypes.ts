import { RecordModel } from "pocketbase";

export interface followTypes extends RecordModel {
  followerId: string;
  followingId: string;
}
