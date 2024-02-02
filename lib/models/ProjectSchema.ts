import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, },
  description: { type: String },
  Image: { type: String, required: true, },
  ProjectCategory: { type: String },
  Team: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ]// You need to put default straight away after
}, { 
  timestamps: true,
});

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
export default Project;