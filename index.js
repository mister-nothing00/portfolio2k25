import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./server/database/db.js";
import cookieParser from "cookie-parser";

//Config file env
dotenv.config();

//APP
const app = express();

//MIddlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//PORT
const PORT = process.env.PORT;

//IMPORT ROUTES

import userRoutes from "./server/routes/userRoutes.js";
import projectRoutes from "./server/routes/projectRoutes.js";

//Using route

app.use("/api/user", userRoutes);
app.use("/api/project", projectRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running in localhost: ${PORT}`);
  connectDB();
});
