import express from "express";
import multerUploads from "../middlewares/upload.js";
import {
  addProject,
  getAllProjects,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/all", getAllProjects);
router.post("/add", multerUploads, addProject);
router.delete("/project/:id", deleteProject);

export default router;
