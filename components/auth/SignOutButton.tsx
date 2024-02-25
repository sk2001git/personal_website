import { signOut } from "next-auth/react";

export const SignOutButton: React.FC = () => {
  const onClick = async () => {
    "use server";
    await signOut({callbackUrl: "/api/auth/signout"});
  }
  return (<span onClick={onClick} className="cursor-pointer nav-words">
    Sign Out
  </span>
  )
}