import { connectToDB } from '../mongoose';
import ProjectModel from '../models/UserProject'; // Use a different name, like ProjectModel
import { Project as ProjectType } from '../../types';
import UserModel from '../models/UserProject'; // Use a different name, like UserModel
import { getSession } from 'next-auth/react';

interface Props {
  project: ProjectType;
}

interface PropsWithId extends Props {
  id: string;
}

interface PropsWithUser extends Props {
  userId: String;
}
// Type error with using Project as a type 
export async function createProject({ project, userId }: PropsWithUser): Promise<void> {
  try {
    connectToDB();
    const user = await UserModel.findById(userId);
    const newProject = {
      title: project.title,
      summary: project.summary,
      description: project.description,
      Image: project.Image,
      ProjectCategory: project.ProjectCategory,
      Team: [user],
    } as ProjectType;

    const result = await ProjectModel.create(newProject);
    // Handle the result as needed
  } catch (error) {
    console.log(error);
  }
}

export async function updateProject({ project, id }: PropsWithId): Promise<void> {
  try {
    connectToDB();

    const updatedProject = {
      title: project.title,
      description: project.description,
      Image: project.Image,
      ProjectCategory: project.ProjectCategory,
      team: project.Team,
    };

    const latestProject = await ProjectModel.findOneAndUpdate(
      { _id: id },
      updatedProject,
      { upsert: true, new: true }
    );
    // Handle the result as needed
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProject(id: string): Promise<void> {
  try {
    connectToDB();

    const result = await ProjectModel.deleteOne({ _id: id });
    // Handle the result as needed
  } catch (error) {
    console.log(error);
  }
}