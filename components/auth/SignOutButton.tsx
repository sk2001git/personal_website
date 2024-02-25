"use client";
import { logout } from "@/lib/actions/logout";



export const SignOutButton: React.FC = () => {
 
  const onClick = () => {
    logout();
  }

  return (<span onClick={onClick} className="cursor-pointer nav-words">
    Sign Out
  </span>
  )
}