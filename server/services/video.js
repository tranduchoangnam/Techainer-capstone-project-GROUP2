import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "@ffmpeg-installer/ffmpeg";
import ffprobePath from "@ffprobe-installer/ffprobe";
import extractFrames from "ffmpeg-extract-frames";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import upImage from "./upImage.js";
ffmpeg.setFfprobePath(ffprobePath.path);
ffmpeg.setFfmpegPath(ffmpegPath.path);

//import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const video = async (req, res) => {
  const file = req.file;
  var id = uuidv4();

  // call to AI
  var video = fs.createReadStream(file.path);
  var export_rate = 15;
  const formData = new FormData();
  formData.append("video", video);
  formData.append("export_rate", export_rate);
  const result = await axios.post(
    `${process.env.AI_API_URL}/call/masked_video`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
      },
    }
  );
  console.log(JSON.parse(JSON.stringify(result.data)));
  // res.json(result.data);

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
  await upImage(JSON.parse(JSON.stringify(result.data)), id);
  res.json(id);
};
export default video;
