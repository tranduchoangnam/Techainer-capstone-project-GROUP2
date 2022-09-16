import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import video from "../services/video.js";
import upImage from "../services/upImage.js";
import result from "../services/result.js";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";

const router = express.Router();
router.use(cors({
  origin: "http://localhost:3000"
}))
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        ".mp4"
    );
  },
});

const upload = multer({ storage: storage });
var jsonParser = bodyParser.json();

router.post("/video", upload.single("file"), video);
router.post("/uploadimage/:id", jsonParser, upImage);
router.get("/result/:id", result);
export { router };
