import { API_SERVER } from "@/constants";
import PocketBase from "pocketbase";

export const pb = new PocketBase(API_SERVER);

pb.autoCancellation(false);
