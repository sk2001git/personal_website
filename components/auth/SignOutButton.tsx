"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


export const SignOutButton: React.FC = () => {
  const onClick = async () => {
    "use server";
    const router = useRouter();
    router.push('/api/auth/signout');
    await signOut();
  }
  return (<span onClick={onClick} className="cursor-pointer nav-words">
    Sign Out
  </span>
  )
}