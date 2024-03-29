"use server";
import { useSession } from 'next-auth/react';
import { connectToDB } from "../mongoose";
import mongoose from 'mongoose';
import UserModel from "../models/UserProject"; // Import the User model from Mongoose
import ProjectModel from "../models/ProjectSchema"; // Import the Project model from Mongoose
import { Project } from "../../types/project";
import { User as UserType } from "../../types/user";


interface Props {
  user: UserType;
}


export async function retrieveUserData() : Promise<UserType | undefined>  {
  try {
    const {data: session} = useSession();
    await connectToDB();
    const users = await mongoose.model('User').find({
      id : session?.user?.id
    });
    if (!users) {
      throw new Error("User not found");
    }
    const user = users[0];
    return user;
  } catch (error) {
    console.log(error);
  }
  return undefined;
}

export async function User(userId: String): Promise<UserType | undefined> {
  try {
    await connectToDB();
    const users = await mongoose.model('User').find({
      id : userId
    });
    if (!users) {
      throw new Error("User not found");
    }
    const user = users[0];
    return user;
  } catch (error) {
    console.log(error);
  }
  return undefined;

}

export async function getUserProjects(userId: string): Promise<Project[]> {
  try {
    await connectToDB();
    const user = await UserModel.findById(userId).populate("projects"); // Use the findById method to retrieve the user by ID
    const projectsFromDB = user?.projects || [];

    const projects: Project[] = projectsFromDB.map((projectFromDB: any) => {
      const teamMembers: string[] = projectFromDB.Team.map((teamMember: any) => teamMember.toString());

      return {
        _id: projectFromDB._id.toString(),
        title: projectFromDB.title,
        link: projectFromDB.link,
        documentation: projectFromDB.documentation,
        summary: projectFromDB.summary,
        description: projectFromDB.description,
        Image: projectFromDB.Image,
        ProjectCategory: projectFromDB.ProjectCategory,
        Team: teamMembers,
      };
    });


    return projects;
  } catch (error) {
    console.log(error)
  }
  return [];
}

export async function getMasterProjects(): Promise<Project[]> {
  try {
    await connectToDB();
    
    const triggerProjectModel = await ProjectModel.find({}); // Need this to initialise the model first 
    const user = await UserModel.findById(process.env.MAIN_ID).populate("projects"); // Use the findById method to retrieve the user by ID
    const projectsFromDB = user?.projects || [];

    const projects: Project[] = projectsFromDB.map((projectFromDB: any) => {
      const teamMembers: string[] = projectFromDB.Team.map((teamMember: any) => teamMember.toString());

      return {
        _id: projectFromDB._id.toString(),
        title: projectFromDB.title,
        summary: projectFromDB.summary,
        link: projectFromDB.link,
        documentation: projectFromDB.documentation,
        description: projectFromDB.description,
        Image: projectFromDB.Image,
        ProjectCategory: projectFromDB.ProjectCategory,
        Team: teamMembers,
      };
    });


    return projects;
  } catch (error) {
    console.log(error)
  }
  return [];
} 

export async function getTeamMembers(teammates: String[]): Promise<UserType[]> {
  try {
    await connectToDB();
    const teamMembers: UserType[] = await UserModel.find({
      _id: { $in: teammates }
    });
    return teamMembers;

  } catch (error) {
    console.log(error);
  }
  return [];
}

export async function getUsers(): Promise<UserType[]> {
  try {
    await connectToDB();
    const users: UserType[] = await UserModel.find({});
    return users;
  } catch (error) {
    console.log(error);
  }
  return [];
}

export async function getUsersFromProject(projectId: String): Promise<UserType[]> {
  try {
    await connectToDB();
    const project = await ProjectModel.findById(projectId).populate("Team");
    const teamMembers: UserType[] = project?.Team || [];
    return teamMembers;
  } catch (error) {
    console.log(error);
  }
  return [];
}
