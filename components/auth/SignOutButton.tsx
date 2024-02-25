"use client";
import { signOut } from "@/auth";
import { useRouter } from "next/navigation";


export const SignOutButton: React.FC = () => {
  const onClick = async () => {
    await signOut();
  }
  return (<span onClick={onClick} className="cursor-pointer nav-words">
    Sign Out
  </span>
  )
}