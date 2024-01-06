import * as dotenv from "dotenv"; //To setup environments
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan"; //To log the server details
import cookieParser from "cookie-parser";

import cloudinary from "cloudinary";

//Router
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
//public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
//errorHandler
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
// import { validateTest } from "./middleware/validationMiddleware.js";

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV == "development") app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "Test route" });
});

app.post("/api/v1/testpost", (req, res) => {
  res.json({ msg: "Testpost route" });
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.get("*", (req, res) => {
  res.send(path.resolve(__dirname, "./public", "index.html"));
});

//Handle wrong URL
app.use("*", (req, res) => {
  res.status(404).json({ message: "URL Not found" });
});

app.use(errorHandlerMiddleware);

//Get port
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Running on ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
