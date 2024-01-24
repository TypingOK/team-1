import { RecordModel } from "pocketbase";

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

export interface filteredLogsTypes extends logsTypes {
  expand: {
    logId: logsTypes;
  };
}
