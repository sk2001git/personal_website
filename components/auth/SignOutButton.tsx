"use client";
import { signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";


export const SignOutButton: React.FC = () => {
  // const onClick = async () => {
  //   await signOut();
  //   revalidatePath("/");
  // }

  const handleSignOut = async () => {
    try {
      const response = await fetch('/api/auth/signout', {
        method: 'POST', // or 'GET' depending on your server implementation
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
      });
  
      if (response.ok) {
        // Optionally, perform additional client-side actions after successful sign-out
        console.log('Sign-out successful');
      } else {
        console.error('Sign-out failed');
      }
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  return (<span onClick={handleSignOut} className="cursor-pointer nav-words">
    Sign Out
  </span>
  )
}