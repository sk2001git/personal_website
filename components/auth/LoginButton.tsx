"use client";

import { useRouter } from "next/navigation"; // Remember this is crucial for the router to work

export const LoginButton: React.FC  = () => { 
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  }
  return (<span onClick={onClick} className="cursor-pointer nav-words">
    Login 
  </span>
  )
}