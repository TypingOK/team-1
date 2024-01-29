import { RecordModel } from "pocketbase";

export interface followTypes extends RecordModel {
  followerId: string;
  followingId: string;
}

export interface followDataTypes {
  followerId: string;
  followingId: string;
}
