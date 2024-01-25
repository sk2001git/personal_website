import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String},
  description: { type: String },
  ImageAlt: { type: String, required: true, unique: true },
  Image: { type: String, required: true },
  ProjectCategory: { type: String },
  Team: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
}, { 
  timestamps: true,
  default: {
    Team: [],
  }
});

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

const UserSchema = new mongoose.Schema({
  
  email: {
    type: String, 
    unique: [true, "Email already exists"],
    required: [true, "Email is required"]
  },
  username: {
    type: String,
    required: [true, "Username is required"]
  },
  image: {
    type: String,
  },
  contact: {
    linkedin: { type: String, required: false },
    github: { type: String, required: false },
  },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  }, {
    timestamps: true,
    default: {
      projects: [],
    },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;