import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "6472890ce35ddae74060",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
