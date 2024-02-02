"use server";
import { signOut as nextAuthSignOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { connectToDB } from "../mongoose";
import { User as UserType } from "../../types";
import mongoose from 'mongoose';
import { Project } from '../../types';
import UserModel from "../models/UserProject"; // Import the User model from Mongoose
import { auth } from '@/auth';


interface Props {
  user: UserType;
}

export async function retrieveUserData() : Promise<UserType | undefined>  {
  try {
    const {data: session} = useSession();
    connectToDB();
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
    connectToDB();
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

export async function getUserProjects(userId: string): Promise<Project[] | undefined> {
  try {
    connectToDB();
    const user = await UserModel.findById(userId).populate("projects"); // Use the findById method to retrieve the user by ID
    const projects = user?.projects || [];
    return projects;
  } catch (error) {
    console.log(error)
  }
}

