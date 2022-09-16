import express from "express";
import http from "http";
import { router } from "./routes/routes.js";

const app = express();

const port = process.env.PORT || 8000;

const server = http.createServer(app);

app.use(router);
server.listen(port, () => {
  console.log(`🚀 Server is running on port ${port} ...`);
});

process.on("SIGINT", () => {
  console.log("🤖 Server closed");
});
