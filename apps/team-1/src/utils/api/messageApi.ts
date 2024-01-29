import { ExpandMessageTypes, messagesDataTypes, messagesTypes } from "@/types";
import { pb } from ".";
import { ListOptions } from "pocketbase";

export const handleMessagesGetList = async (
  senderId: string,
  receiverId: string,
  options?: ListOptions,
): Promise<ExpandMessageTypes[]> => {
  return await pb.collection("messages").getFullList({
    ...options,
    filter: `sender='${senderId}' && receiver='${receiverId}'||sender='${receiverId}' && receiver='${senderId}'`,
    expand: "receiver",
  });
};

export const handleMessagesCreate = async (
  data: messagesDataTypes,
): Promise<messagesTypes> => await pb.collection("messages").create(data);
