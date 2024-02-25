"use client";
import { logout } from "@/lib/actions/logout";
import { useRouter } from "next/navigation";


export const SignOutButton: React.FC = () => {
  const onClick = () => {
    const router = useRouter();

    router.push('/api/auth/signout');
  }

  return (<span onClick={onClick} className="cursor-pointer nav-words">
    Sign Out
  </span>
  )
}