import { pb } from ".";

export const handleGetMessages = async () =>
  await pb.collection("messages").getFullList();

export const handleGetSandMessages = async (id: string) => {
  return await pb
    .collection("messages")
    .getFullList({ filter: `sender='${id}'` });
};

export const handleGetReceiverMessages = async (id: string) => {
  return await pb
    .collection("messages")
    .getFullList({ filter: `receiver='${id}'` });
};

interface messagesData {
  sender: string;
  receiver: string;
  contents: string;
}

export const handleMessagesCreate = async (data: messagesData) =>
  await pb.collection("messages").create(data);
