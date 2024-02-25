"use client";
import { logout } from "@/lib/actions/logout";
import { useSession } from "next-auth/react";



export const SignOutButton: React.FC = () => {
  const session =  useSession();
  const onClick = () => {
    logout();
    session.update(); 
  }

  return (<span onClick={onClick} className="cursor-pointer nav-words">
    Sign Out
  </span>
  )
}