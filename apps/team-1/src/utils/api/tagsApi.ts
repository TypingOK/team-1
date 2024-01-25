import { tagDataTypes, tagTypes } from "@/types";
import { pb } from ".";

export const handleTagCreate = async (data: tagDataTypes): Promise<tagTypes> =>
  await pb.collection("tags").create(data);

export const handleTagsGetAllList = async (): Promise<tagTypes[]> =>
  await pb.collection("tags").getFullList();

export const handleTagGetByTitle = async (target: string): Promise<tagTypes> =>
  await pb.collection("tags").getFirstListItem(`tagTitle="${target}"`);
