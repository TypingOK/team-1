import PocketBase from "pocketbase";

const pb = new PocketBase("http://54.180.1.20:8090");

export interface userTypes {
  username: string;
  email: string;
  emailVisibility?: boolean;
  password?: string;
  passwordConfirm?: string;
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

export const record = (data: userTypes) => pb.collection("users").create(data);
