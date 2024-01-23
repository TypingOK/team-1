import PocketBase, { RecordModel } from "pocketbase";

const pb = new PocketBase("http://54.180.1.20:8090");

export interface userTypes {
  username: string;
  email: string;
  emailVisibility?: boolean;
  password: string;
  passwordConfirm: string;
  disable: boolean;
  description?: string;
  sfaclogUrl?: string;
  category?: (
    | "frontend"
    | "backend"
    | "data"
    | "server"
    | "dba"
    | "logs"
    | "android"
  )[];
  sns?: {
    email?: string;
    github?: string;
    instagram?: string;
    sfacfolio?: string;
    rocketpunch?: string;
    youtube?: string;
  };
}

export interface loginUserTypes {
  email: string;
  password: string;
}

export const handleSignup = (data: userTypes) =>
  pb.collection("users").create(data);

export const handleLogin = (email: string, password: string) =>
  pb.collection("users").authWithPassword(email, password);

export const handleGetToken = () => pb.authStore.token;

export const handleSignout = async (id: string) =>
  await pb.collection("users").delete(id);

export const handleUploadImage = async (formData: FormData) =>
  await pb.collection("images").create(formData);

export const handleGetAllTags = async () =>
  await pb.collection("tag").getFullList();

// export const handleGetLogsDetail = async (target: string) =>
//   await pb.collection("tag").getFullList({
//     filter: `tagTitle='${target}'`,
//     expand: "logId.userId",
//   });

export const handleGetTargetLogs = async (
  target: string,
): Promise<logsTypes[]> =>
  await pb.collection("tag").getFullList({
    filter: `tagTitle='${target}'`,
    expand: "logId",
  });

export interface logsTypes extends RecordModel {
  expand: {
    logId: { title: string };
  };
}
