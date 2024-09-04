// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const _dirname = path.resolve();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); //allows us to parse incoming requests:req.body
app.use(cookieParser()); // alows us to parse incoming cookies

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(3001, () => {
  connectDB();
  console.log("Server is running on port ", PORT);
});
