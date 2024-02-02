"use server"
import { connectToDB } from '../mongoose';
import { CreateProject } from '@/components/Form';
import Project from '../models/ProjectSchema';
import User from '../models/UserProject';


interface Props {
  project: CreateProject;
}

interface PropsWithId extends Props {
  id: string;
}

interface PropsWithUser extends Props {
  userId: string;
}


// Type error with using Project as a type 
export async function createProject({project, userId}: PropsWithUser): Promise<void> {
  try {
    connectToDB();
    const newProject = {
      title: project.title,
      summary: project.summary,
      description: project.description,
      Image: project.Image,
      ProjectCategory: project.ProjectCategory,
    };
    const createdProject = await Project.create(newProject);
    await Project.findByIdAndUpdate(createdProject._id, { $push: { Team: userId } });
    await User.findByIdAndUpdate(userId, { $push: { projects: createdProject._id } });
    
  } catch (error) {
    console.log(error);
  }
}

