import { ExpandMessageTypes, messagesTypes } from "@/types";
import { pb } from ".";

export const handleGetMessages = async (
  senderId: string,
  receiverId: string,
): Promise<ExpandMessageTypes[]> => {
  return await pb.collection("messages").getFullList({
    filter: `sender='${senderId}' && receiver='${receiverId}'||sender='${receiverId}' && receiver='${senderId}'`,
    expand: "receiver",
    sort: "created",
  });
};

interface messagesData {
  sender: string;
  receiver: string;
  contents: string;
}

export const handleCreateMessages = async (data: messagesData): Promise<messagesTypes> =>
  await pb.collection("messages").create(data);
