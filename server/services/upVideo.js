import { uploadFile } from "../minio/fputs.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const upVideo = async (req, res) => {
  const file = req.file;
  const result = await uploadFile(file);
  console.log(result);
  const newVideo = await prisma.video.create({
    data: {
      path: result.Location,
    },
  });
  console.log(newVideo);
};
export default upVideo;
