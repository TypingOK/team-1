import { RecordModel } from "pocketbase";
import { logsTypes, userTypes } from "@/types";

export interface followTypes extends RecordModel {
  followerId: string;
  followingId: string;
}

export interface followDataTypes {
  followerId: string;
  followingId: string;
}

export interface ExpandFollowTypes extends followTypes {
  expand: {
    followingId: userTypes;
    followerId: userTypes;
  };
}
