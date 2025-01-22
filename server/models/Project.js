import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Il titolo è obbligatorio"],
    },
    description: {
      type: String,
      required: [true, "La descrizione è obbligatoria"],
    },
    thumbnail: {
      type: String,
      required: [true, "L'immagine thumbnail è obbligatoria"],
    },
    webLink: {
      type: String,
      required: [true, "Il link del progetto live è obbligatorio"],
    },
    githubLink: {
      type: String,
      required: [true, "Il link del repository GitHub è obbligatorio"],
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
