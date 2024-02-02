import mongoose from "mongoose";

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