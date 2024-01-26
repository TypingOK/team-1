import { followTypes } from "@/types";
import { pb } from ".";

export const handleGetFollow = async (
  followerId: string,
  followingId: string,
) =>
  await pb.collection("follow").getFullList({
    filter: `followerId = '${followerId}'&&followingId='${followingId}'`,
  });

export const handleGetFollower = async (id: string): Promise<followTypes[]> => {
  return await pb.collection("follow").getFullList({
    filter: `followingId='${id}'`,
    expand: "followerId, followingId",
    sort: "created",
  });
};

export const handleGetFollowing = async (
  id: string,
): Promise<followTypes[]> => {
  return await pb.collection("follow").getFullList({
    filter: `followerId='${id}'`,
    expand: "followerId, followingId",
    sort: "created",
  });
};

interface followData {
  followerId: string;
  followingId: string;
}

export const handleCreateFollow = async (data: followData) =>
  await pb.collection("follow").create(data);
