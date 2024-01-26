import { pb } from ".";

export const handleGetfollow = async () =>
  await pb.collection("follow").getFullList();

export const handleGetfollower = async (id: string) => {
  return await pb.collection("follow").getFullList({
    filter: `followingId='${id}'`,
    expand: "followerId, followingId",
  });
};

export const handleGetfollowing = async (id: string) => {
  return await pb.collection("follow").getFullList({
    filter: `followerId='${id}'`,
    expand: "followerId, followingId",
  });
};
