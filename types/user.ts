import mongoose from "mongoose";

export interface User {
  _id: string;
  email: string;
  username: string;
  image?: string;
  contact?: {
    linkedin?: string;
    github?: string;
  };
  projects?: string[];
}
