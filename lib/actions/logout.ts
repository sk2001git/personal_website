"use server";

import { signOut } from "next-auth/react";

export const logout = async () => {
  try {
    
    await signOut();
  } catch (error) {
    console.log(error);
  };
}