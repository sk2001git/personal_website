"use server"
import { connectToDB } from '../mongoose';
import { CreateProject } from '@/components/Form';
import Project from '../models/ProjectSchema';
import User from '../models/UserProject';
import { revalidatePath } from 'next/cache';
import {Project as ProjectType} from '@/types/project';
import { EditProject } from '@/components/profile/EditForm';


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
    await connectToDB();
    const newProject = {
      title: project.title,
      summary: project.summary,
      link: project.link,
      documentation: project.documentation,
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

export async function deleteProject( id : string): Promise<void> {
  try {
    await connectToDB();
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      // Handle case where the project with the given id was not found
      console.log('Project not found');
      return;
    }

    // Update users to remove the reference to the deleted project
    await User.updateMany({ projects: deletedProject._id }, { $pull: { projects: deletedProject._id } });
    revalidatePath('/projects');
  } catch (error) {
    console.log(error);
  }
}

export async function getProject(id: string): Promise<ProjectType> {
  try {
    await connectToDB();
    const project = await Project.findById(id);
    if (!project) {
      // Handle case where the project with the given id was not found
      console.log('Project not found');
      throw new Error('Project not found');
      
    }
    return project;
  } catch (error) {
    console.log(error);
  }
  return {} as ProjectType;
}

export async function updateProject(project_details: EditProject, project_id: string ) {
  try {
    await connectToDB();
    const updatedProject = await Project.findByIdAndUpdate(project_id, project_details);
    if (!updatedProject) {
      // Handle case where the project with the given id was not found
      console.log('Project not found');
      throw new Error('Project not found');
    }

    return updatedProject;
  } catch (error) {
    console.log(error);
  }
}