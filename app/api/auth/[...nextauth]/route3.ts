/*
import NextAuth, { Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@/lib/mongoose';
import User from '../../../../lib/models/UserProject';

interface sessionProps extends Session {
  user: {
    id: string;
    email: string;
    image: string;
    username: string;
  }
}


export const { 
  handlers: {GET, POST},
  auth, 
  signIn,
  signOut 
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

  ],
  
  callbacks: {
    async signIn({ profile }): Promise<boolean> {
      try {
        await connectToDB();

        // check if user exists
        const userExists = await User.findOne({ email: profile?.email });
        
        // create new user if it does not exist
        if (!userExists) {
          const newUser = {

            email: profile?.email,
            username: profile?.name, 
            image: profile?.picture,
          };

          await User.create(newUser);
        }

        if (!profile?.email_verified) {
          return false;
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      } 
    },
    async session({session}) {
      await connectToDB();
      const currentUser = await User.findOne({ email: session.user?.email });
      return { ...session,
        user: { ...session.user,
          id: currentUser._id?.toString() 
        }
      }
    },
  }
});

*/