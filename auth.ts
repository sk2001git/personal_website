import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import clientPromise from "./MongodbClient"
import authConfig from "./auth.config"

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
      //  We can use db fill operations by using if (session.user) session.user.customField = token.customField

      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt"},
  ...authConfig, 
  
})