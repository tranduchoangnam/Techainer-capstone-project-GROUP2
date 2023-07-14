import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "@ffmpeg-installer/ffmpeg";
import ffprobePath from "@ffprobe-installer/ffprobe";
import extractFrames from "ffmpeg-extract-frames";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
ffmpeg.setFfprobePath(ffprobePath.path);
ffmpeg.setFfmpegPath(ffmpegPath.path);

//import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const video = async (req, res) => {
  const file = req.file;
  var id = uuidv4();
  fs.mkdir(`./frames/${id}`, { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Directory created successfully!");
  });
  await extractFrames({
    input: file.path,
    output: `./frames/${id}/screenshot-%d.jpg`,
    fps: 2,
  });
  //create user
  let user = await prisma.user.create({
    data: {
      id: id,
    },
  });
  res.json(id);
};
export default video;
