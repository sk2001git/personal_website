import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import clientPromise from "./MongodbClient"
import authConfig from "./auth.config"
import { connectToDB } from "./lib/mongoose"
import User from "./lib/models/UserProject"


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async jwt({token}) {
      // To add a custom property to the token,  do something like token.customProperty = "customValue", it will auto create the property and fill it with that value
      return token;
    },
    async session({session, token}) { 
      await connectToDB();
      const currentUser = await User.findOne({ email: session.user?.email });
      
      if (token.sub && session.user && currentUser) {
        session.user.id = currentUser._id.toString();
        session.user.name = currentUser.username;
      }
      return session;
    },
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

        return true;
      } catch (error) {
        console.log(error);
        return false;
      } 
    },
  },
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt", maxAge: 8 * 60 * 60},
  ...authConfig, 
  
})



