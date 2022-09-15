import express from "express";
import multer from "multer";
const router = express.Router();
import upVideo from "../services/upVideo.js";
const upload = multer({ dest: "uploads/" });
import access from "../modules/allowAccess.js";
router.use(access);
router.post("/uploads", upload.single("file"), upVideo);

export { router };
