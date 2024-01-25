import { pb } from ".";

export const handleUploadImage = async (formData: FormData) =>
  await pb.collection("images").create(formData);
