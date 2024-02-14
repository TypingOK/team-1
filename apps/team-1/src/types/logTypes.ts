import { RecordModel } from "pocketbase";
import { userTypes } from ".";

export interface logsTypes extends RecordModel {
  userId: string;
  series: string;
  title: string;
  content: string;
  thumbnail: string;
  private: boolean;
  likes: number;
  views: number;
  disable: boolean;
  tags: string;
}

export interface ExpandLogTypes extends logsTypes {
  expand: { userId: userTypes };
}

export interface logDataTypes {
  userId: string;
  series: string;
  title: string;
  content: string;
  private?: boolean;
  disable?: boolean;
  tags?: string;
  thumbnail: string;
}

export interface filteredLogsTypes extends logsTypes {
  expand: {
    logId: logsTypes;
  };
}
