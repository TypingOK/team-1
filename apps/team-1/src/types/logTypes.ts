import { RecordModel } from "pocketbase";
import { userTypes } from ".";

export interface logsTypes extends RecordModel {
  userId: string;
  seriesId: string;
  title: string;
  content: string;
  thumbnail: string;
  private: boolean;
  likes: number;
  views: number;
  disable: boolean;
}

export interface logDataTypes {
  userId: string;
  seriesId?: string[];
  title: string;
  content: string;
  private?: boolean;
  disable?: boolean;
  tags?: string;
}

export interface filteredLogsTypes extends logsTypes {
  expand: {
    logId: logsTypes;
  };
}