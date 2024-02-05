import mongoose from "mongoose";



export interface Project {
  _id: string;
  title: string;
  summary?: string;
  description?: string;
  Image: string;
  ProjectCategory?: string;
  Team: string[];
}