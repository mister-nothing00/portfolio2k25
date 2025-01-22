import Project from "../models/Project.js";
import cloudinary from "../utils/cloudinaryConfig.js";
import { dataUri } from "../middlewares/upload.js";

// Aggiungere un progetto
export const addProject = async (req, res) => {
  try {
    const { title, description, webLink, githubLink } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "L'immagine è obbligatoria" });
    }

    const file = dataUri(req.file);
    const uploadResult = await cloudinary.uploader.upload(file.content);

    const newProject = new Project({
      title,
      description,
      thumbnail: uploadResult.secure_url,
      webLink,
      githubLink,
    });

    await newProject.save();

    res.status(201).json({ message: "Progetto aggiunto con successo", newProject });
  } catch (error) {
    res.status(500).json({ message: "Errore nel server", error: error.message });
  }
};

// Visualizzare tutti i progetti
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Errore nel server", error: error.message });
  }
};

// Eliminare un progetto
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Progetto non trovato" });
    }

    // Eliminare immagine da Cloudinary
    const publicId = project.thumbnail.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(publicId);

    await Project.findByIdAndDelete(id);

    res.status(200).json({ message: "Progetto eliminato con successo" });
  } catch (error) {
    res.status(500).json({ message: "Errore nel server", error: error.message });
  }
};
