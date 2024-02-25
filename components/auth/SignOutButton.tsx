import { signOut } from "next-auth/react";

export const SignOutButton: React.FC = () => {
  const onClick = async () => {
    await signOut();
  }
  return (<span onClick={onClick} className="cursor-pointer nav-words">
    Sign Out
  </span>
  )
}