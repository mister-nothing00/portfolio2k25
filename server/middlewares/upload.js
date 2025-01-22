import multer from "multer";
import DataURIParser from "datauri/parser.js";
import path from "path";

const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single("thumbnail");

const parser = new DataURIParser();

export const dataUri = (file) =>
  parser.format(path.extname(file.originalname).toString(), file.buffer);

export default multerUploads;
