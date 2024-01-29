import { tagDataTypes, tagTypes } from "@/types";
import { pb } from ".";
import { ListOptions } from "pocketbase";

export const handleTagCreate = async (data: tagDataTypes): Promise<tagTypes> =>
  await pb.collection("tags").create(data);

export const handleTagGetAllList = async (
  options?: ListOptions,
): Promise<tagTypes[]> => await pb.collection("tags").getFullList(options);

export const handleTagGetByTitle = async (target: string): Promise<tagTypes> =>
  await pb.collection("tags").getFirstListItem(`tagTitle="${target}"`);
