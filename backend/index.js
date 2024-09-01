// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello World ");
});

app.use(express.json()); //allows us to parse incoming requests:req.body
app.use(cookieParser()); // alows us to parse incoming cookies

app.use("/api/auth", authRoutes);

app.listen(3001, () => {
  connectDB();
  console.log("Server is running on port ", PORT);
});
